const cloudinary = require('cloudinary');
//  import { ExportToCsv } from 'export-to-csv';
let fs = require('fs');
// const Json2csvParser = require('json2csv').Parser;
// const fields = ['name', 'url'];
const Json2csvParser = require('json2csv').Parser;


cloudinary.config({ cloud_name: 'keyur1103', api_key: 423612485853384, api_secret: 'e2ZzOCPaheH4BvC6nPazouw-FkU'  });


let rest;
let nextCursor = null;

uploadAll();

console.log('processimage')
// return new Promise((resolve, reject) => {
    function uploadAll (nextCursor) {
        if (nextCursor) {
            console.log('If condition')
            cloudinary.v2.api.resources({
                type: 'upload',
                max_results: 500,
                prefix: 'sss/',
                next_cursor: nextCursor
                }).then(async res => {
                    console.log('Get Response: ', res.resources.length)
                    for(let item of res.resources) {
                        console.log('Item:', item.url)
                        await cloudinary.v2.uploader.upload(item.url, {
                            folder: "aa/",
                            quality: "auto:good"
                        }, function (error, result) {   
                            
                        }).catch(err => {
                            console.log(err)
                        })
                    }
        
                    if (res.next_cursor) {
                        uploadAll(res.next_cursor)
                    }
                    console.log('Next Cursor:', res.next_cursor)
                }).catch(err => {
                    console.log(err)
                })
        } else {
            console.log('Else condition')
            cloudinary.v2.api.resources({
                type: 'upload',
                max_results: 500,
                prefix: 'sss/'
                }).then(async res => {
                    console.log('Get Response: ', res.resources.length)
                    let images = res.resources
                    images.forEach(async function (element) {
                        // let temp = {};
                        let r = [element];
                        // let key = r[0].public_id.split('/')[1];
                        let value = r[0].url;
            
                        await cloudinary.v2.uploader.upload(value, {
                            folder: "aa/",
                            quality: "auto:good"
                        }).then(result => {
                            
                        }).catch(err => {
                            console.log(err)
                        })     
                       
                    });
                   
                    if (res.next_cursor) {
                        uploadAll(res.next_cursor)
                    }

                    console.log('Next Cursor:', res.next_cursor)
                       

                }).catch(err => {
                    console.log(err)
                })
                  
        }
         
    }
    function generateCSV() {
        

        var json2csvParser = new Json2csvParser({
            fields
        });
        var csv = json2csvParser.parse(new_arrary);
        fs.writeFileSync('./clo.csv', csv)
        
    }