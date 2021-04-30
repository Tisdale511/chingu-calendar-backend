# chingu-calendar-backend

This is the backend server for my calendar application.

To run locally:
1) fork the code into a folder of your choosing, make sure you cd into the application in the terminal, and **ensure that you're on the 'main'** branch

2) install the following dependencies in your terminal: 
    "cors": "^2.8.5",
    "cors-anywhere": "^0.4.4",
    "express": "^4.17.1",
    "pg": "^8.6.0",
    "pg-hstore": "^2.3.3",
    "postgres": "^1.0.2",
    "sequelize": "^6.6.2",
    
3) download the postgres client, and set up a database in the normal fasion. Next, go to app/config/db.config.js. Fill in HOST, USER, PASSWORD, DB, with your chosen variables, and set dialect: 'postgres'

4) now you're ready to start the server. run the command 'node server.js' in your terminal.
