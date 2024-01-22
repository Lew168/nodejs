const express = require('express');
const router = express.Router();
const ObsClient = require('esdk-obs-nodejs');
const ParseError = require('../util/parseError')
/* GET users listing. */
router.get('/', function(req, res, next) {
    let obsClient = new ObsClient({
        access_key_id: 'JQNCZP7UEBMEKBRANDU0',
        secret_access_key: '2qG6OdBjydIqhb7Ees9N4ZAHPrDmP3PQaMbdh2a4',
        server: 'https://obs.cn-north-1.myhuaweicloud.com',
    });
    obsClient.getObject({
        Bucket : 'zhyx',
        Key: 'formal/online/marketing/sourceMaps/m2/app.2d7b8560.js.map'
    }, (err, result) => {
        console.log(ParseError, 'ParseError')
        // const parser = new ParseError();
        ParseError.stack(result.InterfaceResult.Content, 'select.arrow', (re) => {
            console.log(re, 'klkl')
        });
    })
  res.send('respond with a resource7777');
});

module.exports = router;