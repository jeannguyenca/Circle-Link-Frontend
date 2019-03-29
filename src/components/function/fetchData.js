export default function fetchData(token, body){
    return new Promise((resolve, reject)=>{
        fetch('http://18.218.142.78/test/graphql', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        })
        .then(res => {
            if (res.status !== 200 && res.status !== 201) {
                return res.json();
            }
            return res.json();
        })
        .then(resData => {
            resolve(resData)
        })
        .catch(err => {
            reject(err)
        });
    });
}