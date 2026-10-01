import { Injectable } from '@nestjs/common';
import { Book } from './entities/book-entity.js';
import { title } from 'process';
import { CreateBookDto } from './dto/create-book.dto.js';

@Injectable()
export class BooksService {

    private books: Book[] = [
    {

        id: 1,
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        isbn: '9780743273565',
        publishedYear: 1925,
        isAvailable: true,
    }
]

    findAll(): Book[] {
        return this.books;
    }

    create(book: CreateBookDto): Book {
        const newBook: Book = {
            id: this.books.length + 1,
            title: book.title,
            author: book.author,
            isbn: book.isbn,
            publishedYear: book.publishedYear,
            isAvailable: true
        };
        this.books.push(newBook);
        return newBook;
    }

    findOne(id: number): Book | undefined {
        return this.books.find(book => book.id === id);
    }

    update(id: number, updatedBook: Partial<Book>): Book | undefined {
        const bookIndex = this.books.findIndex(book => book.id === id);
        if (bookIndex === -1) {
            return undefined;
        }
        this.books[bookIndex] = { ...this.books[bookIndex], ...updatedBook };
        return this.books[bookIndex];
    }

    delete(id: number): boolean {
        const bookIndex = this.books.findIndex(book => book.id === id);
        if (bookIndex === -1) {
            return false;
        }
        this.books.splice(bookIndex, 1);
        return true;
    }
}
