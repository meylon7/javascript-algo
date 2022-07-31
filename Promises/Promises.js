const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const data = true ? { data: 'we have data :)' } : null
        if (data) {
            resolve(data);
        } else {
            reject(data);
        }
    }, 1000);
})

promise
    .then((result) => {
        console.log(result);
        console.log('waiting for next...');
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ justData: { ...result } })
            }, 3000)
        })
    })
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err)
    })
    .finally(() => {
        console.log('finally...')
    })