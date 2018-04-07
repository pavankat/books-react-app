# How to start this up

1. go into the folder

2. make sure you're in the folder

3. $ npm install

4. $ node server.js

5. open up a new terminal window

6. go into the client folder 

7. $ yarn install

8. $ yarn start

Your react app is running on http://localhost:3000

Your express api app is running on http://localhost:3001

# FAQ

What is react?

```
	It's a Single Page Application Framework
		update a variable (in the state of a react component)		
		
		and wherever that variable is being used on the page, it'll update automatically

		without react, you'd have to keep track of everything that is happening on the page.

	It's a JavaScript framework for UI that uses component architecture
```

Is react the only single page application framework out there?

```
	No, there's angular, knockout.js, ember, vue.js
```

Why should we use react?

```	
	because as soon as you update the state, the document updates everywhere automatically

	as opposed to html, css, jQuery where if a variable updates, you have to update it everywhere

	by learning and using react you'll be ready to use react native to make native mobile applications. React Native compiles down to objective c (for the iphone) and java (for android). so you'll make truly native mobile applications by writing react.
```

Why do we use es6, es7...

```
	react works with classic JavaScript, but all of the documentation, stock over flow posts, they're all using es6

	arrow functions

		'this' inside the arrow function is the same outside the arrow function
```

when do we use react and when do we use express?

```
express
	back end
		to connect a database
react
	front end
```


how map returns a new array based on a previous array

```
arr = [1,2,3]

newArr = arr.map((x) =>{
	x*2;
})

// newArr will equal to [2,4,6]

// while arr is still [1,2,3]
```


how to remove something in an array without modifying it and returning a new array

```
arr = [1,2,3];

var newArr = arr.filter(function(x){
	return x != 2;
})

newArr is what [1,3]
```


how to replace something in an array without modifying it and returning a new array

```
var arr = [1,2,3];

//how do we replace 2 with 4 without modifying arr?

var arrModified = arr.map(function(x){
	if (x != 2) return x;
	else return 4;
}); 

// arrModified is [1,4,3]

//arr is still [1,2,3]
```

quiz

take this array and create a new array of list items (li tags) with each element in it. Please use map.

```
var arr = ['dog', 'cat', 'turtle'];

//one way
	var finished = arr.map(function(x){
		return "<li>" + x + "</li>"
	});

//another way
	const finished = arr.map((x) => `<li>${x}</li>`);

//this is what your code will do after it's done
var finished = ["<li>dog</li>", "<li>cat</li>", "<li>turtle</li>"]
```