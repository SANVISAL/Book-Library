import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Book {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 255 })
  bookname: string = "";

  @Column({ type: "varchar", length: 255 })
  author: string = "";
}

export default Book;
