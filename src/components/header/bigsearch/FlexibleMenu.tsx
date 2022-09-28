import { CalendarIcon } from '@heroicons/react/24/outline';
import { Months } from '../../../@types/types';

const FlexibleMenu = () => {
  return (
    <div className='flex flex-col items-center'>
      <p className='text-lg font-semibold'>How long would you like to stay?</p>
      <div className='flex items-center space-x-2 my-3'>
        {['Weekend', 'Week', 'Month'].map((option) => (
          <div
            key={option}
            className={`p-2 px-3 border rounded-full transition-all cursor-pointer ${
              option === 'Weekend'
                ? 'border-2 border-black bg-neutral-100'
                : 'hover:border-black'
            } active:scale-90`}
          >
            {option}
          </div>
        ))}
      </div>
      <p className='text-lg font-semibold mt-6'>When do you want to go?</p>
      <div className='grid grid-cols-7 gap-3 my-5'>
        {Months.slice(0, 7).map((month) => (
          <div
            key={month}
            className={`p-5 flex flex-col items-center border rounded-xl cursor-pointer transition-all ${
              month === 'January'
                ? 'border-2 border-black bg-neutral-100'
                : 'hover:border-black'
            } active:scale-90`}
          >
            <CalendarIcon className='w-9 h-9' />
            <p className='mt-1'>{month}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlexibleMenu;
