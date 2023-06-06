# WriteGirl

Welcome to team WriteGirl's github repo! This project is a mobile writing exercise app called Bold Ink.

## Frontend
In order to run the frontend, first navigate to frontend/WriteGirl/

Make sure everthing is up to date with the following command:
```
yarn install
```

Then, run the following yarn command:
```
yarn start
```

You should now see the following:
![alt text](Tutorial%20Images/StartingMetro.png)

You can download expo, the Expo Go app, and  scan the QR code using the Expo Go app if you’re an android user or  simply use your phone camera if you're an iphone user.

Alternatively, you can open the app on a web browser for quicker testing by entering 'w'.


Further instructions on how to set up the environment, clone the repo, etc. can be found in the WriteGirl "Frontend Setup" documentation

## Backend

In order to run the backend, first navigate to backend/

### Setting up Postgres

Open a new terminal window

Open a new terminal window
Start the psql server. For mac, you can use the command 
```
pg_ctl -D /usr/local/var/postgres start 
```
in your terminal. Then, open a psql shell with admin privileges. For mac, use the command 
```
psql postgres 
```
You should now be connected to the database and your terminal should say 
```
postgres=# 
```
You are now in the psql shell!

`` NOTE: For additional information on how to troubleshoot this process or run the project as a windows user, please refer to the Backend Tutorial called "Ipek Teaches Backend"``

If you haven't created a database yet run the following commands, otherwise please skip this step

```
postgres=> CREATE DATABASE sampledb;
```

Now that you have created your postgres server, you can start populating it! I would recommend using Postman

### Creating New Inquiries

Please refer to the Backend Tutorial called "Ipek Teaches Backend" in order to learn how to create new inquiries and modify existing ones

### How to run backend
Open a new terminal window

Start the psql server. For mac, use the command 
```
pg_ctl -D /usr/local/var/postgres start 
```
in your terminal. For windows, follow the tutorial. Then, open a psql shell with admin
privileges. For mac, use the command 
```
psql postgres
```
For windows, once again follow the tutorial. 

You should now be connected to the database and your terminal should say
```
 “postgres=#”
 ```
 
Now that we have the psql shell running, open a new terminal window and navigate to the backend folder

In the backend root directory, if you are a Mac user run:
``` 
yarn install 
```
and then 
```
yarn start
```
Windows users should run these commands in bash (through Windows Subsystem for Linux, aka WSL)

You can go to http://localhost:8000/api/random to make sure everything is running smoothly! When you refresh the page you should see that a random number is generated

Please refer to the backend documentation if you run into any trouble


