<?php

require 'DB.php';

class OrderModelDB extends DB
{
    private function insert_into_orders($args = array()) {
        return $this->Insert("INSERT INTO `orders` (del_method_id, sender_id, receiver_id, third_party_id, options_id, measurements_id, payments_id, address_to, address_from, city_to_id, city_from_id, prices_for_options_id, total, track_num, order_status_id, del_time_id) VALUES (:del_method_id, :sender_id, :receiver_id, :third_party_id, :options_id, :measurements_id, :payments_id, :address_to, :address_from, :city_to_id, :city_from_id, :prices_for_options_id, :total, :track_num, :order_status_id, :del_time_id)", $args);
    }
    private function insert_into_users($args = array(), $who='0') {
        if ($who == 'sender') {
            $sender = $this->Insert("INSERT INTO `users` (user_name, user_INN, user_tel, user_mail, user_company, status_id) values (:name, :INN, :tel, :mail, :company, :status_id)", $args);
            return $sender;
        } elseif ($who == 'receiver') {
            $receiver = $this->Insert("INSERT INTO `users` (user_name, user_INN, user_tel, user_mail, user_company, status_id) values (:name, :INN, :tel, :mail, :company, :status_id)", $args);
            return $receiver;
        } elseif ($who == '3dparty') {
            $third_party = $this->Insert("INSERT INTO `users` (user_name, user_INN, user_tel, user_mail, user_company, status_id) values (:name, :INN, :tel, :mail, :company, :status_id)", $args);
            return $third_party;
        }


    }

    private function insert_into_options($args = array()) {
        return $this->Insert("INSERT INTO `options` (del_to_addr, del_from_addr, rig_pac, stretch_pac, bort_pac, prr_to_addr, prr_from_addr, insurance) VALUES (:to_addr, :from_addr, :rig_pac, :stretch_pac, :bort_pac, :prr_to_addr, :prr_from_addr, :insurance)", $args);
    }


    private function insert_into_measurements($args = array()) {
        return $this->Insert("INSERT INTO `measurements` (kilograms, meters, pieces, longest, heaviest, worth) VALUES (:kilos, :meters, :pieces, :longest, :heaviest, :worth)", $args);
    }


    private function insert_into_payments($args = array()) {
        return $this->Insert("INSERT INTO `payments` ( payment_all, payment_term_transfer, payment_del_to_addr, payment_del_from_addr, payment_pac, payment_prr_to_addr, payment_prr_from_addr, payment_insurance) VALUES (:payment_all, :payment_term_transfer, :payment_del_to_addr, :payment_del_from_addr, :payment_pac, :payment_prr_to_addr, :payment_prr_from_addr, :payment_insurance)", $args);
    }


    private function insert_into_prices_for_options($args = array()) {
        return $this->Insert("INSERT INTO `prices_for_options` ( price_for_term_trans, price_for_del_to_addr, price_for_del_from_addr, price_for_rig_pac, price_for_stretch_pac, price_for_bort_pac, price_for_prr_to_address, price_for_prr_from_addr, price_for_insurance) VALUES ( :price_for_term_trans, :price_for_del_to_addr, :price_for_del_from_addr, :price_for_rig_pac, :price_for_stretch_pac, :price_for_bort_pac, :price_for_prr_to_address, :price_for_prr_from_addr, :price_for_insurance)", $args);
    }

    private function insert_into_del_time($args) {
        return $this->Insert("INSERT INTO `del_time` (date_to, date_from, time_from_del_from_addr, time_to_del_from_addr, time_from_del_to_addr, time_to_del_to_addr) VALUES (:date_to, :date_from, :time_from_del_from_addr, :time_to_del_from_addr, :time_from_del_to_addr, :time_to_del_to_addr)", $args);
    }

    private function check_users($args, $who) {
        $user = $this->Select("SELECT `user_id` FROM `users` WHERE user_name = :name and user_mail = :mail AND user_tel = :tel AND user_INN = :INN AND user_company = :company and status_id = :status_id", $args);
        if ($user[0]['user_id']) {
            return $user[0]['user_id'];
        } else {
            return $this->insert_into_users($args, $who);
        }
    }


    protected function get_ready_args($obj) {

        // dadata connection
        $token = "41753b88fcd51e0b8fb2e83a08a0bfc0212637be";
        $dadata = new Dadata\DadataClient($token, null);

        $method_delivery = $obj['rad'] == 'express' ? 1 : 2;

        $total = (int)$obj['totalhidden'];

        $from_city = $obj['from_city'];
        $to_city = $obj['to_city'];

        $address_client_from = $obj['address_from'] ? : null;
        $address_client_to = $obj['address_to'] ? : null;

        if ($from_city == 'Moscow') {
            $from_city = 1;
        } else {
            $from_city = 2;
        }
        if ($to_city == 'Moscow') {
            $to_city = 1;
        } else {
            $to_city = 2;
        }


        $time_args = [
            ':date_to' => $obj['date_to']? : null,
            ':date_from' => $obj['date_from'] ? : null,
            ':time_from_del_from_addr' => $obj['time1_from'] ? : NULL,
            ':time_to_del_from_addr' => $obj['time1_until'] ? : NULL,
            ':time_from_del_to_addr' => $obj['time2_from'] ? : NULL,
            ':time_to_del_to_addr' => $obj['time2_until'] ? : NULL
            ];
        $time_id = (int)$this->insert_into_del_time($time_args);
        // send time data

        $measurements_args = [
            ':kilos' => (int)$obj['kilos'],
            ':meters' => (int)$obj['meters'],
            ':pieces' => (int)$obj['pieces'],
            ':heaviest' => (int)$obj['heaviest'],
            ':longest' => (int)$obj['longest'],
            ':worth' => (int)$obj['worth'] ? : 0
        ];
        // send measurements data
        $measurement_id = (int)$this->insert_into_measurements($measurements_args);

        $sender_args = [
            ':name' => $obj['FIOsender'],
            ':INN' => $obj['INNsender'],
            ':tel' => $obj['Telsender'],
            ':mail' => $obj['Emailsender'],
            ':company' => $dadata->suggest("party", $obj['INNsender'])['0']['value'],
            ':status_id' => 1
        ];
        // check sender, if there is no user with the same data, insert it.
        $sender = (int)$this->check_users($sender_args, 'sender');

        $receiver_args = [
            ':name' => $obj['FIOreceiver'],
            ':INN' => $obj['INNreceiver'],
            ':tel' => $obj['Telreceiver'],
            ':mail' => $obj['Emailreceiver'],
            ':company' => $dadata->suggest("party", $obj['INNreceiver'])['0']['value'],
            ':status_id' => 1
        ];
        // check receiver, if there is no user with the same data, insert it.
        $receiver = (int)$this->check_users($receiver_args, 'receiver');
        if ($obj['FIO3dparty'] != '') {
            $thirdParty_args = [
                ':name' => $obj['FIO3dparty'],
                ':INN' => $obj['INN3dparty'],
                ':tel' => $obj['Tel3dparty'],
                ':mail' => $obj['Email3dparty'],
                ':company' => $dadata->suggest("party", $obj['INN3dparty'])['0']['value'],
                ':status_id' => 1
            ];
            // check 3dparty, if there is no user with the same data, insert it.
            $thirdParty = (int)$this->check_users($thirdParty_args,  '3dparty');
        } else {
            $thirdParty = null;
        }


        $price_for_options_args = [
            ':price_for_del_to_addr' => (int)$obj['DelToAddress_price'] ? : 0,
            ':price_for_del_from_addr' => (int)$obj['DelFromAddress_price'] ? : 0,
            ':price_for_rig_pac' => (int)$obj['rigid_pac_price'] ? : 0,
            ':price_for_stretch_pac' => (int)$obj['stretch_price'] ? : 0,
            ':price_for_bort_pac' => (int)$obj['bort_price'] ? : 0,
            ':price_for_prr_to_address' => (int)$obj['PRRtoAddress_price'] ? : 0,
            ':price_for_prr_from_addr' => (int)$obj['PRRatAddress_price'] ? : 0,
            ':price_for_insurance' => (int)$obj['insurance_price'] ? : 0,
            ':price_for_term_trans' => (int)$obj['TT_price'] ? : 0
        ];

        $price_for_options_id = (int)$this->insert_into_prices_for_options($price_for_options_args);




        $del_to_addr = 'Нет';
        $del_from_addr = 'Нет';
        $rig_pac = 'Нет';
        $stretch_pac = 'Нет';
        $bort_pac = 'Нет';
        $insurance = 'Нет';
        $PRR_from_addr = 'Нет';
        $PRR_to_addr = 'Нет';
        foreach ($obj['options'] as $opt) {
            switch ($opt) {
                case 'opt1':
                    $del_to_addr = 'Да';
                    break;
                case 'opt2':
                    $del_from_addr = 'Да';
                    break;
                case 'opt3':
                    $rig_pac = 'Да';
                    break;
                case 'opt4':
                    $stretch_pac = 'Да';
                    break;
                case 'opt5':
                    $bort_pac = 'Да';
                    break;
                case 'opt6':
                    $insurance = 'Да';
                    break;
                case 'opt7':
                    $PRR_from_addr = 'Да';
                    break;
                case 'opt8':
                    $PRR_to_addr = 'Да';
                    break;
                default:
                    break;
            }
        }

        $options_args = [
            ':to_addr' => $del_to_addr,
            ':from_addr' => $del_from_addr,
            ':rig_pac' => $rig_pac,
            ':stretch_pac' => $stretch_pac,
            ':bort_pac' => $bort_pac,
            ':prr_to_addr' => $PRR_to_addr,
            ':prr_from_addr' => $PRR_from_addr,
            ':insurance' => $insurance
        ];

        $options_id = (int)$this->insert_into_options($options_args);

        if (isset($obj['PayTermTransferSender'])) {
            $who_pays_term_transfer = $sender;
        } elseif (isset($obj['PayTermTransferReceiver'])) {
            $who_pays_term_transfer = $receiver;
        } elseif (isset($obj['PayTermTransfer3dparty'])) {
            $who_pays_term_transfer = $thirdParty;
        }


        if (isset($obj['PayAllSender'])) {
            $who_pays_all = $sender;
        } elseif (isset($obj['PayAllReceiver'])) {
            $who_pays_all = $receiver;
        } elseif (isset($obj['PayAll3dparty'])) {
            $who_pays_all =  $thirdParty;
        }

        if (isset($obj['PayPacSender'])) {
            $who_pays_pac = $sender;
        } elseif (isset($obj['PayPacReceiver'])) {
            $who_pays_pac = $receiver;
        } elseif (isset($obj['PayPac3dparty'])) {
            $who_pays_pac =  $thirdParty;
        }

        if (isset($obj['PayInsSender'])) {
            $who_pays_ins = $sender;
        } elseif (isset($obj['PayInsReceiver'])) {
            $who_pays_ins = $receiver;
        } elseif (isset($obj['PayIns3dparty'])) {
            $who_pays_ins =  $thirdParty;
        }


        if (isset($obj['PayFromAddressToTermSender'])) {
            $who_pays_from_addr_to_term = $sender;
        } elseif (isset($obj['PayFromAddressToTermReceiver'])) {
            $who_pays_from_addr_to_term = $receiver;
        } elseif (isset($obj['PayFromAddressToTerm3dparty'])) {
            $who_pays_from_addr_to_term = $thirdParty;
        }

        if (isset($obj['PayFromTermToAddressSender'])) {
            $who_pays_from_term_to_addr = $sender;
        } elseif (isset($obj['PayFromTermToAddressReceiver'])) {
            $who_pays_from_term_to_addr = $receiver;
        } elseif (isset($obj['PayFromTermToAddress3dparty'])) {
            $who_pays_from_term_to_addr =  $thirdParty;
        }

        if (isset($obj['PayPRRatAddressSender'])) {
            $who_pays_prr_at_addr = $sender;
        } elseif (isset($obj['PayPRRatAddressReceiver'])) {
            $who_pays_prr_at_addr = $receiver;
        } elseif (isset($obj['PayPRRatAddress3dparty'])) {
            $who_pays_prr_at_addr =  $thirdParty;
        }

        if (isset($obj['PayPRRtoAddressSender'])) {
            $who_pays_prr_to_addr = $sender;
        } elseif (isset($obj['PayPRRtoAddressReceiver'])) {
            $who_pays_prr_to_addr = $receiver;
        } elseif (isset($obj['PayPRRtoAddress3dparty'])) {
            $who_pays_prr_to_addr =  $thirdParty;
        }

        $payments_args = [
            ':payment_all' => $who_pays_all,
            ':payment_term_transfer' => $who_pays_term_transfer,
            ':payment_del_to_addr' => $who_pays_from_term_to_addr,
            ':payment_del_from_addr' => $who_pays_from_addr_to_term,
            ':payment_pac' => $who_pays_pac,
            ':payment_prr_to_addr' => $who_pays_prr_to_addr,
            ':payment_prr_from_addr' => $who_pays_prr_at_addr,
            ':payment_insurance' => $who_pays_ins
        ];

        $payment_id = (int)$this->insert_into_payments($payments_args);

        $order_args = [
            ':del_method_id' => $method_delivery,
            ':sender_id' => $sender,
            ':receiver_id' => $receiver,
            ':third_party_id' => $thirdParty,
            ':options_id' => $options_id,
            ':measurements_id' => $measurement_id,
            ':payments_id' => $payment_id,
            ':address_to' =>  $address_client_to,
            ':address_from' => $address_client_from,
            ':city_to_id' => $to_city,
            ':city_from_id' => $from_city,
            ':prices_for_options_id' => $price_for_options_id,
            ':total' => $total,
            ':track_num' => '1232412123',
            ':order_status_id' => 1,
            ':del_time_id' => $time_id
        ];

        return $this->insert_into_orders($order_args);
        }





}

