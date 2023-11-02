import React from 'react'
import Navbar from './Navbar'
import EventCard from './EventCard'

function Search() {
    return (
        <>
            <div className='flex lg:h-full h-full w-screen flex-col lg:flex-row '>

                <Navbar title='search' />
                <div className='lg:w-full text-white mt-4 ml-4 mr-2'>
                    <link rel="stylesheet" href="https://unpkg.com/flowbite@1.4.4/dist/flowbite.min.css" />

                    <div class="max-w-2xl mx-auto">

                        <form>
                            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                            <div class="relative">
                                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </div>
                                <input type="search" id="default-search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Events ,Tags,..." required />
                                <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                            </div>
                        </form>

                        <div class="mt-5"><div className="participated-events mt-4">
                            {/* <p className="text-xl bg-white text-black font-medium p-3 lg:w-full rounded-xl "> You have Participated in the following Events</p> */}
                            <div className="event-main flex flex-wrap justify-evenly">

                                <EventCard />
                                <EventCard />
                                <EventCard />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Search