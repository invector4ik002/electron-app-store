import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

/**
 * extends DetailedHTMLProps
 * <ButtonHTMLAttributes
 * <HTMLButtonElement>,
 * HTMLButtonElement>
 * 
 */
export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: React.ReactNode;
  appearance: 'primary' | 'ghost';
  arrow?: 'down' | 'right' | 'none';
}