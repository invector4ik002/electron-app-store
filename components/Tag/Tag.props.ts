import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: 's' | 'm';
  color?: 'ghost' | 'red' | 'green' | 'grey' | 'primary';
  href?: string;
  children: React.ReactNode;
}