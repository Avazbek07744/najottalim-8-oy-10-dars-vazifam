import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Cart = () => {
    return (
        <div 
            className='bg-gradient-to-b from-[#3a5f32] via-[#000000] via-[#0B1D26] via-[#0B1D26] via-[#0B1D26] to-[#0B1D26]'
        >
            <div className="w-[1300px] mx-auto flex items-center justify-between mb-[200px]">
                <div className='cart1'>
                    <div className='pt-20 pl-36 w-[732px] text-white text-lg'>
                        <div className='mb-8 w-[268px] text-[#FBD784] text-lg flex gap-8 items-baseline'>
                            <div className='h-0.5 w-[72px] bg-[#FBD784]'></div>
                            <h5>GEt Started</h5>
                        </div>
                        <h1 className='text-[64px] leading-[76px] capitalize mb-8'>What level of hiker are you?</h1>
                        <p className='mb-7'>
                            Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?
                        </p>
                        <Link href="#" className='flex gap-3 items-center text-[#FBD784]'>
                            read more
                            <Image
                                src='/left-arrow.svg'
                                alt='Left arrow icon'
                                width={16}
                                height={24}
                            />
                        </Link>
                    </div>
                </div>
                <Image
                    src='/strit.png'
                    alt='Hiking trail'
                    width={566}
                    height={720}
                />
            </div>

            <div className="w-[1300px] mx-auto flex items-center gap-12 mb-[200px]">
                <Image
                    className='object-cover'
                    src='/man.png'
                    alt='Man hiking'
                    width={566}
                    height={720}
                />

                <div className='cart2'>
                    <div className='pt-20 pl-36 w-[732px] text-white text-lg'>
                        <div className='mb-8 w-[354px] text-[#FBD784] text-lg flex gap-8 items-baseline'>
                            <div className='h-0.5 w-[72px] bg-[#FBD784]'></div>
                            <h5>GEt Started</h5>
                        </div>
                        <h1 className='text-[64px] leading-[76px] capitalize mb-8'>Picking the right Hiking Gear!</h1>
                        <p className='mb-7'>
                            The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have.
                            Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe if they get sweaty or wet.
                        </p>
                        <Link href="#" className='flex gap-3 items-center text-[#FBD784]'>
                            read more
                            <Image
                                src='/left-arrow.svg'
                                alt='Left arrow icon'
                                width={16}
                                height={24}
                            />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="w-[1300px] mx-auto flex items-center gap-12 mb-[200px]">
                <div className='cart3'>
                    <div className='pt-20 pl-36 w-[732px] text-white text-lg'>
                        <div className='mb-8 w-[358px] text-[#FBD784] text-lg flex gap-8 items-baseline'>
                            <div className='h-0.5 w-[72px] bg-[#FBD784]'></div>
                            <h5>Where you go is the key</h5>
                        </div>
                        <h1 className='text-[64px] w-[555px] leading-[76px] capitalize mb-8'>Understand Your Map & Timing</h1>
                        <p className='mb-7'>
                            To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag.
                            Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..
                        </p>
                        <Link href="#" className='flex gap-3 items-center text-[#FBD784]'>
                            read more
                            <Image
                                src='/left-arrow.svg'
                                alt='Left arrow icon'
                                width={16}
                                height={24}
                            />
                        </Link>
                    </div>
                </div>
                <Image
                    src='/kompas.png'
                    alt='Compass'
                    width={566}
                    height={720}
                />
            </div>
        </div>
    )
}

export default Cart
