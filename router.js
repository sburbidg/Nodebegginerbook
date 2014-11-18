'use strict';

function route(handle, pathname, response, postData){
  console.log('Routing request for ' + pathname);
  if(typeof handle[pathname] === 'function'){
    handle[pathname](response, postData);

  } else {
    console.log('No ' + pathname + ' exists');

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('404');
    response.end();
  }
}

exports.route = route;