



class books {
  constructor(title,author, copies) {
    this.title=title;
    this.author=author;
    this.copiesAvailabel=copies;
  }

  decreaseCopy(){
   this.copiesAvailabel--;
   console.log(`${this.title} ki ek copy kam ho gayi. Baki bachi: ${this.copiesAvailabel}`)
  }
   increaseCopy(){
     console.log(`${this.title} ki ek copy wapas aa gayi. Total:  ${this.copiesAvailabel}`)
    
   }

}
class LibraryStudent {
  constructor(studentName) {
    this.studentName=studentName;
    this.borrowedBooks=[];
  }

  borrowBook(bookObject){
    if (bookObject.copiesAvailabel===0) {
      console.log(`sorry! ${this.studentName}, ${this.title} ki koi book nhi ha library ma `);
      return;
    }
    if (this.borrowedBooks.includes(bookObject)) {
      console.log(`Alert! ${this.studentName}, aap "${bookObject.title}" pehle se borrow kar chuke hain.`);
      return;
    }
    this.borrowedBooks.push(bookObject);
    bookObject.decreaseCopy();

    console.log(`Success: ${this.studentName} ne "${bookObject.title}" kamyabi se borrow kar li.`);

  }
}

let physicsBook = new books("Physics 101", "Albert", 2);
let student1 = new LibraryStudent("Omais");

student1.borrowBook(physicsBook)


let englishBook = new books('English 102', 'omais' , 4);
let student2=new LibraryStudent('waseem');
student1.borrowBook(englishBook)




