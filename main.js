'use strict';
var greet = require('./hello');
var files = require('fs');


greet('zhangsan');


files.readFile('test.txt', 'utf-8', function(error, data) {
    if (error) {
        console.log('error');
    } else {
        console.log(data);
    }
});

files.writeFile('test.txt', 'zhangsan', function(error) {
    if (error) {
        console.log('error');
    } else {
        console.log('OK');
    }
});
files.stat('test.txt', function(error, stats) {
     if (error) {
        console.log('error');
    } else {
        console.log(stats.size);
        // 是否是文件:
        console.log('isFile: ' + stats.isFile());
    }
});

var rs = files.createReadStream('test.txt');
var ws = files.createWriteStream('copied.txt');

rs.pipe(ws);


if (typeof(window) === 'undefined') {
    console.log('node.js');
} else {
    console.log('browser');
}