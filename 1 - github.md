# 1 - Github and AJAX

## Your Task

- Your app should take in some user input and make an AJAX request to Github's API and if the user typed in a correct Github username, it should render the usernames avatar (picture).

### Getting started

- Create a new rails app `rails new githubajax -TBd postgresql`
- Add `pry-rails` in your Gemfile and then run `bundle`
- Run `rake db:create`
- Generate a controller with an index action `rails g controller learn index`
- Your application should not have a model or anything more than:

```
def index
end
```
in your controller. You are going to be working in `app/assets/javascripts` and `app/views/learn/index.html.erb` for this project. 

### Let's start with the view

- Start in your `index.html.erb` and build a  form using `form_tag`. Since we will not be posting to anywhere, set your action to `javascript:void(0);` 
- Make sure to give your form a class of getInfo (we will need this for later)
- Inside of your form, add a `label_tag` and `text_field_tag` and finally a `submit_tag`- 
- Add the necessary attributes for these tags (give your `text_field_tag` a class of repoName)and look at your form in the chrome elements tab to verify you built your form correctly. 
- After your form add a <div> with the class of userData (don't put anything inside this div)


### Did you miss JavaScript?

I sure did, let's start with the following:

- remove `//= require turbolinks` from your `application.js` file.
- Rename `learn.js.coffee` to `learn.js` (we will not be writing CoffeeScript...that's for another day)
- In your learn.js code, start with a `$(document).ready(function(){})` (not sure what this is? No worries, see what it does [here](http://learn.jquery.com/using-jquery-core/document-ready/))
- next thing we need to do is target our form and on submit we need to prevent the default action (rendering a new page)

```
$(document).ready(function(){
	$(".getInfo").on("submit", function(e)	{
		e.preventDefault()
		// 
	})
})
```
- next thing we need to do is get the value of whatever the user typed in. Figure out how to capture the value of an input using jquery and target this input by its class (we called it repoName)
- now that you have the value, make an AJAX call using `$.getJSON`. This function takes 2 parameters. The first is the URL you are going to and the 2nd is a callback function with the response
- With that in mind, the URL you want to go to is `https://api.github.com/users/ + username` so test this out first in a browser and go to `https://api.github.com/users/eschoppik` (or your username )
- Test your AJAX call with a console.log and make sure you are getting back the correct information (the network tab in chrome developer tools is extremely useful for this)
- once you have the correct data, create an `img` tag with the `src` attribute equal to the url you get back from the AJAX call.
- Finally append that `img` tag to your `div` with a class of userData

### Bonus

- Include some more information about the user (number of repos, name, profession, email)
- Clear the form values once you have submitted 


