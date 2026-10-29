import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Book } from "../../books/entities/book-entity.js";

@Entity({name:'author'})
export class Author{
    @PrimaryGeneratedColumn('uuid')
        id: string;
    
    @Column({type: 'varchar', length: 100})
        nama_pengarang: string;

    @Column({type: 'varchar', length: 50})
        alamat: string;

    @Column({type: 'varchar', length: 50})
        foto: string;

    @OneToMany(() => Book, (item) => item.id, {
        cascade:true
    })
    books: Book[];



    @CreateDateColumn({name: 'created_at'})
            createdAt: Date;
        
    @UpdateDateColumn({name: 'updated_at'})
            updatedAt: Date;
        
    @DeleteDateColumn({name: 'deleted_at', default: null})
            deletedAt: Date;
}