
import { bookCreate } from "../databases/repositorys/@types/book.repo.type";
import { BookRepository } from "../databases/repositorys/book.repository";
import ApiError from "../errors/api-error";
import NotFound from "../errors/not-found-error";

class BooKService {
  private bookRepository: BookRepository;
  constructor() {
    this.bookRepository = new BookRepository();
  }
  async createBook(bookDetails: bookCreate) {
    try {
      const newBook = await this.bookRepository.createBook(bookDetails);
      return newBook;
    } catch (err) {
      throw err;
    }
  }
  async getByName(bookName: string) {
    try {
      const book = await this.bookRepository.findByName(bookName);
      if (!book) {
        throw new NotFound("Book Not Found With The Name");
      }
      return book;
    } catch (err) {
      if (err instanceof NotFound) {
        throw err;
      }
      throw new ApiError("Unexpected error occurred while finding students");
    }
  }
  async getAllBook() {
    try {
      const books = await this.bookRepository.getAllBook();
      return books;
    } catch (err) {
      throw err;
    }
  }
}
export { BooKService };
