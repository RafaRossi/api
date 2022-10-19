import {Body, Controller, Delete, Get, NotFoundException, Param, Post, Put} from '@nestjs/common';
import {ApiOkResponse, ApiOperation, ApiProperty} from "@nestjs/swagger";
import { truncate } from 'fs';
import { CoursePayload } from '../models/course.payload';
import { CourseProxy } from '../models/course.proxy';

@Controller('course')
export class CourseController {

    constructor(
        // private service: CourseService,
    ){}
    
    @Get('/list')
    @ApiOkResponse({ type: CourseProxy, isArray: true})
    @ApiOperation({ summary: 'Retorna os dados de todos usuários.'})
    public getUsers(): CourseProxy[] | void {
        // return this.service.list;
    }
    
    @Get(':userID')
    @ApiOperation({ summary: 'Retorna os dados de um usuário pela identificação.'})
    @ApiOkResponse({type: CourseProxy})
    public getUser(@Param('userID') userID: string): CourseProxy | void {
        // return this.service.getOne();
    }
    
    @Post()
    @ApiOperation({ summary: 'Cria um usuário.'})
    @ApiOkResponse({type: CourseProxy})
    public async postUser(@Body() course: CoursePayload) : Promise<CourseProxy |  void> { 
        };
    
    @Put(':userID')
    @ApiOperation({ summary: 'Atualiza um usuário pela identificação.'})
    @ApiOkResponse({type: CourseProxy})
    public putUser(@Param('userID') userID: string, @Body() user: CoursePayload) : CourseProxy | void
    {
    }
    
    @Delete(':userID')
    @ApiOperation({ summary: 'Deleta um usuário pela identificação.'})
    public deleteUser(@Param('userID') userID: string)
    {
    }
}
