import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Account from './Account';
import Platform from './Platform';

@Entity()
class Integration {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 250 })
  publicKey: string;

  @ManyToOne(() => Account, (account) => account.integrations)
  account: Account;

  @OneToOne(() => Platform)
  @JoinColumn()
  platform: Platform;
}

export default Integration;
