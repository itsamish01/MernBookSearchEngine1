## MERN Book Search Engine
A full-stack web application built using MongoDB, Express, React, and Node.js (MERN) stack. This book search engine allows users to search for books, save their favorite books, and manage their personal reading lists.

## Table of Contents
* Features
* Installation
* Usage
* Screenshots
* Contributing
* License

## Features
* Search for books using the Google Books API
* User authentication and registration
* Save favorite books to user profile
* View and manage personal reading lists
* Responsive design for desktop and mobile devices

## Installation
To run this application locally, follow these steps:

1. git clone https://github.com/yourusername/mern-book-search.git

2. Change to the project directory.

cd mern-book-search

3. Install server-side dependencies.

npm install

4. Navigate to the client-side directory and install client-side dependencies.

* cd client
* npm install

5. Create a .env file in the root of the project directory and add the following variables:

* MONGODB_URI=mongodb://localhost:27017/book-search-db
* JWT_SECRET=your_jwt_secret
* Replace your_jwt_secret with a secure secret string.

6. Start both server-side and client-side applications concurrently.

* npm run dev

* The application should now be running on http://localhost:3000.

## Usage
1. Register for an account or log in to an existing account.
2. Use the search bar to find books by title or author.
3. Click the "Save" button to save a book to your reading list.
4. Navigate to the "My Books" page to view and manage your personal reading list.

## Screenshot 

## Deployed Link:

## Contributing
Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch with a descriptive name.
3. Make your changes and commit them with a clear message.
4. Push your changes to your forked repository.
5. Create a pull request in the original repository, describing the changes you made.

## License
This project is licensed under the MIT License. For more information, please refer to the LICENSE file.