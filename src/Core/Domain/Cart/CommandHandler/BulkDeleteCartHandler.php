<?php
/**
 * 2007-2019 PrestaShop and Contributors
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

namespace PrestaShop\PrestaShop\Core\Domain\Cart\CommandHandler;

use PrestaShop\PrestaShop\Core\Domain\Cart\Command\BulkDeleteCartCommand;
use PrestaShop\PrestaShop\Core\Domain\Cart\Command\DeleteCartCommand;
use PrestaShop\PrestaShop\Core\Domain\Cart\Exception\BulkDeleteCartException;
use PrestaShop\PrestaShop\Core\Domain\Cart\Exception\CartException;

/**
 * Handles deleting cart in bulk action
 */
final class BulkDeleteCartHandler implements BulkDeleteCartHandlerInterface
{
    /**
     * @var DeleteCartHandlerInterface
     */
    private $deleteCartHandler;

    /**
     * @param DeleteCartHandlerInterface $deleteCartHandler
     */
    public function __construct(DeleteCartHandlerInterface $deleteCartHandler)
    {
        $this->deleteCartHandler = $deleteCartHandler;
    }

    /**
     * {@inheritdoc}
     */
    public function handle(BulkDeleteCartCommand $command)
    {
        $errors = [];

        foreach ($command->getCartId() as $cartId) {
            try {
                $this->deleteCartHandler->handle(new DeleteCartCommand($cartId->getValue()));
            } catch (CartException $e) {
                $errors[] = $cartId->getValue();
            }
        }

        if (!empty($errors)) {
            throw new BulkDeleteCartException($errors, 'Failed to delete all of selected carts');
        }
    }
}