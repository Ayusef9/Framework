import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name:'users'})
export class Users{
    @PrimaryGeneratedColumn('uuid')
        id: string;

    @Column({type: 'varchar', length: 100})
        nama: string;

    @Column({type: 'varchar', length: 50})
        email: string;
    
    @Column({type: 'int', length: 50})
        phone: number;

    @Column({type: 'varchar'})
        password: string;

    @Column({type: 'varchar', length: 50})
        alamat: string;


    @CreateDateColumn({name: 'created_at'})
        createdAt: Date;
    
    @UpdateDateColumn({name: 'updated_at'})
        updatedAt: Date;
    
    @DeleteDateColumn({name: 'deleted_at', default: null})
        deletedAt: Date;
    
}