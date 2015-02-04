#Reddit Dashboard

Your assignment is to create a new interface for reddit using angular and `$http`. The new dashboard will be based on the [bootstrap dashboard example](http://getbootstrap.com/examples/dashboard/).

We've included a boiler plate for you already in this repository.

##Reddit json data

On reddit you can simply add ".json" to the end of a url to request json data. Remember the ".json" needs to be before the query string (? symbol).

####URL -- Search for "cats"

[http://www.reddit.com/search.json?q=cats](http://www.reddit.com/search.json?q=cats)

####Parameter overview

* permalink - link to this post / comments
* url - link to whatever the post links to (this is often an image or url... for reddit.self posts it links to the comments section)

**Warning:** Reddit has some pretty questionable content so keep that in mind when choosing your search terms.

##Functionality (part 1)

####Entering a new term

1. The user types a search term in to the search box and presses enter.
* The search is added to the "history" list on the left and marked as active (highlighted in blue).
* Use `$http` to search reddit using that search term.
* Populate the "All posts" list in the main content area with reddit posts and some data about each (score, comment count, etc)
* Populate the "featured posts" section by loading the first 4 thumbnail images from the reddit data.

####Going to an existing term

When a user clicks a search term in the "History" list on the left it should:

* Mark the item as active (highlight blue)
* Do steps 3,4,5 above.

####Removing a term from history

When you hover over an item in the menu there is an "X" link next to the item. When that item is clicked it should remove the term from the list. It should also update `localStorage` so if you refresh the page the item will stay deleted.

####Page load

* On first load the "history" list on the left will be empty.
* Once a search term is entered it needs to be added to the list on the left
* The history list should be stored in `localStorage` so the list is remembered between page views.

####A Quick note on `localStorage`

localStorage can only store strings so you need to convert your array (or object) to a string when storing it and back when loading it.

```javascript
var taco = [1,2,3];
window.localStorage.taco=JSON.stringify(taco);
//converts the data to a string "[1,2,3]" and stores it in .taco


var newTaco = JSON.parse(window.localStorage.taco);
//parses the stored sting back to the array: [1,2,3]

```


##Part 2

Add 2 buttons to your list

* View - links in a new tab to the post url (based on url parameter)
* Comments - links in a new tab to the comments page (based on permalink parameter)

##BONUS

Load the comments in a modal pop-up using angular bootstrap directives. It should load the comments using `$http` and display them as a list in the modal. Just display top level comments (not comments on comments)

####URL -- Load reddit comments as .json

Same as the search api... we just add a ".json" to the permalink.

[http://www.reddit.com/r/cats/comments/1vimf5/cat_booping_my_nose_how_the_tables_have_turned.json](http://www.reddit.com/r/cats/comments/1vimf5/cat_booping_my_nose_how_the_tables_have_turned.json)


##Extra bonus

Make the comments load recursively to display comments on comments. Maybe look at ngInclude to "roll your own" or look at a [tree directive](https://www.google.com/search?q=angular+tree+directive&oq=angular+tree+directive&aqs=chrome..69i57j0l3j69i60l2.3351j0j4&sourceid=chrome&es_sm=91&ie=UTF-8).

