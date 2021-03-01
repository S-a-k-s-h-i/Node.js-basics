import { AbstractRepository, EntityRepository, Repository } from "typeorm";
import { User, UserRole } from "../entity/User";

@EntityRepository(User)
export class UserRepository extends AbstractRepository<User>{

    createAndSave(firstname:string,lastName:string,age:number,userRole:UserRole[]){
        const user=new User();
        user.firstName=firstname;
        user.lastName=lastName;
        user.age=age;
        user.roles=userRole;
        
        return this.manager.save(user);
    }

    findByName(firstName:string,lastName:string){
        return this.repository.findOne({firstName,lastName});
    }

    deleteBylastName(lastname:string){
        return this.repository.delete({lastName:lastname});
    }
    
}