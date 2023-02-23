import React from 'react'

const Step3 = () => {
  return (
    <div className='w-full flex flex-col items-center'>
        <button className='text-2xl rounded-[100rem] w-16 h-16 border-[#853ACF] bg-[#0E1A33] w-fit border-2 text-[#853acf]'>3</button>
        <h1 className='text-[#853ACF] text-2xl mt-12 mb-5'>Next Stop, Production.

</h1>
        <h1 className="text-5xl"> Launch and Scale</h1>
        <div className="bg-[#853ACF] w-6 h-[2px] my-8 relative">
        </div>
        <div className="flex items-stretch max-w-[75%]">
            <div className="flex flex-col items-center mx-3">
                <Card heading={"Solid Base"} desc={"Start from scratch or pick a template to deploy instantly, from bots to blogs."}/>
                <Card heading={"Infrastructure as Legos"} desc={"Add a cron job, a database, or another (micro)service! Railway grows with your application."}/>
            </div>
            <div className="flex flex-col items-center mx-3">
                <Card heading={"Solid Base"} desc={"Start from scratch or pick a template to deploy instantly, from bots to blogs."}/>
                <Card heading={"Infrastructure as Legos"} desc={"Add a cron job, a database, or another (micro)service! Railway grows with your application."}/>
            </div>
            <div className="flex flex-col items-center mx-3">
                <Card heading={"Solid Base"} desc={"Start from scratch or pick a template to deploy instantly, from bots to blogs."}/>
                <Card heading={"Infrastructure as Legos"} desc={"Add a cron job, a database, or another (micro)service! Railway grows with your application."}/>
            </div>
        </div>
    </div>
  )
}
const Card=({heading,desc,img})=>{
    return <div className="border-[#853ACF] border rounded-lg py-12 px-8  pr-[20%] min-h-[270px] relative max-w-[400px] green-shadow mb-8">
        <h1 className='text-[#BE93ED] mb-8 text-3xl'>{heading}</h1>
        <p className="text-slate-400">{desc}</p>
        <img src={img} className="absolute bottom-0 right-0 width-30%" alt="" />
    </div>
}
export default Step3