import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiQuery, ApiTags } from "@nestjs/swagger";
import { CourseModulePayload } from '../models/course-module.payload';
import { CourseModuleProxy } from '../models/course-module.proxy';
import { CourseModuleService } from '../services/course-module.service';

@Controller('course-module')
@ApiTags('course-module')
export class CourseModuleController {

  constructor(
    private service: CourseModuleService,
  ) { }

  @Get('/list')
  @ApiOkResponse({ type: CourseModuleProxy, isArray: true})
  @ApiOperation({ summary: 'Retorna os dados de todos os modulos de curso.'})
  @ApiQuery({ name: 'courseId', type: Number })
  public async getMany(@Query('courseId') courseId: number): Promise<CourseModuleProxy[]> {
    return await this.service.findAll(courseId).then(entities => entities.map(entity => new CourseModuleProxy(entity)));
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retorna os dados de um modulo pela identificação.'})
  @ApiOkResponse({type: CourseModuleProxy})
  public async getOne(@Param('id') id: number): Promise<CourseModuleProxy> {
    return await this.service.findOne(+id).then(entity => new CourseModuleProxy(entity));
  }

  @Post()
  @ApiOperation({ summary: 'Cria um modulo.'})
  @ApiOkResponse({type: CourseModuleProxy})
  public async post(@Body() payload: CourseModulePayload): Promise<CourseModuleProxy> {
    return await this.service.create(payload).then(entity => new CourseModuleProxy(entity));
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualiza um modulo pela identificação.'})
  @ApiOkResponse({type: CourseModuleProxy})
  public async put(@Param('id') id: number, @Body() payload: CourseModulePayload): Promise<CourseModuleProxy> {
    return await this.service.update(payload, +id).then(entity => new CourseModuleProxy(entity));
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deleta um modulo pela identificação.'})
  public async deleteOne(@Param('id') id: number) {
    await this.service.remove(+id);
  }
}
