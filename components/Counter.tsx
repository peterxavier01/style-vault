import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface CounterProps {
  quantity: number;
}

const Counter: React.FC<CounterProps> = ({ quantity }) => {
  return (
    <div className="flex items-center border-2 border-slate-400 text-slate-500 gap-4 px-2 py-1">
      <span className="text-red-500">
        <AiOutlineMinus />
      </span>
      <span className="font-semibold text-slate-800">{quantity}</span>
      <span className="text-green-500">
        <AiOutlinePlus />
      </span>
    </div>
  );
};

export default Counter;
