import {Body, Controller, Delete, Get, NotFoundException, Param, Post, Put} from '@nestjs/common';
import {ApiOkResponse, ApiOperation, ApiProperty, ApiTags} from "@nestjs/swagger";
import { truncate } from 'fs';
import { CoursePayload } from '../models/course.payload';
import { CourseProxy } from '../models/course.proxy';

@Controller('course')
@ApiTags('course')
export class CourseController {

    constructor(
        // private service: CourseService,
    ){}
    
    @Get('/list')
    @ApiOkResponse({ type: CourseProxy, isArray: true})
    @ApiOperation({ summary: 'Retorna os dados de todos cursos.'})
    public getMany(): CourseProxy[] | void {
        // return this.service.list;
    }
    
    @Get(':courseId')
    @ApiOperation({ summary: 'Retorna os dados de um curso pela identificação.'})
    @ApiOkResponse({type: CourseProxy})
    public getOne(@Param('courseId') courseId: string): CourseProxy | void {
        // return this.service.getOne();
    }
    
    @Post()
    @ApiOperation({ summary: 'Cria um curso.'})
    @ApiOkResponse({type: CourseProxy})
    public async post(@Body() course: CoursePayload) : Promise<CourseProxy |  void> { 
        };
    
    @Put(':courseId')
    @ApiOperation({ summary: 'Atualiza um curso pela identificação.'})
    @ApiOkResponse({type: CourseProxy})
    public put(@Param('courseId') courseId: string, @Body() user: CoursePayload) : CourseProxy | void
    {
    }
    
    @Delete(':courseId')
    @ApiOperation({ summary: 'Deleta um curso pela identificação.'})
    public deleteOne(@Param('courseId') courseId: string)
    {
    }
}
