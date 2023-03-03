const fs = require('fs');
const axios = require('axios');

let args = [];

let outValue = false;
let fromFilePath = '';
let toFilePath = '';
let urlOrPath = '';
var fileContent = "";
var urlList = [];
var returnValue = "";


for (let i = 0; i < process.argv.length; i += 1) {
    
    args.push(process.argv[i]);
    
  }



 fromFilePath = args[2].toString();





//  (async function(){
//     let fileContent = cat(fromFilePath);
//     //urlList = fileContent.split(/\r?\n/);
//     console.log(fileContent);
    
//   })();








function cat (urlOrPath) {

        
    try {
        // store the read file contents
        var contents = fs.readFileSync(urlOrPath, 'utf8');
        return contents;
    } catch (error) {
        // errors thrown by fs will be caught here
        console.error(error);
        // kill the process and tell the shell it errored
        process.exit(1);
    }

}
 





async function webCat(urlOrPath)
{

    try {
        
    
            const response =   await axios.get(urlOrPath).then(res => res.data.toString());
            //console.log(response);
            return response;

        
      } catch (error) {
        return error.toString();
      }

}


function catWrite(path, content){
    fs.writeFile(path, content, "utf8", function(err) {
        if (err) {
          console.error(err);
          process.exit(1);
        }
        
      });
}





returnValue =  cat(fromFilePath);


urlList = returnValue.split(/\r?\n/);

//console.log(urlList);










for (const url of urlList) {

    let returnValue = "";

    if(url == ""){

        break;
    }


    let shortUrl = url.replace("http://","").replace("https://","").replace(".","");
    
    if (shortUrl.indexOf("/") > 0){

        shortUrl = shortUrl.substring(0,shortUrl.indexOf("/"));
    }

    shortUrl = shortUrl + '.txt';

    //console.log(shortUrl);
   

    (async function(){
        returnValue = await webCat(url);
        //console.log(returnValue);

        if (returnValue.includes("AxiosError")){

            console.log(`Could not download ${url}`);
            
        }else{
            catWrite(shortUrl,returnValue);
            console.log(`Wrote to ${shortUrl}`);

        }
        
        
      })();

     

      


}