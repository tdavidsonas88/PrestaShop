<?php
/**
 * 2007-2020 Friends of PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0).
 * It is also available through the world-wide-web at this URL: https://opensource.org/licenses/AFL-3.0
 */

namespace Tests\Unit\Adapter;

use Cart;
use Context;
use Country;
use Currency;
use Customer;
use Language;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;
use PrestaShop\PrestaShop\Adapter\ContextStateManager;

class ContextStateManagerTest extends TestCase
{
    public function testCartState()
    {
        $context = $this->createContextMock([
            'cart' => $this->createContextFieldMock(Cart::class, 42),
        ]);
        $this->assertEquals(42, $context->cart->id);

        $contextStateManager = new ContextStateManager($context);
        $contextStateManager->setCart($this->createContextFieldMock(Cart::class, 51));
        $this->assertEquals(51, $context->cart->id);

        $contextStateManager->setCart($this->createContextFieldMock(Cart::class, 69));
        $this->assertEquals(69, $context->cart->id);

        $contextStateManager->restoreContext();
        $this->assertEquals(42, $context->cart->id);
    }

    public function testCountryState()
    {
        $context = $this->createContextMock([
            'country' => $this->createContextFieldMock(Country::class, 42),
        ]);
        $this->assertEquals(42, $context->country->id);

        $contextStateManager = new ContextStateManager($context);
        $contextStateManager->setCountry($this->createContextFieldMock(Country::class, 51));
        $this->assertEquals(51, $context->country->id);

        $contextStateManager->setCountry($this->createContextFieldMock(Country::class, 69));
        $this->assertEquals(69, $context->country->id);

        $contextStateManager->restoreContext();
        $this->assertEquals(42, $context->country->id);
    }

    public function testCurrencyState()
    {
        $context = $this->createContextMock([
            'currency' => $this->createContextFieldMock(Currency::class, 42),
        ]);
        $this->assertEquals(42, $context->currency->id);

        $contextStateManager = new ContextStateManager($context);
        $contextStateManager->setCurrency($this->createContextFieldMock(Currency::class, 51));
        $this->assertEquals(51, $context->currency->id);

        $contextStateManager->setCurrency($this->createContextFieldMock(Currency::class, 69));
        $this->assertEquals(69, $context->currency->id);

        $contextStateManager->restoreContext();
        $this->assertEquals(42, $context->currency->id);
    }

    public function testCustomerState()
    {
        $context = $this->createContextMock([
            'customer' => $this->createContextFieldMock(Customer::class, 42),
        ]);
        $this->assertEquals(42, $context->customer->id);

        $contextStateManager = new ContextStateManager($context);
        $contextStateManager->setCustomer($this->createContextFieldMock(Customer::class, 51));
        $this->assertEquals(51, $context->customer->id);

        $contextStateManager->setCustomer($this->createContextFieldMock(Customer::class, 69));
        $this->assertEquals(69, $context->customer->id);

        $contextStateManager->restoreContext();
        $this->assertEquals(42, $context->customer->id);
    }

    public function testLanguageState()
    {
        $context = $this->createContextMock([
            'language' => $this->createContextFieldMock(Language::class, 42),
        ]);
        $this->assertEquals(42, $context->language->id);

        $contextStateManager = new ContextStateManager($context);
        $contextStateManager->setLanguage($this->createContextFieldMock(Language::class, 51));
        $this->assertEquals(51, $context->language->id);

        $contextStateManager->setLanguage($this->createContextFieldMock(Language::class, 69));
        $this->assertEquals(69, $context->language->id);

        $contextStateManager->restoreContext();
        $this->assertEquals(42, $context->language->id);
    }

    public function testNullField()
    {
        $context = $this->createContextMock([
            'language' => null,
        ]);
        $this->assertNull($context->language);

        $contextStateManager = new ContextStateManager($context);
        $contextStateManager->setLanguage($this->createContextFieldMock(Language::class, 51));
        $this->assertEquals(51, $context->language->id);

        $contextStateManager->setLanguage($this->createContextFieldMock(Language::class, 69));
        $this->assertEquals(69, $context->language->id);

        $contextStateManager->restoreContext();
        $this->assertNull($context->language);
    }

    public function testMultipleFields()
    {
        $context = $this->createContextMock([
            'cart' => $this->createContextFieldMock(Cart::class, 42),
            'country' => $this->createContextFieldMock(Country::class, 42),
            'currency' => $this->createContextFieldMock(Currency::class, 42),
            'customer' => $this->createContextFieldMock(Customer::class, 42),
            'language' => $this->createContextFieldMock(Language::class, 42),
        ]);
        $this->assertEquals(42, $context->cart->id);
        $this->assertEquals(42, $context->country->id);
        $this->assertEquals(42, $context->currency->id);
        $this->assertEquals(42, $context->customer->id);
        $this->assertEquals(42, $context->language->id);

        $contextStateManager = new ContextStateManager($context);
        $contextStateManager
            ->setCart($this->createContextFieldMock(Cart::class, 51))
            ->setCountry($this->createContextFieldMock(Country::class, 51))
            ->setCurrency($this->createContextFieldMock(Currency::class, 51))
            ->setCustomer($this->createContextFieldMock(Customer::class, 51))
            ->setLanguage($this->createContextFieldMock(Language::class, 51))
        ;

        $this->assertEquals(51, $context->cart->id);
        $this->assertEquals(51, $context->country->id);
        $this->assertEquals(51, $context->currency->id);
        $this->assertEquals(51, $context->customer->id);
        $this->assertEquals(51, $context->language->id);

        $contextStateManager->restoreContext();

        $this->assertEquals(42, $context->cart->id);
        $this->assertEquals(42, $context->country->id);
        $this->assertEquals(42, $context->currency->id);
        $this->assertEquals(42, $context->customer->id);
        $this->assertEquals(42, $context->language->id);
    }

    /**
     * @param string $className
     * @param int $objectId
     *
     * @return MockObject|Cart|Country|Currency|Customer|Language
     */
    private function createContextFieldMock(string $className, int $objectId)
    {
        $contextField = $this->getMockBuilder($className)
            ->disableOriginalConstructor()
            ->getMock();

        $contextField->id = $objectId;

        return $contextField;
    }

    /**
     * @param array $contextFields
     *
     * @return MockObject|Context
     */
    private function createContextMock(array $contextFields)
    {
        $contextMock = $this->getMockBuilder(Context::class)
            ->disableOriginalConstructor()
            ->getMock();

        foreach ($contextFields as $fieldName => $contextValue) {
            $contextMock->$fieldName = $contextValue;
        }

        return $contextMock;
    }
}
