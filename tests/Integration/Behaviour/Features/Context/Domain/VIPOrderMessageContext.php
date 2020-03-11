<?php


namespace Tests\Integration\Behaviour\Features\Context\Domain;


use Behat\Gherkin\Node\TableNode;
use PHPUnit\Framework\Assert;
use PrestaShop\PrestaShop\Core\Domain\OrderMessage\Command\AddVIPOrderMessageCommand;
use PrestaShop\PrestaShop\Core\Domain\OrderMessage\ValueObject\OrderMessageId;
use Tests\Integration\Behaviour\Features\Context\SharedStorage;

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
        $testCaseData = $table->getRowsHash();

        $defaultLangId = $this->getContainer()
            ->get('prestashop.adapter.legacy.configuration')
            ->get('PS_LANG_DEFAULT');

        /** @var OrderMessageId $orderMessageId */
        $orderMessageId = $this->getCommandBus()->handle(
            new AddVIPOrderMessageCommand(
                [$defaultLangId => $testCaseData['name']],
                [$defaultLangId => $testCaseData['message']],
                [$defaultLangId => $testCaseData['vip message']]
            )
        );

        SharedStorage::getStorage()->set($vipOrderMessageReference, $orderMessageId->getValue());
    }

    /**
     * @Then VIP message :vipOrderMessageReference should have following details:
     *
     * @param string $vipOrderMessageReference
     * @param TableNode $table
     */
    public function vipMessageShouldHaveFollowingDetails(string $vipOrderMessageReference, TableNode $table)
    {
        $vipOrderMessageId = SharedStorage::getStorage()->get($vipOrderMessageReference);
        /** @var VIPOrderMessage $orderForViewing */
        $vipOrderMessage = $this->getQueryBus()->handle(new GetVIPOrderMessage($vipOrderMessageId));

        $testCaseData = $table->getRowsHash();

        $expectedVIPOrderMessage = $this->mapToVIPOrderMessage($vipOrderMessageId, $testCaseData);
        Assert::assertEquals($expectedVIPOrderMessage, $vipOrderMessage);
    }

    /**
     * @param $vipOrderMessageId
     * @param array $testCaseData
     * @return VIPOrderMessage
     */
    public function mapToVIPOrderMessage($vipOrderMessageId, array $testCaseData): VIPOrderMessage
    {
        $expectedVIPOrderMessage = new VIPOrderMessage();
        $expectedVIPOrderMessage->setId($vipOrderMessageId);
        $expectedVIPOrderMessage->setName($testCaseData['name']);
        $expectedVIPOrderMessage->setMessage($testCaseData['message']);
        $expectedVIPOrderMessage->setVIPMessage($testCaseData['vip_message']);
        return $expectedVIPOrderMessage;
    }

}
