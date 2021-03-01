import { Entity,PrimaryGeneratedColumn,Column,ManyToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class Tweet{

    @PrimaryGeneratedColumn("uuid")
    id:string;

    @Column({type:"varchar",length:70})
    title:string;

    @Column({type:"varchar",length:300})
    content:string;
    
    @ManyToOne(type => User,user => user.tweets)
    user:User

}