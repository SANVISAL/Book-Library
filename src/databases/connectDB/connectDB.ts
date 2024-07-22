
import { DataSource } from "typeorm";
import Book from "../models/book.model";

const AppDataSource = new DataSource({
  name: 'default',
  type: "postgres",
  host: "localhost",
  port: 7000, 
  username: "postgres", 
  password: "sanvisal2302", 
  database: "library", 
  entities: [Book],
  synchronize: true, 
});

export default AppDataSource;
