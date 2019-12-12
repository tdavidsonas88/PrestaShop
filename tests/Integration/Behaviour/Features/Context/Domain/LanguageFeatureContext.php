<?php


namespace Tests\Integration\Behaviour\Features\Context\Domain;


use Behat\Gherkin\Node\TableNode;
use PHPUnit_Framework_Assert;
use PrestaShop\PrestaShop\Core\Domain\Language\Command\AddLanguageCommand;
use PrestaShop\PrestaShop\Core\Domain\Language\Exception\LanguageConstraintException;
use PrestaShop\PrestaShop\Core\Domain\Language\Exception\LanguageNotFoundException;
use PrestaShop\PrestaShop\Core\Domain\Language\Query\GetLanguageForEditing;
use PrestaShop\PrestaShop\Core\Domain\Language\QueryResult\EditableLanguage;
use PrestaShop\PrestaShop\Core\Domain\Language\ValueObject\IsoCode;
use PrestaShop\PrestaShop\Core\Domain\Language\ValueObject\LanguageId;
use PrestaShop\PrestaShop\Core\Domain\Language\ValueObject\TagIETF;
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
     * @Then language with id :languageId should have the following properties:
     *
     * @param int $languageId
     * @param TableNode $table
     *
     * @throws LanguageConstraintException
     * @throws ServiceCircularReferenceException
     * @throws ServiceNotFoundException
     */
    public function languageWithIdShouldHaveTheFollowingProperties(int $languageId, TableNode $table)
    {
        $data = $table->getRowsHash();
        /** @var EditableLanguage $expectedEditableLanguage */
        $expectedEditableLanguage = $this->mapToEditableLanguage($languageId, $data);

        /** @var EditableLanguage $editableLanguage */
        $editableLanguage = $this->getQueryBus()->handle(new GetLanguageForEditing($languageId));

        PHPUnit_Framework_Assert::assertEquals($expectedEditableLanguage, $editableLanguage);
    }

    /**
     * @param int $languageId
     * @param array $data
     *
     * @return EditableLanguage
     *
     * @throws LanguageConstraintException
     */
    private function mapToEditableLanguage(int $languageId, array $data)
    {
        return new EditableLanguage(
            new LanguageId($languageId),
            $data['name'],
            new IsoCode($data['iso_code']),
            new TagIETF($data['tag_ietf']),
            $data['short_date_format'],
            $data['full_date_format'],
            BoolParser::castToBool($data['is_rtl']),
            BoolParser::castToBool($data['is_active']),
            array($data['shop_association_id'])
        );
    }
}
