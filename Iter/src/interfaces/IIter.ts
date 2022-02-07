import { ITimeline } from "../interfaces/ITimeline";
export interface IIter {
  id: string;
  title: string;
  intent: string;
  difficulty: number; 
  timeline: ITimeline; 
  tags: [];
  image: string;
}