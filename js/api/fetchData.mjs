

export async function fetchThroughAPI (url, header) {
    const response = await fetch(url, header);
    return json = await response.json();
}