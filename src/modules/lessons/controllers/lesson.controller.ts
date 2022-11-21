import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { LessonPayload } from '../models/lesson.payload';
import { LessonProxy } from '../models/lesson.proxy';
import { LessonService } from '../services/lesson.service';

@Controller('lesson')
@ApiTags('lesson')
export class LessonController {

  constructor(
    private service: LessonService
  ) {}

  @Get()
  @ApiOkResponse({ type: LessonProxy, isArray: true })
  @ApiOperation({ summary: 'Retorna os dados de todas as aulas.' })
  public async getMany(): Promise<LessonProxy[]> {
    return await this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retorna os dados de uma aula pela identificação.' })
  @ApiOkResponse({ type: LessonProxy })
  public async getOne(@Param('id') id: number): Promise<LessonProxy> {
    return await this.service.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Cria uma aula.' })
  @ApiOkResponse({ type: LessonProxy })
  public async post(@Body() payload: LessonPayload): Promise<LessonProxy> {
    return await this.service.create(payload);
  };

  @Put(':id')
  @ApiOperation({ summary: 'Atualiza uma aula pela identificação.' })
  @ApiOkResponse({ type: LessonProxy })
  public async put(@Param('id') id: number, @Body() payload: LessonPayload): Promise<LessonProxy> {
    return await this.service.update(payload, id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deleta uma aula pela identificação.' })
  public async deleteOne(@Param('id') id: number) {
    await this.service.remove(id);
  }
}
