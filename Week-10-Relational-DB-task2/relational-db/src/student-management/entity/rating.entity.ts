import { text } from "body-parser";
import { Collection } from "mongoose";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Courses } from "./courses.entity";

@Entity()
export class Rating{

    @PrimaryGeneratedColumn('uuid')
    rateid:string

    @Column()
    rate:number

    @Column({type:"text"})
    review:string

    @OneToMany(type => Courses,(courses:Courses) => courses.rating)
    courses:Courses[]

}