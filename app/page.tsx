import Image from 'next/image'
import { Hero, SearchBar, CustomFilter, CarCard } from '@/components';
import { fetchCars } from '@/utils';
import { fuels, yearsOfProduction } from '@/constants';


export default async function Home({ searchParams }) { //? Made this function async to be able to use the fetch
const allCars = await fetchCars({
  manufacturer: searchParams.manufacturer  || '',
  year: searchParams.year  || 2022,
  fuel: searchParams.fuel  || '',
  limit: searchParams.limit  || 10,
  model: searchParams.model  || '',
});

const isDataEmpty = !Array.isArray(allCars) || allCars.
length < 1 || !allCars;
return (
    <main className="overflow-hidden">
      <Hero />
      <section className="mt-12 padding-x padding-y max-width" 
      id="selection">
        <div className='home__text-container'>
              <h1 className="text-4xl font font-extrabold
              text-white">Renting Catalogue
              </h1>
              <p className='text-white'>Check out the cars we have in store</p>
        </div>

        <div className='home__filters'>          
              <SearchBar />
              
              <div className="home__filters-container flex">
                    <CustomFilter title="fuel" options={fuels} />  
                    <CustomFilter title="year" options={yearsOfProduction} />  
              </div>  

        </div>

        {!isDataEmpty ? (
          <section className='text-white'>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />))}
            </div>

          </section>
        ): (
          <div className='home__error-container text-white'>
            <h2 className='text-red-500 text-xl'>No result</h2>
            <p>{allCars?.message}</p>
          </div>
        )}

      </section>
    </main>
  )
}
