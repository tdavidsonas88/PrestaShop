@reset-database-before-feature
Feature: Orders statuses from Back Office
  In order to change statuses of multiple orders
  As a Back Office (BO) user
  I need to be able to select multiple orders on the Orders page, then Change Order Status by choosing status from list

  Scenario: Change status of multiple orders
    Given there are 2 existing orders
    And I update 2 orders to status "Awaiting Cash On Delivery validation"
    And I press "Update status"
    #    todo remove
    Then I should see "Successful update."


