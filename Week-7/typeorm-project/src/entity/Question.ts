import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./Category";

@Entity()
export class Question{

    @PrimaryGeneratedColumn("uuid")
    id:string;

    @Column()
    title:string;

    @Column()
    text:string;

    @ManyToMany(() => Category)
    @JoinTable()
    categories:Category[];
}