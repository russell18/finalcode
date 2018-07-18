const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/diaryData', (err) => {
    if (!err)
        console.log('mongodb connnection succeeded.');
    else
        console.log('Error in DB connection:' + JSON.stringify(err, undefined, 2));


})

module.exports = mongoose;