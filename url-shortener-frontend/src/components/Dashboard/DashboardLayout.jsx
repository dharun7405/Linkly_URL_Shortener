import React from 'react'
import Graph from './Graph'
import {dummyData} from "../../dummyData/data.js";

const DashboardLayout = () => {
    return (
        <div className="lg:px-14 sm:px-8 px-4 min-h-[calc(100vh-64px)]">
            <div className="lg:w-[90%] w-full mx-auto py-16">
                <div className="h-96 relative">
                    <Graph graphData={dummyData}/>
                </div>
                <div className='py-5 sm:text-end text-center'>
                    <button className='bg-gradient-to-r from-blue-500 to-pink-500 px-4 py-2 rounded-md text-white'>
                        Create a New Short Url
                    </button>
                </div>
            </div>
        </div>
    )
}
export default DashboardLayout
