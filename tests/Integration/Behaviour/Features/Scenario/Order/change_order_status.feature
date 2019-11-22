@reset-database-before-feature
Feature: Orders statuses from Back Office
  In order to change statuses of multiple orders
  As a Back Office (BO) user
  I need to be able to select order/orders and change status

  Background:
    Given the current currency is "EUR"

  Scenario: Change status of multiple orders using Bulk actions
    Given there are 2 existing orders
    When I update 2 orders to statusId 5
    Then each of 2 orders should contain statusId 5

  Scenario: Change status of individual order by clicking on Status column and choosing the status
    Given there are 1 existing orders



