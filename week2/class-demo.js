// Problem Statement: Library Book Management System
// -------------------------------------------------
// Objective : Create a Book class and use it to manage a collection of books in a library.

// Requirements:
//   Create a Book class with the following:

//   Properties:
//       title (string)
//       author (string)
//       pages (number)
//       isAvailable (boolean, default: true)


//   Methods:
//       borrow() - Marks the book as not available
//       returnBook() - Marks the book as available
//       getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
//       isLongBook() - Returns true if pages > 300, false otherwise




//   1. Create at least 5 book objects using the class:
//       Example: "Harry Potter", "1984", "The Hobbit", etc.

class Book{
    title;
    author;
    pages;
    isAvailable;
    constructor(t,a,p,i){
        this.title=t;
        this.author=a;
        this.pages=p;
        this.isAvailable=i;
    }
     borrow(){
        this.isAvailable=false;
     }
      returnBook(){
        this.isAvailable=true;
      }
      getInfo(){
        return `${this.title} by ${this.author} (${this.pages} pages)`;
      }
      isLongBook(){
        return this.pages>300;
      }
}
let b1=[new Book("harry potter","j.k.rowling",200,true),new Book("1984","g.o.wells",300,true),
new Book("the hobbit","j.r.r.tolkien",400,true),
new Book("the catcher in the rye","j.d.salinger",200,true),
new Book("to kill a mockingbird","harper lee",200,true)];
//   2. Perform the following operations:

//       i. Display info of all books
//       ii. Borrow 2 books and show their availability status
//       iii. Return 1 book and show updated status
//       iv. Count how many books are "long books" (more than 300 pages)
//       v. List all available books
b1.forEach((book)=>console.log(book.getInfo()))
b1.forEach((book)=>console.log(book.isAvailable))
b1.forEach((book)=>book.returnBook())
b1.forEach((book)=>console.log(book.isAvailable))

