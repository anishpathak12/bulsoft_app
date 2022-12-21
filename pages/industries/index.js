import React from 'react'
import Image from 'next/image'

const Industries = () => {
    return (
    <div>        
        <div className='p-16 flex items-center justify-center  '>        
        <div className='pr-20'>
            <h1 className='text-6xl '>INDUSTRIES</h1>
            <h1 className='text-3xl pt-4'>Bulsoft produly serve range of industry verticals</h1>
            <h1 className='text-3xl pt-4'>with domain experts, who have in-depth knowledge</h1>
            <h1 className='text-3xl pt-4'>of every industry vertical we serve. Following are </h1>
            <h1 className='text-3xl pt-4'>the verticals we are operating in. </h1>
        </div>
        <div className=''>
            <Image className='pt-12' src = '/indus.jpg' width={600} height = {800}/>
        </div>
        </div>
        <div className='flex  items-center justify-center pb-12 '>
            <div className='pt-14'>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <Image className="w-full pb-6" src="/banks.jpg"  width={300} height = {300}/>
        <div className="px-6 pb-6 ">
        <div className="font-bold text-xl mb-2 ">BANKING</div>
        <p className="text-gray-700 text-xl ">
        In today’s era of digital transformation, Banks and Financial institutions offer wide range of online products and services to reach out to end users worldwide. Though multi-channel applications are required and expected to be interoperable across platforms, browsers, servers and languages, it is very much necessary that the end users of the products get security assurance of the personal and financial data, exhibit high performance, compatibility, security and usability..
        </p>
        </div>  
        </div>
        </div>
        <div className='pl-24 pr-24 pt-14'>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <Image className="w-full " src="/insur.jpg"  width={300} height = {300}/>
        <div className="px-6 py-6 ">
        <div className="font-bold text-xl mb-2">INSURANCE</div>
        <p className="text-gray-700 text-xl pb-24">
        Insurance marketplace is witnessing rapid changes due to introduction of newer and more innovative products and at a much faster pace than usual. Organizations are required to respond in double-quick time to market opportunities, service customers efficiently and effectively, ensure regulatory compliance, while ensuring risks are properly assessed and mitigated.
        </p>
        </div>  
        </div>
        </div>
        <div className='pt-14'>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <Image className="w-full" src="/pay.jpg"  width={300} height = {300}/>
        <div className="px-6 py-6">
        <div className="font-bold text-xl mb-2">PAYMENT</div>
        <p className="text-gray-700 text-xl pb-16">
        The payments industry is facing rapid changes world-wide due to demands in regulations, new payment instruments and channels, increasing transaction volumes, consolidation, restructuring, migrations, etc. These conditions create a complex and dynamic environment for Banks and Financial Institutions, and are pressured to provide flexible payments systems to meet the changing demands.
        </p>
        </div>  
        </div>
        </div>
        </div>
        </div>
    )
}

export default Industries