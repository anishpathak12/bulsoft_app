import React from 'react'
import Image from 'next/image'

const Testing = () => {
    return (
        <div className=' bg-gray-400'>
        <div className='p-20 flex items-center justify-center'>        
        <div className='pr-20'>
            <h1 className='text-5xl '>APPLICATION TESTING</h1>
            <h1 className='text-3xl pt-4'>Bulsoft provides range of application testing </h1>
            <h1 className='text-3xl pt-4'> services to ensure complete coverage of quality</h1>
            <h1 className='text-3xl pt-4'>of your application. Our consultant are expert all </h1>
            <h1 className='text-3xl pt-4'>application testing domains.FUNCTIONAL TESTING</h1>
        </div>
        <div className=''>
            <Image className='pt-12' src = '/testing.webp' width={600} height = {800}/>
        </div>
    </div>
        <div className='p-20 flex items-center justify-center'>        
        <div className='pr-20'>
            <h1 className='text-5xl  '>FUNCTIONAL TESTING</h1>
            <h1 className='text-3xl pt-4'>Getting requirements right is core to application </h1>
            <h1 className='text-3xl pt-4'>quality. Our business-focused approach to SIT and  </h1>
            <h1 className='text-3xl pt-4'>UAT is characterized  by sharp focus on requirements  </h1>
            <h1 className='text-3xl pt-4'>clarity  to atomic level. This ensures that requirements </h1>
            <h1 className='text-3xl pt-4'> gaps are identified early thereby avoiding cascading </h1>
            <h1 className='text-3xl pt-4'>impact on subsequent phases of the testing lifecycle.</h1>
        </div>
        <div className=''>
            <Image src = '/fntest.webp' width={600} height = {800}/>
        </div>
    </div>
        <div className='p-20 flex items-center justify-center'>        
        <div className='pr-20'>
            <h1 className='text-5xl  '>REGRESSION/AUTOMATION SUITE</h1>
            <h1 className='text-3xl pt-4'>In the era of ever-changing technology and business </h1>
            <h1 className='text-3xl pt-4'> requirements, banking and financial institutions are </h1>
            <h1 className='text-3xl pt-4'> constantly pressured to upgrade their portfolio to</h1>
            <h1 className='text-3xl pt-4'> meet market needs. Bulsoft provides end to  </h1>
            <h1 className='text-3xl pt-4'> end automationof all your testing portfolio</h1>
            <h1 className='text-3xl pt-4'> to enable faster TTM and significant savings</h1>
        </div>
        <div className=''>
            <Image src = '/regrr.avif' width={600} height = {800}/>
        </div>
    </div>
        <div className='p-20 flex items-center justify-center'>        
        <div className='pr-20'>
            <h1 className='text-5xl  '>APPLICATION TESTING</h1>
            <h1 className='text-3xl pt-4'>Our TPA services and methodology is a systematic  </h1>
            <h1 className='text-3xl pt-4'> and structured approach to evaluate your current </h1>
            <h1 className='text-3xl pt-4'> testing processes, practices and their maturity </h1>
            <h1 className='text-3xl pt-4'> level. Weidentify gaps, propose plug-ins and steps  </h1>
            <h1 className='text-3xl pt-4'>to raise the organization to its next maturity level. </h1>
            <h1 className='text-3xl pt-4'>We do not believe in a ‘One solution fits all’ approach. </h1>
            <h1 className='text-3xl pt-4'>We guide you towards a structured test process keeping in  </h1>
            <h1 className='text-3xl pt-4'>mind your organization’s culture, maturity, and activities.</h1>
        </div>
        <div className=''>
            <Image src = '/adv.jpg' width={600} height = {800}/>
        </div>
    </div>
    </div>
    )
}

export default Testing