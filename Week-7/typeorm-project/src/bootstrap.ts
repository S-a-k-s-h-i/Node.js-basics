import { getRepository } from "typeorm";
import { Tweet } from "./entity/Tweet";
import { User, UserRole } from "./entity/User";

export const bootstrap=async() => {
    const userRepo=getRepository(User);
    const user=userRepo.create({firstName:"Alex",lastName:'Brown',age:20,roles:[UserRole.EDITOR]});
    await userRepo.save(user).catch((err) => {
        console.log('Error: ',err);
    });
    console.log('New user: ',user);

    const tweetRepo=getRepository(Tweet);
    const tweet=tweetRepo.create({title:'stating with typeOrm',content:'seems difficult. But i will succeed.'})
    tweet.user=user;
    await tweetRepo.save(tweet).catch((err) => {
        console.log('Error: ',err);
    });

}