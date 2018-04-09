//./services/BookService.js

export const _updateBook = (i, name) => {
	return fetch(`/book/${i}`, {
	    method: 'PUT',
	    headers: {
	      'Accept': 'application/json',
	      'Content-Type': 'application/json'
	    },
	    body: JSON.stringify({name})
	  }).then(res => res.json())
}

export const _loadBook = (id) => {
  return fetch(`/book/${id}`)
    .then(res => res.json())
}

export const _loadBooks = () => {
  return fetch("/books")
    .then(res => res.json())
}

export const _deleteBook = (id) => {
    return fetch(`/delete/${id}`, {
        method: "DELETE",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
}

export const _createBook = (n) => {
	return fetch("/booksinsert", {
	    method: 'POST',
	    headers: {
	      'Accept': 'application/json',
	      'Content-Type': 'application/json'
	    },
	    body: JSON.stringify({name : n})
	  }).then(res => res.json())
}

//put all of the fetch calls in BookService.js