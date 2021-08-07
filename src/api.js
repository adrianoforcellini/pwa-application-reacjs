const params = {
    header: {
        'Acccept': 'application/json',
        'Content-Type': 'application/json',
    }
}

const URL = 'http://localhost.com:3000';

const getNews = (subject) => {
    return fetch(`${URL}/${subject}`, params)
    .then((response) => response.json)
    .catch((err) => {
        console.log('Ocorreu um erro:', err)
    })
}