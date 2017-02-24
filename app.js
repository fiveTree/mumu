var express = require("express");
var path = require("path");
var port = process.env.PORT || 3000;
var app = express();
var serveStatic = require('serve-static')
var bodyParser = require('body-parser')

app.set("views","./views/pages");
app.set("view engine","jade");
app.use(bodyParser.urlencoded());
app.use('/static', serveStatic('bower_components'));


app.listen(port);

console.log("ok! port:"+port)

//index page
app.get("/",function  (req,res) {
	// body...
	res.render("index",{
		title:"公司 首页",
		movies: [{
			title:'机械战警',
			_id:1,
			poster:"https://ss0.baidu.com/6ON1bjeh1BF3odCf/it/u=457168684,2362312103&fm=20"
		},{
			title:'机械战警',
			_id:2,
			poster:"https://ss0.baidu.com/6ON1bjeh1BF3odCf/it/u=457168684,2362312103&fm=20"
		},{
			title:'机械战警',
			_id:3,
			poster:"https://ss0.baidu.com/6ON1bjeh1BF3odCf/it/u=457168684,2362312103&fm=20"
		},{
			title:'机械战警',
			_id:4,
			poster:"https://ss0.baidu.com/6ON1bjeh1BF3odCf/it/u=457168684,2362312103&fm=20"
		},{
			title:'机械战警',
			_id:5,
			poster:"https://ss0.baidu.com/6ON1bjeh1BF3odCf/it/u=457168684,2362312103&fm=20"
		},{
			title:'机械战警',
			_id:6,
			poster:"https://ss0.baidu.com/6ON1bjeh1BF3odCf/it/u=457168684,2362312103&fm=20"
		},{
			title:'机械战警',
			_id:7,
			poster:"https://ss0.baidu.com/6ON1bjeh1BF3odCf/it/u=457168684,2362312103&fm=20"
		}]
	})
})
//detail page
app.get("/movie/:id",function  (req,res) {
	// body...
	res.render("detail",{
		title:"公司 详情页",
		movie: {
		  doctor: "何塞。大杀四方",
		  country:'美国',
		  title:"机械电影",
		  year: 2014,
		  poster: "https://ss0.baidu.com/6ON1bjeh1BF3odCf/it/u=457168684,2362312103&fm=20",
		  language: "英语",
		  flash: "unknow",
		  summary:'《机械战警》是由保罗·范霍文执导，彼得·威勒、南茜·艾伦、丹·奥赫里奇、罗尼·考克斯、柯特伍德·史密斯等人主演的科幻电影。影片于1987年07月17日正式上映。影片讲述了一名警察在一次执行任务的过程中遭遇不幸，后来经过科学家的改造，成为了一名人与机器相结合的警察，并展开了与罪犯的斗争的故事。'

		}
	})
})
//admin page
app.get("/admin/movie",function  (req,res) {
	// body...
	res.render("admin",{
		title:"公司 后台录入页",
		movie: {
		  doctor: "",
		  country:'',
		  title:"",
		  year: '',
		  poster: "",
		  language: "",
		  flash: "",
		  summary:''

		}
	})
})
//list page
app.get("/admin/list",function  (req,res) {
	// body...
	res.render("list",{
		title:"公司 列表项",
		movies: [{
			_id:1,
		  doctor: "何塞。大杀四方",
		  country:'美国',
		  title:"机械电影",
		  year: 2014,
		  poster: "https://ss0.baidu.com/6ON1bjeh1BF3odCf/it/u=457168684,2362312103&fm=20",
		  language: "英语",
		  flash: "unknow",
		  summary:'《机械战警》是由保罗·范霍文执导，彼得·威勒、南茜·艾伦、丹·奥赫里奇、罗尼·考克斯、柯特伍德·史密斯等人主演的科幻电影。影片于1987年07月17日正式上映。影片讲述了一名警察在一次执行任务的过程中遭遇不幸，后来经过科学家的改造，成为了一名人与机器相结合的警察，并展开了与罪犯的斗争的故事。'

		}]
	})
})