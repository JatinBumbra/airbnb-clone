import { NumDaysInMonth } from '../@types/types';

const Calendar = ({
  month,
  className,
}: {
  className?: string;
  month: { month: NumDaysInMonth; year: number }[] | undefined;
}) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

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
    <div
      className={`absolute top-20 text-sm bg-white p-8 px-12 shadow-2xl border rounded-3xl w-max ${className}`}
    >
      <div className='flex justify-center mb-8'>
        <div className='bg-neutral-200 flex items-center p-1 font-bold rounded-full'>
          {['Choose Dates', `I'm Flexible`].map((item) => (
            <div
              key={item}
              className={`p-2 px-8 ${
                item === 'Choose Dates' ? 'bg-white shadow-md' : 'hover:shadow'
              } cursor-pointer transition-all rounded-full hover:bg-white`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className='grid grid-cols-2 gap-12 font-bold'>
        {month?.map(({ month, year }) => (
          <div key={month + year}>
            <p className='text-center text-base mb-3'>
              {months[month]} {year}
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
    </div>
  );
};

export default Calendar;
