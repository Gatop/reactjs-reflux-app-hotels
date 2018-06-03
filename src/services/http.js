import Fetch from 'whatwg-fetch';

// Gets an URL and retunrs the response as a json
export function get(url){
    return fetch(url)
    .then((response) => {
        return response.json();
    })
};
