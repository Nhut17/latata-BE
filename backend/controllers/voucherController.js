const Voucher = require('../models/voucher')
const moment = require('moment-timezone')

// add voucher by admin
exports.addVoucher = async (req,res) => {

    // const {voucher,sales, createAt, expiredIn} = req.body

    const date = new Date()

    const createAt = new Date(req.body.createAt)
    const expiredIn = new Date(req.body.expiredIn)

    // // create day 
    // const create = moment.tz(createAt.getTime(),'Asia/Bangkok').format(`${createAt.getDate()}-MM-YYYY`)
    
    // // // expire day
    // const expire = moment.tz(expiredIn.getTime(),'Asia/Bangkok').format(`${expiredIn.getDate()}-MM-YYYY`)

   
    // invalid input expired time
        if(expiredIn.getTime() - createAt.getTime() < 3600000)
        {
            res.status(401).json({
                mess: 'Thời gian hết hạn voucher phải chênh nhau 1 giờ với thời gian bắt đầu'
            })
            return 
        }
    

    // check voucher exist ?
    // const existedVoucher = await Voucher.findOne({
    //     voucher: voucher?.toUpperCase()
    // })

    // if(existedVoucher)
    // {
    //     res.status(401).json({
    //         success: false,
    //         mess: 'Voucher is existed!'
    //     })
    //     return ;
    // }

    // console.log('create: ', create)
    // console.log('expire: ', expire)

    // create voucher db
    // const vou = await Voucher.create({
    //     voucher: voucher?.toUpperCase(),
    //     sales,
    //     createAt: create,
    //     expiredIn: expire
    // })

    res.status(201).json({
        success: true,
        voucher: {
            createAt,
            expiredIn,
            expiredTime: expiredIn.getTime() - date.getTime()
        }
    })
}




// remove voucher
exports.removeVoucher = async (req,res) => {




}