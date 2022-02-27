import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLParagraphElement> {
  color?: 'white' | 'blue';
  children: React.ReactNode;
}