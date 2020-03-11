<?php


namespace PrestaShop\PrestaShop\Adapter\OrderMessage\CommandHandler;


use OrderMessage;
use PrestaShop\PrestaShop\Core\Domain\OrderMessage\Command\AddVIPOrderMessageCommand;
use PrestaShop\PrestaShop\Core\Domain\OrderMessage\CommandHandler\AddVIPOrderMessageHandlerInterface;
use PrestaShop\PrestaShop\Core\Domain\OrderMessage\Exception\OrderMessageException;
use PrestaShop\PrestaShop\Core\Domain\OrderMessage\ValueObject\OrderMessageId;
use PrestaShopException;

class AddVIPOrderMessageHandler implements AddVIPOrderMessageHandlerInterface
{
    /**
     * @param AddVIPOrderMessageCommand $command
     *
     * @return OrderMessageId
     *
     * @throws OrderMessageException
     */
    public function handle(AddVIPOrderMessageCommand $command): OrderMessageId
    {
        $orderMessage = new OrderMessage();

        $orderMessage->name = $command->getLocalizedName();
        $orderMessage->message = $command->getLocalizedMessage();
        $orderMessage->vip_message = $command->getVipOrderMessage();

        try {
            $orderMessage->validateFields();
            $orderMessage->validateFieldsLang();
        } catch (PrestaShopException $e) {
            throw new OrderMessageException('Order message contains invalid fields', 0, $e);
        }

        try {
            if (false === $orderMessage->add()) {
                throw new OrderMessageException('Failed to add order message');
            }
        } catch (PrestaShopException $e) {
            throw new OrderMessageException('Failed to add order message', 0, $e);
        }

        return new OrderMessageId((int) $orderMessage->id);
    }
}
