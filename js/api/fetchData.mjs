

export async function fetchThroughAPI (url, header) {
    switch (header) {
        case 'POST':

        case 'GET':

        case 'DELETE':

        case 'PUT':

        
    }
    const response = await fetch(url, header);
    return json = await response.json();
}