
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entities/book-entity.js';
import { CreateBookDto } from './dto/create-book.dto.js';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  // Menampilkan semua buku
  async findAll(): Promise<Book[]> {
    return this.bookRepository.find();
  }

  // Menambahkan buku baru
  async create(book: CreateBookDto): Promise<Book> {
    const newBook = this.bookRepository.create({
      title: book.title,
      author: book.author,
      isbn: book.isbn,
      publishedYear: book.publishedYear,
      isAvailable: true,
    });

    return this.bookRepository.save(newBook);
  }

  // Mencari buku berdasarkan ID
  async findById(id: string): Promise<Book> {
    const book = await this.bookRepository.findOneBy({ id: String(id) });

    if (!book) {
      throw new NotFoundException(`Buku dengan ID ${id} tidak ditemukan`);
    }

    return book;
  }

  // Mengubah data buku
  async update(
    id: string,
    updatedBook: CreateBookDto,
  ): Promise<Book> {
    const book = await this.findById(id);

    Object.assign(book, updatedBook);

    return this.bookRepository.save(book);
  }

  // Menghapus buku
  async remove(id: string): Promise<{ message: string }> {
    const book = await this.findById(id);

    await this.bookRepository.remove(book);

    return { message: `Buku dengan ID ${id} berhasil dihapus` };
  }
}
