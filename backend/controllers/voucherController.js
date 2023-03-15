const Voucher = require('../models/voucher')
const moment = require('moment-timezone')

// add voucher by admin
exports.addVoucher = async (req,res) => {

    const {voucher,sales, createAt, expiredIn} = req.body

    // create day 
    const create = moment.tz(createAt.getTime(),'Asia/Bangkok').format(`${createAt.getDate()}-MM-YYYY`)
    
    // expire day
    const expire = moment.tz(expiredIn.getTime(),'Asia/Bangkok').format(`${expiredIn.getDate()}-MM-YYYY`)

   
    // check voucher exist ?
    const existedVoucher = await Voucher.findOne({
        voucher: voucher?.toUpperCase()
    })
    if(existedVoucher)
    {
        res.status(401).json({
            success: false,
            mess: 'Voucher is existed!'
        })
        return ;
    }

    // create voucher db
    const vou = await Voucher.create({
        voucher: voucher?.toUpperCase(),
        sales,
        createAt: create,
        expiredIn: expire
    })

    res.status(201).json({
        success: true,
        vou
    })
}

// function expired
function expiredTime(expire) {

    const currentTime = new Date()

    const expired = expire - currentTime.getTime()

    return expired

}


// remove voucher
exports.removeVoucher = async (req,res) => {




}