# FresherNote

[Heroku link][heroku] **Note:** This should be a link to your production site

[Trello link][trello]

[heroku]: http://www.herokuapp.com
[trello]: https://trello.com/b/ALgfuX0Q/freshernote

## Minimum Viable Product

dlish is a web application inspired by lishfood.com and massdrop built on a Rails backend
and React/Redux. dlish will contain the following MVP features:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Submit a recipe request
- [ ] Browse and filter food recipes
- [ ] Have a recipe/chef show page
- [ ] Users can view previous orders and pending orders
- [ ] Production README [sample](docs/production_readme.md)

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Recipes model, API, and components (2 days)

**Objective:** Recipes can be created and viewed through the API.

### Phase 3: Joining orders (1.5 days)

**Objective:** Users can join existing orders.

### Phase 4: Filter (1.5 days)

**Objective:** Recipes can be filtered by time, location, price, and category.

### Phase 5: Video embedding and AWS (2 days)

**Objective:** Recipe videos can be viewed on the homepage and index.

### Bonus Features (TBD)
- [ ] Google Maps API
- [ ] Users can favorite orders
- [ ] Users can leave reviews
