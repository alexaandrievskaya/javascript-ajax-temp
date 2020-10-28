//обновляет данные, мы указываем идентификатор по которому на свервере должны произойти изменения

async function  putData(url, data) {
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if(!response.ok) throw  Error(response.status);

    return response.json();
}

putData('https://jsonplaceholder.typicode.com/posts/1', {
    title: 'My test title',
    body: 'Body Lorem',
    userID: 1,
})
    .then(data => console.log(data))
    .catch((err) => console.log(err));