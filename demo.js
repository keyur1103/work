// const axios = require('axios');
 var cloudinary = require('cloudinary');

// clear
//  var cloudanary_URL = 'https://api.cloudinary.com/v1_1/keyur1103/folders/cloud';
// var uploadPreset = 'gec5z7n6';
//var url = cloudinary.url('keyur1103', {format: 'json', type: 'list'});
//  cloudinary.v2.api.sub_folders("cloud", function(error, result){console.log(result)});
cloudinary.config({ cloud_name: 'keyur1103', api_key: 423612485853384, api_secret: 'e2ZzOCPaheH4BvC6nPazouw-FkU'  });

// cloudinary.v2.api.sub_folders("cloud", function(error, result){console.log(result)});
cloudinary.v2.api.resources({ type: 'upload', prefix: 'sss/' }, function(error, result){console.log(result)});

// cloudinary.v2.api.resource('samples/keyur',
 //cloudinary.v2.api.resources(function(error, result){console.log(result)});    
// cloudinary.v2.api.resource('sample',
//     function(error, result){console.log(result)});

//cloudinary.image("https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSVmwds9qedbHZ__uc1E40a-s70KtNiiLVKiaKymGszYdIDtzJfzw", {type: "fetch"})




    // cloudinary.v2.api.resource('keyur', {type: 'keyur'},
    // function(error, result){console.log(result);});
// function(error, result){console.log(result)});

// cloudinary.v2.api.root_folders(function(error, result){console.log(result)});

// console.log(cloudanary_URL)
// // cloudinary.url(cloudanary_URL, {resource_type: "images"})
// axios
// .get(cloudanary_URL)
// .then((result) => {
//     console.log("Results::>"+result);
//     //console.log("addd::>"+cloudanary_URL);
// })
// .catch((err) => {
//     console.log(err);
// })    

// GET /resources/image/upload

// cloudinary.v2.api.cloudanary_URL({type: 'upload', prefix: 'sample'}, function(error, result)
// {console.log(result); });

//  console.log("Define"+cloudanary_URL);

// console.log(cloudinary)

