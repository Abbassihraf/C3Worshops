function addFavoriteBook(bookName) {
    if (!bookName.includes("Great")) {
        favoriteBooks.push(bookName);
    }
}
function printFavoriteBooks() {
    console.log(`Favourite Books: ${favoriteBooks.length}`)
    for (let book in favoriteBooks) {
        console.log(favoriteBooks[book]);
    }
}

var favoriteBooks = [];
addFavoriteBook("The subtle Art of Not Giving a Fck");
addFavoriteBook("Great wolf lodge");
addFavoriteBook("Rich father poor father");
addFavoriteBook("Great  walks");
addFavoriteBook("Who Moved My Cheese");
printFavoriteBooks();