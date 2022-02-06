import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './taskModel';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
///aqui gera as funcoes motherfocka
@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;
    const task: Task = {
      id: uuid(),
      title: title,
      description: description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }

  getTaskId(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }
  removeTask(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
  updateTaskStatus(id: string, status: TaskStatus): Task {
    const task = this.getTaskId(id);
    task.status = status;
    return task;
  }
}
