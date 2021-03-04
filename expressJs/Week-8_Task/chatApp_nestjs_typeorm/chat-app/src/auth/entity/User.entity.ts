import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn("uuid")
    id:string;

    @Column({type:"varchar",length:20})
    name:string;

    @Column({unique:true})
    email:string;

    @Column()
    phone:number;

    @Column()
    password:string;
}