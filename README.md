## Inspire

Inspiration can be difficult to achieve. Keep track of your many important tasks and the weather with the subtle help of a random daily quote and beatiful scenery.

### The Setup


##### Front-End
For this project you'll utilize the Front End Framework, Vue, to build a stylish dashboard that can help with both motivation and organization.

You'll notice that the Vue project has been created for you and that the out-of-the-box template that Vue provides has been stripped away.  We've also provided the appropiate file structure for your application and have scattered notes to help you on your way toward completeing this checkpoint. Remember that we are using the vue-router for our client side routing and you will need to complete the route object within the router.js as well as wire up controlls within both the Dashboard.vue and the Todos.vue. Don't forget the unidirectional flow of data that vuex provides, and how each step in the process is important if the under-the-hood features of Vuex are going to operate appropriately.

Your goal will be to put all of the data gathered from the actions together in a visually pleasing format as well as ensuring the functionality of a todo list.

Below you will see an image that you may use for inspiration. (Note, that you will need to include at least two views/paths in your application. This is not featured in the picture below.)

<div class="text-center">
    <img class="img-responsive" src="https://bcw.blob.core.windows.net/public/img/inspire.jpg"/>
</div>

---------------------------------

## Part 1 -  Where is the output?

It is your responsibility to render each piece of the data from the actions out to the screen. Look carefully at each component and view to figure out the properties that will need to be used for visualization.

## The Back-End (API)

In this project you will be expected to communicate with the following endpoints. With the exception of `todos` all of these endpoints will only respond to `GET` requests. `Axios` instances have already been created within the store.js. It will be up to you to look at the data from these endpoints to determine both what information you'll display and whether or not you'll utilize `models` for dealing with the data. 

- `baseURL = https://bcw-sandbox.herokuapp.com/api`
    - `/weather`
    - `/quotes`
    - `/images`
    - `/YOURNAME/todos`  _Note: Don't forget to replace YOURNAME with your actual name!_

### Todos `(/YOURNAME/todos)`

The todos portion of this project is the largest and will probably take the most amount of time to complete. Your todo list will communicate with the server using the following methods. The server will only respond to valid request using the appropriate method.

- `HTTP methods`
    - GET
    - POST
    - PUT
    - DELETE

#### Todo model
```javascript
{
    //the server will create these properties for you
    _id: {type: String, required: true, unique: true }
    completed: { type: Boolean, required: true, default: false},
    user: { type: String, required: true },
    //You will need to provide a description
    description: { type: String, required: true},
}
```

#### Post Request Method

- `Create Todo`
    - /YOURNAME/todos 
        - new todo object as data for request

#### Get Request Method
- `Get One Todo`
    - /YOURNAME/todos/:todoId

#### Get Entire Todo List 
- `Get All Todos by User`
    - /YOURNAME/todos

#### Put Request Method
- `Edit Todo at id`
    - /YOURNAME/todos/:todoId 
        - edited todo object as data for request

### Delete Request Method
- `Delete Todo by id`
    - /YOURNAME/todos/:todoId 

---------------------------------

## Part 2 - Adding the functionality 

The todolist is perhaps one of the most important features of this application. You will need to provide the user a way to add items to a list to be monitored for tracking. The user should be able to add or remove items easily and the user should be able to indicate an items status if they don't want to remove the item.

---------------------------------

### Part 3 - Prettify

The positioning of elements on the page is not the absolute most crucial thing for this application however it does need to have few things to make the grade. Use the picture above as an idea for laying out your site.
  

---------------------------------

### EXTENSION IDEAS 
- On hover the quote should show the author of the quote and disappear when not hovered over
- A clock should be rendered to the screen that updates each minute without a page refresh
- Allow the user to set their name and have it save to localStorage
- Change the message from Good Morning to Good Afternoon, Evening as appropriate. 
- Allow the user to toggle the clock from, 12hr to military time. 
- Include an Icon to show what the weather is sunny/cloudy/rainy
- Add a button to cycle to next quote/picture
- Could you encorporate a deadline for some of the tasks
- Add a settings so user can change to a new "theme" (font, background colors, etc.)
- Clicking the weather should let the user toggle between Celsius, Fahrenheit, or even Kelvin display
- `BONUS DIFFICULTY` The todo list shouldn't have to redraw every item just because one of them changed. 
    - If you think through some of the actions being performed you might find a way to optimize the list by only updating the one todo that changes at a time
    - Everytime you update a todo you shouldn't have to re-`get` the entire list you already know what changed about the one todo

---------------------------------

## REQUIREMENTS:
 - `Visualization`
   - The data from the services are each rendered. 
        - Quote (quote and author)
        - Image (only the image is required, however feel free to include other data)
        - Weather (The temp is displayed, feel free to add other pieces)
        - Todo (the new todo form exists, and any todos are rendered *GET*)
   - The image should be on large display with at least one other element positioned over the top of the image.
   - A form to add a new todo can be accessed and when submitted the page does not reload
 - `Functionality`
    - Todo's can be added to a list (POST)
    - Todo's can be removed (DELETE)
    - Todo's can be marked complete (PUT)
    - The todolist shows the total count of tasks currently being tracked
    - The todolist takes advantage of Vuex to provide persistent data
    - Utilize the vue-router to have at least two different paths/views in your application

### Finished?
When You are finished please submit the link to the project in the backpack
