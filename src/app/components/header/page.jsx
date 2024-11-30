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
                            src='/Logo.svg'
                            alt='logo image'
                            width={108}
                            height={24}
                        />
                    </div>
                    <ul className='flex gap-10 items-center'>
                        <li><Link className='text-white hover:text-[#FBD784] transition-all' href="/equipment">Equipment</Link></li>
                        <li><Link className='text-white hover:text-[#FBD784] transition-all' href="/about-us">About us</Link></li>
                        <li><Link className='text-white hover:text-[#FBD784] transition-all' href="/blog">Blog</Link></li>
                    </ul>
                    <Link className='flex gap-2 text-white text-lg hover:text-[#FBD784] transition-all' href='/'>
                        <Image
                            src='/user.svg'
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
            <div className='box mb-[218px] z-10'>
                <Section />
                <SectionTwo />
            </div>
            <Cart/> 
        </div>
    );
}

export default Header;
