const Voucher = require('../models/voucher')
const moment = require('moment-timezone')
const User = require('../models/user')
const sendVoucher = require('../utils/sendVoucher')


// add voucher by admin
exports.addVoucher = async (req,res) => {

    const {voucher,sales,content} = req.body

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
        content,
        createAt,
        expiredIn
    })

    res.status(201).json({
        success: true,
        vou
    })
}


// remove voucher
exports.removeVoucher = async (req,res) => {

    const {id} = req.params

    // check voucher exist
    const succ = await Voucher.findByIdAndDelete(id)


    res.status(201).json({
        success: true,
        mess: 'Deleted successfully!'
    })

}


 
// get vouchers
exports.getVouchers = async (req,res) => {

    const voucher = await Voucher.find()


    await removeExpiredVoucher(voucher)

  
    res.status(201).json({
        success: true,
        voucher
    })
    

}

// send voucher for all
exports.sendVoucherAll = async(req,res) => {

    const {voucher, startDate, endDate} = req.body

    const list_user = await User.find()


    try{
        // let list_mail = []
         list_user.forEach(async val  => {
            await sendVoucher({
                email: val.email,
                subject: 'Mã voucher khuyến mãi',
                voucher,
                 
            })
        })
    }
    catch(e)
    {
        console.log(e)
    }
    
    res.status(201).json({
        success: true,
    })

}


async function removeExpiredVoucher  (voucher)
{
    const current_time = new Date()

    await voucher.forEach(async (vou,indx) => {
    
        const expired_date = new Date(vou.expiredIn)
         

        if( expired_date.getTime() - current_time.getTime() <=0 )
        {
             voucher.splice(indx, 1)
            await Voucher.findByIdAndRemove(vou._id)
          
            
        }

    
    })
   
     console.log('voucher: ', voucher)
   
}

