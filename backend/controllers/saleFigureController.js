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

    const { date_start,date_end } = req.body
    const start = new Date(date_start)
    const end = new Date(date_end)

    

    const sale_figure  = await SaleFigure.find()

    if(!sale_figure)
    {
        res.status(401).json({
            success: false,
            mess: 'Không có dữ liệu thống kê'
        })
        return
    }


    // filter sales date start to end
    const list_filter = sale_figure.filter( el => {
        // const time = new Date(el.split('/').reverse().join('/'))
        const time = new Date(el.order_date)
        if(time.getTime() >= (start.getTime() - 3600*24*1000) && time.getTime() <= end.getTime())
        {
            return true
        }

    } )

    
   res.status(201).json({
    success : true,
    sale_figures: list_filter
   })


}


// add
exports.addSaleFigure = async (req,res) => {

    const {order_date, sales, quantity, total_order} = req.body



    const sale_figure = await SaleFigure.create({
        order_date,
        sales,
        quantity
    })

    res.status(201).json({
        success: true,
        sale_figure
    })

}


// sales year
exports.salesYear = async (req,res) => {

    const { year } = req.body

    const sale_firgure = await SaleFigure.find()

    


}
