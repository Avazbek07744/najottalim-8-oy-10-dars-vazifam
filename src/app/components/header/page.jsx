import Image from 'next/image';
import Link from 'next/link';
import Main from '../main/page';
import Section from '../section/page';
import SectionTwo from '../deff/page';
import Cart from '../cart/page';

const Header = () => {
    return (
        <div className='main'>
            <div className='pt-16'>
                <nav className='w-[1260px] mx-auto flex justify-between mb-[198px]'>
                    <div className="logo">
                        <Image
                            src='/images/Logo.svg'
                            alt='logo image'
                            width={108}
                            height={24}
                        />
                    </div>
                    <ul className='flex gap-10 items-center'>
                        <li><Link className='text-white' href="/equipment">Equipment</Link></li>
                        <li><Link className='text-white' href="/about-us">About us</Link></li>
                        <li><Link className='text-white' href="/blog">Blog</Link></li>
                    </ul>
                    <Link className='flex gap-2 text-white text-lg' href='/'>
                        <Image
                            src='/images/user.svg'
                            alt='user image'
                            width={24}
                            height={24}
                        />
                        Account
                    </Link>
                </nav>
                <div className='w-[950px] mx-auto'>
                    <Main />
                </div>
            </div>
            <div className='box mb-[218px]'>
                <Section />
                <SectionTwo />
            </div>

            <Cart/> 
        </div>
    );
}

export default Header;
