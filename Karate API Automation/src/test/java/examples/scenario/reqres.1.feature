@reqres1 @all
Feature: to test API on reqres

  Background:
    * def baseUrl = karate.get('configBaseUrl')

  @positive @get @tt
  Scenario: GET user list by page
    * def page = 1
    * def testUrl = baseUrl + '/users/?page=' + page
    Given url testUrl
    When method get
    Then status 200
    And match response.page == page
    And match response.per_page == 6
    And match response.data[0].id == 1

  @positive @get
  Scenario: GET single user details by user id
    * def userId = 9
    * def testUrl = baseUrl + '/users/' + userId
    Given url testUrl
    When method get
    Then status 200
    And match response.data.id == userId
    And match response.data.first_name == 'Tobias'

  @negative @get
  Scenario: Failed GET single user details by user id - user not exist
    * def userId = 99
    * def testUrl = baseUrl + '/users/' + userId
    Given url testUrl
    When method get
    Then status 404