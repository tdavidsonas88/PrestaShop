<?php


namespace Tests\Integration\Behaviour\Features\Context\Domain;


use Behat\Behat\Tester\Exception\PendingException;
use Behat\Gherkin\Node\TableNode;
use PrestaShop\PrestaShop\Core\Domain\Language\Command\AddLanguageCommand;
use PrestaShop\PrestaShop\Core\Domain\Language\Exception\LanguageConstraintException;
use PrestaShop\PrestaShop\Core\Domain\Language\Exception\LanguageNotFoundException;
use PrestaShop\PrestaShop\Core\Domain\Language\Query\GetLanguageForEditing;
use PrestaShopBundle\Utils\BoolParser;
use Symfony\Component\DependencyInjection\Exception\ServiceCircularReferenceException;
use Symfony\Component\DependencyInjection\Exception\ServiceNotFoundException;

class LanguageFeatureContext extends AbstractDomainFeatureContext
{
    /**
     * @Given there is language with id :languageId
     *
     * @param int $languageId
     *
     * @throws ServiceCircularReferenceException
     * @throws ServiceNotFoundException
     */
    public function thereIsLanguageWithId(int $languageId)
    {
        $this->getQueryBus()->handle(new GetLanguageForEditing($languageId));
    }

    /**
     * @Given there is no language with id :languageId
     *
     * @param int $languageId
     *
     * @throws ServiceCircularReferenceException
     * @throws ServiceNotFoundException
     */
    public function thereIsNoLanguageWithId(int $languageId)
    {
        try {
            $this->getQueryBus()->handle(new GetLanguageForEditing($languageId));
        } catch (LanguageNotFoundException $exception) {
            return;
        }
    }

    /**
     * @When I add new language with the following properties:
     *
     * @param TableNode $table
     * @throws LanguageConstraintException
     *
     * @throws ServiceCircularReferenceException
     * @throws ServiceNotFoundException
     */
    public function iAddNewLanguageWithTheFollowingProperties(TableNode $table)
    {
        $data = $table->getRowsHash();
        $this->getCommandBus()->handle(new AddLanguageCommand(
            $data['name'],
            $data['iso_code'],
            $data['tag_ietf'],
            $data['short_date_format'],
            $data['full_date_format'],
            $data['flag_image_path'],
            $data['no_picture_image_path'],
            BoolParser::castToBool($data['is_rtl']),
            BoolParser::castToBool($data['is_active']),
            array($data['shop_association_id'])
        ));
    }

    /**
     * @Then language with id :arg1 should have the following properties:
     */
    public function languageWithIdShouldHaveTheFollowingProperties($arg1, TableNode $table)
    {
        throw new PendingException();
    }

}
