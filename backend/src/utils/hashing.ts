import { hashSync, compareSync } from "bcrypt";
import { SALT_HASH } from "../constants";

export const getPasswordHash = async (password: string): Promise<string> => {
  return hashSync(password, SALT_HASH);
};

export const isMathPassword = async (
  password: string,
  hash: string,
): Promise<boolean> => {
  return compareSync(password, hash);
};
