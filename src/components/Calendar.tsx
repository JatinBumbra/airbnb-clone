import { Months, NumDaysInMonth } from '../@types/types';

const Calendar = ({
  selectedMonths,
}: {
  selectedMonths: { month: NumDaysInMonth; year: number }[] | undefined;
}) => {
  const getCalendar = (month: NumDaysInMonth, year: number) => {
    const date = new Date();
    date.setDate(1);
    date.setMonth(month);
    date.setFullYear(year);

    const array = Array(date.getDay()).fill(false);
    let start = 1;
    let end: typeof NumDaysInMonth[keyof typeof NumDaysInMonth] | 29 =
      Object.values(NumDaysInMonth)[date.getMonth()];
    if (month === 1 && year % 4 === 0) end = 29;
    while (start <= end) {
      array.push(start);
      start++;
    }
    return array;
  };

  return (
    <div className='grid grid-cols-2 gap-12 font-bold'>
      {selectedMonths?.map(({ month, year }) => (
        <div key={month + year}>
          <p className='text-center text-base mb-3'>
            {Months[month]} {year}
          </p>
          <div className='grid grid-cols-7 text-center'>
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <p
                key={day}
                style={{ fontSize: 12 }}
                className='font-medium mb-2'
              >
                {day}
              </p>
            ))}
            {getCalendar(month, year).map((date, i) => (
              <p
                key={i}
                className={`flex items-center justify-center rounded-full border-2 border-transparent h-12 w-12 ${
                  date ? 'hover:border-black cursor-pointer' : ''
                }`}
              >
                {date}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Calendar;
