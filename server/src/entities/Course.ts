import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Account from './Account';

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
}

export default Course;
