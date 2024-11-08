export interface AccordionChild {
  id: number;
  name: string;
  time: string;
}

export interface AccordionType {
  title: string | React.ReactNode;
  id: number;
  headLines: AccordionChild[];
}
