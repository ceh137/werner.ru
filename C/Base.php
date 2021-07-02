<?php

include_once "Controller.php";

class Base extends Controller
{
    protected $title;
    protected $content;

    function __construct() {
        $this->title = '';
        $this->content = '';
    }

    function render()
    {
        $vars = array('title' => $this->title, 'content' => $this->content);
        $page = $this->Template("V/v_hf.php", $vars);
        echo $page;
    }
}