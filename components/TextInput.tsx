import { cn } from "@/utils";
import { forwardRef } from "react";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      className,
      children,
      disabled,
      placeholder,
      label,
      type = "button",
      ...props
    },
    ref
  ) => {
    return (
      <label className="w-full">
        <div className="label">
          <span className="label-text text-slate-700 dark:text-gray-400">
            {label}
          </span>
        </div>
        <input
          type={type}
          placeholder={placeholder}
          className={cn(
            "input border-slate-300 bg-white dark:bg-dark-secondary dark:text-gray-300 w-full dark:border-none",
            className
          )}
          ref={ref}
          {...props}
          disabled={disabled}
        />
      </label>
    );
  }
);

TextInput.displayName = "TextInput";

export default TextInput;
