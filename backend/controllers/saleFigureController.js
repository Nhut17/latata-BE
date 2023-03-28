const SaleFiure = require('../models/saleFigures')
const schedule = require('node-schedule')
const User = require('../models/user')
const saleFigures = require('../models/saleFigures')

// top customer of month
exports.topCustomer = async (req,res) => {

    const top_customer = await saleFigures.find()

    res.status(201).json({
        success: true,
        top_customer
    })

}

// 8am first day of month will reset top customer
const cronExpress_topCustomer = '0 0 8 1 * *'

// đến phút thứ 4 thì nó chạy => vd: 9:03 thì 9:04 func sẽ hđ
const test_cron = {
    minute: 4
}

// lấy test_cron thay vào cronExpress_topCustomer

const topCustomer = schedule.scheduleJob({minute: 44}, async function(){

    const list_user = await User.find()
   
    
    const sorting_list  = list_user.sort((a,b) => b.wallet - a.wallet )
    console.log(sorting_list)

    // top 10 loyal customers
    const top_customer = sorting_list.slice(0,10)
    console.log(top_customer)


    const saleFigure = await SaleFiure.create({
        top_customer: top_customer
    })


})

