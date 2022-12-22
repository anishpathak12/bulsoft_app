import React from 'react'
import Image from 'next/image'

const Testing = () => {
  return (
    <div>         
        <h1 className='mt-10  mb-2 text-center font-bold capitalize text-5xl'>APPLICATION TESTING</h1>
        <p className=' text-3xl sm:text-center p-12 text-gray-500'>Bulsoft provides range of application testing services to ensure complete coverage of quality of your application. Our consultant are expert all application testing domains.</p>
        <hr className='w-1/5 mx-auto'/>        
        <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-3 justify-items-center'>
            <div className='py-10'>
                <div className='rounded overflow-hidden shadow-lg max-w-sm'>
                    <Image className='w-full' src = "/adv.jpg"  alt="industries" width={400} height={400}/>
                    <div className='px-6 py-4'>
                        <div className='font-bold text-2xl  mb-2'>FUNCTIONAL TESTING</div>
                        <p className='text-xl pb-16 text-gray-500'>Getting requirements right is core to application quality. Our business-focused approach to SIT and UAT is characterized by sharp focus on requirements clarity to atomic level. This ensures that requirements gaps are identified early thereby avoiding cascading impact on subsequent phases of the testing lifecycle.</p>
                    </div>
                </div>                
            </div>
            <div className='py-10'>
                <div className='rounded overflow-hidden shadow-lg max-w-sm'>
                    <Image className='w-full' src = "/regrr.avif"  alt="industries" width={400} height={400}/>
                    <div className='px-6 py-4'>
                        <div className='font-bold text-2xl mb-2'>REGRESSION/AUTOMATION SUITE</div>
                        <p className='text-xl text-gray-500'>In the era of ever-changing technology and business requirements, banking and financial institutions are constantly pressured to upgrade their portfolio to meet market needs. Bulsoft provides end to end automation of all your testing portfolio to enable faster TTM and significant savings</p>
                    </div>
                </div>
            </div>
            <div className='py-10'>
                <div className='rounded overflow-hidden shadow-lg max-w-sm'>
                    <Image className='w-full' src = "/ad.jpg"  alt="industries" width={400} height={400}/>
                    <div className='px-6 py-4'>
                        <div className='font-bold text-2xl mb-2'>TESTING ADVISORY</div>
                        <p className='text-xl text-gray-500 pb-10'>Our TPA services and methodology is a systematic and structured approach to evaluate your current testing processes, practices and their maturity level. We identify gaps, propose plug-ins and steps to raise the organization to its next maturity level. We do not believe in a ‘One solution fits all’ approach. We guide you towards a structured test process keeping in mind your organization’s culture, maturity, and activities.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Testing