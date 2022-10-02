import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
import { AddGuestsContextMenuOptions } from '../../../@types/types';

const AddGuestsContextMenu = () => {
  return (
    <div className='absolute top-20 left-0 bg-white px-6 rounded-3xl shadow-lg w-full'>
      {AddGuestsContextMenuOptions.map(({ title, text }) => (
        <div
          key={title}
          className='flex items-center justify-between py-5 border-b border-gray-300'
        >
          <div>
            <p className='font-bold'>{title}</p>
            <p className='text-sm mt-1'>{text}</p>
          </div>
          <div className='flex items-center space-x-3'>
            <div className='flex items-center justify-center opacity-60 cursor-pointer hover:opacity-100'>
              <MinusIcon className='h-7 w-7 p-1 rounded-full border border-neutral-500' />
            </div>
            <p className='font-medium text'>0</p>
            <div className='flex items-center justify-center opacity-60 cursor-pointer hover:opacity-100'>
              <PlusIcon className='h-7 w-7 p-1 rounded-full border border-neutral-500' />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddGuestsContextMenu;
