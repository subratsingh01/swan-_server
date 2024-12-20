const Router = require('express');
const router = Router();
const { Main, login, message, status } = require("./mongo.js");

router.use(Router.json());

router.patch('/login_update', (req, res) => {
    const date = new Date();
    const a = login.create({
        login_date_time: date.toLocaleString()
    });
    res.status(200).send(date.toLocaleString());
});

router.post('/status', (req, res) => {
    try {
        status.create({
            study: 0,
            free: 0,
            missing: 0,
            waiting_call: 0,
            waiting_msg: 0,
            busy: 0,
            dnd: 0
        })
    } catch (error) {
        console.log(error)
    }
    res.status(200).send("done")
})

router.patch('/status', (req, res) => {
    const status_type = req.query.type;
    const _id = "676525269e02aba03cfdeb30";
    switch (status_type) {
        case "study": {
            const set_status = async (_id) => {
                try {
                    await status.updateMany({ _id }, { study: 1, free: 0, missing: 0, waiting_call: 0, waiting_msg: 0, busy: 0, dnd: 0 });
                    res.status(200).json({
                        status: "Status set sucessfully"
                    });
                }
                catch (error) {
                    res.status(400).json({
                        status: `Fail to set status ${status_type}`
                    });
                }
            }
            set_status(_id);
        } break;
        case "free": {
            const set_status = async function (_id) {
                try {
                    await status.updateMany({ _id }, { study: 0, free: 1, missing: 0, waiting_call: 0, waiting_msg: 0, busy: 0, dnd: 0 });
                    res.status(200).json({
                        status: "Status set sucessfully"
                    });
                } catch (error) {
                    res.status(400).json({
                        status: `Fail to set status ${status_type}`
                    });
                }
            }
            set_status(_id);
        } break;
        case "missing": {
            const set_status = async (_id) => {
                try {
                    await status.updateMany({ _id }, { study: 0, free: 0, missing: 1, waiting_call: 0, waiting_msg: 0, busy: 0, dnd: 0 });
                    res.status(200).json({
                        status: "Satus set sucessfully"
                    });
                } catch (error) {
                    res.status(400).json({
                        status: `Fail to set status ${status_type}`
                    }); 
                }
            }
            set_status(_id);
        } break;
        case "waiting_call": {
            const set_status = async (_id) => {
                try {
                    await status.updateMany( { _id }, { study: 0, free: 0, missing: 0, waiting_call: 1, waiting_msg: 0, busy: 0, dnd: 0 });
                    res.status(200).json({
                        status: "Satus set sucessfully"
                    });
                } catch (error) {
                    res.status(400).json({
                        status: `Fail to set status ${status_type}`
                    }); 
                }
            }
            set_status(_id);
        } break;
        case "waiting_msg": {
            const set_status = async (_id) => {
                try {
                    await status.updateMany( { _id }, { study: 0, free: 0, missing: 0, waiting_call: 0, waiting_msg: 1, busy: 0, dnd: 0 });
                    res.status(200).json({
                        status: "Satus set sucessfully"
                    });
                } catch (error) {
                    res.status(400).json({
                        status: `Fail to set status ${status_type}`
                    }); 
                }
            }
            set_status(_id);
        } break;
        case "busy": {
            const set_status = async (_id) => {
                try {
                    await status.updateMany( { _id }, { study: 0, free: 0, missing: 0, waiting_call: 0, waiting_msg: 0, busy: 1, dnd: 0 });
                    res.status(200).json({
                        status: "Satus set sucessfully"
                    });
                } catch (error) {
                    res.status(400).json({
                        status: `Fail to set status ${status_type}`
                    }); 
                }
            }
            set_status(_id);
        } break;
        case "dnd": {
            const set_status = async (_id) => {
                try {
                    await status.updateMany( { _id }, { study: 0, free: 0, missing: 0, waiting_call: 0, waiting_msg: 0, busy: 0, dnd: 1 });
                    res.status(200).json({
                        status: "Satus set sucessfully"
                    });
                } catch (error) {
                    res.status(400).json({
                        status: `Fail to set status ${status_type}`
                    }); 
                }
            }
            set_status(_id);
        } break;
    };
});

module.exports = router;
//     hand_heart: 0,
//     heart_face: 0,
//     hug: 0,
//     heart_gift: 0,
//     red_heart: 0,
//     shine_heart: 0,
//     eye: 0,
//     food: 0,
//     angry: 0,
//     tears: 0,
//     satisfy: 0,
//     real_heart: 0