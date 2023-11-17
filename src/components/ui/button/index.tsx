import { ReactNode } from "react";

export type KindButton = "primary" | "danger" | "secondary" | "void";

type KindButtonMap = {
  [k in KindButton]: string;
};

export const Button: React.FC<{
  kind: KindButton;
  children: ReactNode;
  className: string;
}> = ({ children, className, kind, ...props }) => {
  const getKindClass = (kind: KindButton): string => {
    const kinds: KindButtonMap = {
      primary: "bg-primary active:bg-primary/50",
      danger: "bg-tomate active:bg-tomate/50",
      secondary: "bg-secondary active:bg-secondary/50",
      void: "bg-tertiary active:bg-tertiary/50",
    };
    return kinds[kind];
  };

  const getClassNames = (kind: KindButton): string => {
    return `${getKindClass(
      kind
    )} flex flex-row gap-2 items-center text-white py-3 px-5 rounded-md shadow-md active:shadow-sm duration-75 uppercase ${className}`;
  };

  return (
    <button {...props} className={getClassNames(kind)}>
      {children}
    </button>
  );
};
