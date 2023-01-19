import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/submodule/dtos/src/dto/user.dto';
import { User } from 'src/submodule/user-entities/src/entities/user.entity';
import { Repository } from 'typeorm';
@Injectable()
export class UserService {
  
  constructor(
    @InjectRepository(User) 
    private userRepository: Repository<User>
  ){}
 
  async createUser(user: UserDto){
     
    try{
      let userEntity = this.userRepository.create(user)
      let createdUser = await this.userRepository.save(userEntity);
      return createdUser;
    }
    catch(err){
      throw err
    }


  }

  async findAll(){
    try{
      let retrievedUsers = await this.userRepository.find();
      return retrievedUsers;
    }
    catch(err){
      throw err
    }
  }

  async updateUser(user: UserDto){
    try{
      let updateResult = await this.userRepository.update(user.id,user);
      return updateResult;
    }
    catch(err){
      throw err
    }
  }

  async deleteUser(userId: number){
    try{
      let deletedUser = await this.userRepository.delete(userId);
      return deletedUser;
    }
    catch(err){
      throw err
    }
  }
}
