

const SumSalesFigure = require('../models/sumSalesFigure')


exports.sumSales  = async (req,res) => {

    const { year, month, sales } = req.body

    const list_month = [
        {
            month,
            sales
        }
    ]
    
    const check_sum = await SumSalesFigure.create({
        year,
        months: list_month
    })

    res.status(201).json({
        success: true,
        check_sum
    })
}

exports.getSummarySales = async (req,res) => {

    const {  year } = req.body

    const check_sum = await SumSalesFigure.findOne({
        year
    })

    res.status(201).json({
        success: true,
        check_sum
    })


}

exports.selectSumSales = async (req, res) => {

    const { year} = req.body

    const sum_sales = await SumSalesFigure.findOne({
        year: year
    })

    if(!sum_sales)
    {
        res.status(401).json({
            success: false,
            message: 'Select sales is not exist'
        })
        return 
    }

    res.status(201).json({
        success: true,
        sum_sales
    })

}