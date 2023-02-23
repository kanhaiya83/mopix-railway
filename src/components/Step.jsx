import React from 'react'

const Step = () => {
  return (
    <div className='w-full flex flex-col items-center'>
        <button className=' rounded-[100rem] w-16 h-16 border-[#306FE9] bg-[#0E1A33] w-fit border-2 text-[#306FE9] text-2xl '>1</button>
        <h1 className='text-[#306FE9] text-2xl mt-12 mb-5'>Now Boarding, Local.</h1>
        <h1 className="text-5xl">Start and Tinker</h1>
        <div className="bg-[#306FE9] w-6 h-[2px] my-8 relative">
            
        </div>
        <div className="flex items-stretch  flex-col md:flex-row max-w-[75%] md:max-w-[100%]">
            <div className="flex flex-col items-center">
                <Card heading={"Solid Base"} desc={"Start from scratch or pick a template to deploy instantly, from bots to blogs."}/>
                <Card heading={"Infrastructure as Legos"} desc={"Add a cron job, a database, or another (micro)service! Railway grows with your application."}/>
            </div>
            <div className="h-[500px] w-6 blue-track mx-12 relative d-none md:d-block"><img src="https://railway.app/illustrations/trains/01-train-dark.svg"  className='absolute top-10 left-0 top-10 w-full' alt="" /></div>
            <div className="flex flex-col items-center">
                <Card heading={"Solid Base"} desc={"Start from scratch or pick a template to deploy instantly, from bots to blogs."}/>
                <Card heading={"Infrastructure as Legos"} desc={"Add a cron job, a database, or another (micro)service! Railway grows with your application."}/>
            </div>
        </div>
    </div>
  )
}
const Card=({heading,desc,img})=>{
    return <div className="border-[#306FE9] border rounded-lg py-12 px-8 pr-[20%] min-h-[270px] relative max-w-[400px] blue-shadow mb-8">
        <h1 className='text-slate-600 mb-4 text-3xl'>{heading}</h1>
        <p className="text-slate-400">{desc}</p>
    </div>
}
export default Step