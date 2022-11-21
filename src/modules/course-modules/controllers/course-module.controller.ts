import {Body, Controller, Delete, Get, NotFoundException, Param, Post, Put} from '@nestjs/common';
import {ApiOkResponse, ApiOperation, ApiProperty, ApiTags} from "@nestjs/swagger";
import { CourseModulePayload } from '../models/course-module.payload';
import { CourseModuleProxy } from '../models/course-module.proxy';
import { CourseModuleService } from '../services/course-module.service';

@Controller('course-module')
@ApiTags('course module')
export class CourseModuleController {

    constructor(
        private service: CourseModuleService,
    ){}
    
    @Get('/list')
    @ApiOkResponse({ type: CourseModuleProxy, isArray: true})
    @ApiOperation({ summary: 'Retorna os dados de todos os modulos de curso.'})
    public async getMany(): Promise<CourseModuleProxy[]> {
        return await this.service.findAll();
    }
    
    @Get(':id')
    @ApiOperation({ summary: 'Retorna os dados de um modulo pela identificação.'})
    @ApiOkResponse({type: CourseModuleProxy})
    public async getOne(@Param('id') id: number): Promise<CourseModuleProxy> {
        return await this.service.findOne(id);
    }
    
    @Post()
    @ApiOperation({ summary: 'Cria um modulo.'})
    @ApiOkResponse({type: CourseModuleProxy})
    public async post(@Body() payload: CourseModulePayload ) : Promise<CourseModuleProxy> { 
        return await this.service.create(payload);
        };
    
    @Put(':id')
    @ApiOperation({ summary: 'Atualiza um modulo pela identificação.'})
    @ApiOkResponse({type: CourseModuleProxy})
    public async put(@Param('id') id: number, @Body() payload: CourseModulePayload) : Promise<CourseModuleProxy>
    {
        return await this.service.update(payload, id);
    }
    
    @Delete(':id')
    @ApiOperation({ summary: 'Deleta um modulo pela identificação.'})
    public async deleteOne(@Param('id') id: number)
    {
        await this.service.remove(id);
    }
}