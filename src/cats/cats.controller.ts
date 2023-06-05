import {Controller, Get, Post,Body, Req} from '@nestjs/common'
import {Request} from 'express'
import {CreateCatDto} from './dto/create-cat.dto'
import { Cat } from './interfaces/cat.interface';
import { CatsService } from './cats.service';


@Controller('cats')
export class CatController {

    constructor(private catsService: CatsService){}

    @Post()
    async createCat(@Body() createCatDto: CreateCatDto){
        this.catsService.createCat(createCatDto);
    }
    @Get()
    async getCats(): Promise<Cat[]>{
        return this.catsService.getCats()
    }


}