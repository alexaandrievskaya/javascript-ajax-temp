async function  deleteData(url) {
    const response = await fetch(url, {
        method: 'DELETE',
    });

    if(response.ok) return true;

    return false;
}

deleteData('https://jsonplaceholder.typicode.com/posts/2', {
    title: 'My test title',
    body: 'Body Lorem',
    userID: 1,
})
    .then(data => console.log(data))
    .catch((err) => console.log(err));