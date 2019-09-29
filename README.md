## Week : 12 Project for Skill Distillery Java Bootcamp

### Concert Tracker

This is an app designed to track various data points about concerts a user has attended. They can use this app to see how many times they have seen a particular artist, how many states have they been to a concert in, or even how many concerts they went to in any given year.

### Concert API Routes:

AWS URL: http://52.14.71.152:8080/ConcertTracker/api/concerts/

##### Testing Via Postman

* [List All Concerts ](http://52.14.71.152:8080/ConcertTracker/api/concerts/)("/concerts") GET
* [Search By Concert ID: ](http://52.14.71.152:8080/ConcertTracker/api/concerts/1)(/"concerts/{id}") GET
* [Edit a Concert: ](http://52.14.71.152:8080/ConcertTracker/api/concerts/1)(/"concerts/{id}") PUT
* [Delete a Concert: ](http://52.14.71.152:8080/ConcertTracker/api/concerts/1)(/"concerts/{id}") DELETE
* [Create a New Concert: ](http://52.14.71.152:8080/ConcertTracker/api/concerts/)(/"concerts") POST

##### To create a new Concert event you will need to copy the fields into the body in Postman. I have provided the template below.

    {
        "artist": "Artist Name",
        "venue": "Venue Name",
        "city": "City",
        "state": "ST",
        "genre": "Type of Music",
        "date": "MM/DD/YYYY"
    }



### New Techniques Used

* REST and RESTful Web Services
* Spring Data JPA
* Creating an API
* Testing Endpoints with Postman

### Technologies Used

* Spring Tools Suite
* Git
* Atom
* Command line/terminal
* MySQL Workbench
* Postman
* MAMP

### Plan of Attack

This is our first project using REST and also my first time using/creating an API. The first thing after setting up the project was to write data to MySQL Workbench so I would have data to test my routes to the API. I then created the repository, service, controller packages and class files needed along with their corresponding tests. This project setup was fairly straight forward, I was able to start working on JPA query builders for multiple options while searching a concerts various data points.
