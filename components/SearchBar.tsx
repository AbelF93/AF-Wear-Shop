"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import React from "react";

import SearchManufacturer  from "./SearchManufacturer";
import { useSearchParams } from "next/navigation";

const SearchButton = ({additionnalClasses} : {additionnalClasses: string}) => (
  <button type="submit" className={`-ml-3 z-10 ${additionnalClasses}`}>

    <Image 
      src="/magnifying-glass.png"
      alt="magnifying glass"
      width={30}
      height={30}
      className="object-contain"
    />

  </button>
)

const SearchBar = () => {
    const[manufacturer, setManufacturer ] = useState('');
    const [model, setModel] = useState('');
    const router = useRouter ();

    const handleSearch = (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if(manufacturer === '' && model === ''){
        return alert('You need to fill the search bar')
      }

      updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase()
      )
    }
  

    const updateSearchParams= (model: string, manufacturer:string) => {
      const searchParams = new URLSearchParams(window.
      location.search);

      if (model) {
        searchParams.set('model',model)
      } else {
        searchParams.delete('model')
      }
      
      if (manufacturer) {
        searchParams.set('manufacturer',manufacturer)
      } else {
        searchParams.delete('manufacturer')
      }
    

    const newPathName = `${window.location.pathname}?
    ${searchParams.toString()}`
  
    router.push(newPathName)
  }

    return (
    <form className="searchbar" onSubmit=
    {handleSearch}>
        <div className="searchbar__item">
           <SearchManufacturer 
           manufacturer={manufacturer}
           setManufacturer={setManufacturer}
           />

         <SearchButton additionnalClasses="sm:hidden"/>
        </div>
        <div className="searchbar_item bg-blue-800 rounded-md">
            <Image 
              src="/model-icon.png"
              alt="car model"
              width={50}
              height={50}
              className="absolute t-20 w-[20px] h-[20px] ml-4"
            />
            <input type="text" 
            name="model" 
            value={model} 
            onChange={(e) => setModel(e.target.value)}
            placeholder="Q3"
            className="searchbar_input text"
            />
            <SearchButton additionnalClasses="sm:hidden"/>
    
        </div>
        <SearchButton additionnalClasses="max-sm:hidden"/>
    </form>
  )
}

export default SearchBar