import Book from "../models/book.model";
import { bookCreate } from "./@types/book.repo.type";
import AppDataSource from "../connectDB/connectDB";
import DuplicatError from "../../errors/duplicate-error";
import ApiError from "../../errors/api-error";
import NotFound from "../../errors/not-found-error";

class BookRepository {
  async createBook(bookDetails: bookCreate) {
    try {
      const bookRepository = AppDataSource.getRepository(Book);
      const existingBook = await this.findByName(bookDetails.bookname);
      console.log("BooK:", existingBook);
      if (existingBook) {
        throw new DuplicatError("Book already exists");
      } else {
        const book = bookRepository.create(bookDetails);
        const newBook = await bookRepository.save(book);
        console.log(newBook);
        if (!newBook) {
          throw new ApiError("Failed to create book ");
        }
        return newBook;
      }
      // console.log("hellp:", bookDetails);
    } catch (err) {
      console.error("Caught error:", err);
      if (err instanceof DuplicatError || err instanceof ApiError) {
        throw err;
      }
      throw new ApiError("Unexpected error occurred while creating student");
    }
  }

  async findById(id: number): Promise<Book> {
    try {
      const bookRepository = AppDataSource.getRepository(Book);
      const book = await bookRepository.findOneBy({ id });

      if (!book) {
        throw new NotFound("Book not found");
      }

      return book;
    } catch (err) {
      if (err instanceof NotFound) {
        throw err; // Re-throwing the original error
      }
      throw new ApiError("Unexpected error occurred while finding student");
    }
  }

  async findByName(name: string): Promise<Book | null> {
    try {
      const bookRepository = AppDataSource.getRepository(Book);
      const books = await bookRepository.findOne({ where: { bookname: name } });
      return books;
    } catch (err) {
      throw err;
    }
  }

  async getAllBook() {
    try {
      const bookRepository = AppDataSource.getRepository(Book);
      const books = await bookRepository.find();
      if (!books) {
        throw new NotFound("No books found");
      }
      return books;
    } catch (err) {
      if (err instanceof NotFound) {
        throw err;
      }
      throw new ApiError("Unexpected error occurred while finding Books");
    }
  }
}

export { BookRepository };
