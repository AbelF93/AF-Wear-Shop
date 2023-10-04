export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '8ab2f2b47cmsh3fdcdd0c300cd8fp1700bajsn5e27474d53b9',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch(
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars', {
        headers: headers,
    });
    
    const result = await response.json();
    return result;
}