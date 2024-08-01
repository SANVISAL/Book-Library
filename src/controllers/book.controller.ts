
import { bookCreate } from "../databases/repositorys/@types/book.repo.type";
import { BooKService } from "../services/book.service";
import { Body, Get, Post, Query, Route } from "tsoa";
import ROUTER_PATH from "../routes/book.routerefer";
@Route("v1/books")
class BookController {
  private bookService: BooKService;
  constructor() {
    this.bookService = new BooKService();
  }

  @Post(ROUTER_PATH.CREATE_BOOK)
  public async createBook(@Body() requestBody: bookCreate) {
    try {
      console.log("Book created", requestBody);
      const newBook = await this.bookService.createBook(requestBody);
      return newBook;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  @Get(ROUTER_PATH.GET_BY_NAME)
  public async getOneBook(@Query() name: string) {
    try {
      const book = await this.bookService.getByName(name);
      return book;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  @Get(ROUTER_PATH.GET_BOOK)
  public async getAllBook() {
    try {
      const allBook = await this.bookService.getAllBook();
      return allBook;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

export { BookController };
