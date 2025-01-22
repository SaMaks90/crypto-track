import * as bcrypt from 'bcrypt';
import { SALT_HASH } from '../constants';

export const getPasswordHash = async (password: string) => {
  return bcrypt.hashSync(password, SALT_HASH);
};

export const isMathPassword = async (
  password: string,
  hash: string,
): Promise<boolean> => {
  return bcrypt.compareSync(password, hash);
};
