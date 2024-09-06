@reqres2 @all
Feature: to test API on reqres

  Background:
    * def baseUrl = karate.get('configBaseUrl')
    * def readData = read('classpath:data.json')

  @positive @post
  Scenario: POST Register User
    * def testUrl = baseUrl + '/register'
    #Get a list of valid emails supported by Reqres and randomly pick one.
    * def emailList = readData.emails
    * def randomEmail = emailList[Math.floor(Math.random() * emailList.length)]
    * def userRequestBody = 
    """
    {
        "email": "#(randomEmail)",
        "password": "itsmysecret"
    }
    """
    Given url testUrl
    When request userRequestBody
    And method post
    Then status 200
    And match response.id == '#number'
    And match response.token == '#string'

@positive @post
Scenario: POST Create New User
    * def testUrl = baseUrl + '/users'
    * def userName = 'Jason Bourne'
    * def userJob = 'Agent'
    * def userRequestBody = 
    """
    {
        "name": "#(userName)",
        "job": "#(userJob)"
    }
    """
    Given url testUrl
    When request userRequestBody
    And method post
    Then status 201
    And match response.name == userName
    And match response.job == userJob
    And match response.id == '#string'

@negative @post 
Scenario Outline: Failed POST Register User - <case>
    * def testUrl = baseUrl + '/register'
    * def userRequestBody = 
    """
    {
        "email": <email>,
        "password": <password>
    }
    """
    Given url testUrl
    When request userRequestBody
    And method post
    Then status 400
    And match response.error == <error>

    Examples:
    | case                | email                 | password   | error                                           |
    | Empty Email         |                       | "mysecret" | "Missing email or username"                     |
    | Empty Password      | "emma.wong@reqres.in" | ""         | "Missing password"                              |
    | Not Supported Email | "tom.krus@reqres.in"  | "mysecret" | "Note: Only defined users succeed registration" |