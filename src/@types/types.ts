export const NumDaysInMonth = {
  0: 31,
  1: 28,
  2: 31,
  3: 30,
  4: 31,
  5: 30,
  6: 31,
  7: 31,
  8: 30,
  9: 31,
  10: 30,
  11: 31,
} as const;
export type NumDaysInMonth = keyof typeof NumDaysInMonth;

export const BigSearchItemIds = {
  where: 'where',
  check_in: 'check_in',
  check_out: 'check_out',
  who: 'who',
} as const;
export type BigSearchItemIds =
  typeof BigSearchItemIds[keyof typeof BigSearchItemIds];

export const AddGuestsContextMenuOptions = [
  { title: 'Adults', text: 'Ages 13 or above' },
  { title: 'Children', text: 'Ages 2-12' },
  { title: 'Infants', text: 'Under 2' },
  { title: 'Pets', text: '' },
] as const;
export type AddGuestsContextMenuOptions =
  typeof AddGuestsContextMenuOptions[keyof typeof AddGuestsContextMenuOptions];

export const SearchDestinationContextMenuOptions = [
  `I'm Flexible`,
  'Europe',
  'United Kingdom',
  'Southeast Asia',
  'Canada',
  'Unites States',
] as const;
export type SearchDestinationContextMenuOptions =
  typeof SearchDestinationContextMenuOptions[keyof typeof SearchDestinationContextMenuOptions];
