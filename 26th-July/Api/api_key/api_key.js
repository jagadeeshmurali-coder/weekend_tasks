var url_api = 'https://dog.ceo/api/breeds/list/all';
fetch(url_api)
.then(res=>res.json())
.then(data=>console.log(data))