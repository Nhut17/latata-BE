const guestVoucher = require('../models/guestVoucher')
const Voucher = require('../models/Voucher')
const User = require('../models/user')

const schedule = require('node-schedule')

exports.useVoucher = async (req,res) => {

    const { voucher,phone,email } = req.body

    // const phone = req.user[0].phone
    // const email = req.user[0].email
    // const email = "test@gmail.com"


    // check voucher exist ?
    const hasVoucher = await Voucher.findOne({
       voucher
    })

    if(!hasVoucher)
    {
        res.status(401).json({
            success: false,
            mess: 'Voucher không tồn tại'
        })
        return
    }


    // check user use initial voucher ?
    const userVoucher = await guestVoucher.findOne({
        email
    })


    if( !userVoucher )
    {

        let listVoucher = []
        listVoucher.push(voucher)

        const addUserVoucher = await guestVoucher.create({
                phone: phone ,
                email: email,
                listVoucher: listVoucher 
            })


        updateQuantityVoucher(hasVoucher._id,hasVoucher)
            

        res.status(201).json({
                success: true,
                voucher: addUserVoucher
            })
    } else // user use diff voucher
    {
        let listVoucher = userVoucher.listVoucher

        if(listVoucher.includes(voucher))
        {
            res.status(401).json({
                mess:'Voucher đã được sử dụng'
            })
            return
        }

        // push list voucher
        listVoucher.push(voucher)

        // id user voucher
        const id = userVoucher._id

        // update
        const update = await guestVoucher.findByIdAndUpdate(id,
            {
                listVoucher: listVoucher,
            },
            {
                new: true,
                runValidators: true,
                useFindAndModify: false,
            }
        )

        updateQuantityVoucher(hasVoucher._id,hasVoucher)

        res.status(201).json({
            success: true,
            voucher: update
        })

    }


}

const updateQuantityVoucher = async(id,has_voucher) => {

    const updateQuantity = has_voucher.quantity - 1

    if(updateQuantity === 0)
    {
        await Voucher.findByIdAndDelete(id)
    }

    const update = await Voucher.findByIdAndUpdate(id,{
        quantity: updateQuantity
   
    },{
        new: true,
        runValidators: true,
        useFindAndModify: false,
    })

}

const birthdayNotification = schedule.scheduleJob({ hour: 8  }, async () => {

    // list user
    // const listUser = await User.find({
    //     phone: '0363300308'
    // })
    
    // console.log(listUser)


})


// const job = schedule.scheduleJob('1 * * * *', function(){
//     console.log('The answer to life, the universe, and everything!');
//   });

// const startTime = new Date(Date.now() + 5000);
// const endTime = new Date(startTime.getTime() + 5000);
// const jobs = schedule.scheduleJob({ start: startTime, end: endTime, rule: '*/1 * * * * *' }, function(){
//   console.log('Time for tea!');
// });