import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Address } from "./address.entity";

@Entity()
export class Student{
    @PrimaryGeneratedColumn('uuid')
    sid:string

    @Column({type:"varchar",length:30})
    firstname:string

    @Column({type:"varchar",length:30})
    lastname:string

    @OneToMany(() => Address,(address:Address) => address.student,{onDelete:'CASCADE',onUpdate:'CASCADE'})
    address:Address[]
    
}