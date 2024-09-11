
# Selenium Web Automation

Web automation with Selenium enables testing and automating interactions with web applications across different browsers.


## Features

- Page Object Model
- Cross-Browser Testing
- Element Interaction

## What To Test

In this web automation testing, the [SAUCEDEMO](https://www.saucedemo.com/) website is used.  
Which is a sample e-commerce platform designed for testing and practicing web automation, featuring login, product browsing, and cart functionalities.  
I use Google Chrome/chromedriver as the web browser for my testing.
## Scenario List

- Success login with valid credential
- Failed login with invalid credential
- Success add item to cart


## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Download and add WebDriver Executable

```bash
  https://googlechromelabs.github.io/chrome-for-testing/
  save it inside "chromedriver" folder
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


## Demo

![selenium1](https://github.com/user-attachments/assets/8f331f7e-7346-4e1b-8bc6-382fb54a44b7)


