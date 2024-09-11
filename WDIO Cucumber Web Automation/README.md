
# WDIO Cucumber Web Automation

WDIO Cucumber Web Automation integrates WebdriverIO with Cucumber to enable behavior-driven development for web testing.

## Features

- Gherkin syntax
- Readable test scenarios
- Scenario tagging
- Auto screenshot when test fail
- Multi browser run

## What To Test

In this web automation testing, the [SAUCEDEMO](https://www.saucedemo.com/) website is used.  
Which is a sample e-commerce platform designed for testing and practicing web automation, featuring login, product browsing, and cart functionalities.   
I use chrome and edge web browser
## Scenario List

- Success login (2 data table)
- Failed login (2 data table)
- A not passed test case (for sceenshot feature)

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
  npm install
```

Run the test for all scenario

```bash
  npx wdio run ./wdio.conf.js
```
Run for spesific scenario based on tag

```bash
  npx wdio run ./wdio.conf.js --cucumberOpts.tags "@your_tag"
```

## Demo

Insert gif or link to demo

