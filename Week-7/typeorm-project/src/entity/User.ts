import {Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,OneToMany} from "typeorm";
import { Tweet } from "./Tweet";


export enum UserRole{
    ADMIN="admin",
    EDITOR="editor",
    GHOST="ghost"
}

@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({type:"varchar",length:30,nullable:false})
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @CreateDateColumn()
    date:number;

    @Column({
        type:"set",
        enum:UserRole,
        default:[UserRole.GHOST,UserRole.EDITOR]
    })
    roles:UserRole[];

    @OneToMany((type) => Tweet,Tweets => Tweets.user)
     tweets:Tweet[]
    static tweets: any;
}

