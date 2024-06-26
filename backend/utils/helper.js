const crypto = require('crypto');

const createRandomBytes = async () =>
 new Promise((res,rej) => {
    crypto.randomBytes(30,(err,buff) => {
        if(err) rej(err);
        const token = buff.toString('hex');
        res(token);
    });
 })



module.exports = { createRandomBytes }