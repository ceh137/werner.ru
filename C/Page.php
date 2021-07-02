<?php

include_once "Base.php";
include_once "M/FormModel.php";

class Page extends Base
{
    function __construct()
    {
        parent::__construct();
    }

    public function act_index()
    {
        $this->title = "Главная";
        $this->content = $this->Template('V/v_index.php', array());
    }

    public function act_sendfirstform()
    {
        if ($this->isPost()) {
            $form = new FormModel();
            $arr  = $form->InsertIntoSecondForm($_POST);
            $this->title = "Оформление заказа";
            $this->content = $this->Template('V/v_form.php', $arr);
        } else {
            $this->title = "Оформление заказа";
            $this->content = $this->Template('V/v_form.php', array());
        }

    }

    public function act_mk_application() {
        if (isset($_POST))  {
            $data = new FormModel();
            $order_id = $data ->MakeApplication($_POST);
            $this->title = "Успех";
            $this->content = $this->Template('V/v_success.php', array('order_id' => $order_id));

        }
    }

}