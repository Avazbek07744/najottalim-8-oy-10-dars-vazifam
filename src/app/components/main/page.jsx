"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Main = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [activeStep, setActiveStep] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);

            if (scrollPosition >= 0 && scrollPosition < 1000) {
                setActiveStep(1);
            } else if (scrollPosition >= 300 && scrollPosition < 1800) {
                setActiveStep(2);
            } else if (scrollPosition >= 3000) {
                setActiveStep(3);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition]);

    const getStepBackground = (step) => {
        return activeStep === step ? '#FBD784' : 'transparent';
    };

    return (
        <div className='flex justify-between items-center'>
            <div className="flex flex-col gap-3 items-start h-[175px] fixed left-12 z-50 text-white">
                <Link className='transform rotate-90 origin-top-left mx-6 h-20' href="#">Follow us</Link>

                <Link href="https://www.instagram.com/" passHref>
                    <Image
                        src="/instagram.svg"
                        alt="Instagram"
                        width={24}
                        height={24}
                    />
                </Link>

                <Link href="https://x.com" passHref>
                    <Image
                        src="/twitter.svg"
                        alt="Twitter"
                        width={24}
                        height={24}
                    />
                </Link>
            </div>

            <div className='w-[950px]'>
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

            <div className="timeLine flex flex-col items-center justify-center fixed right-12 z-50">
                <div className="flex flex-col items-center">
                    <div className="relative flex flex-col items-center mt-4">
                        <div className="absolute h-full left-14 bg-white w-0.5"></div>
                        <div>
                            <Link
                                href='#'
                                className="flex items-center justify-center w-6 h-6 rounded-full text-white font-bold mb-8"
                                style={{ backgroundColor: getStepBackground(1) }}
                            >
                                1
                            </Link>
                            <Link
                                href='#'
                                className="flex items-center justify-center w-6 h-6 rounded-full text-white font-bold mb-8"
                                style={{ backgroundColor: getStepBackground(2) }}
                            >
                                2
                            </Link>
                            <Link
                                href='#'
                                className="flex items-center justify-center w-6 h-6 rounded-full text-white font-bold mb-8"
                                style={{ backgroundColor: getStepBackground(3) }}
                            >
                                3
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
