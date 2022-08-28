export interface Command {
  id: string;
  command: string;
  description: string;
  callback: (note?: string) => void;
}
