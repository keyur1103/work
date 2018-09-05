
 const cloudinary = require('cloudinary');


cloudinary.config({ cloud_name: 'keyur1103', api_key: 423612485853384, api_secret: 'e2ZzOCPaheH4BvC6nPazouw-FkU'  });

var new_arrary = [];
 cloudinary.v2.api.resources({ type: 'upload', prefix: 'sss/' }, function(error, result){result;
    var array = [result.resources];
    console.log(array[0].length)
 array[0].forEach(function(element){
        var temp = {};
        var r = [element];
        var key = r[0].public_id.split('/')[1];
        var value = r[0].url;
        temp[key] = value;
        new_arrary.push(temp);
    });
    console.log('@@@@@@@@@@@@@@@@',new_arrary);
});

