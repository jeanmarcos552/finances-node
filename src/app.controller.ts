import { Body, Controller, Delete, Get, HttpCode, Ip, Param, Post, Put, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Person } from './model/person-dto';

@Controller('/person')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post()
  @HttpCode(200)
  create(@Body() body: Person) {
    return this.appService.create(body);
  }

  @Get()
  findAll(@Query() request: Object): Object {
    return this.appService.filter(request);
  }

  @Get('/:id')
  findOne(@Param('id') id: string): string {
    return this.appService.findOne(id);
  }

  @Put('/:id')
  update(@Param('id') id: string, @Body() body: Person): string {
    return `usuario ${id} - ${body.nome}`
  }

  @Delete('/:id')
  delete(@Param('id') id: string): string {
    return `usuario ${id} foi deletado!`
  }

}

