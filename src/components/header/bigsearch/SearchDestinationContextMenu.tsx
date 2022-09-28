import { SearchDestinationContextMenuOptions } from '../../../@types/types';

const SearchDestinationContextMenu = () => {
  return (
    <div className='absolute top-20 left-0 text-sm bg-white p-8 shadow-2xl border rounded-3xl w-max'>
      <p className='font-bold mb-5'>Search by region</p>
      <div className='grid grid-cols-3 gap-5'>
        {SearchDestinationContextMenuOptions.map((item) => (
          <div key={item}>
            <div className='border h-32 w-32 rounded-xl transition-all bg-neutral-100 cursor-pointer hover:border-neutral-400'></div>
            <p className='mt-1'>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchDestinationContextMenu;
