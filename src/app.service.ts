import { Injectable } from '@nestjs/common';
import { Person } from './model/person-dto';

@Injectable()
export class AppService {

  filter(param: Object): Object {
    return param;
  }

  findOne(id: string): string {
    return `findOne ${id}`;
  }

  create(body: Person): Person {
    return body
  }
}

