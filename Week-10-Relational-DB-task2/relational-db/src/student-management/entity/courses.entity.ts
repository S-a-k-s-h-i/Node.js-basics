import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Rating } from "./rating.entity";
import { Student } from "./student.entity";
import { Teacher } from "./teacher.entity";

@Entity()
export class Courses{
    @PrimaryGeneratedColumn('uuid')
    cid:string

    @Column({type:"varchar",length:50})
    cname:string

    @Column()
    cfee:number

    @ManyToOne(() => Teacher,(teacher:Teacher) => teacher.courses)
    teacher:Teacher

    @ManyToOne(() => Rating,(rating:Rating) => rating.courses)
    rating:Rating

    @ManyToMany(() => Student)
    @JoinTable()
    students:Student[]
}