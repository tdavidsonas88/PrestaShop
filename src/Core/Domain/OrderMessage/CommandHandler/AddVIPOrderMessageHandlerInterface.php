<?php


namespace PrestaShop\PrestaShop\Core\Domain\OrderMessage\CommandHandler;


use PrestaShop\PrestaShop\Core\Domain\OrderMessage\Command\AddVIPOrderMessageCommand;
use PrestaShop\PrestaShop\Core\Domain\OrderMessage\ValueObject\OrderMessageId;

interface AddVIPOrderMessageHandlerInterface
{
    /**
     * @param AddVIPOrderMessageCommand $command
     *
     * @return OrderMessageId
     */
    public function handle(AddVIPOrderMessageCommand $command): OrderMessageId;
}
