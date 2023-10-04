"use client";

import { useState,Fragment } from 'react';
import Image from 'next/image';
import { SearchManufacturerProps } from '@/types';
import { manufacturers } from '@/constants';
import { Combobox, Transition } from '@headlessui/react';


const SearchManufacturer = ({manufacturer, setManufacturer}
: SearchManufacturerProps) => {
  const [query, setQuery] = useState('');

  const filteredManufacterers = query === "" 
        ? manufacturers //list manufacturers
        : manufacturers.filter((item) => ( //! adjust the search 
            item.toLowerCase()
            .replace(/\s+/g,"") 
            .includes(query.toLocaleLowerCase().replace(/\s+/g,"") 
            )))

 
  return (
    <div className="search-manufacturer">
        <Combobox value={manufacturer} onChange={setManufacturer}>
          <div className="relative w-full">
            <Combobox.Button className="absolute top[-10px]">
             <Image src="/car-logo.svg"
             width={20}
             height={20}
             className='ml-4'
             alt='car logo' />
            </Combobox.Button>
            <Combobox.Input
            className="search-manufacturer__input text-white"
            placeholder='Volkswagen'
            displayValue={(manufacturer:string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
            /> 

            <Transition as={Fragment}
                leave='transition ease-in duration-100'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
                afterLeave={() => setQuery('')}
            >
                <Combobox.Options>
                {filteredManufacterers.map((item) => (
                        <Combobox.Option key={item}
                        className={({active}) => `
                        reltive search-manufacturer_option
                        ${active ? 'bg-cyan-500 text-white':'text-gray-400'}
                        `}
                        value={item}
                        >

                        {({selected, active}) => (
                            <>
                              <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {item}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                        </span>
                        ) : null}
                            </>
                        )}
                        </Combobox.Option>
                    ))
                }
                </Combobox.Options>

            
            </Transition>
          
          </div>
          
        </Combobox>
    </div>
  )
}

export default SearchManufacturer