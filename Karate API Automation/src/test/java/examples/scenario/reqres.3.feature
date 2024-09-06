@reqres3 @all
Feature: to test API on reqres

  Background:
    * def baseUrl = karate.get('configBaseUrl')

  @positive @delete
  Scenario: DELETE User by User Id
    * def userId = 9
    * def testUrl = baseUrl + '/users/' + userId
    Given url testUrl
    When method delete
    Then status 204
    And match response == ''