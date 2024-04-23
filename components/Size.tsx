import { cn } from "@/utils";

const sizes = [
  { id: 1, name: "s" },
  { id: 2, name: "m" },
  { id: 3, name: "l" },
  { id: 4, name: "xl" },
  { id: 5, name: "xxl" },
];

const Size = () => {
  const selected = false;

  return (
    <div className="mb-8">
      <p className="text-main-black font-medium capitalize">size</p>
      <div className="flex items-center gap-2 mt-2 relative">
        {sizes.map((size) => (
          <span
            key={size.id}
            className={cn(
              "uppercase w-full max-w-[45px] h-10 rounded-xl text-sm flex items-center justify-center text-main-black hover:text-white hover:bg-primary transition border border-main-black",
              selected ? "bg-primary text-white" : ""
            )}
          >
            {size.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Size;
