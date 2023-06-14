import mongoose, { Model, ObjectId } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
// import { User, UserDocument } from 'src/blog/schemas/blog.schemas';
import { User, UserDocument } from './entities/user.entity';
import { Point, PointDocument } from './entities/point.entity'
const ObjectId = mongoose.Types.ObjectId;
import { CreatePointDto, Tree, createPerson } from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto'
import { Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import * as fs from 'fs'
import { AddUpdate } from './dto/update-user.dto'
export interface TreeLike {
	id: string
	name: string
	content: string
	children: TreeLike[]
  }
  
@Injectable()
export class UserApiService {
	// 注册Schema后，可以使用 @InjectModel() 装饰器将 User 模型注入到 UserService 中:
	// 这里的'Users'需要和user.module定义的数据库表名对上
	constructor(
		@InjectModel(User.name) private userTest : Model<UserDocument>,
		@InjectModel('pointApi') private pointTest : Model<Point>,
		private readonly authService : AuthService
	) { }
	
	// 保存树状结构
	async saveTree(tree:Tree){
		const create = new this.userTest(tree);
		const temp = await create.save();
		return temp;
	}
	// 根据oid获取唯一树状结构
	async findTree(id:string){
		console.log(id)
		const tree = await this.userTest.findById(id)
		return tree
	}


	// 追加用户字段
	async add(people : AddUpdate) {
		const { _id, gradeApi, classApi } = people
		const OId= new ObjectId(_id);

		return await this.userTest.findByIdAndUpdate(OId, { $set: { gradeApi, classApi } }, { new: true })

	}


	// 查找全部的得分表1
	async getPoint(token : string, parmas : null | string = null, className : string = null) : Promise<any> {
		const tokenRes = await this.authService.verifyToken(token)
		// 拿到用户的token信息,这里的tokenRes已经是解析后的
		const Adminres = (await this.authService.findAdmin(tokenRes.username)).toObject()

		if (!!parmas === false) {
			// 查询全部 根据参数判断1 
			const A = (await this.pointTest.find({}).populate('personID')).filter(item =>
				{ 
					return 	(item.toObject().personID as User)?.organ == Adminres.organ 
				  }
			)
			return className ? A.filter(item => (item.toObject().personID as User).classApi === className) : A
		}
		else {
			return await this.pointTest.find({ personID: parmas }).populate('personID').exec()
		}
	}
  //根据年级和班级确定某个班
  async classPoint(token: string, parmas: { className: string, gradeName: string }) {
    const tokenRes = await this.authService.verifyToken(token)
    // 拿到用户的token信息,这里的tokenRes已经是解析后的
    const Adminres = (await this.authService.findAdmin(tokenRes.username)).toObject()
    const A = (await this.pointTest.find({}).populate('personID'))
    if (!parmas.className) {
      return A.filter(item => {
        return (item.toObject().personID as User)?.gradeApi === parmas.gradeName &&
          (item.toObject().personID as User)?.organ == Adminres.organ 
      })
    }
    else {
      return A.filter(item => {
        return (item.toObject().personID as User)?.gradeApi === parmas.gradeName &&
          (item.toObject().personID as User)?.organ == Adminres.organ &&
          (item.toObject().personID as User)?.classApi === parmas.className
      })}
  }



	// 添加得分表
	async create(createUserDto : CreatePointDto) : Promise<Point> {
		const createUser = new this.pointTest(createUserDto);
		const temp = await createUser.save();

		return temp;
	}

	//添加用户
	async addPerson(createPerson : createPerson) {
		const createUser = new this.userTest(createPerson);
		const temp = await createUser.save();
		return temp;
	}

	// 名字和编号联合查询
	async findUserByNameAndIdentifier(findQuery : { identifier : string, name : string }) {
		const { identifier, name } = findQuery
		// const userRes = this.userTest.find({  name  })
		let andArray
		// let andArray = identifier === '' ? [{ name }] : [{ identifier }, { name }]
		// andArray = name === '' ? [{ identifier }] : [{ identifier }, { name }]
		if (identifier !== '' && name !== '') {
			andArray = [{ identifier }, { name }]
		}
		else if (identifier === '') andArray = [{ name }]
		else if (name === '') andArray = [{ identifier }]


		const userRes = this.userTest.find({ $and: andArray })
		return userRes


	}


	// 通过名字查找用户
	async findname(name : string) {
		// console.log(name);
		const data = await this.userTest.find({
			name: name
		})
		return data
	}

	// 查找所有用户
	async findAll() : Promise<User[]> {
		// 这里是异步的
		const temp = await this.userTest.find().exec();

		return temp;
	}

	// 查找
	async findOne(personID : string) : Promise<User[]> {
		// 这里是异步的
		// console.log(personID);1

		const temp = await this.userTest.find({ _id: personID },).exec();
		return temp;
	}
	// 删除
	async delete(sid : number) {
		// 这里是异步的  remove 方法删除成功并返回相应的个数
		const temp = await this.userTest.deleteOne({ _id: sid });
		return temp;
	}
	  // 根据_id来修改
	  async updateUser(sid: string,upData:UpdateUserDto){
		const updated = await this.userTest.findByIdAndUpdate(sid,upData, { new: true })
		return updated
	}

	// 保存脑电数据并把名字保存至数据库
	async saveEeg(eggparam : Egginstance) : Promise<unknown> {
		const { _id, txtName } = eggparam
		const readyWrite = JSON.stringify(eggparam)
		const eegAsyc = new Promise((resolve, reject) => {
			fs.writeFile(`/mnt/disk2/webapps/UploadFile/health-egg/${txtName}`, readyWrite, 'utf8', (err) => {
				// 如果文件写入成功，则err的值为null
				// 如果文件写入失败，则err的值是一个错误对象
				// console.log(readyWrite);
				if (err) {
					console.log(`写入文件失败,${err.message}`);
					return reject(`写入文件失败,${err.message}`)
				}
				return resolve('写入文件成功')
			})
		})
		// 将文件路径保存至数据库
		eegAsyc.then(async () => {
			await this.pointTest.findByIdAndUpdate({ _id }, { $set: { "txtName": txtName } }, { upsert: true })
		})
		return eegAsyc
	}

	async saveEegOne(eegparam : Eegoneinstance) : Promise<unknown> {
		const { txtName } = eegparam
		const readyWrite = JSON.stringify(eegparam)
		const eegAsyc = new Promise((resolve, reject) => {
			fs.writeFile(`/mnt/disk2/webapps/UploadFile/health-egg/${txtName}`, readyWrite, 'utf8', (err) => {
				// 如果文件写入成功，则err的值为null
				// 如果文件写入失败，则err的值是一个错误对象
				// console.log(readyWrite);
				if (err) {
					console.log(`写入文件失败,${err.message}`);
					return reject(`写入文件失败,${err.message}`)
				}
				return resolve({ writeStatus: '写入文件成功', eegfile: `/mnt/disk2/webapps/UploadFile/health-egg/${txtName}` })
			})
		})
		return eegAsyc
	}

	// 新接口
	stats(group : Array<GroupInstance>, type : String) {

		var numberOfBoy = 0
		var numberOfGirl = 0
		var average_emo = 0;//情绪状态平均分
		var average_stu = 0;//学习状态平均分
		const emoStats = {
			numberOfLower60: 0,//低于60人数
			rateOfLower60: 0,//低于60比例
			numberOfLower20: 0,//低于20人数
			rateOfLower20: 0,//低于20比例
			anxiety: {},//焦虑指标
			pressure: {}//压力指标
		}
		const stuStats = {
			rateOfLower60: 0,//低于60比例
		}

		const distribution_emo = {}//综合情绪得分 分布图
		const distribution_stu = {}//综合游戏(学习)得分 分布图
		const scatter_emo = []
		const scatter_stu = []

		const violinData_emo = [] //情绪状态 小提琴图
		const violinData_stu = [] //情绪状态 小提琴图

		const gradeDistribution_emo = []//情绪参数年级分布
		const gradeDistribution_stu = []//学习参数年级分布
		const gradeCount = [0, 0, 0, 0, 0, 0];//七个年级的人数统计
		
		const classDistribution_emo = []//情绪参数班级分布
		const classDistribution_stu = []//学习参数班级分布
		const classCount = [];//班级人数统计

		const keyPerson = {}//重点关注人员
		const keyPieData = []//重点人员饼图
		const keyBarData = []//重点人员柱状图

		const emoNameArr = ['mood', 'presure', 'tired', 'gad7', 'phq9', 'gait']
		const stuNameArr = ['cognition', 'stroop']
		const gradeArr = ['初一', '初二', '初三', '高一', '高二', '高三', '高四'];
		const classArr = [];
		
		if(type == 'grade'){
			// 按照班级排序数据
			// 中文数字转阿拉伯数字
			var map = { "零": 0, "一": 1, "壹": 1, "二": 2, "贰": 2, "两": 2, "三": 3, "叁": 3, "四": 4, "肆": 4, "五": 5, "伍": 5, "六": 6, "陆": 6, "七": 7, "柒": 7, "八": 8, "捌": 8, "九": 9, "玖": 9, "十": 10, "拾": 10, "百": 100, "佰": 100, "千": 1000, "仟": 1000, "万": 10000, "十万": 100000, "百万": 1000000, "千万": 10000000, "亿": 100000000 };// 解析失败返回-1，成功返回转换后的数字，不支持负数
			function numberDigit(chinese_number : string) { 
				var len = chinese_number.length;
				if (len == 0) return -1;
				if (len == 1) return (map[chinese_number] <= 10) ? map[chinese_number] : -1; var summary = 0;
				if (map[chinese_number[0]] == 10) { chinese_number = "一" + chinese_number; len++; }
				if (len >= 3 && map[chinese_number[len - 1]] < 10) { var last_second_num = map[chinese_number[len - 2]];
				if (last_second_num == 100 || last_second_num == 1000 || last_second_num == 10000 || last_second_num == 100000000) { for (var key in map) { if (map[key] == last_second_num / 10) { chinese_number += key; len += key.length; break; } } } } 
				if (chinese_number.match(/亿/g) && chinese_number.match(/亿/g).length > 1) return -1;
				var splited = chinese_number.split("亿"); 
				if (splited.length == 2) { var rest = splited[1] == "" ? 0 : numberDigit(splited[1]); return summary + numberDigit(splited[0]) * 100000000 + rest; } splited = chinese_number.split("万");
				if (splited.length == 2) { var rest = splited[1] == "" ? 0 : numberDigit(splited[1]); return summary + numberDigit(splited[0]) * 10000 + rest; } var i = 0;
				while (i < len) { var first_char_num = map[chinese_number[i]]; var second_char_num = map[chinese_number[i + 1]]; 
				if (second_char_num > 9) summary += first_char_num * second_char_num; i++; 
				if (i == len) summary += first_char_num <= 9 ? first_char_num : 0; } return summary;
			}
			group.sort((a, b) => {
				if(!a.person.gradeApi||!b.person.gradeApi) return 0
				let n1 = numberDigit(a.person.gradeApi.replace('班', ''))
				let n2 = numberDigit(b.person.gradeApi.replace('班', ''))
				return n1 - n2
			})
		}
		
		group.forEach((item) => {
			// 平均分
			average_emo += item.totalPoint
			average_stu += item.totalGame
			
			if(type == 'class'){
				scatter_emo.push([item.person.identifier,item.totalPoint])
				scatter_stu.push([item.person.identifier,item.totalGame])
			}else{
				// 情绪和学习分布
				if (distribution_emo[item.totalPoint]) distribution_emo[item.totalPoint]++
				else distribution_emo[item.totalPoint] = 1
				if (distribution_stu[item.totalGame]) distribution_stu[item.totalGame]++
				else distribution_stu[item.totalGame] = 1
			}

			// 情绪状态小提琴图图数据
			emoNameArr.forEach(v => {
				violinData_emo.push({
					name: v,
					value: item[v]
				})
			})

			// 学习状态小提琴图图数据
			stuNameArr.forEach(v => {
				let p = ''
				switch(v){
					case 'cognition': p = 'totalcognitionGame';break;
					case 'stroop': p = 'totalStroopGame';break;
				}
				violinData_stu.push({
					name: v,
					value: item[p]
				})
			})

			// 学校报告额外内容
			if (type == 'school') {
				// 情绪参数年级分布
				if (gradeDistribution_emo.length == 0) {
					gradeDistribution_emo.push(...[
						{ name: 'mood', data: [] },
						{ name: 'presure', data: [] },
						{ name: 'tired', data: [] },
						{ name: 'gad7', data: [] },
						{ name: 'phq9', data: [] },
						{ name: 'gait', data: [] },
						{ name: 'total', data: [] }
					])
				}
				if (gradeDistribution_stu.length == 0) {
					gradeDistribution_stu.push(...[
						{ name: 'cognition', data: [] },
						{ name: 'stroop', data: [] },
						{ name: 'total', data: [] }
					])
				}

				let gradeIndex = gradeArr.indexOf(item.person.gradeApi)
				if (gradeIndex != -1) gradeCount[gradeIndex]++;

				gradeDistribution_emo.forEach((v, i, a) => {
					if (gradeIndex != -1) {
						switch (v.name) {
							case 'mood': a[i].data[gradeIndex] ? a[i].data[gradeIndex] += item.mood : a[i].data[gradeIndex] = item.mood; break
							case 'presure': a[i].data[gradeIndex] ? a[i].data[gradeIndex] += item.presure : a[i].data[gradeIndex] = item.presure; break
							case 'tired': a[i].data[gradeIndex] ? a[i].data[gradeIndex] += item.tired : a[i].data[gradeIndex] = item.tired; break
							case 'gad7': a[i].data[gradeIndex] ? a[i].data[gradeIndex] += item.gad7 : a[i].data[gradeIndex] = item.gad7; break
							case 'phq9': a[i].data[gradeIndex] ? a[i].data[gradeIndex] += item.phq9 : a[i].data[gradeIndex] = item.phq9; break
							case 'gait': a[i].data[gradeIndex] ? a[i].data[gradeIndex] += item.gait : a[i].data[gradeIndex] = item.gait; break
							case 'total': a[i].data[gradeIndex] ? a[i].data[gradeIndex] += item.totalPoint : a[i].data[gradeIndex] = item.totalPoint; break
						}
					}
				})

				gradeDistribution_stu.forEach((v, i, a) => {
					if (gradeIndex != -1) {
						switch (v.name) {
							case 'cognition': a[i].data[gradeIndex] ? a[i].data[gradeIndex] += item.totalcognitionGame : a[i].data[gradeIndex] = item.totalcognitionGame; break
							case 'stroop': a[i].data[gradeIndex] ? a[i].data[gradeIndex] += item.totalStroopGame : a[i].data[gradeIndex] = item.totalStroopGame; break
							case 'total': a[i].data[gradeIndex] ? a[i].data[gradeIndex] += item.totalGame : a[i].data[gradeIndex] = item.totalGame; break
						}
					}
				})


				// 需要关注人员初始化
				if (Object.keys(keyPerson).length == 0) {
					for (let grade of gradeArr) {
						keyPerson[grade] = {};
						keyPerson[grade]['mood'] = [];
						keyPerson[grade]['presure'] = [];
						keyPerson[grade]['tired'] = [];
						keyPerson[grade]['gad7'] = [];
						keyPerson[grade]['phq9'] = [];
						keyPerson[grade]['gait'] = [];
					}
				}
				if (keyPieData.length == 0) {
					keyPieData.push(...[
						{ name: 'keyBoy', value: 0 },
						{ name: 'keyGirl', value: 0 },
						{ name: 'normal', value: 0 }
					])
				}
				if (keyBarData.length == 0) {
					keyBarData.push(...[
						{ name: 'keyBoy', data: [0, 0, 0, 0, 0, 0] },
						{ name: 'keyGirl', data: [0, 0, 0, 0, 0, 0] },
						{ name: 'normal', data: [0, 0, 0, 0, 0, 0] }
					])
				}
				// 学校重点人员
				function getKeyPerson(person) {
					return {
						name: person.name,
						sex: person.sex
					}
				}
				// 焦虑偏高
				if (item.gad7 > 60) {
					if (gradeIndex != -1) keyPerson[item.person.gradeApi]['gad7'].push(getKeyPerson(item.person))

					if (item.person.sex == "0") {
						keyBarData[1].data[3]++
					} else {
						keyBarData[0].data[3]++
					}
				}
				// 抑郁偏高
				if (item.phq9 > 60) {
					if (gradeIndex != -1) keyPerson[item.person.gradeApi]['phq9'].push(getKeyPerson(item.person))

					if (item.person.sex == "0") {
						keyBarData[1].data[4]++
					} else {
						keyBarData[0].data[4]++
					}
				}
				// 情绪偏低
				if (item.mood < 60) {
					if (gradeIndex != -1) keyPerson[item.person.gradeApi]['mood'].push(getKeyPerson(item.person))

					if (item.person.sex == "0") {
						keyBarData[1].data[0]++
					} else {
						keyBarData[0].data[0]++
					}
				}
				// 疲劳偏高
				if (item.tired > 60) {
					if (gradeIndex != -1) keyPerson[item.person.gradeApi]['tired'].push(getKeyPerson(item.person))

					if (item.person.sex == "0") {
						keyBarData[1].data[2]++
					} else {
						keyBarData[0].data[2]++
					}
				}
				// 压力偏高
				if (item.presure > 60) {
					if (gradeIndex != -1) keyPerson[item.person.gradeApi]['presure'].push(getKeyPerson(item.person))

					if (item.person.sex == "0") {
						keyBarData[1].data[1]++
					} else {
						keyBarData[0].data[1]++
					}
				}
				// 专注力偏低
				if (item.gait < 60) {
					if (gradeIndex != -1) keyPerson[item.person.gradeApi]['gait'].push(getKeyPerson(item.person))

					if (item.person.sex == "0") {
						keyBarData[1].data[5]++
					} else {
						keyBarData[0].data[5]++
					}
				}

				// 总分偏低
				if (item.totalPoint < 60) {
					if (item.person.sex == "0") {
						keyPieData[1].value++
					} else {
						keyPieData[0].value++
					}
				}
			} else if(type == 'grade'){
				// 情绪参数班级分布
				if (classDistribution_emo.length == 0) {
					classDistribution_emo.push(...[
						{ name: 'mood', data: [] },
						{ name: 'presure', data: [] },
						{ name: 'tired', data: [] },
						{ name: 'gad7', data: [] },
						{ name: 'phq9', data: [] },
						{ name: 'gait', data: [] },
						{ name: 'total', data: [] }
					])
				}
				if (classDistribution_stu.length == 0) {
					classDistribution_stu.push(...[
						{ name: 'cognition', data: [] },
						{ name: 'stroop', data: [] },
						{ name: 'total', data: [] }
					])
				}

				let classIndex = classArr.indexOf(item.person.classApi)
				if (classIndex != -1) {
					classCount[classIndex]++;
				}else {
					classArr.push(item.person.classApi);
					classCount[classArr.length - 1]=1;
				}
				let lastIndex = classArr.length - 1

				classDistribution_emo.forEach((v, i, a) => {
					if (classIndex != -1) {
						switch (v.name) {
							case 'mood': a[i].data[classIndex] ? a[i].data[classIndex] += item.mood : a[i].data[classIndex] = item.mood; break
							case 'presure': a[i].data[classIndex] ? a[i].data[classIndex] += item.presure : a[i].data[classIndex] = item.presure; break
							case 'tired': a[i].data[classIndex] ? a[i].data[classIndex] += item.tired : a[i].data[classIndex] = item.tired; break
							case 'gad7': a[i].data[classIndex] ? a[i].data[classIndex] += item.gad7 : a[i].data[classIndex] = item.gad7; break
							case 'phq9': a[i].data[classIndex] ? a[i].data[classIndex] += item.phq9 : a[i].data[classIndex] = item.phq9; break
							case 'gait': a[i].data[classIndex] ? a[i].data[classIndex] += item.gait : a[i].data[classIndex] = item.gait; break
							case 'total': a[i].data[classIndex] ? a[i].data[classIndex] += item.totalPoint : a[i].data[classIndex] = item.totalPoint; break
						}
					}else{
						switch (v.name) {
							case 'mood': a[i].data[lastIndex] ? a[i].data[lastIndex] += item.mood : a[i].data[lastIndex] = item.mood; break
							case 'presure': a[i].data[lastIndex] ? a[i].data[lastIndex] += item.presure : a[i].data[lastIndex] = item.presure; break
							case 'tired': a[i].data[lastIndex] ? a[i].data[lastIndex] += item.tired : a[i].data[lastIndex] = item.tired; break
							case 'gad7': a[i].data[lastIndex] ? a[i].data[lastIndex] += item.gad7 : a[i].data[lastIndex] = item.gad7; break
							case 'phq9': a[i].data[lastIndex] ? a[i].data[lastIndex] += item.phq9 : a[i].data[lastIndex] = item.phq9; break
							case 'gait': a[i].data[lastIndex] ? a[i].data[lastIndex] += item.gait : a[i].data[lastIndex] = item.gait; break
							case 'total': a[i].data[lastIndex] ? a[i].data[lastIndex] += item.totalPoint : a[i].data[lastIndex] = item.totalPoint; break
						}
					}
				})

				classDistribution_stu.forEach((v, i, a) => {
					if (classIndex != -1) {
						switch (v.name) {
							case 'cognition': a[i].data[classIndex] ? a[i].data[classIndex] += item.totalcognitionGame : a[i].data[classIndex] = item.totalcognitionGame; break
							case 'stroop': a[i].data[classIndex] ? a[i].data[classIndex] += item.totalStroopGame : a[i].data[classIndex] = item.totalStroopGame; break
							case 'total': a[i].data[classIndex] ? a[i].data[classIndex] += item.totalGame : a[i].data[classIndex] = item.totalGame; break
						}
					}else{
						switch (v.name) {
							case 'cognition': a[i].data[lastIndex] ? a[i].data[lastIndex] += item.totalcognitionGame : a[i].data[lastIndex] = item.totalcognitionGame; break
							case 'stroop': a[i].data[lastIndex] ? a[i].data[lastIndex] += item.totalStroopGame : a[i].data[lastIndex] = item.totalStroopGame; break
							case 'total': a[i].data[lastIndex] ? a[i].data[lastIndex] += item.totalGame : a[i].data[lastIndex] = item.totalGame; break
						}
					}
				})


				// 需要关注人员初始化
				if(!keyPerson.hasOwnProperty(item.person.classApi)){
					keyPerson[item.person.classApi] = {};
					keyPerson[item.person.classApi]['mood'] = [];
					keyPerson[item.person.classApi]['presure'] = [];
					keyPerson[item.person.classApi]['tired'] = [];
					keyPerson[item.person.classApi]['gad7'] = [];
					keyPerson[item.person.classApi]['phq9'] = [];
					keyPerson[item.person.classApi]['gait'] = [];
				}
				if (keyPieData.length == 0) {
					keyPieData.push(...[
						{ name: 'keyBoy', value: 0 },
						{ name: 'keyGirl', value: 0 },
						{ name: 'normal', value: 0 }
					])
				}
				if (keyBarData.length == 0) {
					keyBarData.push(...[
						{ name: 'keyBoy', data: [0, 0, 0, 0, 0, 0] },
						{ name: 'keyGirl', data: [0, 0, 0, 0, 0, 0] },
						{ name: 'normal', data: [0, 0, 0, 0, 0, 0] }
					])
				}
				// 学校重点人员
				function getKeyPerson(person) {
					return {
						name: person.name,
						sex: person.sex
					}
				}
				// 焦虑偏高
				if (item.gad7 > 60) {
					keyPerson[item.person.classApi]['gad7'].push(getKeyPerson(item.person))

					if (item.person.sex == "0") {
						keyBarData[1].data[3]++
					} else {
						keyBarData[0].data[3]++
					}
				}
				// 抑郁偏高
				if (item.phq9 > 60) {
					keyPerson[item.person.classApi]['phq9'].push(getKeyPerson(item.person))

					if (item.person.sex == "0") {
						keyBarData[1].data[4]++
					} else {
						keyBarData[0].data[4]++
					}
				}
				// 情绪偏低
				if (item.mood < 60) {
					keyPerson[item.person.classApi]['mood'].push(getKeyPerson(item.person))

					if (item.person.sex == "0") {
						keyBarData[1].data[0]++
					} else {
						keyBarData[0].data[0]++
					}
				}
				// 疲劳偏高
				if (item.tired > 60) {
					keyPerson[item.person.classApi]['tired'].push(getKeyPerson(item.person))

					if (item.person.sex == "0") {
						keyBarData[1].data[2]++
					} else {
						keyBarData[0].data[2]++
					}
				}
				// 压力偏高
				if (item.presure > 60) {
					keyPerson[item.person.classApi]['presure'].push(getKeyPerson(item.person))

					if (item.person.sex == "0") {
						keyBarData[1].data[1]++
					} else {
						keyBarData[0].data[1]++
					}
				}
				// 专注力偏低
				if (item.gait < 60) {
					keyPerson[item.person.classApi]['gait'].push(getKeyPerson(item.person))

					if (item.person.sex == "0") {
						keyBarData[1].data[5]++
					} else {
						keyBarData[0].data[5]++
					}
				}

				// 总分偏低
				if (item.totalPoint < 60) {
					if (item.person.sex == "0") {
						keyPieData[1].value++
					} else {
						keyPieData[0].value++
					}
				}
			} else if(type == 'class'){
				// 需要关注人员初始化
				if (Object.keys(keyPerson).length == 0) {
					keyPerson['mood'] = [];
					keyPerson['presure'] = [];
					keyPerson['tired'] = [];
					keyPerson['gad7'] = [];
					keyPerson['phq9'] = [];
					keyPerson['gait'] = [];
					keyPerson['total'] = [];
				}
				if (keyPieData.length == 0) {
					keyPieData.push(...[
						{ name: 'keyBoy', value: 0 },
						{ name: 'keyGirl', value: 0 },
						{ name: 'normal', value: 0 }
					])
				}
				if (keyBarData.length == 0) {
					keyBarData.push(...[
						{ name: 'keyBoy', data: [0, 0, 0, 0, 0, 0] },
						{ name: 'keyGirl', data: [0, 0, 0, 0, 0, 0] },
						{ name: 'normal', data: [0, 0, 0, 0, 0, 0] }
					])
				}
				function getKeyPerson(person) {
					return {
						name: person.name,
						sex: person.sex
					}
				}
				// 焦虑偏高
				if (item.gad7 > 60) {
					keyPerson['gad7'].push(getKeyPerson(item.person))
					if (item.person.sex == "0") {
						keyBarData[1].data[3]++
					} else {
						keyBarData[0].data[3]++
					}
				}
				// 抑郁偏高
				if (item.phq9 > 60) {
					keyPerson['phq9'].push(getKeyPerson(item.person))
					if (item.person.sex == "0") {
						keyBarData[1].data[4]++
					} else {
						keyBarData[0].data[4]++
					}
				}
				// 情绪偏低
				if (item.mood < 60) {
					keyPerson['mood'].push(getKeyPerson(item.person))
					if (item.person.sex == "0") {
						keyBarData[1].data[0]++
					} else {
						keyBarData[0].data[0]++
					}
				}
				// 疲劳偏高
				if (item.tired > 60) {
					keyPerson['tired'].push(getKeyPerson(item.person))
					if (item.person.sex == "0") {
						keyBarData[1].data[2]++
					} else {
						keyBarData[0].data[2]++
					}
				}
				// 压力偏高
				if (item.presure > 60) {
					keyPerson['presure'].push(getKeyPerson(item.person))
					if (item.person.sex == "0") {
						keyBarData[1].data[1]++
					} else {
						keyBarData[0].data[1]++
					}
				}
				// 专注力偏低
				if (item.gait < 60) {
					keyPerson['gait'].push(getKeyPerson(item.person))
					if (item.person.sex == "0") {
						keyBarData[1].data[5]++
					} else {
						keyBarData[0].data[5]++
					}
				}

				// 总分偏低
				if (item.totalPoint < 60) {
					const emoArr = [item.gad7, item.gait, item.mood, item.phq9, item.presure, item.tired]
					const emoName = ['gad7', 'gait', 'mood', 'phq9', 'presure', 'tired']
					var lowest = 0;
					for (var i = 1; i < emoArr.length; i++) {
						if (emoArr[i] < emoArr[lowest]) lowest = i;
					}
					keyPerson['total'].push({
						name: item.person.name,
						sex: item.person.sex,
						totalPoint: item.totalPoint,
						lowest: emoName[lowest]
					})
					if (item.person.sex == "0") {
						keyPieData[1].value++
					} else {
						keyPieData[0].value++
					}
				}
			}
		})
		console.log('stats finnished')
		average_emo = Math.round((average_emo / group.length) * 100) / 100;
		average_stu = Math.round((average_stu / group.length) * 100) / 100;
		
		// 把对象转换为画图用的数组
		function obj2Arr(obj : Object) {
			var result = []
			for (let name in obj) {
				result.push([parseFloat(name), obj[name]])
			}
			return result;
		}
		let personNum = group.length
		numberOfBoy = group.filter(v=>{return(v.person.sex == "1")}).length
			numberOfGirl = personNum - numberOfBoy
		emoStats.numberOfLower60 = group.filter(v=>{return( v.totalPoint < 60 && v.totalPoint >= 20)}).length;
		emoStats.rateOfLower60 = Math.round((emoStats.numberOfLower60 / personNum) * 100) / 100;
		emoStats.numberOfLower20 = group.filter(v=>{return v.totalPoint < 20}).length;
		emoStats.rateOfLower20 = Math.round((emoStats.numberOfLower20 / personNum) * 100) / 100;
		if(type == 'school' || type == 'grade'){
			group.forEach(item=>{
				var myprop = ''
				if(type == 'school'){
					myprop = item.person.gradeApi
				}else{
					myprop = item.person.classApi
				}
				if(!emoStats.anxiety[myprop]) emoStats.anxiety[myprop] = {moderate:0,hight:0}
				if(!emoStats.pressure[myprop]) emoStats.pressure[myprop] = {moderate:0,hight:0}
				if(item.totalPoint < 20){
					const emoArr = [item.gad7, item.mood, item.phq9, item.gait, item.presure, item.tired]
					var lowest = 0;
					for (var i = 1; i < emoArr.length; i++) {
						if (emoArr[i] < emoArr[lowest]) lowest = i;
					}
					if(i<3){
						// 高焦虑
						emoStats.anxiety[myprop].hight++
					}else{
						// 高压力
						emoStats.pressure[myprop].hight++
					}
				}else if(item.totalPoint < 60){
					const emoArr = [item.gad7, item.mood, item.phq9, item.gait, item.presure, item.tired]
					var lowest = 0;
					for (var i = 1; i < emoArr.length; i++) {
						if (emoArr[i] < emoArr[lowest]) lowest = i;
					}
					if(i<3){
						// 中等焦虑
						emoStats.pressure[myprop].moderate++
					}else{
						// 中等压力
						emoStats.pressure[myprop].moderate++
					}
				}
			})
			for(let prop in emoStats.anxiety){
				emoStats.anxiety[prop].rateOfmoderate = Math.round((emoStats.anxiety[prop].moderate / personNum) * 100) / 100;
				emoStats.anxiety[prop].rateOfhight = Math.round((emoStats.anxiety[prop].hight / personNum) * 100) / 100;
			}
			for(let prop in emoStats.pressure){
				emoStats.pressure[prop].rateOfmoderate = Math.round((emoStats.pressure[prop].moderate / personNum) * 100) / 100;
				emoStats.pressure[prop].rateOfhight = Math.round((emoStats.pressure[prop].hight / personNum) * 100) / 100;
			}
		}
		
		stuStats.rateOfLower60 = Math.round((group.filter(v=>{return v.totalGame < 60}).length / personNum) * 100) / 100;

		if (keyPieData.length >= 3) {
			keyPieData[0].value = Math.round((keyPieData[0].value / personNum) * 100) / 100;
			keyPieData[1].value = Math.round((keyPieData[1].value / personNum) * 100) / 100;
			keyPieData[2].value = Math.round((100 - keyPieData[0].value - keyPieData[1].value) * 100) / 100;
		}

		if (keyBarData.length >= 3) {
			keyBarData[0].data.forEach((v, i, a) => {
				a[i] = Math.round((v / personNum) * 100) / 100;
			})
			keyBarData[1].data.forEach((v, i, a) => {
				a[i] = Math.round((v / personNum) * 100) / 100;
			})
			keyBarData[2].data.forEach((v, i, a) => {
				a[i] = Math.round((100 - keyBarData[0].data[i] - keyBarData[1].data[i]) * 100) / 100;
			})
		}
		
		if (type == 'school') {
			gradeCount.forEach((count, index) => {
				gradeDistribution_emo.forEach((v1, i1, a1) => {
					if (a1[i1].data[index] && count != 0) a1[i1].data[index] /= count;
				})
				gradeDistribution_stu.forEach((v2, i2, a2) => {
					if (a2[i2].data[index] && count != 0) a2[i2].data[index] /= count;
				})
			})

			return {
				average_emo: average_emo,
				average_stu: average_stu,
				numberOfBoy: numberOfBoy,
				numberOfGril: numberOfGirl,
				emoStats,
				stuStats,
				distribution_emo: obj2Arr(distribution_emo),
				distribution_stu: obj2Arr(distribution_stu),
				violinData_emo: violinData_emo,
				violinData_stu: violinData_stu,
				gradeDistribution_emo: gradeDistribution_emo,
				gradeDistribution_stu: gradeDistribution_stu,
				keyPerson: keyPerson,
				keyPieData: keyPieData,
				keyBarData: keyBarData
			}
		} else if(type == 'grade'){
			classCount.forEach((count, index) => {
				classDistribution_emo.forEach((v1, i1, a1) => {
					if (a1[i1].data[index] && count != 0) a1[i1].data[index] /= count;
				})
				classDistribution_stu.forEach((v2, i2, a2) => {
					if (a2[i2].data[index] && count != 0) a2[i2].data[index] /= count;
				})
			})
			return {
				average_emo: average_emo,
				average_stu: average_stu,
				numberOfBoy: numberOfBoy,
				numberOfGril: numberOfGirl,
				emoStats,
				stuStats,
				distribution_emo: obj2Arr(distribution_emo),
				distribution_stu: obj2Arr(distribution_stu),
				violinData_emo: violinData_emo,
				violinData_stu: violinData_stu,
				classDistribution_emo: classDistribution_emo,
				classDistribution_stu: classDistribution_stu,
				classNameArr: classArr,
				keyPerson: keyPerson,
				keyPieData: keyPieData,
				keyBarData: keyBarData
			}
		}else if(type == 'class') {
			if (keyPerson['total']) {
				var arr = [];
				for (var i = 0; i < keyPerson['total'].length - 1; i = i + 2) {
					arr.push([keyPerson['total'][i], keyPerson['total'][i + 1]])
				}
				if (keyPerson['total'].length % 2 != 0) {
					arr.push([keyPerson['total'][keyPerson['total'].length - 1]])
				}
				keyPerson['total'] = arr;
			}
			return {
				average_emo: average_emo,
				average_stu: average_stu,
				numberOfBoy: numberOfBoy,
				numberOfGril: numberOfGirl,
				emoStats,
				stuStats,
				scatter_emo: scatter_emo,
				scatter_stu: scatter_stu,
				violinData_emo: violinData_emo,
				violinData_stu: violinData_stu,
				keyPerson: keyPerson,
				keyPieData: keyPieData,
				keyBarData: keyBarData
			}
		}

	}
}

type Egginstance = {
  eggparam: {
    name: string
    channel1: Array<string>
    channel2: Array<string>
    channel3: Array<string>
    channel4: Array<string>
    inteervyal: string
  }[]
  _id: ObjectId
  txtName: string
}
type Eegoneinstance = {
  eggparam: {
    name: string
    channel1: Array<string>
    channel2: Array<string>
    channel3: Array<string>
    channel4: Array<string>
    inteervyal: string
  }[]
  txtName: string
}
type GroupInstance = {
  person: {
    age: string
    grade: string
    identifier: string
    name: string
    nation: string
    organ: string
    schemeNum: string
    sex: string
    _id: string
    gradeApi: string
    classApi: string
  }
  presure: number
  gad7: number
  gait: number
  mood: number
  phq9: number
  tired: number
  totalGame: number
  totalPoint: number
  totalStroopGame: number
  totalcognitionGame: number
}