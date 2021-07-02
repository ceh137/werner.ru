<?php


abstract class Controller
{
    abstract function render();

    protected function isGet() {
        return $_SERVER['REQUEST_METHOD'] == 'GET';
    }
    protected function isPost() {
        return $_SERVER['REQUEST_METHOD'] == 'POST';
    }

    protected function Template($fileName, $vars = array()) {
        foreach ($vars as $k=>$v) {
            $$k = $v;
        }

        ob_start();
        include $fileName;
        return ob_get_clean();
    }

    public function __call($name, $params) {
        die("Don't write a wrong URL!");
    }
}