var fs = require('fs')
  path = require('path');

var count=0;


function rescan(root, replace){
  if(typeof(replace)=='undefined') replace=root;
  fs.readdir(root, function(err, files){
    if(err)throw err;
    files.forEach(dirEntry)

  });

  function dirEntry(e){
    var fullPath = path.join(root, e);
    fs.stat(fullPath, function(err, stats){
      if(err)throw err; 
      
      if(stats.isDirectory()){
        rescan(fullPath, replace);
      }
      else{
        count +=1;
        //console.log(count, fullPath.replace(replace, ''));
        //TODO:tell someone that we found a file
      }
    });
  }

}


exports.rescan = rescan;