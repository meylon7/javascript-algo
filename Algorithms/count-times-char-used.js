let msg = "Apple, orange, banana and milk"

let map = new Map()

for(let char of msg){
    if(map.has(char)){
        map.set(char,map.get(char)+1)
    }else{
        map.set(char,1)
    }
}
console.log(map)

let max = 0
for(let arr of map){
    if(arr[1] > max){max = arr[1]}
}

let most = []

for(let arr of map){
    if(arr[1] == max){most.push(arr[0])}
}

console.log(max,most)