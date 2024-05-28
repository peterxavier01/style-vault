import { forwardRef } from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  defaultOption: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, defaultOption, children, value, ...props }, ref) => {
    return (
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text text-slate-700">{label}</span>
        </div>
        <select
          className="select select-bordered bg-white"
          value={value}
          ref={ref}
          {...props}
        >
          <option value="">{defaultOption}</option>
          {children}
        </select>
      </label>
    );
  }
);

Select.displayName = "Select";

export default Select;
