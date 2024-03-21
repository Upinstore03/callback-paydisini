const crypto = require('crypto');
const api_key = process.env.API_KEY
const payid = process.env.PAY_ID

async function handleCallback(req, res) {
    const { key, pay_id, unique_code, status, signature } = req.body;
    const sign = crypto.createHash('md5').update(`${api_key} . ${unique_code} . CallbackStatus`).digest('hex');
    console.log(key, unique_code,  status, signature, sign)
    if (key === api_key && payid === pay_id) {
        let result;
        if (signature !== sign) {
            result = { success: false };
        } else if (status === 'Success') {
            result = { success: true };
        } else if (status === 'Canceled') {
            result = { success: true };
        } else {
            result = { success: false };
        }
        res.json(result);
    } else {
        res.json({ success: false }); // Unauthorized request
    }
}

module.exports = { handleCallback };