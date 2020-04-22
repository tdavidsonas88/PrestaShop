<?php


namespace PrestaShopBundle\Twig\Extension;


use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class ContainsDigitExtension extends AbstractExtension
{
    public function getFunctions()
    {
        return new TwigFunction('contains_digit', [$this, 'containsDigit']);
    }

    public function containsDigit($number)
    {
        return preg_match('/^\\d+$/', $number);
    }
}
