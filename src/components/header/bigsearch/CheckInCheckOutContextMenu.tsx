import { Dispatch, ReactNode, SetStateAction } from 'react';
import { CheckInCheckOutContextMenuTabs } from '../../../@types/types';

const CheckInCheckOutContextMenu = ({
  children,
  className,
  selectedCheckInOptionTab,
  setSelectedCheckInOptionTab,
}: {
  children: ReactNode;
  className?: string;
  selectedCheckInOptionTab: CheckInCheckOutContextMenuTabs;
  setSelectedCheckInOptionTab: Dispatch<
    SetStateAction<CheckInCheckOutContextMenuTabs>
  >;
}) => {
  return (
    <div
      className={`absolute top-20 text-sm bg-white p-8 px-12 shadow-2xl border rounded-3xl w-max ${className}`}
    >
      <div className='flex justify-center mb-8'>
        <div className='bg-neutral-200 flex items-center p-1 font-bold rounded-full'>
          {CheckInCheckOutContextMenuTabs.map((item) => (
            <div
              key={item}
              className={`p-2 px-8 ${
                item === selectedCheckInOptionTab
                  ? 'bg-white shadow-md'
                  : 'hover:shadow'
              } cursor-pointer transition-all rounded-full hover:bg-white`}
              onClick={() => setSelectedCheckInOptionTab(item)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      {children}
      {selectedCheckInOptionTab === 'Choose Dates' ? (
        <div className='flex items-center space-x-2 font-medium mt-8'>
          <div
            className='p-1 px-3 border-2 rounded-full border-black cursor-pointer'
            style={{ fontSize: 12 }}
          >
            Exact Dates
          </div>
          {['1', '2', '3', '7'].map((day) => (
            <div
              key={day}
              className='p-1 px-3 border rounded-full transition-all cursor-pointer hover:border-black active:scale-90'
              style={{ fontSize: 12 }}
            >
              <span className='inline-block mr-2'>&#177;</span>
              <span className='inline-block'>{day} day</span>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default CheckInCheckOutContextMenu;
