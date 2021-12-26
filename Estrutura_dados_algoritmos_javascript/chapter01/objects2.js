function Book(title, pages, isbn) {
	this.title = title;
	this.pages = pages;
	this.isbn = isbn;
	this.printTitle = function() {
		console.log(this.title)
	}
}
let book1 = new Book('Geração de Valor', 100, 1234567890)
book1.pages = 208;
console.log(book1)

//uma classe pode conter funções(métodos)
book1.printTitle();

