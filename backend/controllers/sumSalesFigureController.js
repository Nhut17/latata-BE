

const SumSalesFigure = require('../models/sumSalesFigure')


exports.sumSales  = async (req,res) => {

    const { year, month, sales, quantity_product } = req.body

    const check_sum  = await SumSalesFigure.findOne({
        year:year
    })

    

    // if sum sales is not exist
    if(!check_sum)
    {
        const new_list_month = [
            {
                month,
                sales,
                quantity_product
            }
        ]

        await SumSalesFigure.create({
            year,
            months: new_list_month
        })
        return
    }

    // if sum sales is exist and month hasn't exist
    const months = check_sum.months
    const indx = months.findIndex(el => el.month == month)

    const list_month_sale = {
        month,
        sales,
        quantity_product
    }

    
    // index <=  -1
    if(indx <= -1)
    {
         months.push(list_month_sale)

         // update months
         await SumSalesFigure.findByIdAndUpdate(check_sum._id,{
            months: months
         })
    }
    else{
        months[indx].sales += sales
        months[indx].quantity_product += quantity_product

        // update sales
        await SumSalesFigure.findByIdAndUpdate(check_sum._id,{
            months: months  })
    }

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


exports.getYearsSummary = async (req,res) => {

    const sum_sales = await SumSalesFigure.find()

    let list_year = []

    sum_sales.forEach(year => list_year.push(year.year))

    res.status(201).json({
        list_year
    })

}