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
            $this->title = "Главная";
            $this->content = $this->Template('V/v_form.php', $arr);
        } else {
            header('Location: index.php?c=page&act=index');
        }

    }
}