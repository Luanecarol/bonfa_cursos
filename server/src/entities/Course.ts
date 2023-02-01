import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Account from './Account';
import Category from './Category';
import Integration from './Integration';
import Module from './Module';

@Entity()
class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @ManyToOne(() => Category, (category) => category.courses)
  category: Category;

  @ManyToOne(() => Account, (account) => account.courses)
  account: Account;

  @OneToMany(() => Module, (module) => module.course)
  modules: Module[];

  @OneToMany(() => Integration, (integration) => integration.course)
  integrations: Course[];
}

export default Course;
