
 var cloudinary = require('cloudinary');

cloudinary.config({ cloud_name: 'keyur1103', api_key: 423612485853384, api_secret: 'e2ZzOCPaheH4BvC6nPazouw-FkU'  });

cloudinary.v2.api.resources({ type: 'upload', prefix: 'sss/' }, function(error, result){console.log(result)});
