import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CustomerAddress } from "../../customer_addresses/entities/customer-address.entity.js";
import { Order } from "../../orders/entities/oders-entity.js";

@Entity({name:'users'})
export class Users{
    @PrimaryGeneratedColumn('uuid')
        id: string;

    @Column({type: 'varchar', length: 100})
        nama: string;

    @Column({type: 'varchar', length: 50})
        email: string;
    
    @Column({type: 'int', length: 20})
        phone: number;

    @Column({type: 'varchar'})
        password: string;

    @Column({type: 'varchar', length: 50})
        alamat: string;

    @OneToMany(() => CustomerAddress, (address) => address.customer)
        addresses: CustomerAddress[];

    // users (pelanggan) (1) -> (N) orders
    @OneToMany(() => Order, (order) => order.customer)
        orders: Order[];

    @CreateDateColumn({name: 'created_at'})
        createdAt: Date;
    
    @UpdateDateColumn({name: 'updated_at'})
        updatedAt: Date;
    
    @DeleteDateColumn({name: 'deleted_at', default: null})
        deletedAt: Date;
    
}