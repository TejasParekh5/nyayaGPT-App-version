
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card = ({ children, className, onClick }: CardProps) => {
  return (
    <div 
      onClick={onClick}
      className={cn(
        "bg-white rounded-xl shadow-md p-4 transition-transform duration-200",
        onClick && "cursor-pointer hover:shadow-lg hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;

