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
    return await this.service.findAll().then(entities => entities.map(entity => new LessonProxy(entity)));
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retorna os dados de uma aula pela identificação.' })
  @ApiOkResponse({ type: LessonProxy })
  public async getOne(@Param('id') id: number): Promise<LessonProxy> {
    return await this.service.findOne(id).then(entity => new LessonProxy(entity));
  }

  @Post()
  @ApiOperation({ summary: 'Cria uma aula.' })
  @ApiOkResponse({ type: LessonProxy })
  public async post(@Body() payload: LessonPayload): Promise<LessonProxy> {
    return await this.service.create(payload).then(entity => new LessonProxy(entity));
  };

  @Put(':id')
  @ApiOperation({ summary: 'Atualiza uma aula pela identificação.' })
  @ApiOkResponse({ type: LessonProxy })
  public async put(@Param('id') id: number, @Body() payload: LessonPayload): Promise<LessonProxy> {
    return await this.service.update(payload, +id).then(entity => new LessonProxy(entity));
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deleta uma aula pela identificação.' })
  public async deleteOne(@Param('id') id: number) {
    await this.service.remove(+id);
  }
}
