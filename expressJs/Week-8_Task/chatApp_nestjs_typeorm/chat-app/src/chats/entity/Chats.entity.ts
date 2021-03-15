import { User } from "src/auth/entity/User.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Chats{
    @PrimaryGeneratedColumn("uuid")
    id:string;

    @ManyToOne(type => User,user => user.chats)
    sender: User;

    @ManyToOne(type => User,user => user.chats)
    recipient: User;

    @Column({type:"text",nullable:true})
    senderMsg:string;

    @Column({type:"text",nullable:true})
    receiverMsg:string;

    @CreateDateColumn()
    date:number;

    @Column({type:"varchar",length:36})
    senderId:string;
    @Column({type:"varchar",length:36})
    recipientId:string;



    
    

    

}