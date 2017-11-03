'use strict';

//
// Handles all Slack API calls
//
exports.handler = function(event, context, callback) {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: `Hello CIM`,
            table: process.env.FunctionCITable,
            event: event
        })
    };

    callback(null, response);
};