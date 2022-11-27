import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiQuery, ApiTags } from "@nestjs/swagger";
import { UserCoursePayload } from '../models/user-course.payload';
import { UserCourseProxy } from '../models/user-course.proxy';
import { UserCourseService } from '../services/user-course.service';

@Controller('user-course')
@ApiTags('user-course')
export class UserCourseController {

  constructor(
    private service: UserCourseService
  ) {}

  @Get()
  @ApiOkResponse({ type: UserCourseProxy, isArray: true })
  @ApiOperation({ summary: 'Retorna os dados de todas as matrículas de um usuário.' })
  @ApiQuery({ name: 'userId', type: Number, required: true })
  public async getMany(@Query('userId') userId: number): Promise<UserCourseProxy[]> {
    return await this.service.findAll(+userId)
      .then(entities => entities.map(entity => new UserCourseProxy(entity)));
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retorna os dados de uma matrícula pela identificação.' })
  @ApiOkResponse({ type: UserCourseProxy })
  public async getOne(@Param('id') id: number): Promise<UserCourseProxy> {
    return await this.service.findOne(id).then(entity => new UserCourseProxy(entity));
  }

  @Post()
  @ApiOperation({ summary: 'Cria uma matrícula.' })
  @ApiOkResponse({ type: UserCourseProxy })
  public async post(@Body() payload: UserCoursePayload): Promise<UserCourseProxy> {
    return await this.service.create(payload).then(entity => new UserCourseProxy(entity));
  };

  @Delete(':id')
  @ApiOperation({ summary: 'Deleta uma matrícula pela identificação.' })
  public async deleteOne(@Param('id') id: number) {
    await this.service.remove(+id);
  }
}
