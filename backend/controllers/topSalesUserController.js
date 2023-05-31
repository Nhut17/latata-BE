const TopSalesUser = require('../models/topSalesUser')
const User = require('../models/user')



exports.topSalesUser = async (req,res) => {

    const {year,month} = req.body

    const users = await User.find({
        role: 'user'
    })
  
    const top_sales_user = users.sort((a,b)=>  a.wallet - b.wallet)


    res.status(200).json({
        success: true,
        top_sales
    })


}