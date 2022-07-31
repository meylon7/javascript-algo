const fs = require('fs/promises');

const files = ['file1.txt','file2.txt','file3.txt']
// the output will be random and unpredictable
files.forEach(async (file) => {
    const content = await fs.readFile(file, 'utf8');
    console.log(content)
}) 
// fs.readFile invoked in the same round of the event loop
// they are started in parallel, not in sequential
// the execution continues immediately after invoking forEach() 
// without waiting for all the fs.readFile

// solution - you can also use for in loop
async function readFiles(){
    for(let file of files){
        const content = await fs.readFile(file, 'utf8')
        console.log(content)
    }
}
readFiles()