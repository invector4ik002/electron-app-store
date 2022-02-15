import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface PProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: 's' | 'm';
  color?: 'ghost' | 'red' | 'green' | 'grey' | 'primary';
  children: React.ReactNode;
}