@reset-database-before-feature
Feature: Orders statuses from Back Office
  In order to change statuses of multiple orders
  As a Back Office (BO) user
  I need to be able to select multiple orders on the Orders page, then Change Order Status by choosing status from list

  Scenario: Change status of multiple orders
    Given there are 2 orders with Status "Awaiting bank wire payment"
    And I am on "/admin-dev/index.php/sell/orders/orders"
    When I select first checkbox on the Orders table
    And I select second checkbox on the Orders table
    And I click "Bulk actions"
    And I click "Change Order Status"
    And I choose "Awaiting Cash On Delivery validation"
    And I press "Update status"
    Then I should see "Successful update."


