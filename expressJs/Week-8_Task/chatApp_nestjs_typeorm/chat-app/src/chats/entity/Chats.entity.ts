import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Chats{
    @PrimaryGeneratedColumn("uuid")
    id:string;

    @Column({type:"varchar",length:80})
    sender:string;

    @Column({type:"varchar",length:80})
    recipient:string;

    @Column({type:"text",nullable:true})
    senderMsg:string;

    @Column({type:"text",nullable:true})
    receiverMsg:string;

    @CreateDateColumn()
    date:number;
}