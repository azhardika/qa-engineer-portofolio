@login
Feature: Login Test

Background:
  Given user is on Login page

@tc1 @positive @pass
Scenario Outline: Success Login - <case>
  When user input "<username>" as username
  And user input "<password>" as password
  And user click login button
  Then user is redirected to Home page
  Examples:
  | case          | username      | password     |
  | Standard User | standard_user | secret_sauce |
  | Problem User  | problem_user  | secret_sauce |

@tc2 @negative @pass
Scenario Outline: Failed Login - <case>
  When user input "<username>" as username
  And user input "<password>" as password
  And user click login button
  Then user shown error message "Epic sadface: Username and password do not match any user in this service"
  Examples:
  | case           | username      | password     |
  | Wrong Username | you_wrong     | secret_sauce |
  | Wrong Password | standard_user | you_wrong    |

@tc3 @failedScenario
Scenario: Success Login - Visual User
  # to test failed test case (without password) and take a screenshot
  When user input "visual_user" as username
  And user click login button
  Then user is redirected to Home page