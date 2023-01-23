import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Course from './Course';
import Integration from './Integration';

@Entity()
class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 45 })
  username: string;

  @Column({ type: 'varchar', length: 150 })
  password: string;

  @Column({ type: 'varchar', length: 20, default: 'app_owner' })
  role: string;

  @OneToMany(() => Course, (course) => course.account)
  courses: Course[];

  @OneToMany(() => Integration, (integration) => integration.account)
  integrations: Course[];
}

export default Account;
