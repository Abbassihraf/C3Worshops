class Bookshelf {
    constructor() {
        this.favoriteBooks = [];
    }
    addFavoriteBook(bookName) {
        if (!bookName.includes("Great")) {
            this.favoriteBooks.push(bookName);
        }
    }
    printFavoriteBooks() {
        console.log(`Favorite Books: ${String(this.favoriteBooks.length)}`);
        for (let bookName of this.favoriteBooks) {
            console.log(bookName);
        }
    }
}
let bookshelf = new Bookshelf();
function loadBooks(bookshelf) {
    fakeAjax(BOOK_API, function(results) {
        for (result in results) {
            bookshelf.addFavoriteBook(results[result]);
        }
    });
}