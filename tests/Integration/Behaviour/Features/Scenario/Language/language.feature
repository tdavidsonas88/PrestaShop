@reset-database-before-feature
Feature: Language
  In order to manage the languages you will see in your administration panel and your shop
  As a Back Office user
  I should be able to do actions with language: get, add, edit, delete, toggle, bulk toggle/delete

  Scenario: Add new language
    Given there is language with id 1
    And there is no language with id 2
    When I add new language with the following properties:
      | name                  | France      |
      | iso_code              | fr          |
      | tag_ietf              | fr-fr       |
      | short_date_format     | Y-m-d       |
      | full_date_format      | Y-m-d H:i:s |
      | flag_image_path       |             |
      | no_picture_image_path |             |
#      | flag_image_path       | /tmp/phpHimEFi            |
#      | no_picture_image_path | /tmp/phpszcohu            |
      | is_rtl                | false       |
      | is_active             | false       |
      | shop_association      | false       |
    Then language with id 2 should have the following properties:
      | name                  | France      |
      | iso_code              | fr          |
      | tag_ietf              | fr-fr       |
      | short_date_format     | Y-m-d       |
      | full_date_format      | Y-m-d H:i:s |
      | flag_image_path       |             |
      | no_picture_image_path |             |
#      | flag_image_path       | /tmp/phpHimEFi            |
#      | no_picture_image_path | /tmp/phpszcohu            |
      | is_rtl                | false       |
      | is_active             | false       |
      | shop_association      | false       |

