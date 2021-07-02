<?php

include_once "DB.php";

class UserModel extends DB
{
    function NewUser($name, $mail, $phone, $pass) {
        if ($this->CheckUser($mail, $pass) == false) {
            $mail = strip_tags($mail);
            $pass = md5(strip_tags($pass));
            $name = strip_tags($name);
            $phone = strip_tags($phone);
            $this->Insert("INSERT INTO `users` ( `name`, `mail`, `phone`, `pass`, `role`) VALUES ('$name', '$mail', '$phone', '$pass', 0 )");

        }
    }

    function CheckUser($mail, $pass) {
        $mail = strip_tags($mail);
        $pass = md5(strip_tags($pass));
        $user = $this->Select("SELECT * FROM `users` WHERE `mail` = $mail AND `pass` = $pass");
        if (isset($user)) {
            $_SESSION['user'] = $user[0]['user_id'];
            return true;
        } else {
            return false;
        }

    }
}