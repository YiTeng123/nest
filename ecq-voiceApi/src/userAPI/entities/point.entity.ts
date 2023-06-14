
// 实体类得分表
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// @Prop 装饰器接受一个可选的参数，通过这个，你可以指示这个属性是否是必须的，是否需要默认值，或者是标记它作为一个常量，下面是例子
import { Document, ObjectId } from 'mongoose';
import { User } from './user.entity'
import { TreeLike } from '../userApi.service';
type Eegres = {
  mood: string
  presure: string
  relax: string
  concentrate: string
  tired: string
}
//  每个Schema对应MongoDB中的一个collection。
@Schema()
export class Tree extends Document{
  tree:Array<TreeLike>

}
export type TreeDocument = Tree & Document;
// SchemaFactory 是 mongoose 内置的一个方法做用是读取模式文档 并创建 Schema 对象
export const TreeSchema = SchemaFactory.createForClass(Tree);
@Schema()
//  描述集合的字段
export class Point extends Document {
  @Prop()
  gaintestPoint: string
  @Prop()
  looktestPoint: string[]
  @Prop()
  viocetsetPoint: string
  @Prop({ type: Object, String })
  eegResult: Eegres
  @Prop()
  totalityTestPoint: string
  @Prop()
  gameReview?: string
  @Prop({ required: true, ref: 'User', type: Object })
  personID: string | User
  @Prop()
  Addvice?: string
  @Prop()
  gaintestMp4?: string
  //  表情的路径
  @Prop()
  expresstionMp4: string
  @Prop()
  voiceWav:string
  @Prop()
  gamesPoint?: Array<{
    name: string
    score: number
    time: number
  }>
  @Prop()
  tree:string
  @Prop()
  txtName: string
  @Prop()
  createdAt?: Date
  //  存储脑电路径,这是一个配置对象
  @Prop({ type: Object })
  eegPath: object
  @Prop({ type: Object })
  cliAdvice: object

  // 机构字段,用于区分各大机构

  @Prop()
  organ?: string
}
export type PointDocument = Point & Document;
// SchemaFactory 是 mongoose 内置的一个方法做用是读取模式文档 并创建 Schema 对象
export const PointSchema = SchemaFactory.createForClass(Point);

/**
 * @name 
 * 原始 Schema 定义也可以被传递给装饰器。这也非常有用，举个例子，一个属性体现为一个嵌套对象而不是一个定义的类。要使用这个，需要从像下面一样从 @nestjs/mongoose 包导入 raw()
 * @Prop(raw({
         firstName: { type: String },
         lastName: { type: String }
        }))
   details: Record<string, any>;

 *  https://docs.nestjs.cn/9/techniques?id=mongo
 */


