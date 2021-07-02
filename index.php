<?php

spl_autoload_register(function ($classname) {
    include_once "C/$classname.php";
});
spl_autoload_register(function ($classname) {
    include_once "M/$classname.php";
});

$action = 'act_';
$action .= (isset($_GET['act'])) ? $_GET['act'] : 'index';


switch ($_GET['c']) {
    case 'page' :
        $controller = new Page();
        break;
    case 'user' :
        $controller = new User();
        break;
    case 'admin' :
        $controller = new Admin();
        break;
    default:
        $controller = new Page();
}


$controller->$action();
$controller->render();

