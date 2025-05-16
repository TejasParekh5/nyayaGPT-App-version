
import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

const PrimaryButton = forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  ({ children, className, variant = 'primary', fullWidth = false, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-md",
          variant === 'primary' 
            ? "bg-nyaysetu-orange text-white hover:bg-opacity-90" 
            : "bg-white text-nyaysetu-blue border border-nyaysetu-blue hover:bg-nyaysetu-blue hover:text-white",
          fullWidth ? "w-full" : "",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

PrimaryButton.displayName = "PrimaryButton";

export default PrimaryButton;
