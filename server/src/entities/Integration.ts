import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Course from './Course';
import Platform from './Platform';

@Entity()
class Integration {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 250 })
  urlCheckout: string | null;

  @ManyToOne(() => Course, (course) => course.integrations)
  course: Course;

  @OneToOne(() => Platform)
  @JoinColumn()
  platform: Platform;
}

export default Integration;
