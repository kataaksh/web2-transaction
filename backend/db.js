//MONGO_URL = mongodb+srv://bikash13763:QLi1V1R91VWNf7N8@cluster1.lfiuw1e.mongodb.net/padhify?retryWrites=true&w=majority&appName=Cluster1
//JWT_USER_PASSWORD = 124124343
//JWT_ADMIN_PASSWORD = 12525252

// username :bikash13763 , password : QLi1V1R91VWNf7N8

const mongoose = require('mongoose')

function connectDB() {
mongoose.connect("mongodb+srv://bikash13763:QLi1V1R91VWNf7N8@cluster1.lfiuw1e.mongodb.net/paytm?retryWrites=true&w=majority&appName=Cluster1")
}

module.exports = {
    connectDB
}