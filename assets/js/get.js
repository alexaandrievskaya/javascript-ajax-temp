//https://jsonplaceholder.typicode.com/posts
//https://jsonplaceholder.typicode.com/posts/1

async function  getData(url) {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if(!response.ok) throw  Error(response.status);

    return response.json();
}

getData('https://jsonplaceholder.typicode.com/posts')
    .then(data => console.log(data))
    .catch((err) => console.log(err));