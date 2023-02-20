const fs=require('fs/promises')
async function muFuc(){
 
   let result= await fs.readFile('demo.txt','utf8')
        console.log(result)
} 
muFuc()