(function(){
    angular.module('bookApp')
    .component('booksComponent', {
        templateUrl: 'app/components/books.html',
        controller: BooksController
    })
    
    function BooksController($firebaseArray) {
        var bc = this;
        var booksRefs = new Firebase('https://favs15.firebaseio.com/books')
        bc.list = $firebaseArray(booksRefs)
        bc.addBook = function (book) {
            if(book.$id){
                bc.list.$save(book)    
            }else{
                bc.list.$add(book)
            }
            bc.newBook = null
        }
        
        bc.removeBook = function (book){
            bc.list.$remove(book)
        }
        
        bc.editBook = function(book){
            bc.newBook = book;
        }
    }
}())