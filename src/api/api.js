const debug = false
//backend
//true for localhost
//false for prod.

let baseUrl = ''

if (debug) {
    baseUrl = 'http://127.0.0.1:8000/'
}
else {
    baseUrl = 'https://devgang.online/'
}

const getOptions = (mass, auth, method) => { //Если нужен Bearer token, то auth = true
    let formdata = new FormData();

    mass.map(m => {
        return formdata.append(m.name, m.value);
    })

    let requestOptions = {
        method: method,
        body: formdata,
        redirect: 'follow',
    }
    let requestAuthOptions = {
        method: method,
        body: formdata,
        headers: getHeaders(),
        redirect: 'follow',
    }
    if(!auth) return requestOptions;
    else return requestAuthOptions;
}

const getHeaders = () => {
    const accessToken = 'Bearer  ' + localStorage.getItem('accessToken')
    let myHeaders = new Headers();
    myHeaders.append("Authorization", accessToken);
    return myHeaders
}

export const museumApi = {
//Музей
    getMuseumData() { //Получение информации об музее по пользователю
        const accessToken = 'Bearer  ' + localStorage.getItem('accessToken')
        let myHeaders = new Headers();
        myHeaders.append("Authorization", accessToken);
        let requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: 'follow',
        }
        return fetch(baseUrl + `api/m-admin`, requestOptions)
    },

    updateMuseumData(museum_id, name, img, description, ticket_lifetime) { //Изменение информации о музее
        let options = getOptions([{name: 'museum_id', value: museum_id}, {name: 'name', value: name},{name: 'img', value: img}, {name: 'description', value: description}, {name: 'ticket_lifetime', value: ticket_lifetime}], true,  'PUT')
        return fetch(baseUrl + `api/m-admin`, options)
    },
}
