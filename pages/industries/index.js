import React from 'react'
import Image from 'next/image'

const Industries = () => {
  return (
    <div>        
        <h1 className='mt-10  mb-2 text-center font-bold capitalize text-5xl'>INDUSTRIES</h1>
        <p className=' text-3xl  sm:text-center p-12 text-gray-500 '>Bulsoft produly serve range of industry verticals with domain experts, who have in-depth knowledge of every industry vertical we serve. Following are the verticals we are operating in.</p>
        <hr className='w-1/5 mx-auto'/>        
        <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-3 justify-items-center'>
            <div className='py-10'>
                <div className='rounded overflow-hidden shadow-lg max-w-sm'>
                    <Image className='w-full' src = "/bank.jpg"  alt="industries" width={400} height={400} />
                    <div className='px-6 py-4'>
                        <div className='font-bold text-xl font-bold mb-2'>Banking</div>
                        <p className=' text-gray-500 '>In today’s era of digital transformation, Banks and Financial institutions offer wide range of online products and services to reach out to end users worldwide. Though multi-channel applications are required and expected to be interoperable across platforms, browsers, servers and languages, it is very much necessary that the end users of the products get security assurance of the personal and financial data, exhibit high performance, compatibility, security and usability..</p>
                    </div>
                </div>                
            </div>
            <div className='py-10'>
                <div className='rounded overflow-hidden shadow-lg max-w-sm'>
                    <Image className='w-full' src = "/insur.jpg"  alt="industries" width={400} height={400}/>
                    <div className='px-6 py-4'>
                        <div className='font-bold text-xl font-bold mb-2'>Insurance</div>
                        <p className='pb-16 text-gray-500'>Insurance marketplace is witnessing rapid changes due to introduction of newer and more innovative products and at a much faster pace than usual. Organizations are required to respond in double-quick time to market opportunities, service customers efficiently and effectively, ensure regulatory compliance, while ensuring risks are properly assessed and mitigated.</p>
                    </div>
                </div>
            </div>
            <div className='py-10'>
                <div className='rounded overflow-hidden shadow-lg max-w-sm'>
                    <Image className='w-full' src = "/pay.jpg"  alt="industries" width={400} height={400}/>
                    <div className='px-6 py-4'>
                        <div className='font-bold font-bold text-xl mb-2'>Payment</div>
                        <p className='pb-16 text-gray-500'>The payments industry is facing rapid changes world-wide due to demands in regulations, new payment instruments and channels, increasing transaction volumes, consolidation, restructuring, migrations, etc. These conditions create a complex and dynamic environment for Banks and Financial Institutions, and are pressured to provide flexible payments systems to meet the changing demands.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Industries