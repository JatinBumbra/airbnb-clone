import { Dispatch, SetStateAction } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const PlaceholderSearchBar = ({
  showBigSearch,
  setShowBigSearch,
}: {
  showBigSearch: boolean;
  setShowBigSearch: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div
      onClick={() => setShowBigSearch(true)}
      className={`flex items-center rounded-full border shadow p-2 transition-all cursor-pointer absolute bg-white left-1/2 -translate-x-1/2 ${
        !showBigSearch ? 'scale-100' : 'scale-0'
      } hover:shadow-md`}
    >
      {['Anywhere', 'Any Week', 'Add guests'].map((item) => (
        <p
          className={`px-4 py-1 border-r ${
            item === 'Add guests' ? 'border-transparent' : 'border-neutral-300'
          }`}
          key={item}
        >
          {item}
        </p>
      ))}
      <MagnifyingGlassIcon className='w-8 h-8 p-2 bg-red-500 text-white rounded-full' />
    </div>
  );
};

export default PlaceholderSearchBar;
