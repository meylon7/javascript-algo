const getData = async () => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        const data = await res.json()
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}

getData()

const sendData = async () => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts`,{
            method: 'POST',
            body:JSON.stringify({
                title: "Moshe",
                body: 'just test',
                userId: 1
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const data = await res.json()
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}
sendData()