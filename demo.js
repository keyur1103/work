const cloudinary = require('cloudinary');
let fs = require('fs');
// const Json2csvParser = require('json2csv').Parser;
const fields = ['name', 'url'];
const Json2csvParser = require('json2csv').Parser;


begin();
async function begin() {
   await processImage()
    // processImage();
    await generateCSV();
   
}

async function processImage() {
    console.log('processimage')
    // return new Promise((resolve, reject) => {
        await cloudinary.v2.api.resources({
            type: 'upload',
            prefix: 'sss/'
        }, async function (error, result) {
            // result;
            let array = [result.resources];
            console.log(array[0].length)
            array[0].forEach(async function (element) {
                let temp = {};
                let r = [element];
                let key = r[0].public_id.split('/')[1];
                let value = r[0].url;

                await cloudinary.v2.uploader.upload(value, {
                        folder: "optimzeimage/",
                        quality: "auto:good"
                    },
                   function (error, result) {
                       
                       
                    });

            });
          
        });

        // resolve('image process done..!')
         
        // generateCSV(); 
        
        // generateCSV();
    // })
    // await generateCSV();
    console.log('endof processimage')
}
async function generateCSV() {
    console.log('generatecsv')
    let new_arrary = [];

    await cloudinary.v2.api.resources({
        type: 'upload',
        prefix: 'optimzeimage/'
    }, function (error, result) {
        // result;
        
        let array = [result.resources];
        array[0].forEach(function (element) {
            let temp = {}
            let r = [element];
            let name = r[0].public_id.split('/')[1];
            let url = r[0].url;
             temp ={
                "name": name,
                "url": url,
            } ;
            new_arrary.push(temp);        
           
    });
    var json2csvParser = new Json2csvParser({ fields });
    var csv = json2csvParser.parse(new_arrary);
    fs.writeFileSync('./clo.csv', csv)
   
}
   
     
 )}
