import {Injectable} from '@nestjs/common'
import {Cat} from './interfaces/cat.interface'


@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [];

    createCat(cat: Cat){
        this.cats.push(cat);
    }

    getCats(): Cat[]{
        return this.cats;
    }
}