@reset-database-before-feature
Feature: Orders statuses from Back Office
  In order to change statuses of multiple orders
  As a Back Office (BO) user
  I need to be able to select multiple orders on the Orders page, then Change Order Status by choosing status from list

  Scenario: Change status of multiple orders
    Given I am logged in as "test@prestashop.com" employee
    And there is customer "customer1" with email "pub@prestashop.com"
    And customer "customer1" has address in "US" country
    And the module "dummy_payment" is installed
    When I create an empty cart "cart1" for customer "customer1"
    And I add 2 products with reference "demo_13" to the cart "cart1"
    And I select "US" address as delivery and invoice address for customer "customer1" in cart "cart1"
    And I set Free shipping to the cart "cart1"
    And I add order "order1" from cart "cart1" with "dummy_payment" payment method and "Awaiting bank wire payment" order status
    And I add order "order2" from cart "cart1" with "dummy_payment" payment method and "Awaiting bank wire payment" order status

#    Given there are 2 orders with Status "Awaiting bank wire payment"
#    And I am on "/admin-dev/index.php/sell/orders/orders"
#    When I select first checkbox on the Orders table with status "Awaiting bank wire payment"
#    And I select second checkbox on the Orders table with status "Awaiting bank wire payment"
#    And I click "Bulk actions"
#    And I click "Change Order Status"
#    And I choose "Awaiting Cash On Delivery validation"
    And I press "Update status"
#    Then I should see "Successful update."


