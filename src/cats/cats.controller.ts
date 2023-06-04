import {Controller, Get, Post,Req} from '@nestjs/common'
import {Request} from 'express'

@Controller('cats')
export class CatController {


    @Post()
    createCat(@Req() req: Request): string{
        console.log(req.url);
        return 'Here is your cat'
    }
    @Get()
    getCats(): string{
        return 'Here are your all the cats';
    }


}