const SaleFigure = require('../models/saleFigures')
const schedule = require('node-schedule')
const User = require('../models/user')
// const saleFigures = require('../models/saleFigures')

// get sale figures
exports.saleFigure = async (req,res) => {

    const sale_figure = await SaleFigure.find()

    res.status(201).json({
        success: true,
        sale_figure
    })

}

// select statistics from calendar
exports.selectSales = async(req,res) => {

    const { select_date } = req.body

    const sale_figure  = await SaleFigure.findOne({
        order_date: select_date
    })


    //check sales has been statistic
    if(!sale_figure)
    {
        res.status(401).json({
            success: false,
            mess: 'Không có thông số thống kê'
         })
         return
    }

    res.status(201).json({
        success:true,
        sale_figure
    })


}

// 8am first day of month will reset top customer
// const cronExpress_topCustomer = '0 0 8 1 * *'

// đến phút thứ 4 thì nó chạy => vd: 9:03 thì 9:04 func sẽ hđ
// const test_cron = {
//     minute: 4
// }

// lấy test_cron thay vào cronExpress_topCustomer

// const topCustomer = schedule.scheduleJob({minute: 4}, async function(){

//     const list_user = await User.find()
   
//     const saleFigure  = await SaleFiure.find()

//     console.log('sale figure: ', saleFigure)

//     // top sale products from week


//     const sorting_list  = list_user.sort((a,b) => b.wallet - a.wallet )
//     // console.log(sorting_list)

//     // top 10 loyal customers
//     const top_customer = sorting_list.slice(0,10)
//     // console.log(top_customer)

//     // const saleFigure = await SaleFiure.create({
//     //     top_customer: top_customer
//     // })

//     // console.log('sale: ', saleFigure)

// })

