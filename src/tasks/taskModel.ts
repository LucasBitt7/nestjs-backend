export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
// eu posso fazer  aqui o modelo da req dos contratos mandando o post com title
// opts.name do contrato e o code for deploy

export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
