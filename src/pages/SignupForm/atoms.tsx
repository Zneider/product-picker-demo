import * as RadioGroup from "@radix-ui/react-radio-group";
import { ChoicesProps, SelectionProps } from "./types";

export const ItemHeader = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-[26px] font-extralight max-w-[400px] text-center min-h-24">
    {children}
  </h2>
);

export const Choices = ({ action, decision }: ChoicesProps) => (
  <RadioGroup.Root
    className="flex h-[404px] gap-x-[16px]"
    onValueChange={(val) => {
      action(val);
    }}
    name={decision.name}
  >
    {decision.options.map((option) => {
      return (
        <Selection
          value={option.value}
          id={option.id}
          label={option.label}
          key={option.id}
        >
          <div className="flex flex-col w-full h-full items-center">
            {option.vignet}
          </div>
        </Selection>
      );
    })}
  </RadioGroup.Root>
);

export const Selection = ({ value, id, children, label }: SelectionProps) => {
  return (
    <RadioGroup.Item
      value={value}
      id={id}
      className="bg-white w-[324px] h-full p-[24px] flex flex-col items-center border-white aria-checked:border-[#003732] border-2 border-solid"
    >
      {children}
      <span className="font-light">{label}</span>
    </RadioGroup.Item>
  );
};
