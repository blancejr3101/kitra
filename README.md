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
### next, you need to execute this command in mysql command line to create database of kitra before migration
```bash
mysql -u root -p
```

```bash
 CREATE DATABASE kitra;
 ```