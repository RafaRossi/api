import {Body, Controller, Delete, Get, NotFoundException, Param, Post, Put} from '@nestjs/common';
import {ApiOkResponse, ApiOperation, ApiProperty, ApiTags} from "@nestjs/swagger";
import { CoursePayload } from '../models/course.payload';
import { CourseProxy } from '../models/course.proxy';
import { CourseService } from '../services/course.service';

@Controller('course')
@ApiTags('course')
export class CourseController {

    constructor(
        private service: CourseService,
    ) { }

    @Get()
    @ApiOkResponse({ type: CourseProxy, isArray: true})
    @ApiOperation({ summary: 'Retorna os dados de todos cursos.'})
    public async getMany(): Promise<CourseProxy[]> {
        return await this.service.findAll().then(entities => entities.map(entity => new CourseProxy(entity)));
    }

    @Get(':id')
    @ApiOperation({ summary: 'Retorna os dados de um curso pela identificação.'})
    @ApiOkResponse({type: CourseProxy})
    public async getOne(@Param('id') id: number): Promise<CourseProxy> {
        return await this.service.findOne(+id).then(entity => new CourseProxy(entity));
    }

    @Post()
    @ApiOperation({ summary: 'Cria um curso.'})
    @ApiOkResponse({type: CourseProxy})
    public async post(@Body() payload: CoursePayload): Promise<CourseProxy> {
        return await this.service.create(payload).then(entity => new CourseProxy(entity));
        };

    @Put(':id')
    @ApiOperation({ summary: 'Atualiza um curso pela identificação.'})
    @ApiOkResponse({type: CourseProxy})
    public async put(@Param('id') id: number, @Body() payload: CoursePayload) : Promise<CourseProxy> {
        return await this.service.update(payload, +id).then(entity => new CourseProxy(entity));
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Deleta um curso pela identificação.'})
    public async deleteOne(@Param('id') id: number) {
        await this.service.remove(+id);
    }
}
