
import { SetMetadata } from '@nestjs/common';
import { Role } from '../enum/roel.enum';
import { ROLES_KEY } from '../contants/decorator.contan';


// ...roles参数表明它是一个可变参数，能够接受一组不定的参
// 数作为SetMetadata的输入。 ...之前的参数会被解析
// 成一个数组，以便向SetMetadata函数传递一组参数。
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);



