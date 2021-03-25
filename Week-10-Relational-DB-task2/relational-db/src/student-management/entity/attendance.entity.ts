import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Courses } from "./courses.entity";
import { Student } from "./student.entity";

@Entity()
export class Attendance{
    @PrimaryGeneratedColumn('uuid')
    attid:string

    @ManyToOne(() => Student,(student:Student) => student.sid)
    student:Student

    @ManyToOne(() => Courses,(course:Courses) => course.cid)
    course:Courses

    @Column({ type: 'date', default: () => new Date() })
    date_only: Date;
}