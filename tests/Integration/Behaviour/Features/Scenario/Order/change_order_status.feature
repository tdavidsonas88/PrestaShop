@reset-database-before-feature
Feature: Orders statuses from Back Office
  In order to change statuses of multiple orders
  As a Back Office (BO) user
  I need to be able to select multiple orders on the Orders page, then Change Order Status by choosing status from list

  Scenario: Change status of multiple orders
    Given there are 2 existing orders
    When I update 2 orders to statusId 5
    Then each of 2 orders should contain statusId 5


