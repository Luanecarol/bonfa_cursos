import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Module from './Module';

@Entity()
class Lesson {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  videoUrl: string;

  @Column({ type: 'varchar', length: 200 })
  lessonTitle: string;

  @ManyToOne(() => Module, (module) => module.lessons)
  module: Module;
}

export default Lesson;
