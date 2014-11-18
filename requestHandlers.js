'use strict';

var querystring = require('querystring'),
    fs = require('fs')

function start(response, postData){
  console.log("Request handler 'start' was called.");
 
  var body = '<html>' + 
    '<head>' + 
    '<meta http-equiv="Content-Type" content="text/html; ' + 'charset=UTF-8"/>' + 
    '<head>' + 
    '<body>' + 
    '<h1> Upload a picture </h1>' + 
    '<form action="/upload" method="post">' + 
    '<textarea name="text" rows="30" cols="20"></textarea>' + 
    '<input type="submit" value="submit"/>' + 
    '</form>' + 
    '</body>' + 
    '</html>';


  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(body);
  response.end();
  
}

function upload(response, postData){
  console.log("Request handler 'upload' was called.");
  response.writeHead(200 ,{'Content-Type': 'text/plain'});
  response.write('You have sent the text ' + querystring.parse(postData).text);
  response.end();
}

function show(response){
  console.log('RH show was called');
  response.writeHead(200, {'Content-Type': "image/png"});
  response.write(fs.createReadStream('/sky\ copy.png').pipe(response));
  response.end();
}

exports.start = start;
exports.upload = upload;
exports.show = show;