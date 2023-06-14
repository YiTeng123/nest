// 管理员实体类
 import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

 import { Document, ObjectId, Types } from 'mongoose';



export class Auth extends Document  {
    @Prop()
    username:string
    @Prop()
    password:string 
    @Prop({default:'user'})
    role?:'admin' | 'user'
    @Prop()
    name:string
    // _id: Types.ObjectId
}
export interface Authres   {
    username:string
    password:string 
    role?:'admin' | 'user'
    _id: Types.ObjectId
    name:string
}
export const AuthSchema = SchemaFactory.createForClass(Auth);

export const AuthforFeature = {
    name:Auth.name,
    schema:AuthSchema,
    collection:'Auth'
}