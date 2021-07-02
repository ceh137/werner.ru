<?php


include_once "Base.php";
include_once "../M/UserModel.php";

class User extends Base
{
    function __construct()
    {
        parent::__construct();
    }

    public function act_reg() {
        $this->title = "Sign Up)";
        $this->content = $this->Template('V/v_reg.php', array());

        if ($this->isPost()) {
            $u = new UserModel();
            NewUser($_POST['name'], $_POST['email'], $_POST['phone'], $_POST['pass1']);
        }
    }

    public function act_login() {
        $this->title = "Sign In";
        $cars = new Catalog();
        $products = $cars->getCars(1, 10);
        $this->content=$this->Template('V/v_catalog.php', array('cars' => $products));

    }
}