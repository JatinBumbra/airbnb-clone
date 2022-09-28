import { GlobeAltIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { UserCircleIcon } from '@heroicons/react/24/solid';

const UserInfo = () => {
  return (
    <div className='flex items-center space-x-1'>
      <p className='p-3 rounded-full transition-all cursor-pointer hover:bg-neutral-100'>
        Become a host
      </p>
      <div className='p-3 rounded-full transition-all cursor-pointer hover:bg-neutral-100'>
        <GlobeAltIcon className='w-5 h-5' />
      </div>
      <div className='p-1 flex items-center rounded-full border border-neutral-300 space-x-2 cursor-pointer transition-all hover:shadow-md'>
        <Bars3Icon className='w-5 h-5 ml-2' />
        <UserCircleIcon className='w-8 h-8 text-neutral-500' />
      </div>
    </div>
  );
};

export default UserInfo;
