const mongoose = require('mongoose');
const uri = "mongodb+srv://chat_app_admin:admin123@cluster0.icqiya8.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to db')).catch((e) => console.log('Error', e))