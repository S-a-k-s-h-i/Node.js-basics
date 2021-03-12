import { Chats } from "src/chats/entity/Chats.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn("uuid")
    id:string;

    @Column()
    name:string;

    @Column({unique:true})
    email:string;

    @Column()
    phone:number;

    @Column()
    password:string;

    @OneToMany(type => Chats, chats => chats.sender)
    chats:Chats[]
}