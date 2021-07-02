<div id="section-order" class="uk-section uk-section-muted">
    <div class="uk-container">
        <h1 class="uk-h1">Оформить заявку</h1>
    </div>
    <form action="index.php?c=page&act=mk_application" method="post" class="odrer-form" id="form">
        <div class="uk-container order-row-1">
            <div class="uk-h2">Дата и направление перевозки</div>
            <div class="uk-grid-medium uk-flex-center uk-grid" uk-height-match="target: > div > .uk-card" uk-grid>
                <div class="uk-width-expand@m col-1">
                    <div class="uk-card">
                        <div class="uk-h4 first-ttl">Откуда</div>
                        <select id="city1" name="from_city" class="form-select uk-select form-select uk-select-lg mb-3"
                                aria-label=".form-select uk-select-lg example">
                            <option value="Moscow" <?= $from_city=='Moscow' ? 'selected' : '' ?>>Москва</option>
                            <option value="SPB" <?= $from_city=='SPB' ? 'selected' : '' ?>>Санкт-Петербург</option>
                        </select>
                        <div class="uk-text-result uk-margin">
                            <div id="DepEco" class="uk-text">erb</div>
                            <div id="DepExpress" class="uk-text">bf</div>
                        </div>
                        <div class="form-row-check uk-margin-small">
                            <div class="form-check">
                                <input class="form-check-input uk-radio" type="radio" name="fromrad" value="from_address_radio" id="fromAddress" <?=  $del_from_addr==true ? 'checked' : ''?>>
                                <label class="form-check-label" for="fromAddress">
                                    От адреса
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input uk-radio" type="radio" name="fromrad" value="from_terminal_radio" id="fromTerminal" <?= !$del_from_addr==true ? 'checked' : '' ?>>
                                <label class="form-check-label" for="fromTerminal">
                                    От терминала
                                </label>
                            </div>
                        </div>
                        <div class="form-row-control uk-margin-small-top" id="fromTerminal-row">
                            <div class="uk-margin-small uk-grid-small" uk-grid>
                                <div class="uk-width-1-1">
                                    <input class="form-control uk-input my-2" id="addressFrom" type="text" required name="address_from" placeholder="Адрес"
                                           aria-label="адрес">
                                </div>
                                <div class="uk-width-1-1">
                                    <input class="form-control uk-input" id="dateFrom" type="date" placeholder="Дата" name="date_from" aria-label="адрес">
                                </div>
                            </div>
                            <div class="form-row-check uk-margin-small" >
                                <div class="form-check">
                                    <input class="form-check-input uk-checkbox" type="checkbox" name="fixed_time1" value="" id="inTime1">
                                    <label class="form-check-label" for="inTime1">
                                        Фиксированное время +\- 2ч (+500 р.)
                                    </label>
                                </div>
                            </div>
                            <div class="uk-margin-top uk-grid-medium" uk-grid>
                                <div class="uk-width-1-2">
                                    <label class="uk-form-label">От</label>
                                    <div class="uk-form-controls">
                                        <input class="form-control uk-input my-2" id="Time1" name="time1_from" type="time" placeholder="time">
                                    </div>
                                </div>
                                <div class="uk-width-1-2">
                                    <label class="uk-form-label">До</label>
                                    <div class="uk-form-controls">
                                        <input class="form-control uk-input my-2" id="Time2" name="time1_until" type="time" placeholder="time">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="uk-width-medium@m uk-flex uk-flex-center@m col-2">
                    <div class="uk-card">
                        <button type="button" id="changeCities" class="uk-button uk-button-default"></button>
                        <div class="form-check form-check-row-1">
                            <input class="form-check-input uk-radio" type="radio" name="rad" value="econom" id="Ecorad">
                            <label class="form-check-label" for="Ecorad">
                                ЭКОНОМ
                            </label>
                        </div>
                        <div class="form-check form-check-row-2">
                            <input class="form-check-input uk-radio" type="radio" name="rad" value="express" id="Expressrad" checked>
                            <label class="form-check-label" for="Expressrad">
                                ЭКСПРЕСС
                            </label>
                        </div>
                    </div>
                </div>
                <div class="uk-width-expand@m col-3">
                    <div class="uk-card">
                        <div class="uk-h4 first-ttl">Куда</div>
                        <select id="city2" name="to_city" class="form-select uk-select form-select uk-select-lg mb-3"
                                aria-label=".form-select uk-select-lg example">
                            <option value="SPB" <?= $to_city == 'SPB' ? 'selected' : '' ?>>Санкт-Петербург</option>
                            <option value="Moscow" <?= $to_city == 'Moscow' ? 'selected' : '' ?>>Москва</option>
                        </select>
                        <div class="uk-text-result uk-margin">
                            <div id="arrEco" class="uk-text"></div>
                            <div id="arrExpress" class="uk-text"></div>
                        </div>
                        <div class="form-row-check uk-margin-small">
                            <div class="form-check">
                                <input class="form-check-input uk-radio" type="radio" name="torad" value="to_address_radio" id="toAddress" <?=  $del_to_addr==true ? 'checked' : ''?>>
                                <label class="form-check-label" for="toAddress">
                                    До адреса
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input uk-radio" type="radio" name="torad" id="toTerminal" value="to_terminal_radio"  <?=  !$del_to_addr==true ? 'checked' : ''?>>
                                <label class="form-check-label" for="toTerminal">
                                    До терминала
                                </label>
                            </div>
                        </div>
                        <div class="form-row-control uk-margin-small-top" id="toTerminal-row">
                            <div class="uk-margin-small uk-grid-small" uk-grid>
                                <div class="uk-width-1-1">
                                    <input class="form-control uk-input my-2" id="addressTo" type="text" name="address_to" placeholder="Адрес" aria-label="адрес">
                                </div>
                                <div class="uk-width-1-1">
                                    <input class="form-control uk-input" id="dateTo" name="date_to" type="date" placeholder="Дата" aria-label="адрес">
                                </div>
                            </div>
                            <div class="form-row-check uk-margin-small">
                                <div class="form-check">
                                    <input class="form-check-input uk-checkbox" type="checkbox" value="fixed_time2" id="inTime2">
                                    <label class="form-check-label" for="inTime2">
                                        Фиксированное время +\- 2ч (+500 р.)
                                    </label>
                                </div>
                            </div>
                            <div class="uk-margin-top uk-grid-medium" uk-grid>
                                <div class="uk-width-1-2">
                                    <label class="uk-form-label">От</label>
                                    <div class="uk-form-controls">
                                        <input class="form-control uk-input my-2" name="time2_from" id="Intime3" type="time"  placeholder="time">
                                    </div>
                                </div>
                                <div class="uk-width-1-2">
                                    <label class="uk-form-label">До</label>
                                    <div class="uk-form-controls">
                                        <input class="form-control uk-input my-2" id="Intime4" name="time2_until" type="time" placeholder="time">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="uk-section uk-section-default order-row-2">
            <div class="uk-container">
                <div class="uk-h2">Информация о грузе</div>
                <div class="uk-grid-medium uk-child-width-1-2 uk-child-width-1-5@m uk-flex-center uk-grid" uk-grid>
                    <div>
                        <div class="uk-h4">Вес груза</div>
                        <div class="input-group">
                            <input id="kg" type="number" class="form-control uk-input" name="kilos" value="<?= $kilos ? : 2.5  ?>" aria-label="Sizing example input"
                                   aria-describedby="labelkg">
                            <span class="input-group-text" id="labelkg">кг</span>
                        </div>

                        <label for="kgRange" class="form-label"></label>
                        <input type="range" min='0' max="100" step="0.5" class="form-range"  id="kgRange">

                    </div>
                    <div>
                        <div class="uk-h4">Обьем груза</div>
                        <div class="input-group">
                            <input id="meters" type="number" class="form-control uk-input" name="meters" value="<?= $meters ? : 0.01 ?>" step="0.01" min="0" max="80"
                                   aria-label="Sizing example input" aria-describedby="labelmeters">
                            <span class="input-group-text" id="labelmeters">м<sup>3</sup></span>
                        </div>
                        <label for="metersRange" class="form-label"></label>
                        <input type="range" min="0" max="1000" step="0.01" class="form-range" id="metersRange">

                    </div>
                    <div>
                        <div class="uk-h4">Кол-во мест</div>
                        <div class="input-group">

                            <input id="pieces" type="number" class="form-control uk-input" name="pieces" value="1" step="1" min="0" max="50"
                                   aria-label="Sizing example input" aria-describedby="labelpieces">
                            <span class="input-group-text" id="labelpieces">шт</span>
                        </div>
                        <label for="piecesrange" class="form-label"></label>
                        <input type="range" min="0" max="1000" step="0.01" class="form-range" id="piecesrange">

                    </div>
                    <div>
                        <div class="uk-h4">Самое тяжелое место</div>
                        <div class="input-group">

                            <input id="heaviest" type="number" class="form-control uk-input" name="heaviest" value="5" step="1" min="0"
                                   max="1000" aria-label="Sizing example input" aria-describedby="lableheaviest">
                            <span class="input-group-text" id="lableheaviest">кг</span>
                        </div>
                        <label for="heaviestRange" class="form-label"></label>
                        <input type="range" min="0" max="1000" step="0.01" class="form-range" id="heaviestRange">

                    </div>
                    <div>
                        <div class="uk-h4">Самое длинное</div>
                        <div class="input-group">
                            <input id="longest" type="number" class="form-control uk-input" name="longest" value="10" step="1" min="0" max="300"
                                   aria-label="Sizing example input" aria-describedby="basic-addon2">
                            <span class="input-group-text" id="basic-addon2">см</span>
                        </div>
                        <label for="longestRange" class="form-label"></label>
                        <input type="range" min="0" max="100" step="0.01" class="form-range" id="longestRange">

                    </div>
                </div>

                <div class="form-row-check uk-margin-top">
                    <div class="form-check">
                        <input class="form-check-input uk-checkbox check" type="checkbox" name="options[]" value="opt1" id="check1" <?=  $del_to_addr==true ? 'checked' : ''?>>
                        <label class="form-check-label" for="check1" id="labelFor1">
                            Доставка груза на адрес
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input uk-checkbox check" type="checkbox" value="opt2" name="options[]" id="check2" <?=  $del_from_addr==true ? 'checked' : ''?>>
                        <label class="form-check-label" for="check2" id="labelFor2">
                            Забор груза на адресе
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input uk-radio check package" type="radio" name="options[]" value="opt3" id="check3" <?=  $rigid==true ? 'checked' : ''?>>
                        <label class="form-check-label" for="check3" id="labelFor3">
                            Жесткая упаковка
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input uk-checkbox check" type="checkbox" name="options[]" value='opt4' id="check4"  <?=  $stretch==true ? 'checked' : ''?>>
                        <label class="form-check-label" for="check4" id="labelFor4">
                            Упаковка в стретч-пленку
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input uk-radio check package" type="radio" name="options[]" value="opt5" id="check5" <?=  $bort==true ? 'checked' : ''?>>
                        <label class="form-check-label" for="check5" id="labelFor5">
                            Упаковка в паллет-борт
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input uk-checkbox check" type="checkbox" name="options[]" value="opt6" id="check6" <?=  $insurance==true ? 'checked' : ''?>>
                        <label class="form-check-label" for="check6" id="labelFor6">
                            Страховка
                        </label>

                    </div>
                    <div class="form-check">
                        <input class="form-check-input uk-checkbox check" type="checkbox" name="options[]" value="opt7" id="check7">
                        <label class="form-check-label" for="check7" id="labelFor7">
                            ПРР на адресе забора груза
                        </label>

                    </div>
                    <div class="form-check">
                        <input class="form-check-input uk-checkbox check" type="checkbox" name="options[]" value="opt8" id="check8">
                        <label class="form-check-label" for="check8" id="labelFor8">
                            ПРР на адресе доставки груза
                        </label>

                    </div>
                </div>
                <div class="uk-margin-top">
                    <div class="row-lableworth">
                        <div class="uk-h4" id="lableworth">Ценность</div>
                        <div class="input-group">
                            <input id="worth" type="number"class="form-control uk-input" name="worth" value="0" step="1" min="0"
                                   aria-label="Sizing example input" aria-describedby="lableworth">
                            <span class="input-group-text">руб</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="uk-section uk-section-muted order-row-3">
            <div class="uk-container">
                <div class="uk-child-width-1-1 uk-child-width-1-3@m uk-flex-center uk-grid" uk-grid>
                    <div>
                        <div class="uk-h2">Отправитель</div>

                        <div class="uk-margin-small">
                            <label for="INNsender" class="form-label uk-form-label">ИНН, если юр. лицо</label>
                            <div class="uk-form-controls">
                                <input type="text" class="form-control uk-input" required name="INNsender" id="INNsender" placeholder="ИНН">
                            </div>
                        </div>

                        <div class="uk-margin-small">
                            <label for="сompSender" class="form-label uk-form-label">Название компании</label>
                            <div class="uk-form-controls">
                                <input type="text" id="compSender" class="form-control uk-input" placeholder="Компания">
                            </div>
                        </div>

                        <div class="uk-margin-small">
                            <label for="FIOsender" class="form-label uk-form-label">ФИО</label>
                            <div class="uk-form-controls">
                                <input type="text" class="form-control uk-input" required name="FIOsender" id="FIOsender" placeholder="ФИО">
                            </div>
                        </div>

                        <div class="uk-margin-small">
                            <label for="Telsender" class="form-label  uk-form-label">Телефон</label>
                            <div class="uk-form-controls">
                                <input type="tel" class="form-control uk-input" required name="Telsender" id="Telsender"
                                       pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
                                       placeholder="+7(___)___-__-__">
                            </div>
                        </div>

                        <div class="uk-margin-small">
                            <label for="Emailsender" class="form-label  uk-form-label">Emaill</label>
                            <div class="uk-form-controls">
                                <input type="email" class="form-control uk-input" required name="Emailsender" id="Emailsender" placeholder="Email">
                            </div>
                        </div>

                        <div class="form-row-check uk-margin-top">
                            <div class="form-check">
                                <input class="form-check-input uk-radio PayAll" type="radio" name="PayAll" value="" id="PayAllSender">
                                <label class="form-check-label" for="PayAllSender">
                                    За все
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input uk-radio PayTermTransfer Sender" type="radio" name="PayTermTransfer" value="" id="PayTermTransferSender">
                                <label class="form-check-label" for="PayTermTransferSender">
                                    За терминальную перевозку
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input uk-radio PayPac Sender" type="radio" name="PayPac" value="" id="PayPacSender">
                                <label class="form-check-label" for="PayPacSender">
                                    За упаковку
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input uk-radio PayIns Sender" type="radio" name="PayIns" value="" id="PayInsSender">
                                <label class="form-check-label" for="PayInsSender">
                                    За страховку
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input uk-radio PayFromAddressToTerm Sender" type="radio" name="PayFromAddressToTerm" value="" id="PayFromAddressToTermSender">
                                <label class="form-check-label" for="PayFromAddressToTermSender">
                                    За доставку от адреса до терминала
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input uk-radio PayPRRatAddress Sender" type="radio" name="PayPRRatAddress" value="" id="PayPRRatAddressSender">
                                <label class="form-check-label" for="PayPRRatAddressSender">
                                    За ПРР на адресе
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input uk-radio PayFromTermToAddress Sender" type="radio" name="PayFromTermToAddress" value="" id="PayFromTermToAddressSender">
                                <label class="form-check-label" for="PayFromTermToAddressSender">
                                    За доставку с терминала на адрес
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input uk-radio PayPRRtoAddress Sender" type="radio" name="PayPRRtoAddress" value="" id="PayPRRtoAddressSender">
                                <label class="form-check-label" for="PayPRRtoAddressSender">
                                    За ПРР на доставке на адрес
                                </label>
                            </div>
                            <div class="uk-h2" id="PaymentSender"></div>
                        </div>
                    </div>
                    <div>
                        <div class="uk-h2">Получатель</div>

                        <div class="uk-margin-small">
                            <label for="INNreceiver" class="form-label uk-form-label">ИНН, если юр. лицо</label>
                            <div class="uk-form-controls">
                                <input type="text" class="form-control uk-input" required id="INNreceiver" name="INNreceiver" placeholder="ИНН">
                            </div>
                        </div>

                        <div class="uk-margin-small">
                            <label for="сompReceiver" class="form-label uk-form-label">Название компании</label>
                            <div class="uk-form-controls">
                                <input type="text" id="compReceiver" name="compReceiver" class="form-control uk-input" placeholder="Компания">
                            </div>
                        </div>

                        <div class="uk-margin-small">
                            <label for="FIOreceiver" class="form-label uk-form-label">ФИО</label>
                            <div class="uk-form-controls">
                                <input type="text" class="form-control uk-input" required id="FIOreceiver" name="FIOreceiver" placeholder="ФИО">
                            </div>
                        </div>

                        <div class="uk-margin-small">
                            <label for="Telreceiver" class="form-label uk-form-label">Телефон</label>
                            <div class="uk-form-controls">
                                <input type="tel" class="form-control uk-input" required name="Telreceiver" id="Telreceiver"
                                       pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
                                       placeholder="+7(___)___-__-__">
                            </div>
                        </div>

                        <div class="uk-margin-small">
                            <label for="Emailreceiver" class="form-label uk-form-label">Email</label>
                            <div class="uk-form-controls">
                                <input type="email" class="form-control uk-input" required id="Emailreceiver" name="Emailreceiver" placeholder="Email">
                            </div>
                        </div>

                        <div class="form-row-check uk-margin-top">
                            <div class="form-check">
                                <input class="form-check-input uk-radio PayAll " type="radio"  name="PayAll" value="" id="PayAllReceiver">
                                <label class="form-check-label" for="PayAllReceiver">
                                    За все
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input uk-radio PayTermTransfer Receiver" type="radio" name="PayTermTransfer" value="" id="PayTermTransferReceiver">
                                <label class="form-check-label" for="PayTermTransferReceiver">
                                    За терминальную перевозку
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input uk-radio PayPac Receiver" type="radio" name="PayPac" value="" id="PayPacReceiver">
                                <label class="form-check-label" for="PayPacReceiver">
                                    За упаковку
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input uk-radio PayIns Receiver" type="radio" name="PayIns" value="" id="PayInsReceiver">
                                <label class="form-check-label" for="PayInsReceiver">
                                    За страховку
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input uk-radio PayFromAddressToTerm Receiver" type="radio" name="PayFromAddressToTerm" value="" id="PayFromAddressToTermReceiver">
                                <label class="form-check-label" for="PayFromAddressToTermReceiver">
                                    За доставку от адреса до терминала
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input uk-radio PayPRRatAddress Receiver" type="radio" name="PayPRRatAddress" value="" id="PayPRRatAddressReceiver">
                                <label class="form-check-label" for="PayPRRatAddressReceiver">
                                    За ПРР на адресе
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input uk-radio PayFromTermToAddress Receiver" type="radio" name="PayFromTermToAddress" value="" id="PayFromTermToAddressReceiver">
                                <label class="form-check-label" for="PayFromTermToAddressReceiver">
                                    За доставку с терминала на адрес
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input uk-radio PayPRRtoAddress Receiver" type="radio" name="PayPRRtoAddress" value="" id="PayPRRtoAddressReceiver">
                                <label class="form-check-label" for="PayPRRtoAddressReceiver">
                                    За ПРР на доставке на адрес
                                </label>
                            </div>
                            <div class="uk-h2" id="PaymentReceiver"></div>
                        </div>

                    </div>
                    <div>
                        <div class="uk-h2">3-е лицо</div>

                        <div class="uk-margin-small">
                            <label for="INN3dparty" class="form-label uk-form-label">ИНН, если юр. лицо</label>
                            <div class="uk-form-controls">
                                <input type="text" class="form-control uk-input" id="INN3dparty" name="INN3dparty" placeholder="ИНН">
                            </div>
                        </div>

                        <div class="uk-margin-small">
                            <label for="сomp3dparty" class="form-label uk-form-label">Название компании</label>
                            <div class="uk-form-controls">
                                <input type="text" id="comp3dparty" name="comp3dparty" class="form-control uk-input" placeholder="Компания">
                            </div>
                        </div>

                        <div class="uk-margin-small">
                            <label for="FIO3dparty" class="form-label uk-form-label">ФИО</label>
                            <div class="uk-form-controls">
                                <input type="text" class="form-control uk-input" id="FIO3dparty" name="FIO3dparty" placeholder="ФИО">
                            </div>
                        </div>

                        <div class="uk-margin-small">
                            <label for="Tel3dparty" class="form-label uk-form-label">Телефон</label>
                            <div class="uk-form-controls">
                                <input type="tel" class="form-control uk-input" id="Tel3dparty" name="Tel3dparty"
                                       pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
                                       placeholder="+7(___)___-__-__">
                            </div>
                        </div>

                        <div class="uk-margin-small">
                            <label for="Email3dparty" class="form-label uk-form-label">Email</label>
                            <div class="uk-form-controls">
                                <input type="email" class="form-control uk-input" id="Email3dparty" name="Email3dparty" placeholder="Email">
                            </div>
                        </div>

                        <div class="form-row-check uk-margin-top">
                            <div class="form-check">
                                <input class="form-check-input uk-radio PayAll Sender" type="radio" name="PayAll" value="" id="PayAll3dparty">
                                <label class="form-check-label PayAlllabel" for="PayAll3dparty">
                                    За все
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input uk-radio PayTermTransfer 3dparty" type="radio" name="PayTermTransfer" value="" id="PayTermTransfer3dparty">
                                <label class="form-check-label PayTermTransferlabel" for="PayTermTransfer3dparty">
                                    За терминальную перевозку
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input uk-radio PayPac 3dparty" type="radio" name="PayPac" value="" id="PayPac3dparty">
                                <label class="form-check-label PayPaclabel" for="PayPac3dparty">
                                    За упаковку
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input uk-radio PayIns 3dparty" type="radio" name="PayIns" value="" id="PayIns3dparty">
                                <label class="form-check-label PayInslabel" for="PayIns3dparty">
                                    За страховку
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input uk-radio PayFromAddressToTerm 3dparty" type="radio" name="PayFromAddressToTerm" value="" id="PayFromAddressToTerm3dparty">
                                <label class="form-check-label PayFromAddressToTermlabel" for="PayFromAddressToTerm3dparty">
                                    За доставку от адреса до терминала
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input uk-radio PayPRRatAddress 3dparty" type="radio" name="PayPRRatAddress" value="" id="PayPRRatAddress3dparty">
                                <label class="form-check-label PayPRRatAddresslabel" for="PayPRRatAddress3dparty">
                                    За ПРР на адресе
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input uk-radio PayFromTermToAddress 3dparty" type="radio" name="PayFromTermToAddress" value="" id="PayFromTermToAddress3dparty">
                                <label class="form-check-label PayFromTermToAddresslabel" for="PayFromTermToAddress3dparty">
                                    За доставку с терминала на адрес
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input uk-radio PayPRRtoAddress 3dparty" type="radio" name="PayPRRtoAddress" value="" id="PayPRRtoAddress3dparty">
                                <label class="form-check-label PayPRRtoAddresslabel" for="PayPRRtoAddress3dparty">
                                    За ПРР на доставке на адрес
                                </label>
                            </div>
                            <div class="uk-h2" id="Payment3dparty"></div>
                        </div>

                    </div>
                </div>
                <h6 id="warning"></h6>
                <div id="total" class="uk-h1">ИТОГО:</div>
                <input type="submit" class="uk-button uk-button-primary btn-order">
            </div>
        </div>

        <input type="hidden" name="stretch_price" id="stretch_price">
        <input type="hidden" name="rigid_pac_price" id="rigid_pac_price">
        <input type="hidden" name="bort_price" id="bort_price">
        <input type="hidden" name="TT_price" id="TT_price">
        <input type="hidden" name="insurance_price" id="insurance_price">
        <input type="hidden" name="PRRtoAddress_price" id="PRRtoAddress_price">
        <input type="hidden" name="PRRatAddress_price" id="PRRatAddress_price">
        <input type="hidden" name="DelToAddress_price" id="DelToAddress_price">
        <input type="hidden" name="DelFromAddress_price" id="DelFromAddress_price">

        <input type="hidden" name="amount_sender" id="amount_sender">
        <input type="hidden" name="amount_receiver" id="amount_receiver">
        <input type="hidden" name="amount_3dparty" id="amount_3dparty">
        <input type="hidden" name="totalhidden" id="totalhidden">
    </form>
</div>
<script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>

<script src="js/ahunter-suggest.js"></script>
<script SRC="js/props.js"></script>

<script src="js/arrays.js"></script>
<script src="js/timer.js"></script>
<script src="js/sendform.js"></script>
