import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './taskModel';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.taskService.getAllTasks();
  }
  /////param pra qnd for procurar pela url exemplo e o body pra qnd for post e injetar bagulho
  @Get('/:id')
  getTaskId(@Param('id') id: string): Task {
    return this.taskService.getTaskId(id);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string): string {
    this.taskService.removeTask(id);
    return 'Deleted task with id: ' + id;
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.taskService.createTask(createTaskDto);
  }

  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id') id: string,
    @Body('status') status: TaskStatus,
  ): Task {
    return this.taskService.updateTaskStatus(id, status);
  }
}
