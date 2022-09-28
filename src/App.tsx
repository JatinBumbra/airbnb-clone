import {
  ChangeEvent,
  ReactEventHandler,
  ReactNode,
  useEffect,
  useState,
} from 'react';
// Components
import Calendar from './components/Calendar';
// Logos and Icons
import AirbnbLogo from './assets/airbnb.svg';
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  Bars3Icon,
  PlusIcon,
} from '@heroicons/react/24/outline';
import { UserCircleIcon } from '@heroicons/react/24/solid';
// Types
import { NumDaysInMonth } from './@types/types';

const BigSearchItemWrapper = ({
  children,
  id = '',
  className = '',
  onClick,
  active,
}: {
  children: ReactNode;
  id?: string;
  active?: boolean;
  className?: string;
  onClick?: ReactEventHandler;
}) => (
  <div
    className={`relative p-2 px-8 rounded-full border border-transparent transition-all cursor-pointer ${
      active ? 'bg-white shadow-2xl border-neutral-200' : 'hover:bg-neutral-300'
    } ${className}`}
  >
    <div
      id={id}
      className='absolute w-full h-full top-0 left-0'
      onClick={onClick}
    ></div>
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
  const [showBigSearch, setShowBigSearch] = useState<boolean>(false);
  const [selectedBigSearchItemId, setSelectedBigSearchItemId] = useState<
    BIG_SEARCH_ITEM_IDS | undefined
  >();
  const [month, setMonth] =
    useState<{ month: NumDaysInMonth; year: number }[]>();

  const handleSelectBigSearchItem = (e: ChangeEvent<HTMLElement>) => {
    setSelectedBigSearchItemId(e.target.id as BIG_SEARCH_ITEM_IDS);
  };

  useEffect(() => {
    const date = new Date();
    setMonth(
      getMonthAndYear(date.getMonth() as NumDaysInMonth, date.getFullYear())
    );
  }, []);

  const getMonthAndYear = (month: NumDaysInMonth, year: number) => {
    let nextMonth = month + 1;
    let nextYear = year;
    if (nextMonth >= 12) {
      nextMonth = 0;
      nextYear = year + 1;
    }
    return [
      { month, year },
      { month: nextMonth, year: nextYear },
    ] as { month: NumDaysInMonth; year: number }[];
  };

  return (
    <div className='h-screen bg-neutral-200'>
      <header className='border-b border-neutral-300 bg-white relative z-10'>
        <div className='py-5 px-20 flex items-center justify-between text-sm font-semibold'>
          <img src={AirbnbLogo} alt='' className='h-8' />
          <div
            onClick={() => setShowBigSearch(true)}
            className={`flex items-center rounded-full border shadow p-2 transition-all cursor-pointer absolute bg-white left-1/2 -translate-x-1/2 ${
              !showBigSearch ? 'scale-100' : 'scale-0'
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
              showBigSearch ? 'scale-100' : 'scale-0'
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

        {showBigSearch ? (
          <div className='relative pb-3 pt-2 flex justify-center'>
            <div
              className='absolute top-0 left-0 w-full h-full'
              onClick={() => setSelectedBigSearchItemId(undefined)}
            ></div>
            <div className='group z-10'>
              <div
                className={`border border-neutral-300 rounded-full flex items-center ${
                  selectedBigSearchItemId ? 'bg-neutral-200' : ''
                }`}
              >
                <div className='relative'>
                  <BigSearchItemWrapper
                    id={BIG_SEARCH_ITEM_IDS.where}
                    onClick={handleSelectBigSearchItem}
                    active={
                      selectedBigSearchItemId === BIG_SEARCH_ITEM_IDS.where
                    }
                  >
                    <BigSearchItemLabel>Where</BigSearchItemLabel>
                    <input
                      type='text'
                      className='outline-none bg-transparent'
                      placeholder='Search Destinations'
                    />
                  </BigSearchItemWrapper>
                  {selectedBigSearchItemId === BIG_SEARCH_ITEM_IDS.where ? (
                    <div className='absolute top-20 left-0 text-sm bg-white p-8 shadow-2xl border rounded-3xl w-max'>
                      <p className='font-bold mb-5'>Search by region</p>
                      <div className='grid grid-cols-3 gap-5'>
                        {[
                          `I'm Flexible`,
                          'Europe',
                          'United Kingdom',
                          'Southeast Asia',
                          'Canada',
                          'Unites States',
                        ].map((item) => (
                          <div key={item}>
                            <div className='border h-32 w-32 rounded-xl transition-all bg-neutral-100 cursor-pointer hover:border-neutral-400'></div>
                            <p className='mt-1'>{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>

                <div className='relative'>
                  <BigSearchItemWrapper
                    id={BIG_SEARCH_ITEM_IDS.check_in}
                    onClick={handleSelectBigSearchItem}
                    active={
                      selectedBigSearchItemId === BIG_SEARCH_ITEM_IDS.check_in
                    }
                  >
                    <BigSearchItemLabel>Check In</BigSearchItemLabel>
                    <BigSearchItemText>Any Dates</BigSearchItemText>
                  </BigSearchItemWrapper>
                  {selectedBigSearchItemId === BIG_SEARCH_ITEM_IDS.check_in ? (
                    <Calendar className='-translate-x-64' month={month} />
                  ) : null}
                </div>

                <div className='relative'>
                  <BigSearchItemWrapper
                    id={BIG_SEARCH_ITEM_IDS.check_out}
                    onClick={handleSelectBigSearchItem}
                    active={
                      selectedBigSearchItemId === BIG_SEARCH_ITEM_IDS.check_out
                    }
                  >
                    <BigSearchItemLabel>Check Out</BigSearchItemLabel>
                    <BigSearchItemText>Any Dates</BigSearchItemText>
                  </BigSearchItemWrapper>
                  {selectedBigSearchItemId === BIG_SEARCH_ITEM_IDS.check_out ? (
                    <Calendar className='-translate-x-96' month={month} />
                  ) : null}
                </div>

                <div className='relative'>
                  <BigSearchItemWrapper
                    id={BIG_SEARCH_ITEM_IDS.who}
                    onClick={handleSelectBigSearchItem}
                    active={selectedBigSearchItemId === BIG_SEARCH_ITEM_IDS.who}
                    className='pr-2'
                  >
                    <div className='flex items-center'>
                      <div className='pr-10'>
                        <BigSearchItemLabel>Who</BigSearchItemLabel>
                        <BigSearchItemText>Add Guests</BigSearchItemText>
                      </div>
                      <div className='flex items-center bg-red-500 rounded-full text-white font-semibold transition-all hover:bg-red-600'>
                        <MagnifyingGlassIcon className='w-11 h-11 p-3 rounded-full' />
                        {selectedBigSearchItemId ? (
                          <p className='pr-8'>Search</p>
                        ) : null}
                      </div>
                    </div>
                  </BigSearchItemWrapper>
                  {selectedBigSearchItemId === BIG_SEARCH_ITEM_IDS.who ? (
                    <div className='absolute top-20 left-0 bg-white px-6 rounded-3xl shadow-lg w-full'>
                      {[
                        { title: 'Adults', text: 'Ages 13 or above' },
                        { title: 'Children', text: 'Ages 2-12' },
                        { title: 'Infants', text: 'Under 2' },
                        { title: 'Pets' },
                      ].map(({ title, text }) => (
                        <div
                          key={title}
                          className='flex items-center justify-between py-5 border-b border-gray-300'
                        >
                          <div>
                            <p className='font-bold'>{title}</p>
                            <p className='text-sm mt-1'>{text}</p>
                          </div>
                          <div className='flex items-center'>
                            <p className='font-medium mr-3 text'>0</p>
                            <div className='flex items-center justify-center opacity-60 cursor-pointer hover:opacity-100'>
                              <PlusIcon className='h-7 w-7 p-1 rounded-full border border-neutral-500' />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </header>
      {showBigSearch ? (
        <div
          className='bg-black fixed top-0 left-0 h-screen w-screen bg-opacity-30'
          onClick={() => setShowBigSearch(false)}
        ></div>
      ) : null}
    </div>
  );
}

export default App;
