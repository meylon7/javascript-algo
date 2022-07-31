let msg = "Apple!, apple?  orange. orange; banana milk, milk"

let reg_punc = /[\~|\`|!|\@|\#|\$|\%\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g

let new_msg =  msg.replace(reg_punc, "")
console.log(new_msg)

let arr = new_msg.toLowerCase().split(' ')
console.log(arr)
let obj = {}

arr.forEach(word=>{
    if(obj[word]){
        obj[word] = obj[word] + 1
    }else{
        obj[word] = 1
    }
})

console.log(obj)