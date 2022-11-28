# React homework

Notice: all tasks should be completed in one codesandbox.

## React. Components

### What should be done:

1. Create a new app using the React template on https://codesandbox.io
2. Use class components. Using hooks is forbidden at this stage.
3. Draw the Search Bar and Cards in the div tag with id "search-bar". Try to make it simple.
* examples of Search Bar:\
https://studio.uxpincdn.com/studio/wp-content/uploads/2020/09/BlogHeader_SearchBar_1200x600.png \
https://www.sliderrevolution.com/wp-content/uploads/2021/02/cssheader1.jpg \
Input value should be saved to LocalStorage during component’s unmount. During the initialization pick the value from LocalStorage and show it.
* examples of Cards: \
https://www.webdesignerdepot.com/cdn-origin/uploads/2017/01/behance.jpg \
https://www.webdesignerdepot.com/cdn-origin/uploads/2017/01/rightmove.jpg \
https://www.webdesignerdepot.com/cdn-origin/uploads/2017/01/awwwards.jpg \

All logical parts should be set into separate components.
## React. Forms

### What should be done:

1. Create a component with form in a new div tag with id "form-component".
2. Form should be implemented using uncontrolled components.
3. Add functionality to your app:
   +  Collect information through a form
   +  You can collect any type of information, but form has to include at least one control of the following types:
      + text input
      + date input
      + dropdown/select
      + checkbox
      + switcher
      + file upload (image)

   **Example:**
     ```
     text input - name, surname, zip-code;
     date input - birthday, date of delivery;
     dropdown/select - list of countries, list of states (User can choose only one element from the list)
     checkbox - "I consent to my personal data" field, list of extra presents (User can choose several items from the list)
     switcher - male/female, "I want to receive notifications about promo, sales, etc." / "I don’t want to receive notifications about promo, sales, etc."
     file upload - profile picture
     ```

   After the Submit button is clicked, all data from the form has to be displayed as Card in the cards list below the form. The confirmation message (with information that the data has been saved) should be displayed, after that form has to be cleared.
   
   The quantity of cards should equal the number of form submissions (if the user filled in and submitted the form five times, then five cards have to be displayed under the form).

   **Form validation**
   
   Validation should happen after the **Submit** button was clicked. In case some field was filled incorrectly, then error messages should be displayed under it. The card mustn’t be created until the user fixes all errors.
   
   After changing the value of erroneous input, the reset should happen only for this particular field, but not for the others.
   
   Submit button should be disabled at initialization (before the first typing), and until the user fixes all errors.

All logical parts should be extracted into components.
   
All data must be stored in a local state of the component.
   
Components should not make calls to APIs.

  **The usage of Redux or any other solutions for state management is prohibited.**

  **The usage of any libraries with components or form libraries is prohibited.** 

## React. API

### What should be done:

1. Choose an API.
   There are several recommended APIs. But you may choose any other API that you prefer if it supports search, pagination and sorting.
   - https://www.flickr.com/services/api/flickr.photos.search.html
   - https://the-one-api.dev/documentation
   - https://rickandmortyapi.com/documentation/
   - https://developers.themoviedb.org/3/getting-started/introduction
   - https://pipedream.com/apps/swapi
   - https://github.com/public-apis/public-apis
     **The API should support searching, pagination and sorting. Although you don’t need it at this stage, but there’s a good chance it might come in handy later.**
2. Use the search page from the first part and rewrite it. Split it into 2 logical parts:
   - **Search bar.** Enter text -> Press Enter -> Send the request to API with the searching parameters -> the list of results is updating
   - **The result list of searching**: display the data that the API query returned using Cards.
3. A customer decided to change requirement. Now every element of the list has to show a small piece of information. After the click on the element we have to show all the  available information about the element in the modal window. The modal window should be closed by clicking on the cross button in the upper right corner or by clicking on a page outside the modal window. When we open a modal window the page should be covered with overlay.
4. Create a download indicator (a component with animation, or at least with the string "Downloading"). You should place this indicator with your own sense of beauty.

All the logical parts must be in separated components.
**User-friendly interface with the downloading indicator and with notification messages in a case if something goes wrong or some information cannot be found is warmly welcome.**

## React. Hooks

### What should be done:

1. Retain the functionality and rewrite the Search Bar and Cards with the hooks.
2. Retain the functionality and rewrite the form with React Hook Form.

## React. Custom app state

### What should be done:

1. Implement state management solution using useReducer and Context API for search results and form data saving. Now, when switching between pages, all data should be saved.
2. Add to global state
    - **switches for sorting** (at least three sorting options). Select a parameter -> send a request to the API with the entered parameter -> the list of search results is updated
    - **switches for pagination.** It should be possible to select the number of results per page and the number of the page we are currently on, the total number of pages. Select a parameter -> send a request to the API with the entered parameter -> the list of search results is updated
3. The customer has changed the requirements for the output: 
    - Now, when you click on each item from the search results, you do not need to open a modal, but open the information on a separate page. 
    - Also add a "Back" link on this page. 
    - Display the current position in the header. 
    - The detail page should take data from the global state.
    - If there is no data, redirect to the home page.

### Score

The task will be checked by the mentor during the first 6 weeks. Send a codesandbox link to your mentor.

1. React App + components – **9 points**
2. Form + Cards - **12 points**
3. App + API - **12 points**
4. Hooks - **15 points**
5. Custom State Management - **9 points**
6. Sorting and pagination - **3 points**
7. Search details in a separate page - **3 points**

If one of the items mentioned above is not accomplished – grade for the task is **0 points**. If there are direct DOM manipulations – **0 points**.

