import { getCustomRepository, getManager, getRepository} from "typeorm";
import { Tweet } from "./entity/Tweet";
import { Category } from "./entity/Category";
import { Question } from "./entity/Question";
import { User, UserRole } from "./entity/User";
import { UserRepository } from "./CustomRepository/UserRepository";

export const bootstrap=async() => {
    // const userRepo=await getRepository(User);
    // const user=userRepo.create({firstName:"Alex",lastName:'Brown',age:20,roles:[UserRole.EDITOR]});
    // await userRepo.save(user).catch((err) => {
    //     console.log('Error: ',err);
    // });
    // console.log('New user: ',user);

    // const tweetRepo=getRepository(Tweet);
    // const tweet=tweetRepo.create({title:'stating with typeOrm',content:'seems difficult. But i will succeed.'})
    // tweet.user=user;
    // await tweetRepo.save(tweet).catch((err) => {
    //     console.log('Error: ',err);
    // });

    // const categoryRepo=getRepository(Category)
    // const category1=categoryRepo.create({name:"Animal"});
    // await categoryRepo.save(category1).catch((err) => {
    //     console.log('Error: ',err);
    // })
    // const category2=categoryRepo.create({name:"Pet"});
    // await categoryRepo.save(category2).catch((err) => {
    //     console.log('Error: ',err);
    // })

    // const questionRepo=getRepository(Question);
    // const question1=questionRepo.create({title:"dogs",text:"Who let the dogs out??"});
    // question1.categories=[category1,category2];
    // await questionRepo.save(question1).catch((err) => {
    //     console.log('Error: ',err);
    // })
    // console.log('Question1 ',question1);

    const user=await getRepository(User)
    .createQueryBuilder("user")
    // .where("user.id= :id",{id:"26c7a3cb-d55b-4936-bd59-fb641790a4021"})
    // .where("user.firstName=:firstName",{firstName:"Alex"})
    // .orWhere("user.lastName=:lastName",{lastName:"Bansal"})
    // .getOneOrFail();
    // .getMany();
    // .orderBy("user.firstName")
    // .execute();
    
    // .insert()
    // .values([
    //     {firstName:"Tina",lastName:"Bansal",age:19},
    //     {firstName:"Bina",lastName:"Pansal",age:19}
    // ])

    // .update()
    // .set({firstName:'Jerry'})
    // .where("user.id=:id",{id:"26c7a3cb-d55b-4936-bd59-fb641790a402"})
    // .execute();

    // .delete()
    // .where("user.id=:id",{id:"f632b808-60e6-4715-90d5-8aace4d7e29f"})
    // .execute();

    // .leftJoinAndSelect("user.tweets","tweets")
    // .where("user.firstName=:firstName",{firstName:"Alex"})
    // // .getOne();
    // .getSql();
    // console.log("USER  ",user);
}

export const find = async() => {
    // const userRepo=getRepository(User);
    // const user=await userRepo.findOne({where:{firstName:"Alex"}}).catch((err) => {
    //     console.log('Error: ',err);
    // });
    // const UserRepo=getCustomRepository(UserRepository)
    // await UserRepo.createAndSave("Jim","Brack",24,[UserRole.GHOST]);
    // const findUser = await UserRepo.findByName("Jim","Brack");
    // console.log('User ',findUser);

    // const deleteUser=await UserRepo.deleteBylastName("Saw");
    // console.log("Deleted User ",deleteUser);
}
