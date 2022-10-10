<?php


namespace App\Web\Controller;



use Module\Vendor\Provider\SiteTemplate\AbstractSiteTemplateProvider;

class SKSiteTemplateProvider extends AbstractSiteTemplateProvider
{
    public function title()
    {
        return "SK";
    }

    public function name()
    {
        return 'sk';
    }

}