import { Controller, Get, Post, Put, Delete, Patch, Head, Options } from '@nestjs/common';
import { User as UserModel } from '@prisma/client'
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor (private readonly userService: UserService){}

    //: Promise<UserModel[]>

    @Get()
    async getUsers(){
        return "Executando via get, recuperando todos os usuários";
    }
    @Get(':id')
    async getUserById(){
        return "Executando via get, recuperando todos os usuários";
    }

    @Post()
     async createUser(){
        return 'Executando via Post,';

     }

     @Put(':id')
     async updateUser(){
        return 'executando operação via put';
     }

     @Delete()
     async DeleteUser(){
        return'Deletando informação';
     }

     @Delete(":id")
     async getUser(){
        return 'executando via get id';
     }

     @Patch()
     async patUser(){
        return "executando via PATCH";
     }

     @Head()
      async headUser(){
        return "executando via head";
      }

      @Options()
      async optUser(){
        return "executando via options"
      }


}
