const guestVoucher = require('../models/guestVoucher')
const Voucher = require('../models/Voucher')



exports.useVoucher = async (req,res) => {

    const { voucher } = req.body

    // const phone = req.user[0].phone
    // const email = req.user[0].email
    const email = "test@gmail.com"


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

    // console.log('initial: ', useInitialVoucher)
    console.log('user voucher: ', userVoucher)

    if( !userVoucher )
    {

        let listVoucher = []
        listVoucher.push(voucher)
        console.log('listVoucher: ', listVoucher)

            const addUserVoucher = await guestVoucher.create({
                phone: "037523489" ,
                email: email,
                listVoucher: listVoucher 
            })
            

            res.status(201).json({
                success: true,
                voucher: addUserVoucher
            })
        }
     
    

    // res.status(201).json({
    //     success: true
    // })


}


