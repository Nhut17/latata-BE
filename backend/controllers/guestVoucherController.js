const guestVoucher = require('../models/guestVoucher')
const Voucher = require('../models/Voucher')
const User = require('../models/user')

const schedule = require('node-schedule')

exports.useVoucher = async (req,res) => {

    const { voucher} = req.body

    const phone = req.user[0].phone
    const email = req.user[0].email
    

 
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

    // check voucher expired
    const end_date = new Date(hasVoucher.expiredIn)
    const currrent_time = new Date()

    if(end_date.getTime() - currrent_time.getTime() <= 0)
    {
        await Voucher.findByIdAndRemove(hasVoucher._id)

        res.status(201).json({
            message: 'Voucher đã hết hạn sử dụng'
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

        // list used
        let list_used = []
        list_used.push(email)

        const addUserVoucher = await guestVoucher.create({
                phone: phone ,
                email: email,
                listVoucher: listVoucher 
            })


            

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
                mess:'Bạn đã sử dụng voucher này'
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


        res.status(201).json({
            success: true,
            voucher: update
        })

    }


}


const birthdayNotification = schedule.scheduleJob({ hour: 8  }, async () => {

    // list user
    // const listUser = await User.find({
    //     phone: '0363300308'
    // })
    
    // console.log(listUser)


})


const job = schedule.scheduleJob({minute: 17}, function(){
    console.log('The answer to life, the universe, and everything!');
  });

// const startTime = new Date(Date.now() + 5000);
// const endTime = new Date(startTime.getTime() + 5000);
// const jobs = schedule.scheduleJob({ start: startTime, end: endTime, rule: '*/1 * * * * *' }, function(){
//   console.log('Time for tea!');
// });