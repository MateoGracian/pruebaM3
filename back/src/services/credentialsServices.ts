import ICredentialsDto from "../dto/credentialsDto";
import {
  AppDataSource,
  modelCredentials,
  queryRunner,
} from "../config/data-source";
import { Credentials } from "../entities/Credential";

export const createCredentialsService = async (
  credentials: ICredentialsDto
): Promise<Credentials | null> => {
  const { username, password } = credentials;

  await queryRunner.connect();
  await queryRunner.startTransaction();

  try {
    const existingCredentials = await modelCredentials.findOne({
      where: {
        username: username,
      },
    });

    if (existingCredentials) {
      throw new Error(`User with username ${username} already exists`);
    }

    const newCredentials = await queryRunner.manager.create(modelCredentials.target, {
      username,
      password,
    });

    await queryRunner.manager.save(newCredentials);
    return newCredentials;
  } catch (error) {
    await queryRunner.rollbackTransaction();
    console.error(error);
    return null;
  }
};

export const checkCredentialsService = async (
  username: string,
  password: string
): Promise<number | null> => {
    const credFound = await modelCredentials.findOne({
      where: { username }
    });

    if (!credFound) {
      console.error(`User with username ${username} not found`);
      return null;
    }

    if (credFound?.password !== password) {
      console.error(`Password incorrect`);
      return null;
    }

    return credFound?.id;
}; 
