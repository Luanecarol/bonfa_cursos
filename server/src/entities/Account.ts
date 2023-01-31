import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Course from './Course';
import Subscription from './Subscription';

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

  @OneToOne(() => Subscription, (subscription) => subscription.account)
  subscription: Subscription;
}

export default Account;
