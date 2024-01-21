import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  status: string;

  @Column()
  assignee: string;

  @Column()
  due: string;
}