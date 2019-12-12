<?php


namespace Tests\Integration\Behaviour\Features\Context\Domain;


use Behat\Behat\Tester\Exception\PendingException;
use Behat\Gherkin\Node\TableNode;

class LanguageFeatureContext extends AbstractDomainFeatureContext
{
    /**
     * @Given there is language with id :languageId
     */
    public function thereIsLanguageWithId(int $languageId)
    {
        throw new PendingException();
    }

    /**
     * @Given there is no language with id :arg1
     */
    public function thereIsNoLanguageWithId($arg1)
    {
        throw new PendingException();
    }

    /**
     * @When I add new language with the following properties:
     *
     * @param TableNode $table
     * @throws PendingException
     */
    public function iAddNewLanguageWithTheFollowingProperties(TableNode $table)
    {
        throw new PendingException();
    }

    /**
     * @Then language with id :arg1 should have the following properties:
     */
    public function languageWithIdShouldHaveTheFollowingProperties($arg1, TableNode $table)
    {
        throw new PendingException();
    }

}
