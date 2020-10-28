//put обновляет все данные, все, что мы передали, а patch обновляет по переданному ключу

async function  patchData(url, data) {
    const response = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if(!response.ok) throw  Error(response.status);

    return response.json();
}

patchData('https://jsonplaceholder.typicode.com/posts/1', {
    title: 'My test title',
    body: 'Body Lorem',
    userID: 1,
})
    .then(data => console.log(data))
    .catch((err) => console.log(err));