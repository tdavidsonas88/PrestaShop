<?php
/**
 * 2007-2019 PrestaShop SA and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2019 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */

namespace Tests\Integration\Behaviour\Features\Context\Domain;

use Behat\Behat\Tester\Exception\PendingException;
use Exception;
use Order;
use OrderState;
use PrestaShop\PrestaShop\Core\Domain\Cart\Exception\CartConstraintException;
use PrestaShop\PrestaShop\Core\Domain\Employee\Exception\InvalidEmployeeIdException;
use PrestaShop\PrestaShop\Core\Domain\Order\Command\AddOrderFromBackOfficeCommand;
use PrestaShop\PrestaShop\Core\Domain\Order\Command\BulkChangeOrderStatusCommand;
use PrestaShop\PrestaShop\Core\Domain\Order\Exception\OrderException;
use PrestaShop\PrestaShop\Core\Domain\Order\Product\Command\AddProductToOrderCommand;
use PrestaShop\PrestaShop\Core\Domain\Order\ValueObject\OrderId;
use Tests\Integration\Behaviour\Features\Context\SharedStorage;
use PrestaShop\PrestaShop\Core\Domain\Order\Invoice\Command\GenerateInvoiceCommand;
use Product;
use Context;

class OrderFeatureContext extends AbstractDomainFeatureContext
{
    const UPDATE_STATUS = "Update status";
    const SUCCESS_MESSAGE = "";

    /** @var string */
    private $output;

    /**
     * @When I add order :orderReference from cart :cartReference with :paymentModuleName payment method and :orderStatus order status
     */
    public function placeOrderWithPaymentMethodAndOrderStatus(
        $orderReference,
        $cartReference,
        $paymentModuleName,
        $orderStatus
    ) {
        $orderStates = OrderState::getOrderStates(Context::getContext()->language->id);
        $orderStatusId = null;

        foreach ($orderStates as $state) {
            if ($state['name'] === $orderStatus) {
                $orderStatusId = (int) $state['id_order_state'];
            }
        }

        /** @var OrderId $orderId */
        $orderId = $this->getCommandBus()->handle(
            new AddOrderFromBackOfficeCommand(
                (int) SharedStorage::getStorage()->get($cartReference)->id,
                (int) Context::getContext()->employee->id,
                '',
                $paymentModuleName,
                $orderStatusId
            )
        );

        SharedStorage::getStorage()->set($orderReference, new Order($orderId->getValue()));
    }

    /**
     * @When I add :quantity products with reference :productReference, price :price and free shipping to order :orderReference with new invoice
     */
    public function addProductToOrderWithFreeShippingAndNewInvoice(
        $quantity,
        $productReference,
        $price,
        $orderReference
    ) {
        $orders = Order::getByReference($orderReference);
        /** @var Order $order */
        $order = $orders->getFirst();

        $productId = Product::getIdByReference($productReference);

        $this->getCommandBus()->handle(
            AddProductToOrderCommand::withNewInvoice(
                (int) $order->id,
                (int) $productId,
                0,
                (float) $price,
                (float) $price,
                (int) $quantity,
                true
            )
        );
    }

    /**
     * @When I generate invoice for :invoiceReference order
     */
    public function generateOrderInvoice($orderReference)
    {
        $orders = Order::getByReference($orderReference);
        /** @var Order $order */
        $order = $orders->getFirst();

        $this->getCommandBus()->handle(
            new GenerateInvoiceCommand((int) $order->id)
        );
    }

    /**
     * @Given there are :countOfOrders orders with Status :currentStateId
     * @param int $countOfOrders
     * @param int $currentStateId
     * @throws OrderException
     * @throws CartConstraintException
     * @throws InvalidEmployeeIdException
     */
    public function thereAreOrdersWithStatus(int $countOfOrders, int $currentStateId)
    {
        for ($i = 0; $i < $countOfOrders; $i++) {
            /** @var AddOrderFromBackOfficeCommand $addOrderFromBackOfficeCommand */
            $addOrderFromBackOfficeCommand = new AddOrderFromBackOfficeCommand();
            $this->getCommandBus()->handle($addOrderFromBackOfficeCommand);
        }
        throw new PendingException();
    }

    /**
     * @Given I am on :url
     */
    public function iAmOn(string $url)
    {
        throw new PendingException();
    }

    /**
     * @When I select first checkbox on the Orders table with status :currentState
     */
    public function iSelectFirstCheckboxOnTheOrdersTableWithStatus(int $currentState)
    {
        throw new PendingException();
    }

    /**
     * @When I select second checkbox on the Orders table with status :currentState
     */
    public function iSelectSecondCheckboxOnTheOrdersTableWithStatus(int $currentState)
    {
        throw new PendingException();
    }


    /**
     * @When I click :identifier
     */
    public function iClick(string $identifier)
    {
        throw new PendingException();
    }

    /**
     * @When I choose :identifier
     */
    public function iChoose(string $identifier)
    {
        throw new PendingException();
    }

    /**
     * @When I press :identifier
     * @throws OrderException
     */
    public function iPress(string $identifier)
    {
        // todo: find orders with status $currentStateId from the test db
        $orderIds = [1, 2];
        $newStateId = 13;

        switch ($identifier) {
            case self::UPDATE_STATUS:
                $this->getCommandBus()->handle(new BulkChangeOrderStatusCommand($orderIds, $newStateId));
                break;
            default:
                throw new PendingException();
        }
    }

    /**
     * @Then I should see :message
     * @throws Exception
     */
    public function iShouldSee(string $message)
    {
        // todo: while BulkChangeOrderStatusCommand is not logging anything anywhere this test looses some meaning
        // todo: if logging would be implemented this test could be more meaningful - SUCCESS_MESSAGE may not be empty
        // todo: output could be from the last line of log file: $string = exec( 'tail -n 1 /you/file/full/path/here');
        if (strpos($this->output, $message) === false) {
            throw new Exception(
                sprintf('Did not see "%s" in the output "%s"', self::SUCCESS_MESSAGE, $this->output)
            );
        }
    }

//    /**
//     * @Given The current currency is :currency
//     * @throws Exception
//     */
//    public function theCurrentCurrencyIs(string $currency)
//    {
//        $currencyId = \Currency::exists($currency);
//        $currentCurrency = Context::getContext()->currency;
//        if ($currencyId !== $currentCurrency) {
//            throw new Exception(
//                sprintf('Current currency is not "%s" but "%s"', $currency, $currentCurrency)
//            );
//        }
//    }
}
