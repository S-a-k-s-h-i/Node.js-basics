import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Admin{

    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column({type:"varchar",length:30})
    name:string

    @Column({type:"varchar",length:10})
    password:string
}