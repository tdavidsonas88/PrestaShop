<?php
/**
 * 2007-2020 PrestaShop and Contributors
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
 * @copyright 2007-2020 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */

declare(strict_types=1);

namespace PrestaShop\PrestaShop\Core\Grid\Definition\Factory;

use PrestaShop\PrestaShop\Core\ConfigurationInterface;
use PrestaShop\PrestaShop\Core\Domain\Cart\CartStatusType;
use PrestaShop\PrestaShop\Core\Grid\Action\Bulk\BulkActionCollection;
use PrestaShop\PrestaShop\Core\Grid\Action\Bulk\Type\SubmitBulkAction;
use PrestaShop\PrestaShop\Core\Grid\Action\GridActionCollection;
use PrestaShop\PrestaShop\Core\Grid\Action\Row\AccessibilityChecker\AccessibilityCheckerInterface;
use PrestaShop\PrestaShop\Core\Grid\Action\Row\RowActionCollection;
use PrestaShop\PrestaShop\Core\Grid\Action\Row\Type\LinkRowAction;
use PrestaShop\PrestaShop\Core\Grid\Action\Row\Type\SubmitRowAction;
use PrestaShop\PrestaShop\Core\Grid\Action\Type\LinkGridAction;
use PrestaShop\PrestaShop\Core\Grid\Column\ColumnCollection;
use PrestaShop\PrestaShop\Core\Grid\Column\Type\Common\ActionColumn;
use PrestaShop\PrestaShop\Core\Grid\Column\Type\Common\CartBulkActionColumn;
use PrestaShop\PrestaShop\Core\Grid\Column\Type\Common\CartStatusColumn;
use PrestaShop\PrestaShop\Core\Grid\Column\Type\Common\CartTotalColumn;
use PrestaShop\PrestaShop\Core\Grid\Column\Type\Common\DateTimeColumn;
use PrestaShop\PrestaShop\Core\Grid\Column\Type\DataColumn;
use PrestaShop\PrestaShop\Core\Grid\Filter\Filter;
use PrestaShop\PrestaShop\Core\Grid\Filter\FilterCollection;
use PrestaShop\PrestaShop\Core\Hook\HookDispatcherInterface;
use PrestaShopBundle\Form\Admin\Type\DatalistType;
use PrestaShopBundle\Form\Admin\Type\DateRangeType;
use PrestaShopBundle\Form\Admin\Type\SearchAndResetType;
use PrestaShopBundle\Form\Admin\Type\YesAndNoChoiceType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextType;

/**
 * Creates grid definition for Carts grid
 */
final class CartGridDefinitionFactory extends AbstractGridDefinitionFactory
{
    const GRID_ID = 'cart';

    /**
     * @var ConfigurationInterface
     */
    private $configuration;

    /**
     * @var string
     */
    private $contextDateFormat;

    /**
     * @var AccessibilityCheckerInterface
     */
    private $deleteCartAccessibilityChecker;

    /**
     * @param HookDispatcherInterface $dispatcher
     * @param ConfigurationInterface $configuration
     * @param AccessibilityCheckerInterface $deleteCartAccessibilityChecker
     * @param string $contextDateFormat
     */
    public function __construct(
        HookDispatcherInterface $dispatcher,
        ConfigurationInterface $configuration,
        AccessibilityCheckerInterface $deleteCartAccessibilityChecker,
        $contextDateFormat
    ) {
        parent::__construct($dispatcher);

        $this->configuration = $configuration;
        $this->contextDateFormat = $contextDateFormat;
        $this->deleteCartAccessibilityChecker = $deleteCartAccessibilityChecker;
    }

    /**
     * {@inheritdoc}
     */
    protected function getId()
    {
        return self::GRID_ID;
    }

    /**
     * {@inheritdoc}
     */
    protected function getName()
    {
        return $this->trans('Shopping Carts', [], 'Admin.Navigation.Menu');
    }

    /**
     * {@inheritdoc}
     */
    protected function getColumns()
    {
        $columns = (new ColumnCollection())
            ->add((new CartBulkActionColumn('cart_bulk_action'))
                ->setOptions([
                    'bulk_field' => 'id_cart',
                ])
            )
            ->add((new DataColumn('id_cart'))
                ->setName($this->trans('ID', [], 'Admin.Global'))
                ->setOptions([
                    'field' => 'id_cart',
                ])
            )
            ->add((new CartStatusColumn('status'))
                ->setName($this->trans('Order ID', [], 'Admin.Orderscustomers.Feature'))
                ->setOptions([
                    'field' => 'status',
                    'text_align' => 'center',
                    'badge_type' => 'danger',
                ])
            )
            ->add((new DataColumn('customer_name'))
                ->setName($this->trans('Customer', [], 'Admin.Global'))
                ->setOptions([
                    'field' => 'customer_name',
                ])
            )
            ->add((new CartTotalColumn('cart_total'))
                ->setName($this->trans('Total', [], 'Admin.Global'))
                ->setOptions([
                    'field' => 'cart_total',
                    'sortable' => false,
                ])
            )
            ->add((new DataColumn('carrier_name'))
                ->setName($this->trans('Carrier', [], 'Admin.Shipping.Feature'))
                ->setOptions([
                    'field' => 'carrier_name',
                ])
            )
            ->add((new DateTimeColumn('date_add'))
                ->setName($this->trans('Date', [], 'Admin.Global'))
                ->setOptions([
                    'field' => 'date_add',
                    'format' => $this->contextDateFormat,
                ])
            )
            ->add((new ActionColumn('actions'))
                ->setName($this->trans('Actions', [], 'Admin.Global'))
                ->setOptions([
                    'actions' => (new RowActionCollection())
                        ->add((new LinkRowAction('view'))
                            ->setName($this->trans('View', [], 'Admin.Actions'))
                            ->setIcon('zoom_in')
                            ->setOptions([
                                'route' => 'admin_carts_view',
                                'route_param_name' => 'cartId',
                                'route_param_field' => 'id_cart',
                            ])
                        )
                        ->add((new SubmitRowAction('delete'))
                            ->setName($this->trans('Delete', [], 'Admin.Actions'))
                            ->setIcon('delete')
                            ->setOptions([
                                'route' => 'admin_carts_delete',
                                'route_param_name' => 'cartId',
                                'route_param_field' => 'id_cart',
                                'accessibility_checker' => $this->deleteCartAccessibilityChecker,
                                'confirm_message' => $this->trans(
                                    'Delete selected item?',
                                    [],
                                    'Admin.Notifications.Warning'
                                ),
                            ])
                        ),
                ])
            )
        ;

        if ($this->configuration->get('PS_GUEST_CHECKOUT_ENABLED')) {
            $columns->addAfter('date_add', (new DataColumn('online'))
                ->setName($this->trans('Online', [], 'Admin.Global'))
                ->setOptions([
                    'field' => 'online',
                    'text_align' => 'center',
                ])
            );
        }

        $columns->addBefore('actions', (new DataColumn('shop_name'))
            ->setName($this->trans('Shop', [], 'Admin.Global'))
            ->setOptions([
                'field' => 'shop_name',
            ])
        );

        return $columns;
    }

    /**
     * {@inheritdoc}
     */
    protected function getFilters()
    {
        return (new FilterCollection())
            ->add((new Filter('id_cart', NumberType::class))
                ->setTypeOptions([
                    'attr' => [
                        'placeholder' => $this->trans('Search ID', [], 'Admin.Actions'),
                    ],
                    'required' => false,
                ])
                ->setAssociatedColumn('id_cart')
            )
            // from db it uses status field value but show them in Order ID column
            ->add((new Filter('status', DatalistType::class))
                ->setTypeOptions([
                    'choices' => [
                        $this->trans('Not placed', [], 'Admin.Orderscustomers.Feature') => CartStatusType::NOT_ORDERED,
                        $this->trans('Abandoned cart', [], 'Admin.Orderscustomers.Feature') => CartStatusType::ABANDONED_CART,
                    ],
                    'attr' => [
                        'placeholder' => $this->trans('Search Order ID', [], 'Admin.Actions'),
                    ],
                    'required' => false,
                ])
                ->setAssociatedColumn('status')
            )
            ->add((new Filter('customer_name', TextType::class))
                ->setTypeOptions([
                    'attr' => [
                        'placeholder' => $this->trans('Search name', [], 'Admin.Actions'),
                    ],
                    'required' => false,
                ])
                ->setAssociatedColumn('customer_name')
            )
            ->add((new Filter('carrier_name', TextType::class))
                ->setTypeOptions([
                    'attr' => [
                        'placeholder' => $this->trans('Search carrier', [], 'Admin.Actions'),
                    ],
                    'required' => false,
                ])
                ->setAssociatedColumn('carrier_name')
            )
            ->add((new Filter('date_add', DateRangeType::class))
                ->setTypeOptions([
                    'required' => false,
                ])
                ->setAssociatedColumn('date_add')
            )
            ->add((new Filter('online', YesAndNoChoiceType::class))
                ->setTypeOptions([
                    'required' => false,
                ])
                ->setAssociatedColumn('online')
            )
            ->add((new Filter('actions', SearchAndResetType::class))
                ->setTypeOptions([
                    'reset_route' => 'admin_common_reset_search_by_filter_id',
                    'reset_route_params' => [
                        'filterId' => self::GRID_ID,
                    ],
                    'redirect_route' => 'admin_carts_index',
                ])
                ->setAssociatedColumn('actions')
            );
    }

    /**
     * {@inheritdoc}
     */
    protected function getGridActions()
    {
        return (new GridActionCollection())
            ->add(
                (new LinkGridAction('export'))
                    ->setName($this->trans('Export', [], 'Admin.Actions'))
                    ->setIcon('cloud_download')
                    ->setOptions([
                        'route' => 'admin_carts_export',
                    ])
            )
        ;
    }

    /**
     * {@inheritdoc}
     */
    protected function getBulkActions()
    {
        return (new BulkActionCollection())
            ->add(
                (new SubmitBulkAction('delete_selection'))
                    ->setName($this->trans('Delete selected', [], 'Admin.Actions'))
                    ->setOptions([
                        'submit_route' => 'admin_carts_bulk_delete',
                        'confirm_message' => $this->trans('Delete selected items?', [], 'Admin.Notifications.Warning'),
                    ])
            )
        ;
    }
}