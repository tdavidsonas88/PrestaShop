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
use PrestaShopDatabaseException;
use PrestaShopException;
use Tests\Integration\Behaviour\Features\Context\SharedStorage;
use PrestaShop\PrestaShop\Core\Domain\Order\Invoice\Command\GenerateInvoiceCommand;
use Product;
use Context;

class OrderFeatureContext extends AbstractDomainFeatureContext
{
    /**
     * @param $orderReference
     * @param $cartReference
     * @param $paymentModuleName
     * @param $orderStatus
     * @throws CartConstraintException
     * @throws InvalidEmployeeIdException
     * @throws OrderException
     * @throws PrestaShopDatabaseException
     * @throws PrestaShopException
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
     * @Given there are :countOfOrders existing orders
     * @throws Exception
     */
    public function thereAreExistingOrders(int $countOfOrders)
    {
        /** @var array $ordersWithInformations */
        $ordersWithInformations = Order::getOrdersWithInformations($countOfOrders);
        $countOfOrdersFromDb = count($ordersWithInformations);
        if ($countOfOrders !== $countOfOrdersFromDb) {
            throw new Exception(
                'There are less orders than expected ['.$countOfOrders.'] actual ['.$countOfOrdersFromDb.']'
            );
        }
    }

    /**
     * @Given I update :countOfOrders orders to statusId :statusId
     * @param int $statusId
     * @param int $countOfOrders
     * @throws OrderException
     */
    public function iUpdateOrdersToStatusid(int $statusId, int $countOfOrders)
    {
        /** @var array $ordersWithInformations */
        $ordersWithInformations = Order::getOrdersWithInformations($countOfOrders);

        $orderIds = [];
        foreach ($ordersWithInformations as $orderWithInformations) {
            $orderIds[] = (int) $orderWithInformations['id_order'];
        }

        $this->getCommandBus()->handle(
            new BulkChangeOrderStatusCommand(
                $orderIds, $statusId
            )
        );
    }

    /**
     * @Then each of :countOfOrders orders should contain statusId :statusId
     */
    public function eachOfOrdersShouldContainStatusid(int $countOfOrders, int $statusId)
    {
        /** @var array $ordersWithInformations */
        $ordersWithInformations = Order::getOrdersWithInformations($countOfOrders);

        foreach ($ordersWithInformations as $orderWithInformation) {
            $currentOrderState = $orderWithInformation['current_state'];
            if ($currentOrderState != $statusId) {
                throw new Exception(
                    'After changing order status id should be ['.$statusId.'] but received ['.$currentOrderState.']'
                );
            }
        }
        throw new PendingException();
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
    /**
     * @return array
     */
    public function getOrdersIdsByDate(): array
    {
        $timestampFrom = strtotime("-1 year");
        $dateFrom = date('Y-m-d', $timestampFrom);
        $timestampTo = strtotime("+1 year");
        $dateTo = date('Y-m-d', $timestampTo);

        /** @var array $orders */
        $orders = Order::getOrdersIdByDate($dateFrom, $dateTo);
        return $orders;
    }
}
