import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Platform {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  platformName: string;
}

export default Platform;
