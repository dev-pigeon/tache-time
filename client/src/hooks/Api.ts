export const buildRequestBody = (params : object) => {
    const body = {
        'method' : "POST",
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(params)
    }
    return body;
}


export async function sendJsonRequest(url : string, body : object) {
    try {
        console.log(url)
    const response = await fetch(url, body);
    const json_response = response.json();
    return json_response;
    } catch(error) {
        if(error instanceof Error) {
            console.error("Error fetching json data: ", error);
        }
    }
}
