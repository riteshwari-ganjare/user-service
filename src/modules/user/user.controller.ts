import { Controller, Post, Body, Get, Put, Delete, Param} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from 'src/submodule/dtos/src/dto/user.dto';
@Controller('user')
export class UserController {
 
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body()user:UserDto){
    try{
      let createdUser = await this.userService.createUser(user);
      return createdUser;
    }
    catch(err){
      console.log(err);
      return err;
    } 
  }

  @Get()
  async findUser(){
    try{
      let fetchedUser = await this.userService.findAll();
      return fetchedUser;
    }
    catch(err){
      console.log(err);
      return err;
    }
  }

  @Put()
  async updateUser(@Body()user: UserDto){
     try{
      let updateResult = await this.userService.updateUser(user);
      return updateResult;
     }
     catch(err){
      console.log(err);
      return err;
     }

  }

  @Delete(':id')
  async deleteUser(@Param('id')userId: number){
    try{
      let deletedUser = await this.userService.deleteUser(userId);
      return deletedUser;
    }
    catch(err){
      console.log(err);
      return err;
    }
  }

}