<div id="section-01" class="uk-section uk-section-muted" uk-height-viewport="offset-top: true;">
    <div class="uk-container">
        <div class="uk-h1 sec-ttl">Рассчитать</div>
        <div class="tm-grid-expand uk-grid-medium uk-flex-bottom uk-grid-margin uk-grid" uk-grid>
            <div class="uk-grid-item-match uk-flex-middle uk-width-large@m">
                <div class="calc-widget">
                    <form action="index.php?c=page&act=sendfirstform" method="post">
                        <div class="calc-widget-grid uk-grid-row-small uk-grid-column-collapse uk-grid" uk-grid>
                            <div class="uk-h4 first-ttl">Выбор города</div>
                            <div class="uk-row uk-grid-callapse uk-flex uk-row-full uk-flex-between uk-flex-middle">
                                <div class="">
                                    <select id="city1" name="city_from" class="form-select uk-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                        <option value="Moscow" selected>Москва</option>
                                        <option value="SPB">Санкт-Петербург</option>
                                    </select>
                                </div>
                                <div>
                                    <button type="button" id="changeCities" class="uk-button uk-button-default"></button>
                                </div>
                                <div class="">
                                    <select id="city2" name="city_to" class="form-select uk-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                        <option value="SPB" selected>Санкт-Петербург</option>
                                        <option value="Moscow">Москва</option>
                                    </select>
                                </div>
                            </div>
                            <div class="uk-row uk-grid-item-match">
                                <div class="uk-row uk-grid-medium uk-flex uk-row-full uk-flex-between uk-flex-middle">
                                    <div>
                                        <div class="uk-h4">Вес</div>
                                        <div class="input-group mb-3">
                                            <input id="kg" type="number" name="kilograms" class="form-control uk-input" aria-label="Sizing example input" aria-describedby="basic-addon2"> <span class="input-group-text" id="basic-addon2">кг</span> </div>
                                        <label for="kgRange" class="form-label"></label>
                                        <input type="range" min='0' max="100" step="0.5" class="form-range" value="" id="kgRange"> </div>
                                    <div>
                                        <div class="uk-h4">Объём</div>
                                        <div class="input-group mb-3">
                                            <input id="meters" type="number" name="meters" class="form-control uk-input" value="0.01" step="0.01" min="0" max="80" aria-label="Sizing example input" aria-describedby="basic-addon1"> <span class="input-group-text" id="basic-addon1">м<sup>3</sup></span> </div>
                                        <label for="metersRange" class="form-label"></label>
                                        <input type="range" min="0" max="100" step="0.01" class="form-range" id="metersRange"> </div>
                                </div>
                                <div class="row-dop-functions">
                                    <div class="uk-h4">Дополнительные функции</div>
                                    <div class="form-row-check">
                                        <div class="form-check uk-flex uk-flex-middle">
                                            <input class="form-check-input uk-checkbox" type="checkbox" value="opt1" name="options[]" id="check1">
                                            <label class="form-check-label" for="check1" id="labelFor1"> Доставка груза на адрес </label>
                                        </div>
                                        <div class="form-check uk-flex uk-flex-middle">
                                            <input class="form-check-input uk-checkbox" type="checkbox" value="opt2" name="options[]" id="check2">
                                            <label class="form-check-label" for="check2" id="labelFor2"> Забор груза на адресе </label>
                                        </div>
                                        <div class="form-check uk-flex uk-flex-middle">
                                            <input class="form-check-input uk-radio" type="radio" name="options[]" value="opt3" id="check3">
                                            <label class="form-check-label" for="check3" id="labelFor3"> Жесткая упаковка </label>
                                        </div>
                                        <div class="form-check uk-flex uk-flex-middle">
                                            <input class="form-check-input uk-checkbox" type="checkbox" value="opt4" name="options[]" id="check4">
                                            <label class="form-check-label" for="check4" id="labelFor4"> Упаковка в стретч-пленку </label>
                                        </div>
                                        <div class="form-check uk-flex uk-flex-middle">
                                            <input class="form-check-input uk-radio" type="radio" name="options[]" value="opt5" id="check5">
                                            <label class="form-check-label" for="check5" id="labelFor5"> Упаковка в паллет-борт </label>
                                        </div>
                                        <div class="form-check uk-flex uk-flex-middle">
                                            <input class="form-check-input uk-checkbox" type="checkbox" value="opt6" name="options[]" id="check6">
                                            <label class="form-check-label" for="check6" id="labelFor6"> Страховка </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="uk-row calc-result uk-grid-item-match">
                                <div class="uk-margin">
                                    <div id="DepEco"></div>
                                    <div id="arrEco"></div>
                                    <div id="resultEco">Стоимость ЭКОНОМ: </div>
                                    <div id="DepExpress"></div>
                                    <div id="arrExpress"></div>
                                    <div id="resultExpress">Стоимость ЭКСПРЕСС: </div>
                                </div>
                                <input class="uk-button uk-button-primary btn-order" type="submit" value="Оформить"> </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="uk-grid-item-match banners-grid uk-width-expand@m">
                <div class="uk-grid-small uk-child-width-1-1 uk-child-width-1-2@m uk-flex-center" uk-grid>
                    <div>
                        <div class="uk-card uk-card-default">
                            <div class="el-image"><img alt="" src="images/banner-01.jpg"></div>
                        </div>
                    </div>
                    <div>
                        <div class="uk-card uk-card-default">
                            <div class="el-image"><img alt="" src="images/banner-02.jpg"></div>
                        </div>
                    </div>
                    <div>
                        <div class="uk-card uk-card-default">
                            <div class="el-image"><img alt="" src="images/banner-03.jpg"></div>
                        </div>
                    </div>
                    <div>
                        <div class="uk-card uk-card-default">
                            <div class="el-image"><img alt="" src="images/banner-04.jpg"></div>
                        </div>
                    </div>
                </div>
                <div class="search-widget">
                    <div class="uk-grid-default uk-grid" uk-grid>
                        <div class="uk-grid-item-match uk-flex-middle uk-width-small@m">
                            <div class="form-ttl">Отследить груз</div>
                        </div>
                        <div class="uk-grid-item-match uk-width-expand@m">
                            <form class="uk-search uk-search-default uk-flex">
                                <input class="uk-search-input" type="search" placeholder="Номер отправления 200******">
                                <button class="uk-button uk-button-primary" type="submit">Найти</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="section-02" class="uk-section uk-section-large">
    <div class="uk-container">
        <div class="tm-grid-expand uk-grid-medium uk-flex-top uk-grid-margin uk-grid" uk-grid>
            <div class="uk-grid-item-match uk-flex-middle uk-width-large@m">
                <div class="uk-h2 sec-ttl">Почему стоит <span><b>выбрать Нас</b> ?</span></div>
            </div>
            <div class="uk-grid-item-match uk-width-expand@m">
                <div class="uk-grid-medium uk-child-width-1-1 grid-our-advantages uk-child-width-1-2@m uk-flex-center" uk-height-match="target: > div > .uk-card" uk-grid>
                    <div>
                        <div class="uk-card uk-card-default uk-card-body">
                            <div class="el-meta">01</div>
                            <div class="el-title">Без переплат:</div>
                            <div class="el-text">
                                <ul class="uk-list uk-list-disc">
                                    <li>На 47% дешевле конкурентов</li>
                                    <li>Без скрытых платежей</li>
                                    <li>Платите за самое нужное</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="uk-card uk-card-default uk-card-body">
                            <div class="el-meta">02</div>
                            <div class="el-title">Безопасно:</div>
                            <div class="el-text">
                                <ul class="uk-list uk-list-disc">
                                    <li>Все грузы застрахованы</li>
                                    <li>Свой транспорт</li>
                                    <li>Онлайн статус каждого заказа</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="uk-card uk-card-default uk-card-body">
                            <div class="el-meta">03</div>
                            <div class="el-title">Быстро:</div>
                            <div class="el-text">
                                <ul class="uk-list uk-list-disc">
                                    <li>Отправки 6 дней в неделю</li>
                                    <li>Доставка по расписанию</li>
                                    <li>Экспресс 12 часов</li>
                                    <li>Эконом 24 часа</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="uk-card uk-card-default uk-card-body">
                            <div class="el-meta">04</div>
                            <div class="el-title">Удобно:</div>
                            <div class="el-text">
                                <ul class="uk-list uk-list-disc">
                                    <li>Получение по смс</li>
                                    <li>Сдача груза и оформление
                                        <br />6.5 мин неотходя от машины</li>
                                    <li>Документо оборот</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="js/arrays.js"></script>
<script src="js/timerforindex.js"></script>
<script src="js/script.js"></script>
