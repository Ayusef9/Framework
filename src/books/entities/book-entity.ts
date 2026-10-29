import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Author } from "../../author/entities/author-entity.js";
import { JoinColumn } from "typeorm/browser";

@Entity({name: 'books'})
export class Book{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'varchar', length: 100})
    title: string;

    @Column({type: 'varchar', length: 50})
    authorName: string;

    @Column({type: 'varchar', length: 50})
    isbn: string;

    @Column({type: 'int', default:0})
    publishedYear: number;

    @Column({type:'boolean', default: true})
    isAvailable: boolean;

    @Column({ type: 'decimal', precision: 12, scale: 2, default: 0})
    price: number;

    @Column({ type: 'int', default: 0 })
    stock: number;

    @OneToOne(() => Author, { cascade: true })
    @JoinColumn({name:'author_id'})
    author: Author;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date;

    @DeleteDateColumn({name: 'deleted_at', default: null})
    deletedAt: Date;

}