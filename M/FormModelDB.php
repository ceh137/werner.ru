<?php

require 'DB.php';

class OrderModelDB extends DB
{
    public function insert_into_orders($args = array()) {
        return $this->Insert("INSERT INTO `orders` (del_method_id, sender_id, receiver_id, third_party_id, options_id, measurements_id, payments_id, address_to, address_from, city_to_id, city_from_id, prices_for_options_id, total, track_num, order_status_id) VALUES (:del_method_id, :sender_id, :receiver_id, :third_party_id, :options_id, :measurements_id, :payments_id, :address_to, :address_from, :city_to_id, :city_from_id, :prices_for_options_id, :total, :track_num, :order_status_id)", $args);
    }
    public function insert_into_users($args = array(), $who) {
        if ($who == 'sender') {
            $sender = $this->Insert("INSERT INTO `users` (user_name, user_INN, user_tel, user_mail, user_company, status_id) values (:name, :INN, :tel, :mail, :company, :status_id)", $args['sender']);

        } elseif ($who == 'receiver') {
            $receiver = $this->Insert("INSERT INTO `users` (user_name, user_INN, user_tel, user_mail, user_company, status_id) values (:name, :INN, :tel, :mail, :company, :status_id)", $args['receiver']);
        } elseif ($who == '3dparty') {
            $third_party = $this->Insert("INSERT INTO `users` (user_name, user_INN, user_tel, user_mail, user_company, status_id) values (:name, :INN, :tel, :mail, :company, :status_id)", $args['3dparty']);
        }

        return array('sender'=>$sender, 'receiver' => $receiver, '3dparty' => $third_party);
    }

    public function insert_into_options($args = array()) {
        return $this->Insert("INSERT INTO `options` (del_to_addr, del_from_addr, rig_pac, stretch_pac, bort_pac, prr_to_addr, prr_from_addr, insurance) VALUES (:to_addr, :from_addr, :rig_pac, :stretch_pac, :bort_pac, :prr_to_addr, :prr_from_addr, :insurance)", $args);
    }


    public function insert_into_measurements($args = array()) {
        return $this->Insert("INSERT INTO `measurements` (kilograms, meters, pieces, longest, heaviest) VALUES (:kilos, :meters, :pieces, :longest, :heaviest)", $args);
    }


    public function insert_into_payments($args = array()) {
        return $this->Insert("INSERT INTO `payments` (payment_del_to_addr, payment_del_from_addr, payment_pac, payment_prr_to_addr, payment_prr_from_addr, payment_insurance) VALUES (:payment_del_to_addr, :payment_del_from_addr, :payment_pac, :payment_prr_to_addr, :payment_prr_from_addr, :payment_insurance)", $args);
    }


    public function insert_into_prices_for_options($args = array()) {
        return $this->Insert("INSERT INTO `prices_for_options` (price_for_del_to_addr, price_for_del_from_addr, price_for_rig_pac, price_for_stretch_pac, price_for_bort_pac, price_for_prr_to_address, price_for_prr_from_addr, price_for_insurance) VALUES (:price_for_del_to_addr, :price_for_del_from_addr, :price_for_rig_pac, :price_for_stretch_pac, :price_for_bort_pac, :price_for_prr_to_address, :price_for_prr_from_addr, :price_for_insurance)", $args);
    }

    public function check_users($args, $who) {
        $user = $this->Select("SELECT `user_id` FROM `users` WHERE user_name = :name and user_mail = :mail AND user_tel = :tel AND user_INN = :INN AND user_company = :comp", $args);
        if (empty($user)) {
            return $this->insert_into_users($args, $who);
        } else {
            return $user;
        }
    }
}

