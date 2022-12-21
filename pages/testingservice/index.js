import React from 'react'
import Image from 'next/image'

const Industries = () => {
    return (
    <div>        
        <div className='p-16 flex items-center justify-center'>        
        <div className='pr-20'>
            <h1 className='text-6xl '>APPLICATION TESTING</h1>
            <h1 className='text-3xl pt-4'>Bulsoft provides range of application testing services</h1>
            <h1 className='text-3xl pt-4'> to ensure complete coverage of quality of your application.</h1>
            <h1 className='text-3xl pt-4'>Our consultant are expert all application testing domains.</h1>
            <h1 className='text-3xl pt-4'>the verticals we are operating in. </h1>
        </div>
        <div className=''>
            <Image className='pt-12 ' src = '/testing.webp' width={600} height = {800}/>
        </div>
        </div>
        <div className='flex  items-center justify-center pb-12'>
            <div className='pb-20 pt-32'>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <Image className="w-full" src="/test.webp"  width={300} height = {300}/>
        <div className="px-6 py-6">
        <div className="font-bold text-xl mb-2 ">FUNCTIONAL TESTING</div>
        <p className="text-gray-700 text-xl pb-20">
        Getting requirements right is core to application quality. Our business-focused approach to SIT and UAT is characterized by sharp focus on requirements clarity to atomic level. This ensures that requirements gaps are identified early thereby avoiding cascading impact on subsequent phases of the testing lifecycle.
        </p>
        </div>  
        </div>
        </div>
        <div className='pl-24 pr-24 pt-12'>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <Image className="w-full " src="/tes.webp"  width={300} height = {300}/>
        <div className="px-6 py-6 ">
        <div className="font-bold text-xl mb-2">REGRESSION/AUTOMATION SUITE</div>
        <p className="text-gray-700 text-xl pb-20">
        In the era of ever-changing technology and business requirements, banking and financial institutions are constantly pressured to upgrade their portfolio to meet market needs. Bulsoft provides end to end automation of all your testing portfolio to enable faster TTM and significant savings
        </p>
        </div>  
        </div>
        </div>
        <div className='pt-12'>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <Image className="w-full " src="/tests.webp"  width={300} height = {300}/>
        <div className="px-6 py-6">
        <div className="font-bold text-xl mb-2">TESTING ADVISORY</div>
        <p className="text-gray-700 text-xl">
        Our TPA services and methodology is a systematic and structured approach to evaluate your current testing processes, practices and their maturity level. We identify gaps, propose plug-ins and steps to raise the organization to its next maturity level. We do not believe in a ‘One solution fits all’ approach. We guide you towards a structured test process keeping in mind your organization’s culture, maturity, and activities.
        </p>
        </div>  
        </div>
        </div>
        </div>
        </div>
    )
}

export default Industries