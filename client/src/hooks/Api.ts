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


const checkResponse = async (response : Response, json_response : any) => {
    if(!response.ok) {
        const errorMsg = json_response['error']
        throw new Error(errorMsg);
    }
}

export async function sendJsonRequest(url : string, body : object) {
    try {
        
    const response = await fetch(url, body);
    const json_response = await response.json();
    await checkResponse(response, json_response);
    return json_response;
    } catch(error) {
        if(error instanceof Error) {
            throw new Error(error.message);
        }
    }
}
