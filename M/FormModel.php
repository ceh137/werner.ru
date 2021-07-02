<?php
require '../vendor/autoload.php';

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

    public function MakeApplication() {

        $str_result = file_get_contents('php://input');
        $res = json_decode($str_result);

        $from_city= $res->city1;
        $to_city = $res->city2;

        if ($from_city == 'Moscow') {
            $from_city = 'Москва';
        } elseif ($from_city  == 'SPB') {
            $from_city ='Санкт-Петербург';
        }

        if ($to_city == 'Moscow') {
            $to_city = 'Москва';
        } elseif ($to_city == 'SPB') {
            $to_city = 'Санкт-Петербург';
        }

        $method_delivery = isset($res->ecorad) ? 'Эконом' : 'Экспресс';

        $to_address = isset($res->toAddress);
        $from_address = isset($res->fromAddress);

        $address_client_from = $from_address ? $res->addressFrom : '';
        $address_client_to = $res->addressTo;
        $address_client_to = $res->address_client_to;
        $address_client_from = $res->address_client_from;

        $date_from = $res->dateFrom;
        $date_to = $res->dateTo;

        $total = $res->total;

        $from_addr_time_from = $res->Time1;
        $from_addr_time_until = $res->Time2;
        $to_addr_time_from = $res->Intime3;
        $to_addr_time_until = $res->Intime4;

        $worth = $res->worth;

        $kilos = $res->kg;
        $meters = $res->meters;
        $pieces = $res->pieces;
        $heaviest = $res->heaviest;
        $longest = $res->longest;


        $INNsender = str_replace(' ', '%20',$res -> INNsender );
        $FIOsender = urlencode($res -> FIOsender);
        $Telsender = str_replace(' ', '%20',$res -> Telsender );
        $Emailsender = str_replace(' ', '%20',$res -> Emailsender );

        $INNreceiver = str_replace(' ', '%20',$res -> INNreceiver );
        $FIOreceiver = urlencode($res -> FIOreceiver);
        $Telreceiver = str_replace(' ', '%20',$res -> Telreceiver );
        $Emailreceiver = str_replace(' ', '%20',$res -> Emailreceiver );

        $INN3dparty = str_replace(' ', '%20',$res -> INN3dparty );
        $FIO3dparty = urlencode($res -> FIO3dparty);
        $Tel3dparty = str_replace(' ', '%20',$res -> Tel3dparty );
        $Email3dparty = str_replace(' ', '%20',$res -> Email3dparty );

        $stretch = $res->stretch_price;
        $bort = $res->bort_price;
        $rigid = $res->rigid_pac_price;

        $who_pays_term_transfer ='';
        $who_pays_all = '';
        $who_pays_pac = '';
        $who_pays_ins = '';
        $who_pays_from_addr_to_term = '';
        $who_pays_from_term_to_addr = '';
        $who_pays_prr_at_addr = '';
        $who_pays_prr_to_addr = '';
        $term_trans = 0;
        $all = 0;
        $pac = 0;
        $ins = 0;
        $from_addr_to_term = 0;
        $from_term_to_addr = 0;
        $prr_at_addr = 0;
        $prr_to_addr = 0;

        $del_to_addr = urlencode('-');
        $del_from_addr = urlencode('-');
        $rig_pac = urlencode('-');
        $stretch_pac = urlencode('-');
        $bort_pac = urlencode('-');
        $insurance = urlencode('-');
        $PRR_from_addr = urlencode('-');
        $PRR_to_addr = urlencode('-');

        if ($res->check1 == 'opt1') {
            $del_to_addr = urlencode('+');
        }
        if ($res->check2 == 'opt2') {
            $del_from_addr = urlencode('+');
        }
        if ($res->check3 == 'opt3') {
            $rig_pac = urlencode('+');
        }
        if ($res->check4 == 'opt4') {
            $stretch_pac = urlencode('+');
        }
        if ($res->check5 == 'opt5') {
            $bort_pac = urlencode('+');
        }
        if ($res->check6 == 'opt6') {
            $insurance = urlencode('+');
        }
        if ($res->check7 == 'opt7') {
            $PRR_from_addr = urlencode('+');
        }
        if ($res->check8 == 'opt8') {
            $PRR_to_addr = urlencode('+');
        }

        if (isset($res->PayTermTransferSender)) {
            //$term_trans = $res->PayTermTransferSender;
            $who_pays_term_transfer = urlencode('Отправитель');
        } elseif (isset($res->PayTermTransferReceiver)) {
            //$term_trans = $res->PayTermTransferReceiver;
            $who_pays_term_transfer = urlencode('Получатель');
        } elseif (isset($res->PayTermTransfer3dparty)) {
            //$term_trans = $res->PayTermTransfer3dparty;
            $who_pays_term_transfer = urlencode('3-е лицо');
        }


        if (isset($res->PayAllSender)) {
            //$all = $res->PayAllSender;
            $who_pays_all = urlencode('Отправитель');
        } elseif (isset($res->PayAllReceiver)) {
            //$all = $res->PayAllReceiver;
            $who_pays_all = urlencode('Получатель');
        } elseif (isset($res->PayAll3dparty)) {
            //$all = $res->PayAll3dparty;
            $who_pays_all = urlencode('3-е лицо');
        }

        if (isset($res->PayPacSender)) {
            //$pac = $res->PayPacSender;
            $who_pays_pac = urlencode('Отправитель');
        } elseif (isset($res->PayPacReceiver)) {
            //$pac = $res->PayPacReceiver;
            $who_pays_pac = urlencode('Получатель');
        } elseif (isset($res->PayPac3dparty)) {
            //$pac = $res->PayPac3dparty;
            $who_pays_pac = urlencode('3-е лицо');
        }

        if (isset($res->PayInsSender)) {
            //$ins = $res->PayInsSender;
            $who_pays_ins = urlencode('Отправитель');
        } elseif (isset($res->PayInsReceiver)) {
            //$ins = $res->PayInsReceiver;
            $who_pays_ins = urlencode('Получатель');
        } elseif (isset($res->PayIns3dparty)) {
            //$ins = $res->PayIns3dparty;
            $who_pays_ins = urlencode('3-е лицо');
        }


        if (isset($res->PayFromAddressToTermSender)) {
            //$from_addr_to_term = $res->PayFromAddressToTermSender;
            $who_pays_from_addr_to_term = urlencode('Отправитель');
        } elseif (isset($res->PayFromAddressToTermReceiver)) {
            //$from_addr_to_term = $res->PayFromAddressToTermReceiver;
            $who_pays_from_addr_to_term = urlencode('Получатель');
        } elseif (isset($res->PayFromAddressToTerm3dparty)) {
            //$from_addr_to_term = $res->PayFromAddressToTerm3dparty;
            $who_pays_from_addr_to_term = urlencode('3-е лицо');
        }

        if (isset($res->PayFromTermToAddressSender)) {
            //$from_term_to_addr = $res->PayFromTermToAddressSender;
            $who_pays_from_term_to_addr = urlencode('Отправитель');
        } elseif (isset($res->PayFromTermToAddressReceiver)) {
            //$from_term_to_addr = $res->PayFromTermToAddressReceiver;
            $who_pays_from_term_to_addr = urlencode('Получатель');
        } elseif (isset($res->PayFromTermToAddress3dparty)) {
            //$from_term_to_addr = $res->PayFromTermToAddress3dparty;
            $who_pays_from_term_to_addr = urlencode('3-е лицо');
        }

        if (isset($res->PayPRRatAddressSender)) {
            //$prr_at_addr = $res->PayPRRatAddressSender;
            $who_pays_prr_at_addr = urlencode('Отправитель');
        } elseif (isset($res->PayPRRatAddressReceiver)) {
            //$prr_at_addr = $res->PayPRRatAddressReceiver;
            $who_pays_prr_at_addr = urlencode('Получатель');
        } elseif (isset($res->PayPRRatAddress3dparty)) {
            //$prr_at_addr = $res->PayPRRatAddress3dparty;
            $who_pays_prr_at_addr = urlencode('3-е лицо');
        }

        if (isset($res->PayPRRtoAddressSender)) {
            //$prr_to_addr = $res->PayPRRtoAddressSender;
            $who_pays_prr_to_addr = urlencode('Отправитель');
        } elseif (isset($res->PayPRRtoAddressReceiver)) {
            //$prr_to_addr = $res->PayPRRtoAddressReceiver;
            $who_pays_prr_to_addr = urlencode('Получатель');
        } elseif (isset($res->PayPRRtoAddress3dparty)) {

            $who_pays_prr_to_addr = urlencode('3-е лицо');
        }

        $arr = [];
        if ($INNsender != '') {
            array_push($arr, $INNsender);
        }
        if ($INNreceiver != '') {
            array_push($arr, $INNreceiver);
        }
        if ($INN3dparty != '') {
            array_push($arr, $INN3dparty);
        }
        $term_trans = $res->TT_price;
        $ins = $res->insurance_price;
        $prr_at_addr = $res->PRRatAddress_price;
        $prr_to_addr = $res->PRRtoAddress_price;
        $from_term_to_addr = $res->DelToAddress_price ? $res->DelToAddress_price : 0;
        $from_addr_to_term = $res->DelFromAddress_price ? $res->DelFromAddress_price: 0;
        $compSender = '';
        $compReceiver ='';
        $comp3dparty ='';


        $token = "41753b88fcd51e0b8fb2e83a08a0bfc0212637be";


        $dadata = new Dadata\DadataClient($token, null);


        foreach ($arr as $INN) {


            $result = $dadata->suggest("party", $INN);
            //print_r($result);

            if ($INN == $INNsender) {
                $compSender=urlencode($result['0']['value']);
            }
            if ($INN == $INNreceiver) {
                $compReceiver=urlencode($result['0']['value']);
            }
            if ($INN == $INN3dparty) {
                $comp3dparty=urlencode($result['0']['value']);
            }


        }



    }
}