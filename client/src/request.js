export async function getBooks(){
    const response = await fetch('http://localhost:8000/books');
    return await response.json();
}