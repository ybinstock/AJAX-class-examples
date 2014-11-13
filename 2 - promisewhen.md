## 2 - Just HTML,CSS and JavaScript...promise 

### Your task

- We're going to start simple and gradually get more complex
- Work your way through the steps. If you are stuck ask for help and if you feel confident keep moving along! This is going to get tricky fast.
- The good news is...we're doing this all in one html file - no rails for now!

### Step 1 

- Create an `index.html` file
- Inside of this file create three div's and give them each a class of box
- In the same `index.html` file add a `<style>` tag and give these boxes a width and height of 200 pixels, a background color of green, margin-right of 30 pixels and have them line up all in one line (horizontally)
- but wait...? Isn't mixing CSS with your HTML bad practice? Well yes it is, glad you asked! So for this example you may do it, but not in your apps!


### Step 2

- After your divs include jquery (you should have the snippet) and then open up a script tag
- Your goal should be to make all three of these boxes fade out at the same time.

### Step 3

- Nice! Now try to get them to fade out one by one, but there is a catch. 
- Once all of these boxes have faded out, `console.log` a message saying "All done!" 
- You will need to use a promise to do this. If you don't know where to start, take a look [here](http://api.jquery.com/promise/
)

### Step 4 

- Awesome! You have seen how cool promises are and now you should be able to see the issue with this code (think about the A in AJAX...what does it stand for?)
- Take a look at this code and test it in your `html` file

```

movieQuery = function(search){
    $.ajax({
      url: "http://www.omdbapi.com/",
			data: {s: search},
			success: function(response){
				console.log("AJAX CALL IS ALL DONE!");
				console.log(response);
			}
    });
};

	var result = movieQuery('titanic');
	console.log("This is my titanic result query");
	console.log(result);
```

- What does result return to you? Why?

### Step 5

- Research [http://api.jquery.com/jquery.when/](http://api.jquery.com/jquery.when/) and see how we can use it to solve our problem and greatly clean up our code!