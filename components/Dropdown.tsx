import { ProductCategory } from "@/types";

type DropdownProps = {
  title: string;
  content: ProductCategory[];
  checked?: boolean;
  onClick: (slug: string) => void;
};

const Dropdown = ({ title, content, checked, onClick }: DropdownProps) => {
  return (
    <div className="collapse collapse-arrow bg-primary h-fit">
      <input type="checkbox" defaultChecked={checked} />
      <div className="collapse-title text-sm sm:text-lg text-white capitalize font-medium">
        {title}
      </div>
      <div className="collapse-content bg-primary/50 flex flex-col items-start gap-4">
        {content.map((item, index) => (
          <p
            key={index}
            onClick={() => onClick(item.url)}
            className="text-gray-300 cursor-pointer text-xs sm:text-base capitalize border-b border-b-transparent hover:border-b hover:border-gray-300 transition"
          >
            {item.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
