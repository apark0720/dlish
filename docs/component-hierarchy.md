## Component Hierarchy

### AuthFormContainer
  - AuthForm

### HomeContainer
  - NavBar
  - Trendingrecipes

### RecipeContainer
  - Recipe
  - Chef
  - Video
  - Map

### RecipeSubmitFormContainer
  - RecipeSubmitForm


## Routes

|Path                      | Component                     |
|--------------------------|-------------------------------|
| "/signup"                | "AuthFormContainer"           |
| "/login"                 | "AuthFormContainer"           |
| "/"                      | "HomeContainer"               |
| "/recipe/:recipeId"      | "RecipeContainer"             |
| "/recipe/new"	           | "Newrecipe"                  |
