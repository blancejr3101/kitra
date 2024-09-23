# kitra

Kitra is a game where users can collect treasures in a given latitude and longitude. Every treasure
that is collected will have points based on the monetary value. A treasure may have more than
one money value, it depends on the user’s luck. Kitra users may get the highest money from the
treasure that has been collected

## Setting up

### First is to install the necessary dependencies.

```bash
npm install
```

### Third, you need to setup the environment variable.

Please create a new `.env` file at the root directory of the project and copy paste the following key value pairs.

```bash
ENV=LOCAL
PORT=3000
MYSQL_DB_USERNAME=localhost:3306
MYSQL_DB_USERNAME=root
MYSQL_DB_PASSWORD=your_password
MYSQL_DB_NAME=kitra
```

### Third, you need to setup the environment variable.

fourth got to config/database.js file and update your password it is used for migrating and seeder.

```bash
{
  "development": {
    "username": "root",
    "password": "password",
    "database": "kitra",
    "host": "127.0.0.1",
    "dialect": "mysql"
}
```

### next, you need to execute this commands in mysql command line to create database of kitra before migration

```bash
mysql -u root -p
```

```bash
 CREATE DATABASE kitra;
```

### once Database kitra created manually execute this command in project

```bash
npm run migrate-data
```

### after migration, you can run the application using this command

```bash
npm run start
```

## API ENDPOINTS

### USE POSTMAN FOR TESTING

### Find treasure boxes within 1km/10 (km) with the following input:

### Distance only accepts 1km/10km and any other value must not be accepted

```bash

--request GET \
http://localhost:3000/api/treasure/hunt


--body
{
    "latitude": 14.552036595352455,
    "longitude": 121.01696118771324,
    "distance": 10
}
```

### Find treasure boxes within 1km/10 (km) with the following input:
### amt is an optional input. However, the prize value only 
### accepts a range of $10 to $30. Only whole numbers are accepted. Values such as $10.50, $10.40 
### should not be accepted as they are decimal values. 
### If a treasure has prize value $10, $20, $30. Only the minimum value must be considered.

```bash
--request GET \
http://localhost:3000/api/treasure/hunt

--body
{
    "latitude": 14.552036595352455,
    "longitude": 121.01696118771324,
    "distance": 10,
    "amt": 30
}
```



### bonus endpoint Find User By id

```bash
--request get/
http://localhost:3000/api/user/getUserById

--body
{
    "id": 3000
}
```

