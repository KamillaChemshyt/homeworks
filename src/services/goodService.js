// fetch('http://127.0.0.1:8080/goods', { 
//             method: 'GET',
//             headers: 
//                 { 
//                     'Content-Type': 'application/json'
//                 }
//             })
//             .then((response) => response.json())
//             .then((jsonResponse) => {
//                 console.log('jsonResponce: ', jsonResponse);
//             })

const stateUrl = 'http://127.0.0.1:8080';

const stateHeaders = { 
    'Content-Type': 'application/json'
}


export const requestGoods = () => {
    return sendRequest({path: 'goods', method: 'GET'})
}


export const createItem = (item) => {
    return sendRequest({path: 'goods', method: 'POST', body: item})
}

export const deleteItem = (itemId) => {
    return sendRequest({path: 'goods/' + itemId, method: 'DELETE'})
}

export const saveItem = (item) => {
    return sendRequest({path: 'goods/' + item.id, method: 'PUT', body: item})
}



export const sendRequest = async ({path, method = 'GET', body}) => {
    try {
        const bodyString = body ? JSON.stringify(body) : undefined;
        const response = await fetch([stateUrl, path].join('/'), { 
            method,
            headers: stateHeaders,
            body: bodyString,
        });
            if (response.ok){
            const responseJson = await response.json();
            console.log('Response: ', responseJson);
            return {success: true, response: responseJson};
            } else {
                return {success: false, error: 'Something went wrong'};
            }
    } catch (error){
        console.error("Something went wrong: ", error);
        return {success: false, error: Error('Something went wrong')};
    }
            
}