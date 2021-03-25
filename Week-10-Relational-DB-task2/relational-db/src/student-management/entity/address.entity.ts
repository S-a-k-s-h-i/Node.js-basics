import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Student } from "./student.entity";

@Entity()
export class Address{
    @PrimaryGeneratedColumn("uuid")
    addid:string

    @Column({type:"varchar",length:100})
    add:string

    @ManyToOne(() => Student,(student:Student) => student.address)
    student:Student

}