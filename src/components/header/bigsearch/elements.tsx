import { ReactEventHandler, ReactNode } from 'react';

export const BigSearchItemWrapper = ({
  children,
  id = '',
  className = '',
  onClick,
  active,
}: {
  children: ReactNode;
  id?: string;
  active?: boolean;
  className?: string;
  onClick?: ReactEventHandler;
}) => (
  <div
    className={`relative p-2 px-8 rounded-full border border-transparent transition-all cursor-pointer ${
      active ? 'bg-white shadow-2xl border-neutral-200' : 'hover:bg-neutral-300'
    } ${className}`}
  >
    <div
      id={id}
      className='absolute w-full h-full top-0 left-0'
      onClick={onClick}
    ></div>
    {children}
  </div>
);

export const BigSearchItemLabel = ({ children }: { children: ReactNode }) => (
  <p className='text-sm font-bold'>{children}</p>
);

export const BigSearchItemText = ({ children }: { children: ReactNode }) => (
  <p className='text-neutral-400'>{children}</p>
);
