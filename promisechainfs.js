const fs=require('fs')
const util=require('util')

let readFile=util.promisify(fs.readFile)

function get(){
    return readFile('./demo.txt','utf8')
}
get().then(result=>console.log(result))


