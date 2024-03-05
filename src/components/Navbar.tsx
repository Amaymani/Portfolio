import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';


const NavBar = () => {
    const [navbar, setNavbar]=useState(false);
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
      }, []);
      if (!mounted) return null;
      const currentTheme = theme === 'system' ? systemTheme : theme;
    
                                
  return (
    <div className='fixed bg-[rgba(39,_39,_39,_0.1)] backdrop-filter backdrop-blur-[60px] [box-shadow:0_0_80px_rgba(0,_0,_0,_0.3)] top-0 left-0 right-0 w-full z-50'>
      <nav className=''>
        <div className='justify-between py-5 px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-6'>
            <div className='md:hidden'>
                <button className='p-5 absolute top-3 right-3' onClick={()=>{setNavbar(!navbar)}}>
                {navbar?(<i className="fa-solid fa-xmark text-xl"></i>):(<i className="fa-solid fa-bars text-xl"></i>)}
                </button>

                {navbar?(<div className='flex flex-col justify-center items-center'>
            <Link className='py-4' href='/' passHref>
              <span className='group text-xl text-gray-500 transition-all duration-300 ease-in-out'>
                Home
              </span>
            </Link>
            <Link className='py-4' href='/internship' passHref>
              <span className='group text-xl text-gray-500 transition-all duration-300 ease-in-out'>
                About me
              </span>
            </Link>
            <Link className='py-4' href='/placement' passHref>
              <span className='group text-xl text-gray-500 transition-all duration-300 ease-in-out'>
                Skills
              </span>
            </Link>
            <Link className='py-4' href='/apply' passHref>
              <span className='group text-xl text-gray-500 transition-all duration-300 ease-in-out'>
                Project
              </span>
            </Link>
          </div>):(<></>)}
                
                
            </div>

          <div className='flex flex-col md:flex-row md:mx-6 font-semibold max-md:hidden text-lg md:gap-14 sm:gap-2'>
            <Link href='/' passHref>
              <span className='group bg-left-bottom bg-gradient-to-r dark:hover:text-[#D9AA1E] hover:text-[#D9AA1E]   from-[#D9AA1E] to-[#F6BB] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                Home
              </span>
            </Link>
            <Link href='/internship' passHref>
              <span className='group bg-left-bottom bg-gradient-to-r dark:hover:text-[#D9AA1E] hover:text-[#D9AA1E]   from-[#D9AA1E] to-[#F6BB] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                About me
              </span>
            </Link>
            <Link href='/placement' passHref>
              <span className='group bg-left-bottom bg-gradient-to-r dark:hover:text-[#D9AA1E] hover:text-[#D9AA1E]   from-[#D9AA1E] to-[#F6BB] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                Skills
              </span>
            </Link>
            <Link href='/apply' passHref>
              <span className='group bg-left-bottom bg-gradient-to-r dark:hover:text-[#D9AA1E] hover:text-[#D9AA1E]   from-[#D9AA1E] to-[#F6BB] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                Project
              </span>
            </Link>
          </div>

          <div className='flex justify-center items-center gap-7'>
            {currentTheme === 'dark'?(
                <div
                className='text-sm cursor-pointer h-10 w-10'
                onClick={() => setTheme("light")}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-10 w-10'
                  viewBox='0 0 20 20'
                  fill='#BF8211'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
                    clipRule='evenodd'
                  />
                </svg>
                </div>
            ):(
                <div
              className='text-sm cursor-pointer h-10 w-10'
              onClick={() => setTheme("dark")}
            >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='#BF8211'
                  className='w-9 h-9'
                >
                  <path
                    fillRule='evenodd'
                    d='M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z'
                    clipRule='evenodd'
                  />
                </svg>
                </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
