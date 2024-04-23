import { cn } from "@/utils";

const colors = [
  { id: 1, color: "red" },
  { id: 2, color: "black" },
  { id: 3, color: "blue" },
];

const Color = () => {
  const selected = true;

  return (
    <div className="mb-8">
      <p className="text-main-black font-medium capitalize">Color</p>
      <div className="flex items-center gap-2 mt-2 relative">
        {colors.map((color) => (
          <span
            key={color.id}
            style={{ backgroundColor: color.color }}
            className={cn(
              "w-4 h-4 rounded-full block",
              selected ? "color-selected" : ""
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default Color;
