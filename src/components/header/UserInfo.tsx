import { useState } from 'react';
import { GlobeAltIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { UserCircleIcon } from '@heroicons/react/24/solid';

const UserInfo = () => {
  const [userMenuOpen, setUserMenuOpen] = useState<boolean>(false);

  return (
    <div className='flex items-center space-x-1'>
      <p className='p-3 rounded-full transition-all cursor-pointer hover:bg-neutral-100'>
        Become a host
      </p>
      <div className='p-3 rounded-full transition-all cursor-pointer hover:bg-neutral-100'>
        <GlobeAltIcon className='w-5 h-5' />
      </div>
      <div className='relative'>
        <div
          className={`p-1 flex items-center rounded-full border border-neutral-300 space-x-2 cursor-pointer transition-all ${
            userMenuOpen ? 'shadow-md' : ''
          } hover:shadow-md`}
          onClick={() => setUserMenuOpen((prev) => !prev)}
        >
          <Bars3Icon className='w-5 h-5 ml-2' />
          <UserCircleIcon className='w-8 h-8 text-neutral-500' />
        </div>
        {userMenuOpen ? (
          <div className='absolute bg-white py-2 rounded-xl top-14 right-0 shadow-lg border w-64 z-20'>
            {[
              'Sign up',
              'Log in',
              'Host your home',
              'Host an experience',
              'Help',
            ].map((option) => (
              <>
                <p
                  key={option}
                  className={`p-3 px-5 hover:bg-neutral-100 cursor-pointer ${
                    option !== 'Sign up' ? 'font-normal' : ''
                  }`}
                  onClick={() => setUserMenuOpen(false)}
                >
                  {option}
                </p>
                {option === 'Log in' ? (
                  <div className='border-b border-b-neutral-200 my-1.5'></div>
                ) : null}
              </>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default UserInfo;
