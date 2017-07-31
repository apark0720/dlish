# dlish

[dlish][website] is an web application inspired by lishfood.com and built using a Rails backend, Postgresql database, and React/Redux frontend. dlish is an original idea where users can order delivery by submitting video recipes.

![dlish splash][splash]
![dlish home index][index]

## Features

Users can use dlish to 1) submit a video recipe 2) upvote user-submitted recipes 3) order recipes with the highest votes.
- User accounts with secure authentication
- Creating a viewable recipe on the index page by submitting a video URL
- Upvote user-submitted recipes
- Recipes are sorted by number of likes, and updates in real-time
- Filtering by flavor profile of recipe
- Order recipes

![dlish project page][project page]

## Implementation

### User Authentication

- Users must be logged in to submit or like a recipe. Clicking these buttons while logged out will redirect you to the login page. All other navigation (viewing the menu, filter etc.) is available even when logged out.

This is achieved through my implementation of Auth routes (routes that cannot be visited once logged in) and Protected routes (routes that cannot be visited unless logged in). React DOM makes this easy by componentizing every route under a switch.

```ruby
<Switch>
  <Route exact path="/" component={ Home } />
  <Route path="/menu" component={ MenuIndexContainer } />
  <Route path="/suggestions" component={ SuggestionIndexContainer } />
</Switch>
```

### Recipes

In order to create a user-friendly UX when submitting a recipe, users do not have to upload a video but can simply submit a youtube URL, which the backend interpolates the unique video ID and separately stores the URL for a static image and utilizes the youtube API for auto-playback. Because dlish does not store any video in its database, loading times are not significantly impacted by the use of video.


### Modals

Modals create a better UX by decreasing redirecting users and potentially losing the data stored in the particular page's state. Four different types of modals were used in dlish:

- Hand-rolled modal by writing actions and reducers for modals. (Login/Signup modal)
- React modal (Menu item show modal)
- React video modal (Suggestion item modal)
- React sliding pane (Order form)


## Technology

dlish is a single-page application built on the following technologies:

### Backend
- Ruby on Rails
- PostgreSQL database
- Hosting on Heroku platform
- Cloudinary for image upload and storage
- BCrypt for password-salting and hashing for a secure authentication system

### Frontend
- React / Redux
- React DOM
- React Router
- jQuery to make AJAX calls to the Rails server.
- React Modal
- React Video Modal
- React Sliding Pane
- Webpack as the bundler for all frontend components. The bundled file is located in `/app/assets/javascripts` and is included in `application.js`.

### Styling & Seed Data

Site layout and styling is written in SCSS and located in the `/app/assets/stylesheets` directory. Major fonts used include Open Sans and Roboto.

## Future Implementations

#### User profile

Users can view and edit their profile which includes a list of their submitted, liked, and orderded recipes.

<!-- [splash]: ./docs/images/splash.png "dlish splash"
[index]: ./docs/images/home_index.png
[project page]: ./docs/images/project_page.png "dlish project page"
[website]: http://dlish.me
[proposal]: docs/README.md
[schema]: docs/schema.md -->
