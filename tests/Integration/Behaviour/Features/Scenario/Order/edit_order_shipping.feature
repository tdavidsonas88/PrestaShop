@reset-database-before-feature
Feature: Edit order shipping details from Back Office
  PrestaShop allows to Edit shipping details of the chosen order
  As a BO user
  I need to be able to go to order view, select Shipping and Edit/Update shipping details

Background:
  Given the current currency is "USD"

Scenario: Update order shipping details
  Given there is existing order with reference "XKBKNABJK"





