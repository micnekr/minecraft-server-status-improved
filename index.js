const request = require('request');

let url;

const info = (ip, port = 25565, callback) => {
    if(callback == undefined){
        return new Promise(function(resolve, reject){
            infoCallback(ip, port, function(err, body){
                if(err){
                    reject(err);
                }else{
                    resolve(body);
                }
            })
        })
    }else{
        return infoCallback(ip, port, callback)
    }
}

function infoCallback(ip, port, callback){
    url = `https://mcapi.us/server/status?ip=${ip}&port=${port}`;
    request(url, { json: true }, (err, res, body) => {
        if(err) {
            return callback(err);
        }
        return callback(null, body)
    });
}

module.exports = info;