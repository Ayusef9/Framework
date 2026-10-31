import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import { Users } from '../../users/entities/user.entity.js';
import type { Relation } from "typeorm";


@Entity({ name: 'customer_addresses' })
export class CustomerAddress {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'customer_id', type: 'uuid' })
  customerId: string;

  @Column({ name: 'recipient_name', type: 'varchar', length: 150 })
  recipientName: string;

  @Column({ type: 'varchar', length: 20 })
  phone: string;

  @Column({ type: 'text' })
  address: string;

  @Column({ type: 'varchar', length: 100 })
  city: string;

  // customer_addresses (N) -> (1) users (pelanggan)
  @ManyToOne(() => Users, (user) => user.addresses, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'customer_id' })
  customer: Relation<Users>;

  @Column({ name: 'postal_code', type: 'varchar', length: 10 })
  postalCode: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

}
