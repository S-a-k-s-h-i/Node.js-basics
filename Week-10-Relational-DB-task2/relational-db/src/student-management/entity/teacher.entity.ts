import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Courses } from "./courses.entity";

@Entity()
export class Teacher{
    @PrimaryGeneratedColumn('uuid')
    tid:string

    @Column({type:"varchar",length:30})
    tname:string

    @OneToMany(() => Courses,(courses:Courses) => courses.teacher)
    courses:Courses[]
}