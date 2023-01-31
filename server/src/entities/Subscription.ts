import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Account from './Account';
import Plan from './Plan';

@Entity()
class Subscription {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp' })
  startDate: Date;

  @Column({ type: 'timestamp' })
  expiresIn: Date;

  @OneToOne(() => Account, (account) => account.subscription)
  @JoinColumn()
  account: Account;

  @OneToOne(() => Plan, (plan) => plan.subscription)
  @JoinColumn()
  plan: Plan;
}

export default Subscription;
