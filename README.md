title: Library Project
description: |
  Welcome to the Library Project! This project is an API that allows users to add and retrieve books. 
  It's built with Express.js, TSOA, and PostgreSQL, with testing using Jest and API documentation generated with Swagger.

sections:
  - title: Features
    content: |
      - Add books to the library
      - Retrieve books from the library

  - title: Technology Stack
    content: |
      - **Backend Framework**: Express.js
      - **TypeScript Framework**: TSOA
      - **Database**: PostgreSQL
      - **Testing**: Jest
      - **API Documentation**: Swagger

  - title: Installation
    content: |
      To install and run this project locally, follow these steps:
      1. Clone the repository:
         ```bash
         git clone <repository-url>
         ```
      2. Navigate to the project directory:
         ```bash
         cd library-project
         ```
      3. Install dependencies:
         ```bash
         yarn install
         ```
      4. Set up the PostgreSQL database and update the database configuration in `ormconfig.json`.
      5. Run the development server:
         ```bash
         yarn start:dev
         ```

  - title: Usage
    content: |
      To use the API, follow these steps:
      - **Add a book**:
        ```bash
        POST /books : localhost:7500/v1/books
        ```
      - **Get all books**:
        ```bash
        GET /books :  localhost:7500/v1/books
        ```

  - title: Testing
    content: |
      To run tests, use the following command:
      ```bash
      yarn test
      ```

  - title: API Documentation
    content: |
      The API documentation is generated with Swagger. To view the documentation, start the server and visit:
      ```
      http://localhost:7500/docs
      ```

  - title: Contributing
    content: |
      Contributions are welcome! Please fork the repository and create a pull request for any improvements.
