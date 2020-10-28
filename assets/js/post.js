
async function  postData(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if(!response.ok) throw  Error(response.status);

    return response.json();
}

postData('https://jsonplaceholder.typicode.com/posts', {
    title: 'My test title',
    body: 'Body Lorem',
    userID: 1,
})
    .then(data => console.log(data))
    .catch((err) => console.log(err));