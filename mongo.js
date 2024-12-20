const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://subratsingh:u8IEesh8Ay143SCF@cluster0.8fkuo.mongodb.net/Swan");

const user_schema = new mongoose.Schema({
    hand_heart: Number,
    heart_face: Number,
    hug: Number,
    heart_gift: Number,
    red_heart: Number,
    shine_heart: Number,
    eye: Number,
    food: Number,
    angry: Number,
    tears: Number,
    satisfy: Number,
    real_heart: Number
});

const login_schema = new mongoose.Schema({
    login_date_time: String
});

const Message = new mongoose.Schema({
    curr_msg: String,
    pre_msg: String
});

const Status = new mongoose.Schema({
    study: Number,
    free: Number,
    missing: Number,
    waiting_call: Number,
    waiting_msg: Number,
    busy: Number,
    dnd: Number
})

const message = mongoose.model('message', Message);
const Main = mongoose.model('main', user_schema);
const login = mongoose.model('login_date', login_schema);
const status = mongoose.model('status', Status);

module.exports = {
    Main,
    login,
    message,
    status
}