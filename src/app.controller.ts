import { Body, Controller, Delete, Get, HttpCode, Ip, Param, Post, Put, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Person } from './model/person-dto';
import { PrismaService } from './prisma/prisma.service';

@Controller('/api')
export class AppController {
  constructor(
    private prisma: PrismaService,
  ) { }



  @Get('/hello')
  findAll() {
    return this.prisma.category.findFirst();
  }



}

