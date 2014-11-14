# 3 - OMBD and AJAX

## Your Task

- You are going to build an app that searches the OMDB for a movie title and returns a bunch of information about it....we've seen this before - except this time you are going to use AJAX so the page should not refresh at all while using the app. This is what is known as a single page app or SPA.

### Getting started

- Fork and clone the repo and run `rake db:create`
- Like our first task, we are not going to have any models and a very very minimal controller so look around and see that you will mostly be working once again in your views and assets/javascripts folders.
- You will notice that there is a folder called templates inside of your javascripts folder. This is for handlebars, which is a bonus for this assignment so don't worry about that for now.
- You will also see that some additional gems have been installed and that is for handlebars as well
- When you run `rails server` you should see a form and a spinning gif. I have provided you with the correct view so you are going to have to start in the `assets/javascripts/demo.js` file.

### Talk to OMDB

- I have given you a series of comments in the `demo.js` file that should help you get started. If you are stuck, look at the code for the previous exercises and remember how do make an AJAX call and use $.when. 
- If you are not sure how to do some things necessary...Google around! Ask google how to capture input value in jQuery or how to show and hide things in jQuery. The best way to get better at any topic is to try it, break it, fix it and hopefully learn something about it!

### Bonus - include handlebars for templating

- Start by researching what [handlebars](http://handlebarsjs.com/) 

- Research the [gem](https://github.com/leshill/handlebars_assets) we are using and see how to work with it.

- I have done all of this for you, but here are the steps for including Handlebars in a Rails App:


	- gem install `handlebars_assets`
	- create a folder called `templates` in your javascripts file
	- add the required files in application.js

	```
	//= require handlebars.runtime
	//= require_tree ./templates
	```
	- create a folder in the templates folder for each controller and then 	include your `.hbs` files in the respective folders