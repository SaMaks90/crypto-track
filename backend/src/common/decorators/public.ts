import { SetMetadata } from '@nestjs/common';
import { JWT_PUBLIC } from '../../constants';

export const Public = () => SetMetadata(JWT_PUBLIC, true);
