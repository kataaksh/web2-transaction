


const mongoose = require('mongoose')

function connectDB() {
mongoose.connect(`${MONGO_URL}`)
}

module.exports = {
    connectDB
}