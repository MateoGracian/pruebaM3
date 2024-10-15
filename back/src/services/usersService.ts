import IUserDto from "../dto/userDto";
import { createCredentialsService } from "./credentialsServices";
import {
  modelCredentials,
  modelUser,
  queryRunner,
  AppDataSource,
} from "../config/data-source";
import { User } from "../entities/User";
import { Credentials } from "../entities/Credential";

//create a new User

export const createUsersService = async (
  userData: IUserDto
): Promise<User | null> => {
  const { name, email, username, password, birthdate, nDni } = userData;
  const queryRunner = AppDataSource.createQueryRunner();

  await queryRunner.connect();
  await queryRunner.startTransaction();

  try {
    const existingUser = await queryRunner.manager.findOne(modelUser.target, {
      where: [{ email }, { nDni }],
    });

    if (existingUser) {
      throw new Error(
        `Ya existe un usuario con ese email ${email} o dni ${nDni}`
      );
    }

    const newCreds = await createCredentialsService({ username, password });

    const newUser = queryRunner.manager.create(modelUser.target, {
      name,
      email,
      birthdate,
      nDni,
    });

    if (!newCreds) {
      throw new Error("Error creando las credenciales");
    }

    newUser.credentials = newCreds;
    await queryRunner.manager.save(newUser);
    await queryRunner.commitTransaction();

    return newUser;
  } catch (error) {
    await queryRunner.rollbackTransaction();
    console.error("Error creando el usuario:", error);
    throw new Error("Error creando el usuario");
    // return null;
  } finally {
    await queryRunner.release();
  }
};

//Get all users

export const getUsersService = async (): Promise<User[]> => {
    const users = await modelUser.find({
      relations: { appointments: true},
    });

    return users;
};

//get user by id

export const getUserByIdService = async (id: number): Promise<User | null> => {
    const user = await modelUser.findOne({
      where: { id },
      relations: ["appointments"],
    });

    if (!user) {
      throw new Error("No se ha encontrado el usuario");
    }

    return user;
};



