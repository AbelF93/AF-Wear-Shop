import { manufacturers } from "@/constants";
import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {
    const { manufacturer, year, model, limit, fuel } = 
    filters;
    
    const headers = {
        'X-RapidAPI-Key': '8ab2f2b47cmsh3fdcdd0c300cd8fp1700bajsn5e27474d53b9',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&
    year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {
        headers: headers,
    });
    
    const result = await response.json();
    return result;
}

export const caculateCarRent = (city_mpg:number,
     year: number) => {
        const basePricePerDay = 50; // Base rental price per day in dollars
        const mileageFactor = 0.1; // Additional rate per mile driven
        const ageFactor = 0.05; // Additional rate per year of vehicle age
      
        // Calculate additional rate based on mileage and age
        const mileageRate = city_mpg * mileageFactor;
        const ageRate = (new Date().getFullYear() - year) * ageFactor;
      
        // Calculate total rental rate per day
        const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
      
        return rentalRatePerDay.toFixed(0);
     }


export const generateCarImageUrl = (car:CarProps, 
angle?:string) => {
    const url = new URL('https://api.fuelapi.com/');

    const { make, year, model, image, code } = car;

    url.searchParams.append('customer', 'daefd14b-9f2b-4968-9e4d-9d4bb4af01d1');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split("_") [0]);
    url.searchParams.append('images.code', image);
    url.searchParams.append('code', `${code}`);
    url.searchParams.append('imagePath', 'image'+'code');
    url.searchParams.append('year', `${year}`);
    url.searchParams.append('angle',`${angle}`);

    return `${url}`;
}

export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set(type, value);

  const newPathName = `${window.location.pathname}?
  ${searchParams.toString()}`

  return newPathName;
}