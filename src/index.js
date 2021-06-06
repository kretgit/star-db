

const getResource = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`fetch error ${url} result is: ${res.status}`)
    }
    return await res.json();
};

getResource('https://swapi.dev/api/people/1444444444/')
    .then((body) => {
        console.log(body)
    })
    .catch(err => {
       console.error("got error :" + err)
    });

// fetch('https://swapi.dev/api/people/1/')
//     .then((data) => {
//         return data.json();
//     })
//     .then((body) => {
//         console.log(body)
//     });