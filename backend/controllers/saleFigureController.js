const SaleFiure = require('../models/saleFigures')
const schedule = require('node-schedule')


// top customer of month
exports.topCustomer = async (req,res) => {

    

}

// 8am first day of month will reset top customer
const cronExpress_topCustomer = '0 0 8 1 * *'


const topCustomer = schedule.scheduleJob(cronExpress_topCustomer, async function(){

    


})