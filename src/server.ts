// ./app.ts or your main server file
import "reflect-metadata";
import app from "./app";
import AppDataSource from "./databases/connectDB/connectDB";
import { BooKService } from "./services/book.service";

// Initialize TypeORM and then start the server
AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
    // const bookService = new BooKService();
    // bookService
    //   .createBook({
    //     bookname: "The Great Gatsby",
    //     author: "F. Scott Fitzgerald",
    //   })
    //   .then((newBook) => {
    //     console.log("Book created:", newBook);
    //   })
    //   .catch((error) => {
    //     console.error("Error creating book:", error);
    //   });

    // Start the server
    const port = process.env.PORT || 7500;
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error during Data Source initialization:", error);
  });
