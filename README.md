# chingu-calendar-backend

This is the backend server for my calendar application.

To run locally:
1) fork the code into a folder of your choosing, make sure you cd into the application in the terminal, and **ensure that you're on the 'main'** branch

2) install the following dependencies in your terminal: 
    "cors", 
    "cors-anywhere", 
    "express", 
    "pg", 
    "pg-hstore", 
    "postgres", and "sequelize"
    
3) download the postgres client, and set up a database in the normal fasion. Next, go to app/config/db.config.js. Fill in HOST, USER, PASSWORD, DB, with your chosen variables, and set dialect: 'postgres'

4) now you're ready to start the server. run the command 'node server.js' in your terminal.
