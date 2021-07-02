<?php
require 'vendor/autoload.php';
require 'FormModelDB.php';

class FormModel extends OrderModelDB
{

    public function InsertIntoSecondForm($data = array()) {

        $to_city = $data['city_to'];
        $from_city = $data['city_from'];
        $kilos = $data['kilograms'];
        $meters = $data['meters'];
        $options = $data['options'];


        $del_to_addr = false;
        $del_from_addr = false;
        $rigid = false;
        $stretch = false;
        $bort = false;
        $insurance = false;
        if (isset($options)) {
            foreach ($options as $opt) {
                switch ($opt) {
                    case 'opt1':
                        $del_to_addr = true;
                        break;
                    case 'opt2':
                        $del_from_addr = true;
                        break;
                    case 'opt3':
                        $rigid = true;
                        break;
                    case 'opt4':
                        $stretch = true;
                        break;
                    case 'opt5':
                        $bort = true;
                        break;
                    case 'opt6':
                        $insurance = true;
                        break;
                    default:
                        break;
                }
            }
        }

        $arrayToReturn = [
            'to_city' => $to_city,
            'from_city' => $from_city,
            'kilos' => $kilos,
            'meters' => $meters,
            'del_to_addr' => $del_to_addr,
            'del_from_addr' => $del_from_addr,
            'rigid' => $rigid,
            'stretch' => $stretch,
            'bort' => $bort,
            'insurance' => $insurance
        ];

        return $arrayToReturn;



    }

    public function MakeApplication($data) {
        return $this->get_ready_args($data);
    }
}