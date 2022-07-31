const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Yes')
    },1000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ status: 'Ok'})
    },2000)
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1000)
    },3000)
})

Promise.all([p1, p2, p3]).then((result) => {
    console.log(result)  
})

