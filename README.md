# jQuery

* it's a JavaScript library. 
* Libraries will help you write less code. Complement your code.
* Frameworks take over, frameworks define how your write your code. 
* it's everywhere. 
Initial release‎: ‎August 26, 2006; 11 years ago

* Creating elements
* making it work

### How do we use jQuery?

* google jQuery cdn and copy and paste the code. Remote
  - Could take a while to load
  - Need an internet connection.
  - it will get cached.
* download the JQuery code and include the file. computer
  - The weight of jQuery isn't inside your app directories.
  - I would have to manage an extra js file.
* you could use `npm`

we get access to the `jQuery` function and the `$` function.

* jQuery doesn't allow us to do anything new. Doesn't add any new functionality. write less do more. let's you do the same, with less code.

## What goes in the jQuery function

$('');

* a css selector like `querySelector`
  - a jQuery object is returned that represents the native dom element.
  - the jQuery object has access to all the jQuery methods.

* a native html element
  - 
* the tag of the element that I want to create
* it accepts another function

### Chaining

* every jQuery method returns the object it was called on.

### Event Handling

`addEventListener` in native code
`on` in jQuery.

### Delegation

* check the code

### Plugins

jQuery plugins add more methods to every jQuery object. This adds more behavior to every jQuery object like animations and sortable lists.

jQuery UI is a jQuery plugin 
http://jqueryui.com/
