# Final Project

![SteamLogo](https://cdn.worldvectorlogo.com/logos/steam.svg)

Analysts: Sarah Zachrich, Madison Chamberlain, Kevin Schram, Robin Bun, Andrew Marino, Solongo Tserenkhand

Project Site: https://sarahz22.github.io/Final_Project_Steam_Analysis/ \
Tableau Site: https://public.tableau.com/profile/robin.bun#!/vizhome/final_project_16058429925040/Sheet1 \
Machine Learning hosted on Heroku: https://videogamebootcampapp.herokuapp.com/ \

### Project Overview:
This project is a continuation of our previous project: (https://github.com/SarahZ22/Project_2_Data_Visualization)

This project focuses on retrieving and analyzing data from Steam, a cloud-based gaming library that allows users the ability to use any computer to access their content.

For this project our team wanted to utilize Machine Learning to predict whether games will be a hit or not based off the game's metacore and price. 
We also wanted to utilize Tableau to different game ownership trends.

We have defined a game as a hit based off when the game ownership is over the median.

##### Data Sources:
-https://gamedb.online/ \
-https://steamspy.com/ \
-https://steamdb.info/

The following data was scraped from our data sources: metascores, game price, Steam ID, game name, developer, publisher, genre, and number of owners, and tags. 

To clean the data, we split the genres, tags, and the owners to minimum and maximum owners. The NaN values were removed.
The cleaned data was place into a SQL and SQLite database. The data was also used with Tableau to create some visualizations.
The cleaned data was used to create a machine learning model to predict whether the game would be a hit.

The machine learning, tableau visualizations and visualizations were displayed on a webpage where JQuery was utilized.

From our findings, game developers could use our machine learning to help with the following: 
1. Predict on how popular a game will be 
2. Determine what type of games are the most successful 
3. Gamers can filter through our results to find games similar to ones they already enjoy 

The following questions still arise from this as something to think about: 
1. How does the platform a game is released on determine its’ popularity? 
2. Does the size of the developing company impact the success of the game such as large developers vs. indie developers? 
3. How does user inputs such as reviews impact game ownership and popularity?
