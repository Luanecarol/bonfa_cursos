import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Course from './Course';

@Entity()
class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 45 })
  username: string;

  @Column({ type: 'varchar', length: 45 })
  email: string;

  @Column({ type: 'varchar', length: 150 })
  password: string;

  @Column({ type: 'varchar', length: 20, default: 'app_owner' })
  role: string;

  @OneToMany(() => Course, (course) => course.account)
  courses: Course[];
}

export default Account;
