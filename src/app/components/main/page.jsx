import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Main = () => {
    return (
        <div>
            <div className='mb-8 w-80 text-[#FBD784] text-lg flex gap-8 items-baseline'>
                <div className='h-0.5 w-[72px] bg-[#FBD784]'></div>
                <h5>A Hiking guide</h5>
            </div>
            <h1 className='text-[88px] leading-[100px] text-white capitalize mb-8'>Be prepared for the Mountains and beyond!</h1>
            <Link href="/" className='flex gap-3 items-center text-white'>
                scroll down
                <Image
                    src='/down.svg'
                    alt='arrow down'
                    width={14}
                    height={24}
                />
            </Link>
        </div>
    )
}

export default Main
