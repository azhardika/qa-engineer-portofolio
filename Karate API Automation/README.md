
# Karate API Automation

Karate simplifies API testing with a built-in DSL for writing tests, data-driven capabilities, and easy JSON assertions.


## Features

- Auto-generated report
- Scenario tag
- Readable Syntax
- Data-table test cases


## What To Test

In this API automation testing, the [REQRES](https://reqres.in/) website is used  
which provides a set of RESTful APIs for testing and prototyping.
## Scenario List

- GET user list by page
- GET single user details by user id
- failed GET single user details by user id - user not exist
- POST Register User
- POST Create New User
- Failed POST Register User *(3 data-table test cases)*
- DELETE User by User Id



## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  mvn install
```

Run the test for all scenario

```bash
  mvn test
```

Run the test for specific scenario based on scenario tag

```bash
  mvn test -D"karate.options=--tags @your_tag_here"
```


## Demo

![karate1](https://github.com/user-attachments/assets/9b970d2d-d19b-491c-b00c-1ce8e8c0e8d8)
![karate2](https://github.com/user-attachments/assets/88f42c2b-f726-416d-a2f1-fc1ea006a626)



