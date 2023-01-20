import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Account from './Account';
import Module from './Module';

@Entity()
class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'varchar', length: 50 })
  category: string;

  @ManyToOne(() => Account, (account) => account.courses)
  account: Account;

  @OneToMany(() => Module, (module) => module.course)
  modules: Module[];
}

export default Course;
