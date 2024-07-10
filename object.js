var book=
{
    title : "My Experiments with Truth",
    author:"gandhi",
    yearPublished: 1940,
    printBookdata: function()
    {
    console.log("the book titled"+this.title+"is written by"+this.authour);
    }
};
console.log(book.printBookdata());