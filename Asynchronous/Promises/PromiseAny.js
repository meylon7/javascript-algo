const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('No')
    },3000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ status: 200})
    },2000)
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1000)
    },3000)
})

// any - get only the first promise that is resolve 
Promise.all([p1, p2, p3]).then((result) => {
    console.log(result)  
})

Promise.any([p1, p2, p3])
        .then((result) => {
            console.log(result)  
        })
        .catch((error) => {
            console.log(error) 
        })