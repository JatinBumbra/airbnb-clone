import {
  ChangeEvent,
  Dispatch,
  EventHandler,
  SetStateAction,
  useState,
} from 'react';
import {
  BigSearchItemLabel,
  BigSearchItemText,
  BigSearchItemWrapper,
} from './elements';
import SearchDestinationContextMenu from './SearchDestinationContextMenu';
import Calendar from '../../Calendar';
import AddGuestsContextMenu from './AddGuestsContextMenu';
import {
  BigSearchItemIds,
  CheckInCheckOutContextMenuTabs,
  NumDaysInMonth,
} from '../../../@types/types';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import CheckInCheckOutContextMenu from './CheckInCheckOutContextMenu';
import FlexibleMenu from './FlexibleMenu';

const BigSearch = ({
  selectedBigSearchItemId,
  setSelectedBigSearchItemId,
  selectedMonths,
  handleSelectBigSearchItem,
}: {
  selectedBigSearchItemId: BigSearchItemIds | undefined;
  setSelectedBigSearchItemId: Dispatch<
    SetStateAction<BigSearchItemIds | undefined>
  >;
  selectedMonths: { month: NumDaysInMonth; year: number }[] | undefined;
  handleSelectBigSearchItem: EventHandler<ChangeEvent>;
}) => {
  const [selectedCheckInOptionTab, setSelectedCheckInOptionTab] =
    useState<CheckInCheckOutContextMenuTabs>('Choose Dates');

  return (
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
              id={BigSearchItemIds.where}
              onClick={handleSelectBigSearchItem}
              active={selectedBigSearchItemId === BigSearchItemIds.where}
            >
              <BigSearchItemLabel>Where</BigSearchItemLabel>
              <input
                type='text'
                className='outline-none bg-transparent'
                placeholder='Search Destinations'
              />
            </BigSearchItemWrapper>
            {selectedBigSearchItemId === BigSearchItemIds.where ? (
              <SearchDestinationContextMenu />
            ) : null}
          </div>

          <div className='relative'>
            <BigSearchItemWrapper
              id={BigSearchItemIds.check_in}
              onClick={handleSelectBigSearchItem}
              active={selectedBigSearchItemId === BigSearchItemIds.check_in}
            >
              <BigSearchItemLabel>Check In</BigSearchItemLabel>
              <BigSearchItemText>Any Dates</BigSearchItemText>
            </BigSearchItemWrapper>
            {selectedBigSearchItemId === BigSearchItemIds.check_in ? (
              <CheckInCheckOutContextMenu
                selectedCheckInOptionTab={selectedCheckInOptionTab}
                setSelectedCheckInOptionTab={setSelectedCheckInOptionTab}
                className='-translate-x-64'
              >
                {selectedCheckInOptionTab === 'Choose Dates' ? (
                  <Calendar selectedMonths={selectedMonths} />
                ) : (
                  <FlexibleMenu />
                )}
              </CheckInCheckOutContextMenu>
            ) : null}
          </div>

          <div className='relative'>
            <BigSearchItemWrapper
              id={BigSearchItemIds.check_out}
              onClick={handleSelectBigSearchItem}
              active={selectedBigSearchItemId === BigSearchItemIds.check_out}
            >
              <BigSearchItemLabel>Check Out</BigSearchItemLabel>
              <BigSearchItemText>Any Dates</BigSearchItemText>
            </BigSearchItemWrapper>
            {selectedBigSearchItemId === BigSearchItemIds.check_out ? (
              <CheckInCheckOutContextMenu
                selectedCheckInOptionTab={selectedCheckInOptionTab}
                setSelectedCheckInOptionTab={setSelectedCheckInOptionTab}
                className='-translate-x-96'
              >
                {selectedCheckInOptionTab === 'Choose Dates' ? (
                  <Calendar selectedMonths={selectedMonths} />
                ) : (
                  <FlexibleMenu />
                )}
              </CheckInCheckOutContextMenu>
            ) : null}
          </div>

          <div className='relative'>
            <BigSearchItemWrapper
              id={BigSearchItemIds.who}
              onClick={handleSelectBigSearchItem}
              active={selectedBigSearchItemId === BigSearchItemIds.who}
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
            {selectedBigSearchItemId === BigSearchItemIds.who ? (
              <AddGuestsContextMenu />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigSearch;
