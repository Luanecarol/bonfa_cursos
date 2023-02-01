import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Course from './Course';

@Entity()
class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  title: string;

  @OneToMany(() => Course, (course) => course.category)
  courses: Course[];
}

export default Category;
