<?php


namespace Module\Vendor\Provider\SiteTemplate;



use App\Web\Controller\SKSiteTemplateProvider;

class SiteTemplateProvider
{
    
    private static $instances = [
        DefaultSiteTemplateProvider::class,
        SKSiteTemplateProvider::class,
    ];

    public static function register($provider)
    {
        self::$instances[] = $provider;
    }

    
    public static function all()
    {
        foreach (self::$instances as $k => $v) {
            if ($v instanceof \Closure) {
                self::$instances[$k] = call_user_func($v);
            } else if (is_string($v)) {
                self::$instances[$k] = app($v);
            }
        }
        return self::$instances;
    }

    
    public static function get($name)
    {
        foreach (self::all() as $provider) {
            if ($provider->name() == $name) {
                return $provider;
            }
        }
        return null;
    }

    public static function map()
    {
        return array_build(self::all(), function ($k, $v) {
            
            return [$v->name(), $v->title()];
        });
    }
}
