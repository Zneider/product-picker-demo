export type SelectionProps = {
  value: string;
  id: string;
  children: React.ReactNode;
  label: string;
};

export type ChoicesProps = {
  action: (value: string) => void;
  decision: Decision;
};

export type Option = {
  value: string;
  label: string;
  vignet: React.ReactNode;
  id: string;
};

export type Decision = {
  name: string;
  action: "NEXT_STEP" | "SUBMIT";
  text: string;
  options: Option[];
};

export type DecisionTree = Decision[];
