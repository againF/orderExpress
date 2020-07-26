const express = require('express');
const bodyParser = require("body-parser")
const app = express();
const port = 3000;
//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
 });
 app.use(bodyParser.json())
 app.use(bodyParser.urlencoded({extended: false}))
app.get('/', (req, res) => {
    const menu = {
        menu: [{
            name: "玉米",
            num: "1根",
            cost: 3, // 成本价
        },
        {
            name: "胡萝卜",
            num: "半根",
            cost: 0.7, // 成本价
        },
        {
            name: "南瓜",
            cost: 0.6, // 成本价
        },
        {
            name: "豆腐",
            num: "3片",
            cost: 1, // 成本价
        },
        {
            name: "荷兰豆",
            num: "5片",
            cost: 1, // 成本价
        },
        {
            name: "木耳",
            num: "3片",
            cost: 1, // 成本价
        },
        {
            name: "酸奶",
            num: "1杯",
            cost: 1.725, // 成本价
        },
        {
            name: "紫薯",
            num: "1根",
            cost: 3.5, // 成本价
        },
        {
            name: "西芹",
            num: "1根",
            cost: 1, // 成本价
        }, {
            name: "西蓝花",
            num: "3棵",
            cost: 1, // 成本价
        }, {
            name: "鸡胸肉",
            num: "125克",
            cost: 3.5, // 成本价
        },
        {
            name: "香菇",
            num: "3片",
            cost: 0.5, // 成本价
        },
        {
            name: "小番茄",
            num: "3个",
            cost: 0.5, // 成本价
        },
        {
            name: "洋葱",
            num: "几片",
            cost: 0.2, // 成本价
        }, {
            name: "生菜",
            num: "3片",
            cost: 0.5, // 成本价
        }, {
            name: "虾仁",
            num: "5个",
            cost: 3, // 成本价
        }, {
            name: "黄瓜",
            num: "三分之一根",
            cost: 0.5, // 成本价
        },
    ]
    };
    res.send(menu)
});
app.post("/select", (req, res) => {
    res.send("ok")
    // console.log('req');
    console.log(req.body)
    // console.log('res');
    // console.log(res);
    
})
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
})