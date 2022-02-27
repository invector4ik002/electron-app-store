import { hhData } from "../../interfaces/page.interfaces";

export interface hhDataProps extends hhData {
  color?: 'white' | 'blue';
  children: React.ReactNode;
}