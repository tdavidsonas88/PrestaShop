# ./vendor/bin/behat -c tests/Integration/Behaviour/behat.yml -s order_message --name="VIP Order message"
@reset-database-before-feature
Feature: VIP Order message
  In Order VIP customers receive prepared specialised messages
  As BO user
  I need to be able to save these messages in advance

  Scenario: add new VIP order message
    When I add VIP message "bo_vip_message" with following details:
      | name                | message1       |
      | message             | bla bla bla    |
      | vip message         | very important |
    Then VIP message "bo_vip_message" should have following details:
      | name                | message1       |
      | message             | bla bla bla    |
      | vip message         | very important |

