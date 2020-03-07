<?php


namespace Tests\Integration\Behaviour\Features\Context\Domain;


use Behat\Behat\Tester\Exception\PendingException;
use Behat\Gherkin\Node\TableNode;
use PrestaShop\PrestaShop\Core\Domain\OrderMessage\ValueObject\OrderMessageId;
use Tests\Integration\Behaviour\Features\Context\SharedStorage;

class VIPOrderMessageFeatureContext extends AbstractDomainFeatureContext
{
    /**
     * @When I add VIP message :vipOrderMessageReference with following details:
     *
     * @param string $vipOrderMessageReference
     * @param TableNode $table
     */
    public function addVipMessageWithFollowingDetails(string $vipOrderMessageReference, TableNode $table)
    {
        $testCaseData = $table->getRowsHash();

        /** @var OrderMessageId $orderMessageId */
        $orderMessageId = $this->getCommandBus()->handle(
            new AddOrderVIPMessageFromBackOfficeCommand(
                $testCaseData['name'],
                $testCaseData['message'],
                $testCaseData['vip_message']
            )
        );

        SharedStorage::getStorage()->set($vipOrderMessageReference, $orderMessageId->getValue());
    }

    /**
     * @Then VIP message :arg1 should have following details:
     */
    public function vipMessageShouldHaveFollowingDetails($arg1, TableNode $table)
    {
        throw new PendingException();
    }

}
