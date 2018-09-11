
 const cloudinary = require('cloudinary');
 const async = require('asyncawait/async');
 const await = require('asyncawait/await');
 var csv_export=require('csv-export');
 var fs = require('fs');

cloudinary.config({ cloud_name: 'keyur1103', api_key: 423612485853384, api_secret: 'e2ZzOCPaheH4BvC6nPazouw-FkU'  });

begin();
async function begin() {
    // let optimizeImage = await processImage()
    // console.log('========', optimizeImage) 
    processImage()
} 

function generateCSV () {
    var new_arrary = [];
    cloudinary.v2.api.resources({ type: 'upload', prefix: 'optimzeimage/' }, function(error, result){result;
        var array = [result.resources];
        var myObj = []
        array[0].forEach(function(element){
            var temp = {};
            var r = [element];
            var key = r[0].public_id.split('/')[1];
            var value = r[0].url;
            console.log("key",key);
            console.log("value",value);
            myObj.push({ 'public_id': key, 'url': value });

        });
        csv_export.export(myObj,function(buffer){

        fs.writeFileSync('/home/software/Desktop/mjmldemo/data.zip',buffer);  
        });
    });
}

function processImage () {
    return new Promise((resolve, reject) => {
        cloudinary.v2.api.resources({ type: 'upload', prefix: 'sss/' }, function(error, result){
            // result;
            var array = [result.resources];
            // console.log(array[0].length)
            array[0].forEach(function(element){
                var temp = {};
                var r = [element];
                var key = r[0].public_id.split('/')[1];
                var value = r[0].url;
        
                cloudinary.v2.uploader.upload(value,
                { folder: "optimzeimage/",quality: "auto:good"},
                function(error, result) {console.log(result, error); });
            });
        });
        generateCSV();
        resolve('image process done..!')
    })
    // Promise.resolve(_promise).then((res) => {
    //     return res
    // })
}

