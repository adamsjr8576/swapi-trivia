## SWAPI-trivia

### Overview:

- SWAPI-trivia is an informational directory application created over 8 days based around the Star Wars universe. A user can login with their name, favorite Star Wars quote, and chosen skill level. Providing there are no login errors the user can scroll through the list of Star Wars classics that are fetched from a third party API. A user can select a movie, upon this selection another fetch is run for the character information. There are a number of smaller API calls that make up this information. The user also has the ability to keep track of their favorite characters via the heart icon. If a user forgets their skill level they can hover over the Falcon to get their information. May the force be with you!\
### Setup:

1) You can clone down this repo and run: `npm install`

2) To verify that it is setup correctly, run `npm start` in your terminal. Go to `http://localhost:3000/` and you should see a page asking for login information. 

### Tech Stack:

- React
- React Router
- Javascript
- Scss / HTML
- Jest / Enzyme
- npm
- node
- Webpack
- Web APIs via the Fetch method

### Challenges and Wins:
- Challenges: This project had a main learning goal of understanding nested fetch requests and managing response time. This was a very clear challenge having never attempted this before. We had to get familiar with breaking out our fetch requests into smaller more manageable functions. It was important for us to keep in mind when we were making our fetch calls in order not to slow down the page. 
- Wins: We felt that we did a solid job of completing the above challenges first and foremost. Secondly to the API calls we were very proud of the styling for this application. We included the classic Star Wars text scroll and a few other micro-interactions to increase the UI/UX

### Screenshots:

Login Screen:

<img width="1430" alt="Screen Shot 2019-12-10 at 4 51 58 PM" src="https://user-images.githubusercontent.com/49846853/70579503-1459bf80-1b6e-11ea-8edb-1c0882384cc8.png">

Movie Container:
<img width="1430" alt="Screen Shot 2019-12-10 at 4 53 09 PM" src="https://user-images.githubusercontent.com/49846853/70579504-1459bf80-1b6e-11ea-9980-a1aa04272ea5.png">

Character Container:
![screencapture-localhost-3000-2019-12-10-16_50_22](https://user-images.githubusercontent.com/49846853/70579505-1459bf80-1b6e-11ea-887d-7df52f203895.png)
