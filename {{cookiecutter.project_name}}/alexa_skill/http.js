'use strict';

const skill = require('skill');

exports.lambda_handler = (event, context, callback) => {
    try {
        const body = JSON.parse(event.body);
        
        skill.lambda_handler(body, context, function(err, data) {
            if (err) {
                callback(null, {
                    statusCode: 200,
                    body: JSON.stringify(err)
                });
            } else {
                callback(null, {
                    statusCode: 200,
                    headers: {
                        "Content-Type": "application/json;charset=UTF-8"
                    },
                    body: JSON.stringify(data)
                });
            };
        });
    } catch (err) {
        callback(err);
    }
};
