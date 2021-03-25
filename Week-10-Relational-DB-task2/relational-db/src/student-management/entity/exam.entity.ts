import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Courses } from "./courses.entity";
import { Student } from "./student.entity";

@Entity()
export class Exam{
    @PrimaryGeneratedColumn('uuid')
    eid:string

    @Column({type:"varchar",length:50})
    ename:string

    @ManyToOne(() => Student,(student:Student) => student.sid)
    student:Student

    @ManyToOne(() => Courses,(course:Courses) => course.cid)
    course:Courses

    @Column({ type: 'timestamp' , default:() => new Date()})
    date_time: Date;
}