<?php


namespace Tests\Integration\Behaviour\Features\Context\Domain;


use Behat\Behat\Tester\Exception\PendingException;
use Behat\Gherkin\Node\TableNode;

class VIPOrderMessageContext extends AbstractDomainFeatureContext
{
    /**
     * @When I add VIP message :vipOrderMessageReference with following details:
     *
     * @param string $vipOrderMessageReference
     * @param TableNode $table
     */
    public function addVipMessageWithFollowingDetails(string $vipOrderMessageReference, TableNode $table)
    {
        throw new PendingException();
    }

    /**
     * @Then VIP message :arg1 should have following details:
     */
    public function vipMessageShouldHaveFollowingDetails($arg1, TableNode $table)
    {
        throw new PendingException();
    }

}
