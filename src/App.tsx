import { useState, useEffect, ChangeEvent } from 'react';
// Components
import PlaceholderSearchBar from './components/header/PlaceholderSearchBar';
import TopTabs from './components/header/bigsearch/TopTabs';
import UserInfo from './components/header/UserInfo';
// Logos and Icons
import AirbnbLogo from './assets/airbnb.svg';
// Types
import { BigSearchItemIds, NumDaysInMonth } from './@types/types';
import BigSearch from './components/header/bigsearch';

function App() {
  const [showBigSearch, setShowBigSearch] = useState<boolean>(false);
  const [selectedBigSearchItemId, setSelectedBigSearchItemId] = useState<
    BigSearchItemIds | undefined
  >();
  const [selectedMonths, setMonth] = useState<
    { month: NumDaysInMonth; year: number }[] | undefined
  >();

  const handleSelectBigSearchItem = (e: ChangeEvent<HTMLElement>) => {
    setSelectedBigSearchItemId(e.target.id as BigSearchItemIds);
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
          <PlaceholderSearchBar
            showBigSearch={showBigSearch}
            setShowBigSearch={setShowBigSearch}
          />
          <TopTabs showBigSearch={showBigSearch} />
          <UserInfo />
        </div>

        {showBigSearch ? (
          <BigSearch
            selectedMonths={selectedMonths}
            selectedBigSearchItemId={selectedBigSearchItemId}
            setSelectedBigSearchItemId={setSelectedBigSearchItemId}
            handleSelectBigSearchItem={handleSelectBigSearchItem}
          />
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
