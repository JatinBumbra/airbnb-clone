import { EventHandler, ReactEventHandler, ReactNode, useState } from 'react';
import AirbnbLogo from './assets/airbnb.svg';
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  Bars3Icon,
} from '@heroicons/react/24/outline';
import { UserCircleIcon } from '@heroicons/react/24/solid';

const BigSearchItemWrapper = ({
  children,
  id = '',
  className = '',
  onClick,
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  onClick?: ReactEventHandler;
}) => (
  <div
    id={id}
    className={`p-2 px-8 hover:bg-neutral-200 rounded-full border border-transparent transition-all cursor-pointer active:bg-white active:shadow-2xl active:border-neutral-200 ${className}`}
    onClick={onClick}
  >
    {children}
  </div>
);
const BigSearchItemLabel = ({ children }: { children: ReactNode }) => (
  <p className='text-sm font-bold'>{children}</p>
);
const BigSearchItemText = ({ children }: { children: ReactNode }) => (
  <p className='text-neutral-400'>{children}</p>
);

const BIG_SEARCH_ITEM_IDS = {
  where: 'where',
  check_in: 'check_in',
  check_out: 'check_out',
  who: 'who',
} as const;
type BIG_SEARCH_ITEM_IDS =
  typeof BIG_SEARCH_ITEM_IDS[keyof typeof BIG_SEARCH_ITEM_IDS];

function App() {
  const [showSeach, setShowSeach] = useState<boolean>(false);
  const [selectedBigSearchItemId, setSelectedBigSearchItemId] =
    useState<BIG_SEARCH_ITEM_IDS>('where');

  const handleSelectBigSearchItem = (e: any) => {
    console.log('e.target.value', e.target.value);
  };

  return (
    <div className='h-screen bg-neutral-200'>
      <header className='border-b border-neutral-300 bg-white relative z-10'>
        <div className='py-5 px-20 flex items-center justify-between text-sm font-semibold'>
          <img src={AirbnbLogo} alt='' className='h-8' />
          <div
            onClick={() => setShowSeach(true)}
            className={`flex items-center rounded-full border shadow p-2 transition-all cursor-pointer absolute bg-white left-1/2 -translate-x-1/2 ${
              !showSeach ? 'scale-100' : 'scale-0'
            } hover:shadow-md`}
          >
            {['Anywhere', 'Any Week', 'Add guests'].map((item) => (
              <p className='px-4 py-1 border-r border-neutral-300' key={item}>
                {item}
              </p>
            ))}
            <MagnifyingGlassIcon className='w-8 h-8 p-2 bg-red-500 text-white rounded-full' />
          </div>

          <div
            className={`flex items-center p-2 transition-all absolute left-1/2 -translate-x-1/2 space-x-8 text-base font-medium ${
              showSeach ? 'scale-100' : 'scale-0'
            }`}
          >
            {['Stays', 'Experiences', 'Online Experiences'].map((item) => (
              <div
                className={`cursor-pointer group border-b-2 border-transparent transition-all ${
                  item !== 'Stays' ? 'hover:opacity-60' : ''
                }`}
                key={item}
              >
                <p className='py-2'>{item}</p>
                <div
                  className={`h-0.5 ${
                    item === 'Stays' ? 'max-w-full' : 'max-w-0'
                  } transition-all bg-black group-hover:max-w-full group-hover:opacity-60`}
                ></div>
              </div>
            ))}
          </div>
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
        </div>

        {showSeach ? (
          <div className='pb-3 pt-2 flex justify-center'>
            <div className='group'>
              <div className='border border-neutral-300 rounded-full flex items-center group-active:bg-neutral-200'>
                <BigSearchItemWrapper
                  id={BIG_SEARCH_ITEM_IDS.where}
                  onClick={handleSelectBigSearchItem}
                >
                  <BigSearchItemLabel>Where</BigSearchItemLabel>
                  <input
                    type='text'
                    className='outline-none bg-transparent'
                    placeholder='Search Destinations'
                  />
                </BigSearchItemWrapper>

                <BigSearchItemWrapper
                  id={BIG_SEARCH_ITEM_IDS.check_in}
                  onClick={handleSelectBigSearchItem}
                >
                  <BigSearchItemLabel>Check In</BigSearchItemLabel>
                  <BigSearchItemText>Any Dates</BigSearchItemText>
                </BigSearchItemWrapper>

                <BigSearchItemWrapper
                  id={BIG_SEARCH_ITEM_IDS.check_out}
                  onClick={handleSelectBigSearchItem}
                >
                  <BigSearchItemLabel>Check Out</BigSearchItemLabel>
                  <BigSearchItemText>Any Dates</BigSearchItemText>
                </BigSearchItemWrapper>

                <BigSearchItemWrapper
                  id={BIG_SEARCH_ITEM_IDS.who}
                  onClick={handleSelectBigSearchItem}
                  className='pr-2'
                >
                  <div className='flex items-center'>
                    <div className='pr-10'>
                      <BigSearchItemLabel>Who</BigSearchItemLabel>
                      <BigSearchItemText>Add Guests</BigSearchItemText>
                    </div>
                    <div className='flex items-center bg-red-500 rounded-full text-white font-semibold transition-all hover:bg-red-600'>
                      <MagnifyingGlassIcon className='w-11 h-11 p-3 rounded-full' />
                      <p className='pr-6 hidden transition-all group-active:block'>
                        Search
                      </p>
                    </div>
                  </div>
                </BigSearchItemWrapper>
              </div>
            </div>
          </div>
        ) : null}
      </header>
      {showSeach ? (
        <div
          className='bg-black fixed top-0 left-0 h-screen w-screen bg-opacity-30'
          onClick={() => setShowSeach(false)}
        ></div>
      ) : null}
    </div>
  );
}

export default App;
