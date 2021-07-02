const econom = document.getElementById('Ecorad'),
    express = document.getElementById('Expressrad');

const minMeters = 0.01, // Минимальное значение обьема груза
    minKg = 0.5, // Минимальное значение веса груза
    maxMeters = 80, // Максимальный обьем груза
    maxKg = 20000, // Максимальный вес груза
    minInsurance = 30,
    minBort = 200,
    minStretch = 100,
    minRigidPac = 500,
    ADfixMSK = 500,
    ADfixSPB = 500,
    INSpercent = 0.5,
    MakeIt = 50, // Оплата за услугу "Оформим за вас"
    OversizeAD = 1.3, // Множитель при негабаритном грузе для AД
    OversizeTerm = 1.25, //Множитель при негабаритном грузе для терминальной доставки
    PRRfromAddress = 50,
    PRRtoAddress = 50;


// Города
let fromCity = document.getElementById('city1');
let toCity = document.getElementById('city2');
let worth = document.getElementById('worth');
// Метры кубические
let meters = document.getElementById('meters');
// Килограммы
let kg = document.getElementById('kg');
let pieces = document.getElementById('pieces');
let heaviest = document.getElementById('heaviest');
let longest = document.getElementById('longest')
// Значения из range инпутов
let metersRange = document.getElementById('metersRange');
let kgRange = document.getElementById('kgRange');
let piecesRange = document.getElementById('piecesrange');
let heaviestRange = document.getElementById('heaviestRange');
let longestRange = document.getElementById('longestRange');

let toAddressLabel = document.getElementById("labelFor1");
let fromAddressLabel = document.getElementById("labelFor2");
let rigidPacLabel = document.getElementById("labelFor3");
let stretchPacLabel = document.getElementById("labelFor4");
let bortLabel = document.getElementById("labelFor5");
let insuranceLabel = document.getElementById("labelFor6");
let PRRfromLabel = document.getElementById('labelFor7');
let PRRtoLabel = document.getElementById('labelFor8');


// Чекбоксы
let checkboxes = document.getElementsByClassName('check');

// Лейблы
let inTime1 = document.getElementById('inTime1');
let inTime2 = document.getElementById('inTime2');
inTime1.addEventListener('input', () => {
    if (express.checked == true) {
        CalculateExpress('total');
    } else if (econom.checked == true) {
        CalculatorEco('total')
    }
})
inTime2.addEventListener('input', () => {
    if (express.checked == true) {
        CalculateExpress('total');
    } else if (econom.checked == true) {
        CalculatorEco('total')
    }
})
let changeCitiesbtn = document.getElementById("changeCities");
//
let PayAll = Array.apply(null,  document.getElementsByClassName('PayAll'));
let PayTermTransfer = Array.apply(null,  document.getElementsByClassName('PayTermTransfer'));
let PayPac = Array.apply(null,  document.getElementsByClassName('PayPac'));
let PayIns = Array.apply(null,  document.getElementsByClassName('PayIns'));
let PayFromAddressToTerm = Array.apply(null,  document.getElementsByClassName('PayFromAddressToTerm'));
let PayPRRatAddress = Array.apply(null,  document.getElementsByClassName('PayPRRatAddress'));
let PayFromTermToAddress = Array.apply(null,  document.getElementsByClassName('PayFromTermToAddress'));
let PayPRRtoAddress = Array.apply(null,  document.getElementsByClassName('PayPRRtoAddress'));

let Sender = Array.apply(null, document.getElementsByClassName('Sender'));
let Receiver = Array.apply(null, document.getElementsByClassName('Receiver'));
let ThirdParty = Array.apply(null, document.getElementsByClassName('3dparty'));
let DeliveryFrom = Array.apply(null, document.getElementsByName('fromrad'));
let DeliveryTo = Array.apply(null, document.getElementsByName('torad'));
let AllPaymentChecks = [
    PayTermTransfer,
    PayAll,
    PayPac,
    PayIns,
    PayPRRatAddress,
    PayPRRtoAddress,
    PayFromAddressToTerm,
    PayFromTermToAddress
]
let txtPayAll ='За все';
let txtPayTermTransfer = 'За терминальную перевозку';
let txtPayPac = 'За упаковку';
let txtPayIns = 'За страховку';
let txtPayFromAddressToTerm = 'За доставку от адреса до терминала';
let txtPayPRRatAddress = 'За ПРР на адресе забора груза';
let txtPayFromTermToAddress = 'За доставку от терминала до адреса';
let txtPayPRRtoAddress = 'За ПРР на адресе доставки';

for (let check of checkboxes) {
    check.addEventListener('change', () => {

    })
}

DeliveryFrom.forEach(Btn => {
    Btn.addEventListener('input', () => {
        if (Btn == document.getElementById('fromAddress')) {
            if (Btn.checked == true) {
                document.getElementById('addressFrom').disabled = false;
                document.getElementById('check2').checked = true;
                if (express.checked == true) {
                    CalculateExpress('total');
                } else if (econom.checked == true) {
                    CalculatorEco('total')
                }

            } else {
                document.getElementById('addressFrom').disabled = true;
                document.getElementById('fromTerminal').checked = true;
                document.getElementById('check2').checked = false;
                if (express.checked == true) {
                    CalculateExpress('total');
                } else if (econom.checked == true) {
                    CalculatorEco('total')
                }

            }
        } else {
            document.getElementById('addressFrom').disabled = true;
            document.getElementById('check2').checked = false;
            if (express.checked == true) {
                CalculateExpress('total');
            } else if (econom.checked == true) {
                CalculatorEco('total')
            }

        }
    })
})

// От/До скрытие полей "Откуда" (Адрес, Дата, время)

  var updateIdent_otkyda = function() {
    if ($('#fromAddress').is(":checked")) {
      $('#fromTerminal-row').show();
    } else {
      $('#fromTerminal-row').hide();
    }
  }

  $('.order-row-1 .col-1 .uk-card > .form-row-check input[type="radio"]').on('change', updateIdent_otkyda);
  updateIdent_otkyda();
  
// От/До скрытие полей "Куда" (Адрес, Дата, время)
  var updateIdent_kyda = function() {
    if ($('#toAddress').is(":checked")) {
      $('#toTerminal-row').show();
    } else {
      $('#toTerminal-row').hide();
    }
  }

  $('.order-row-1 .col-3 .uk-card > .form-row-check input[type="radio"]').on('change', updateIdent_kyda);
  updateIdent_kyda();


if (document.getElementById('fromAddress').checked == true) {
    document.getElementById('addressFrom').disabled = false;
    document.getElementById('check1').checked = true;
    if (express.checked == true) {
        CalculateExpress('total');
    } else if (econom.checked == true) {
        CalculatorEco('total')
    }
} else {
    document.getElementById('addressFrom').disabled = true;
    document.getElementById('check1').checked = false;
    if (express.checked == true) {
        CalculateExpress('total');
    } else if (econom.checked == true) {
        CalculatorEco('total')
    }
}

if (document.getElementById('toAddress').checked == true) {
    document.getElementById('addressTo').disabled = false;
    document.getElementById('check2').checked = true;
    if (express.checked == true) {
        CalculateExpress('total');
    } else if (econom.checked == true) {
        CalculatorEco('total')
    }
} else {
    document.getElementById('addressTo').disabled = true;
    document.getElementById('check2').checked = false;
    if (express.checked == true) {
        CalculateExpress('total');
    } else if (econom.checked == true) {
        CalculatorEco('total')
    }
}

DeliveryTo.forEach(Btn => {
    Btn.addEventListener('change', () => {
        if (Btn == document.getElementById('toAddress')) {
            if (Btn.checked == true) {
                document.getElementById('addressTo').disabled = false;
                document.getElementById('check1').checked = true;
                if (express.checked == true) {
                    CalculateExpress('total');
                } else if (econom.checked == true) {
                    CalculatorEco('total')
                }
            } else {
                document.getElementById('addressTo').disabled = true;
                document.getElementById('check1').checked = false;
                if (express.checked == true) {
                    CalculateExpress('total');
                } else if (econom.checked == true) {
                    CalculatorEco('total')
                }
            }
        } else {
            document.getElementById('addressTo').disabled = true;
            document.getElementById('check1').checked = false;
            if (express.checked == true) {
                CalculateExpress('total');
            } else if (econom.checked == true) {
                CalculatorEco('total')
            }
        }
    })
});
PayAll.forEach(radioBtn => {
    let checked = false;

    radioBtn.addEventListener("mousedown", event => {
        checked = radioBtn.checked;
    });
    radioBtn.addEventListener("click", event => {
        radioBtn.checked = !checked;
        CalculateSubtotals();
        disableRads(radioBtn);
    });
    });
PayTermTransfer.forEach(radioBtn => {
    let checked = false;

    radioBtn.addEventListener("mousedown", event => {
        checked = radioBtn.checked;
    });
    radioBtn.addEventListener("click", event => {
        radioBtn.checked = !checked;
        CalculateSubtotals();
    });
});
PayPac.forEach(radioBtn => {
    let checked = false;

    radioBtn.addEventListener("mousedown", event => {
        checked = radioBtn.checked;
    });
    radioBtn.addEventListener("click", event => {
        radioBtn.checked = !checked;
        CalculateSubtotals();
    });
});
PayIns.forEach(radioBtn => {
    let checked = false;

    radioBtn.addEventListener("mousedown", event => {
        checked = radioBtn.checked;
    });
    radioBtn.addEventListener("click", event => {
        radioBtn.checked = !checked;
        CalculateSubtotals();
    });
});
PayFromTermToAddress.forEach(radioBtn => {
    let checked = false;

    radioBtn.addEventListener("mousedown", event => {
        checked = radioBtn.checked;
    });
    radioBtn.addEventListener("click", event => {
        radioBtn.checked = !checked;
        CalculateSubtotals();
    });
});
PayFromAddressToTerm.forEach(radioBtn => {
    let checked = false;

    radioBtn.addEventListener("mousedown", event => {
        checked = radioBtn.checked;
    });
    radioBtn.addEventListener("click", event => {
        radioBtn.checked = !checked;
        CalculateSubtotals();
    });
});
PayPRRtoAddress.forEach(radioBtn => {
    let checked = false;

    radioBtn.addEventListener("mousedown", event => {
        checked = radioBtn.checked;
    });
    radioBtn.addEventListener("click", event => {
        radioBtn.checked = !checked;
        CalculateSubtotals();
    });
});
PayPRRatAddress.forEach(radioBtn => {
    let checked = false;

    radioBtn.addEventListener("mousedown", event => {
        checked = radioBtn.checked;
    });
    radioBtn.addEventListener("click", event => {
        radioBtn.checked = !checked;
        CalculateSubtotals();
    });
});

function disableRads(rad) {
    if (rad.checked == true) {
        PayTermTransfer.forEach(radioBtn => {
            radioBtn.checked = false;
            radioBtn.disabled = true;
        });
        PayPac.forEach(radioBtn => {
            radioBtn.checked = false;
            radioBtn.disabled = true;
        });
        PayIns.forEach(radioBtn => {
            radioBtn.checked = false;
            radioBtn.disabled = true;
        })
        PayFromTermToAddress.forEach(radioBtn => {
            radioBtn.checked = false;
            radioBtn.disabled = true;
        });
        PayFromAddressToTerm.forEach(radioBtn => {
            radioBtn.checked = false;
            radioBtn.disabled = true;
        });
        PayPRRtoAddress.forEach(radioBtn => {
            radioBtn.checked = false;
            radioBtn.disabled = true;
        });
        PayPRRatAddress.forEach(radioBtn => {
            radioBtn.checked = false;
            radioBtn.disabled = true;
        });
    } else {
        PayTermTransfer.forEach(radioBtn => {
            radioBtn.disabled = false;
        });
        PayPac.forEach(radioBtn => {
            radioBtn.disabled = false;
        });
        PayIns.forEach(radioBtn => {
            radioBtn.disabled = false;
        })
        PayFromTermToAddress.forEach(radioBtn => {
            radioBtn.disabled = false;
        });
        PayFromAddressToTerm.forEach(radioBtn => {
            radioBtn.disabled = false;
        });
        PayPRRtoAddress.forEach(radioBtn => {
            radioBtn.disabled = false;
        });
        PayPRRatAddress.forEach(radioBtn => {
            radioBtn.disabled = false;
    })
}}

let packageRad = Array.apply(null,  document.getElementsByClassName('package'));
packageRad.forEach(rad => {
    let checked = false;

    rad.addEventListener("mousedown", event => {
        checked = rad.checked;
        if (express.checked == true) {
            CalculateExpress('total');
        } else if (econom.checked == true) {
            CalculatorEco('total')
        }

        CalculateSubtotals();
    });
    rad.addEventListener("click", event => {
        rad.checked = !checked;
        if (express.checked == true) {
            CalculateExpress('total');
        } else if (econom.checked == true) {
            CalculatorEco('total')
        }

        CalculateSubtotals();
    });
})
kg.max = 20000;
//kg.value = 2.5;
kg.min = 0;

meters.max = 80;
//meters.value = 0.01;
meters.min = 0;

let allInputs = [
    kg,
    meters,
    pieces,
    heaviest,
    longest,
    longestRange,
    heaviestRange,
    piecesRange,
    metersRange,
    kgRange,
    toCity,
    fromCity,
    econom,
    express,
    worth
]

for (let check of checkboxes) {
    if (check.value == 'opt1') {
        check.addEventListener('click', () => {
            if (check.checked==true) {
                document.getElementById('toAddress').checked = true;
                document.getElementById('addressTo').disabled = false;
            } else if (check.checked == false) {
                document.getElementById('toAddress').checked = false;
                document.getElementById('addressTo').disabled = true;
                document.getElementById('toTerminal').checked = true;
            }

        })

    } else if (check.value == 'opt2') {
        check.addEventListener('click', () => {
            if (check.checked==true) {
                document.getElementById('fromAddress').checked = true;
                document.getElementById('addressFrom').disabled = false;
            } else if (check.checked == false) {
                document.getElementById('fromAddress').checked = false;
                document.getElementById('addressFrom').disabled = true;
                document.getElementById('fromTerminal').checked = true;
            }

        })
    }
    allInputs.push(check);
}

getDepTimeExpress();
getDepTimeEconom()
timer();

function stepChangekg() {

    if (kg.value >= 0.5 && kg.value < 10) {
        kg.setAttribute('step', 0.5);
        //kg.value = fixValueKg(parseFloat(kg.value));
    } else if ((kg.value == 10 || kg.value > 10) && kg.value < 50) {
        kg.setAttribute('step', 1);
        //kg.value = fixValueKg(parseFloat(kg.value));
    } else if (kg.value >= 50 && kg.value < 100) {
        kg.setAttribute('step', 5);
        //kg.value = fixValueKg(parseFloat(kg.value));
    } else if (kg.value >= 100 && kg.value < 1000) {
        kg.setAttribute('step', 10);
        //kg.value = fixValueKg(parseFloat(kg.value));
    } else if (kg.value >= 1000 && kg.value < 20000) {
        kg.setAttribute('step', 100);

    }
}
function stepChangeM() {
    if (meters.value >= 0 && meters.value < 0.5) {
        meters.setAttribute('step', 0.01);
    } else if (meters.value >= 0.5 && meters.value < 5) {
        meters.setAttribute('step', 0.1);
    } else if (meters.value >= 5 && meters.value < 10) {
        meters.setAttribute('step', 0.5);
    } else if (meters.value >= 10 && meters.value < 80) {
        meters.setAttribute('step', 1);
    }
}
function stepChangePieces() {
    if (pieces.value >= 0 && pieces.value <= 50) {
        pieces.setAttribute('step', 1);
    }
}
function stepChangeHeaviest() {
    if (heaviest.value >= 0 && heaviest.value < 30) {
        heaviest.setAttribute('step', 1);
    } else if (heaviest.value >= 30 && heaviest.value < 100) {
        heaviest.setAttribute('step', 5);
    } else if (heaviest.value >= 100 && heaviest.value < 1000) {
        heaviest.setAttribute('step', 50);
    }
}
function stepChangeLongest() {
    if (longest.value >= 0 && longest.value < 50) {
        longest.setAttribute('step', '5');
    } else if (longest.value >= 50 && longest.value < 90) {
        longest.setAttribute('step', '10');
    } else if (longest.value >= 90 && longest.value < 300) {
        longest.setAttribute('step', '20');
    }
}
function fixValueM(val) {
    if (val < 0.5) {
        return +(val.toFixed(2));
    } else if (val >= 0.5 && val < 5) {
        return +(val.toFixed(1));
    } else if (val >= 5 && val < 10) {
        return Math.round(val * 2) / 2;
    } else if (val >= 10) {
        return Math.round(val);
    } else if (val > 80) {
        return 80
    }
}
function fixValueKg(val) {
    if (val >= 2.25 && val < 3) {
        return 2.5;
    } else if (val < 10) {
        return Math.round(val * 2) / 2;
    } else if (val >= 10 && val < 50) {
        return Math.round(val);
    } else if (val >= 50 && val < 100) {
        return Math.round(val / 5) * 5;
    } else if (val >= 100 && val < 1000) {
        return Math.round(val / 10) * 10;
    } else if (val >= 1000) {
        return Math.round(val / 100) * 100;
    } else if (val > 20000) {
        return 20000;
    }
}
function fixValuePieces(val) {
    return Math.round(val);
}
function fixValueHeaviest(val) {
    if (val < 5) {
        return 5;
    } else if (val < 30) {
        return Math.round(val);
    } else if (val < 100) {
        return Math.round(val / 5) * 5;
    } else if (val >= 100 && val <= 1000) {
        return Math.round(val/50)*50;
    } else if (val > 1000) {
        return 1000;
    }
}
function fixValueLongest(val) {
    if (val < 50) {
        return Math.round(val / 5) * 5;
    } else if (val < 100) {
        return Math.round(val/10) * 10;
    } else if (val > 100) {
        return Math.round(val / 25) * 25;
    } else if (val > 300) {
        return 300
    }
}
function logsliderKg(position) {

    var minp = 1;
    var maxp = 100;


    var minv = Math.log(minKg);
    var maxv = Math.log(maxKg);

    // calculate adjustment factor
    var scale = (maxv - minv) / (maxp - minp);

    return Math.exp(minv + scale * (position - minp));

}
function logsliderM(position) {
    // position will be between 0 and 100
    var minp = metersRange.getAttribute('min');
    var maxp = metersRange.getAttribute('max');

    // The result should be between 100 an 10000000
    var minv = Math.log(minMeters);
    var maxv = Math.log(maxMeters);

    // calculate adjustment factor
    var scale = (maxv - minv) / (maxp - minp);

    return Math.exp(minv + scale * (position - minp));
}
function logsliderPieces(position) {
    var minp = piecesRange.getAttribute('min');
    var maxp = piecesRange.getAttribute('max');

    // The result should be between 100 an 10000000
    var minv = Math.log(1);
    var maxv = Math.log(50);

    // calculate adjustment factor
    var scale = (maxv - minv) / (maxp - minp);

    return Math.exp(minv + scale * (position - minp));
}
function logsliderHeaviest(position) {
    var minp = heaviestRange.getAttribute('min');
    var maxp = heaviestRange.getAttribute('max');

    // The result should be between 100 an 10000000
    var minv = Math.log(2.5);
    var maxv = Math.log(1000);

    // calculate adjustment factor
    var scale = (maxv - minv) / (maxp - minp);

    return Math.exp(minv + scale * (position - minp));
}
function logsliderLongest(position) {
    var minp = longestRange.getAttribute('min');
    var maxp = longestRange.getAttribute('max');

    // The result should be between 100 an 10000000
    var minv = Math.log(10);
    var maxv = Math.log(300);

    // calculate adjustment factor
    var scale = (maxv - minv) / (maxp - minp);

    return Math.exp(minv + scale * (position - minp));
}
function logInputKg(value) {
    var minp = kgRange.getAttribute('min');
    var maxp = kgRange.getAttribute('max');


    var minv = Math.log(minKg);
    var maxv = Math.log(maxKg);

    // calculate adjustment factor
    var scale = (maxv - minv) / (maxp - minp);

    return (Math.log(value) - minv) / scale + minp;
}
function logInputM(value) {
    // position will be between 0 and 100
    var minp = +metersRange.getAttribute('min');
    var maxp = +metersRange.getAttribute('max');

    // The result should be between 100 an 10000000
    var minv = Math.log(minMeters);
    var maxv = Math.log(maxMeters);

    // calculate adjustment factor
    var scale = (maxv - minv) / (maxp - minp);

    return (Math.log(value) - minv) / scale + minp;
}
function logInputPieces(value)  {
    var minp = +piecesRange.getAttribute('min');
    var maxp = +piecesRange.getAttribute('max');

    // The result should be between 100 an 10000000
    var minv = Math.log(1);
    var maxv = Math.log(50);

    // calculate adjustment factor
    var scale = (maxv - minv) / (maxp - minp);

    return (Math.log(value) - minv) / scale + minp;
}
function logInputHeaviest(value) {
    var minp = +heaviestRange.getAttribute('min');
    var maxp = +heaviestRange.getAttribute('max');

    // The result should be between 100 an 10000000
    var minv = Math.log(2.5);
    var maxv = Math.log(1000);

    // calculate adjustment factor
    var scale = (maxv - minv) / (maxp - minp);

    return (Math.log(value) - minv) / scale + minp;
}
function logInputLongest(value) {
    var minp = +longestRange.getAttribute('min');
    var maxp = +longestRange.getAttribute('max');

    // The result should be between 100 an 10000000
    var minv = Math.log(10);
    var maxv = Math.log(300);

    // calculate adjustment factor
    var scale = (maxv - minv) / (maxp - minp);

    return (Math.log(value) - minv) / scale + minp;
}
function assignValueRtoI(range) {
    if (range == metersRange) {
        meters.value = fixValueM(logsliderM(+metersRange.value));
        console.log('meters');
    } else if (range ==  kgRange) {
        kg.value = fixValueKg(logsliderKg(+kgRange.value));
    } else if (range == piecesRange) {
        pieces.value = fixValuePieces(logsliderPieces(+piecesRange.value));
    } else if (range == heaviestRange) {
        heaviest.value = fixValueHeaviest(logsliderHeaviest(+heaviestRange.value));
    } else if (range == longestRange) {
        longest.value = fixValueLongest(logsliderLongest(+longestRange.value));
    }

}
function assignValueItoR() {
    metersRange.value = fixValueM(logInputM(+meters.value));
    kgRange.value = fixValueKg(logInputKg(+kg.value));
    piecesRange.value = fixValuePieces(logInputPieces(+pieces.value));

    heaviestRange.value = fixValueHeaviest(logInputHeaviest(+heaviest.value));

    longestRange.value = fixValueLongest(logInputLongest(+longest.value));
}
function fixCities() {
    if (fromCity.value == 'SPB') {
        toCity.value = 'Moscow';
    } else if (fromCity.value == 'Moscow') {
        toCity.value = 'SPB';
    }
}
function getSelectedCheckboxes() {
    let checkboxes = document.getElementsByClassName('check');
    let selected = [];
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            selected.push(checkboxes[i].value);
        }
    }
    return selected;

}
function cargoVol() {
    if (kg.value / 250 > meters.value) {
        return +kg.value / 250;
    } else {
        return +meters.value;
    }
}
function cargoWeight() {
    if (meters.value * 250 < kg.value) {
        return kg.value;
    } else {
        return meters.value * 250;
    }
}
function neededArr(express) {
    if (fromCity.value == "Moscow" && express == false) {
        return arr1;
    } else if (fromCity.value == 'Moscow' && express == true) {
        return arr2;
    } else if (fromCity.value == 'SPB' && express == false) {
        return arr3;
    } else if (fromCity.value == 'SPB' && express == true) {
        return arr4;
    }
}
function priceTypeForAD() {
    if (cargoVol() >= 40) {
        return '40m+';
    } else if (cargoVol() >= 30) {
        return 'upTo40m';
    } else if (cargoVol() >= 20) {
        return 'upTo30m';
    } else if (cargoVol() >= 10) {
        return 'upTo20m';
    } else if (cargoVol() >= 7) {
        return 'upTo10m'
    } else if (cargoVol() >= 5) {
        return 'upTo7m';
    } else if (cargoVol() >= 3) {
        return 'upTo5m';
    } else if (cargoVol() >= 1) {
        return 'upTo3m';
    } else if (cargoVol() >= 0.2) {
        return 'upTo1m';
    } else if (cargoVol() > 0.1) {
        return 'minP';
    } else if (cargoVol() > 0.01) {
        return 'single';
    } else {
        return 'docs'
    }
}
function priceForAdWithPackage(volume) {
    volume = volume * 1.3;
    if (volume >= 40) {
        return '40m+';
    } else if (volume >= 30) {
        return 'upTo40m';
    } else if (volume >= 20) {
        return 'upTo30m';
    } else if (volume >= 10) {
        return 'upTo20m';
    } else if (volume >= 7) {
        return 'upTo10m'
    } else if (volume >= 5) {
        return 'upTo7m';
    } else if (volume >= 3) {
        return 'upTo5m';
    } else if (volume >= 1) {
        return 'upTo3m';
    } else if (volume >= 0.2) {
        return 'upTo1m';
    }
}
function priceType() {
    if (cargoVol() >= 50) {
        return '50m+';
    } else if (cargoVol() >= 40) {
        return '40m+';
    } else if (cargoVol() >= 30) {
        return '30m+';
    } else if (cargoVol() >= 10) {
        return '10m+';
    } else if (cargoVol() >= 5) {
        return '5m+';
    } else if (cargoVol() >= 0.2) {
        return '5m-'
    } else if (cargoVol() > 0.1) {
        return 'minP';
    } else if (cargoVol() > 0.01) {
        return 'single';
    } else {
        return 'docs'
    }
}
function CalculateExpress(res) {
    let array = neededArr(true);
    let optPrices = array['price'][priceType()];
    let ADprices = array['ADprice'][priceTypeForAD()];
    let volume = cargoVol();
    let weight = cargoWeight();
    let heaviestVal = +heaviest.value;
    let longestVal = +longest.value;
    let worthVal = +worth.value;
    let price = 0;
    let options = getSelectedCheckboxes();
    let TT = 0;
    if (options.includes('opt3') || options.includes('opt5')) {
        let volumeWithPackage = volume * 1.3;

        if (priceType() == "minP" || priceType() == "single" || priceType() == "docs") {
            TT = optPrices['send'];
            if (heaviestVal > 999 || longestVal > 120) {
                TT = TT*OversizeTerm;

            }
            price += TT;
        } else {
            TT = optPrices['forunit'] * volumeWithPackage;
            if (heaviestVal > 999 || longestVal > 120) {
                TT = TT*OversizeTerm;

            }
            price += TT;
        }
    } else {
        // Transportation T-T
        if (priceType() == "minP" || priceType() == "single" || priceType() == "docs") {
            TT = optPrices['send'];
            if (heaviestVal > 999 || longestVal > 120) {
                TT = TT*OversizeTerm;

            }
            price += TT;
        } else {
            TT = optPrices['forunit'] * volume;
            if (heaviestVal > 999 || longestVal > 120) {
                TT = TT*OversizeTerm;
            }
            price += TT;
        }
    }
    for (let check of PayTermTransfer) {
        check.value = Math.round(price);
        check.labels.forEach(label => {
            label.innerText = 'Зa терминальную доставку ' + Math.round(price) + ' руб.';
        })
    }

    document.getElementById('TT_price').value = TT;



    // Options
    let rigidPacPrice = 0;
    let stretchPacPrice = 0;
    let bortPrice = 0;
    for (let option of options) {
        switch (option) {
            case 'opt8':
                let PRRtoAdressPrice = PRRtoAddress * weight/20;
                PRRtoAdressPrice = Math.ceil(PRRtoAdressPrice/PRRtoAddress) * PRRtoAddress;
                price += PRRtoAdressPrice;
                for (let check of PayPRRtoAddress) {
                    check.setAttribute('value', PRRtoAdressPrice);
                    check.labels.forEach(label => {
                        label.innerText = 'Зa ПРР на адресе доставки ' + PRRtoAdressPrice + ' руб.';
                    })
                }
                document.getElementById('PRRtoAddress_price').value = PRRtoAdressPrice;
                break;
            case "opt7":
                let PRRfromAdressPrice = PRRfromAddress * weight/20;
                PRRfromAdressPrice = Math.ceil(PRRfromAdressPrice/PRRfromAddress) * PRRfromAddress;
                price += PRRfromAdressPrice;
                for (let check of PayPRRatAddress) {
                    check.setAttribute('value', PRRfromAdressPrice);
                    check.labels.forEach(label => {
                        label.innerText = 'Зa ПРР на адресе забора груза ' + PRRfromAdressPrice + ' руб.';
                    })
                }
                document.getElementById('PRRatAddress_price').value = PRRfromAdressPrice;
                break;
            case "opt6":
                let insurance = 0
                if (priceType() == "minP" || priceType() == "single" || priceType() == "docs") {
                    insurance = +optPrices['insurance'];
                    price += insurance;

                } else {
                    if (optPrices['insPerKG'] * weight < minInsurance) {
                        insurance = minInsurance;
                        price += insurance;
                    } else {
                        insurance = +optPrices['insPerKG'] * weight;
                        price += insurance;

                    }
                }

                if (worthVal > 0 ) {
                    insurance = worthVal*INSpercent/100;
                    if (insurance < minInsurance) {
                        insurance = minInsurance;
                    }
                    price += insurance;
                }
                for (let check of PayIns) {
                    check.setAttribute('value', insurance);
                    check.labels.forEach(label => {
                        label.innerText = 'Зa страховку ' + insurance+ ' руб.';
                    })
                }

                document.getElementById('insurance_price').value = insurance;
                //insuranceLabel.innerText = "Страховка (" + insurance.toLocaleString('ru-Ru') + " руб.)";
                break;
            case "opt5":

                if (priceType() == "minP" || priceType() == "single" || priceType() == "docs") {
                    bortPrice = +optPrices['bort'];
                } else {
                    if (optPrices['bort'] * volume < minBort) {
                        bortPrice = minBort;

                    } else {
                        bortPrice = +optPrices['bort'] * volume;
                    }
                }
                price += bortPrice;
                for (let check of PayPac) {
                    check.setAttribute('value', Math.round(bortPrice));
                    check.labels.forEach(label => {
                        label.innerText = 'Зa упаковку ' + Math.round(bortPrice) + ' руб.';
                    })
                }

                //bortLabel.innerText = "Упаковка в паллет-борт (" + bortPrice.toLocaleString('ru-Ru') + " руб.)";
                break;
            case "opt4":

                if (priceType() == "minP" || priceType() == "single" || priceType() == "docs") {
                    stretchPacPrice = +optPrices['stretchPac'];
                } else {
                    if (optPrices['stretchPac'] * volume < minStretch) {
                        stretchPacPrice = minStretch;

                    } else {
                        stretchPacPrice = +optPrices['stretchPac'] * volume;
                    }
                }
                price += stretchPacPrice;

                for (let check of PayPac) {
                    check.setAttribute('value', Math.round(stretchPacPrice));
                    check.labels.forEach(label => {
                        label.innerText = 'Зa упаковку ' + Math.round(stretchPacPrice) + ' руб.';
                    })
                }
                //stretchPacLabel.innerText = "Упаковка в стретч-пленку (" + stretchPacPrice.toLocaleString('ru-Ru') + " руб.)";
                break;
            case "opt3":

                if (priceType() == "minP" || priceType() == "single" || priceType() == "docs") {
                    rigidPacPrice = +optPrices['rigidPac'];
                } else {
                    if (optPrices['rigidPac'] * volume < minRigidPac) {
                        rigidPacPrice = minRigidPac;

                    } else {
                        rigidPacPrice = +optPrices['rigidPac'] * volume;
                    }
                }

                for (let check of PayPac) {
                    check.setAttribute('value', Math.round(rigidPacPrice));
                    check.labels.forEach(label => {
                        label.innerText = 'Зa упаковку ' + Math.round(rigidPacPrice) + ' руб.';
                    })
                }
                price += rigidPacPrice;
                //rigidPacLabel.innerText = "Жесткая упаковка (" + rigidPacPrice.toLocaleString('ru-Ru') + " руб.)";
                break;
            case "opt2":
                let fromAddressPrice = ADprices['fromAddress'];
                if (heaviestVal > 999 || longestVal > 120) {
                    fromAddressPrice = fromAddressPrice *OversizeAD;
                }

                if (inTime1.checked == true) {
                    if (fromCity.value == 'Moscow') {
                        fromAddressPrice = fromAddressPrice + ADfixMSK;
                    } else if (fromCity.value == 'SPB') {
                        fromAddressPrice = fromAddressPrice + ADfixSPB;
                    }
                }
                price += fromAddressPrice;
                for (let check of PayFromAddressToTerm) {
                    check.setAttribute('value', fromAddressPrice);
                }
                document.getElementById('DelFromAddress_price').value = fromAddressPrice;
                //fromAddressLabel.innerText = "Забор груза на адресе (" + fromAddressPrice.toLocaleString('ru-Ru') + " руб.)";
                break;
            case "opt1":
                let toAddressPrice = 0;
                let arr ={};
                let priceADWithPackage = {};
                if (options.includes('opt3') || options.includes('opt5')) {
                    if (priceType() == "minP" || priceType() == "single" || priceType() == "docs") {
                        arr = neededArr(true);
                        console.log(arr);
                        priceADWithPackage = arr['ADprice'][priceType()];
                        toAddressPrice = priceADWithPackage['toAddress'];
                        if (heaviestVal > 999 || longestVal > 120) {
                            toAddressPrice = toAddressPrice *OversizeAD;
                        }
                    } else {
                        arr = neededArr(true);
                        console.log(priceForAdWithPackage(volume))
                        console.log(arr);
                        priceADWithPackage = arr['ADprice'][priceForAdWithPackage(volume)];
                        console.log(priceForAdWithPackage(volume));
                        toAddressPrice = priceADWithPackage['toAddress']
                        if (heaviestVal > 999 || longestVal > 120) {
                            toAddressPrice = toAddressPrice*OversizeAD;
                        }
                    }

                } else {
                    toAddressPrice = ADprices['toAddress'];
                    if (heaviestVal > 999 || longestVal > 120) {
                        toAddressPrice = toAddressPrice*OversizeAD;
                    }
                }
                if (inTime2.checked == true) {
                    if (toCity.value == 'Moscow') {
                        toAddressPrice = toAddressPrice + ADfixMSK;
                    } else if (toCity.value == 'SPB') {
                        toAddressPrice = toAddressPrice + ADfixSPB;
                    }
                }

                for (let check of PayFromTermToAddress) {
                    check.setAttribute('value', toAddressPrice);
                }
                price += toAddressPrice;
                document.getElementById('DelToAddress_price').value = toAddressPrice;
            //toAddressLabel.innerText = "Доставка груза на адрес (" + toAddressPrice.toLocaleString('ru-Ru') + " руб.)";
            default:
                break;
        }
    }

    let abstractOptions = []
    for (let checkbox of checkboxes) {
        abstractOptions.push(checkbox.value)
    }

    for (let abstractOption of abstractOptions) {
        switch (abstractOption) {
            case'opt8':
                let PRRtoAdressPrice = PRRtoAddress * weight/20;
                PRRtoAdressPrice = Math.ceil(PRRtoAdressPrice/PRRtoAddress) * PRRtoAddress;
                PRRtoLabel.innerText = "ПРР на адресе забора груза (" + PRRtoAdressPrice.toLocaleString('ru-Ru') + " руб.)";
                break;
            case "opt7":
                let PRRfromAdressPrice = PRRfromAddress * weight/20;
                PRRfromAdressPrice = Math.ceil(PRRfromAdressPrice/PRRfromAddress) * PRRfromAddress;
                PRRfromLabel.innerText = "ПРР на адресе забора груза (" + PRRfromAdressPrice.toLocaleString('ru-Ru') + " руб.)";
                break;
            case "opt6":
                let insurance = 0
                if (priceType() == "minP" || priceType() == "single" || priceType() == "docs") {
                    insurance = +optPrices['insurance'];
                } else {
                    if (optPrices['insPerKG'] * weight < minInsurance) {
                        insurance = minInsurance;

                    } else {
                        insurance = +optPrices['insPerKG'] * weight;
                    }
                }

                if (worthVal > 0 ) {
                    insurance = worthVal*INSpercent/100;
                    if (insurance < minInsurance) {
                        insurance = minInsurance;
                    }
                }
                insuranceLabel.innerText = "Страховка (" + insurance.toLocaleString('ru-Ru') + " руб.)";
                break;
            case "opt5":
                let bortPrice = 0;
                if (priceType() == "minP" || priceType() == "single" || priceType() == "docs") {
                    bortPrice = +optPrices['bort'];
                } else {
                    if (optPrices['bort'] * volume < minBort) {
                        bortPrice = minBort;

                    } else {
                        bortPrice = +optPrices['bort'] * volume;
                    }
                }
                bortLabel.innerText = "Упаковка в паллет-борт (" + bortPrice.toLocaleString('ru-Ru') + " руб.)";
                break;
            case "opt4":
                let stretchPacPrice = 0;
                if (priceType() == "minP" || priceType() == "single" || priceType() == "docs") {
                    stretchPacPrice = +optPrices['stretchPac'];
                } else {
                    if (optPrices['stretchPac'] * volume < minStretch) {
                        stretchPacPrice = minStretch;

                    } else {
                        stretchPacPrice = +optPrices['stretchPac'] * volume;
                    }
                }
                stretchPacLabel.innerText = "Упаковка в стретч-пленку (" + stretchPacPrice.toLocaleString('ru-Ru') + " руб.)";
                break;
            case "opt3":
                let rigidPacPrice = 0;
                if (priceType() == "minP" || priceType() == "single" || priceType() == "docs") {
                    rigidPacPrice = +optPrices['rigidPac'];
                } else {
                    if (optPrices['rigidPac'] * volume < minRigidPac) {
                        rigidPacPrice = minRigidPac;

                    } else {
                        rigidPacPrice = +optPrices['rigidPac'] * volume;
                    }
                }
                rigidPacLabel.innerText = "Жесткая упаковка (" + rigidPacPrice.toLocaleString('ru-Ru') + " руб.)";
                break;
            case "opt2":
                let fromAddressPrice = ADprices['fromAddress'];
                if (heaviestVal > 999 || longestVal > 120) {
                    fromAddressPrice = fromAddressPrice *OversizeAD;
                }

                if (inTime1.checked == true) {
                    if (fromCity.value == 'Moscow') {
                        fromAddressPrice = fromAddressPrice + ADfixMSK;
                    } else if (fromCity.value == 'SPB') {
                        fromAddressPrice = fromAddressPrice + ADfixSPB;
                    }
                }
                fromAddressLabel.innerText = "Забор груза на адресе (" + fromAddressPrice.toLocaleString('ru-Ru') + " руб.)";
                break;
            case "opt1":
                let toAddressPrice = 0;
                let arr = {};
                let priceADWithPackage = {};
                if (options.includes('opt3') || options.includes('opt5')) {
                    if (priceType() == "minP" || priceType() == "single" || priceType() == "docs") {
                        arr = neededArr(true);
                        console.log(arr);
                        priceADWithPackage = arr['ADprice'][priceType()];
                        toAddressPrice = priceADWithPackage['toAddress'];
                        if (heaviestVal > 999 || longestVal > 120) {
                            toAddressPrice = toAddressPrice *OversizeAD;
                        }
                    } else {
                        arr = neededArr(true);
                        console.log(priceForAdWithPackage(volume))
                        console.log(arr);
                        priceADWithPackage = arr['ADprice'][priceForAdWithPackage(volume)];
                        console.log(priceForAdWithPackage(volume));
                        toAddressPrice = priceADWithPackage['toAddress'];
                        if (heaviestVal > 999 || longestVal > 120) {
                            toAddressPrice = toAddressPrice*OversizeAD;
                        }
                    }

                } else {
                    toAddressPrice = ADprices['toAddress'];
                    if (heaviestVal > 999 || longestVal > 120) {
                        toAddressPrice = toAddressPrice*OversizeAD;
                    }
                }

                if (inTime2.checked == true) {
                    if (toCity.value == 'Moscow') {
                        toAddressPrice = toAddressPrice + ADfixMSK;
                    } else if (toCity.value == 'SPB') {
                        toAddressPrice = toAddressPrice + ADfixSPB;
                    }
                }

                toAddressLabel.innerText = "Доставка груза на адрес (" + toAddressPrice.toLocaleString('ru-Ru') + " руб.)";
            default:
                break;
        }
    }
    if(res == 'resultExpress') {
        let result = document.getElementById("resultExpress");


        result.innerText = 'Стоимость ЭКСПРЕСС: ' + price.toLocaleString('ru-RU') + ' руб.';
    } else if (res == 'total') {
        let result = document.getElementById("total");


        if ((options.includes('opt3') || options.includes('opt5')) && options.includes('opt4')) {
            let pacPrice = 0;
            if (options.includes('opt3') && options.includes('opt4')) {
                pacPrice = rigidPacPrice + stretchPacPrice;
            } else if (options.includes('opt5') && options.includes('opt4')) {
                pacPrice = stretchPacPrice + bortPrice;
            }
            for (let check of PayPac) {
                check.setAttribute('value', Math.round(pacPrice));
            }

        }

        if (!options.includes('opt1')) {
            for (let check of PayFromTermToAddress) {
                check.setAttribute('value', 0);
            }
        }
        if (!options.includes('opt2')) {
            for (let check of PayFromAddressToTerm) {
                check.setAttribute('value', 0);
            }
        }
        if (!options.includes('opt3') && !options.includes('opt4') && !options.includes('opt5')) {
            
            for (let check of PayPac) {
                check.setAttribute('value', 0);
                check.labels.forEach(label => {
                    label.innerText = 'Зa упаковку ' + 0 + ' руб.';
                })
            }
        }
        if (!options.includes('opt6')) {
            for (let check of PayIns) {
                check.setAttribute('value', 0);
                check.labels.forEach(label => {
                    label.innerText = 'Зa страховку ' + 0 + ' руб.';
                })
            }
        }
        if (!options.includes('opt7')) {
            for (let check of PayPRRatAddress) {
                check.setAttribute('value', 0);
                check.labels.forEach(label => {
                    label.innerText = 'Зa ПРР на адресе забора груза ' + 0 + ' руб.';
                })
            }
        }
        if (!options.includes('opt8')) {
            for (let check of PayPRRtoAddress) {
                check.setAttribute('value', 0);
                check.labels.forEach(label => {
                    label.innerText = 'Зa ПРР на адресе доставки ' + 0 + ' руб.';
                })
            }
        }

        document.getElementById('stretch_price').value = stretchPacPrice;
        document.getElementById('bort_price').value = bortPrice;
        document.getElementById('rigid_pac_price').value = rigidPacPrice;

        document.getElementById('totalhidden').value = price;
        for (let check of PayAll) {
            check.value = Math.round(price);
        }
        result.innerText = 'ИТОГО: ' + Math.round(price).toLocaleString('ru-RU') + ' руб.';
    }



}

function CalculatorEco(res) {
    let array = neededArr(false);
    let optPrices = array['price'][priceType()];
    let ADprices = array['ADprice'][priceTypeForAD()];
    let volume = cargoVol();
    let weight = cargoWeight();
    let heaviestVal = +heaviest.value;
    let longestVal = +longest.value;
    let worthVal = +worth.value;
    let price = 0;
    let options = getSelectedCheckboxes();
    let TT = 0;
    if (options.includes('opt3') || options.includes('opt5')) {
        let volumeWithPackage = volume * 1.3;

        if (priceType() == "minP" || priceType() == "single" || priceType() == "docs") {
            TT = optPrices['send'];
            if (heaviestVal > 999 || longestVal > 120) {
                TT = TT*OversizeTerm;

            }
            price += TT;
        } else {
            TT = optPrices['forunit'] * volumeWithPackage;
            if (heaviestVal > 999 || longestVal > 120) {
                TT = TT*OversizeTerm;

            }
            price += TT;
        }
    } else {
        // Transportation T-T
        if (priceType() == "minP" || priceType() == "single" || priceType() == "docs") {
            TT = optPrices['send'];
            if (heaviestVal > 999 || longestVal > 120) {
                TT = TT*OversizeTerm;

            }
            price += TT;
        } else {
            TT = optPrices['forunit'] * volume;
            if (heaviestVal > 999 || longestVal > 120) {
                TT = TT*OversizeTerm;

            }
            price += TT;
        }
    }
    for (let check of PayTermTransfer) {
        check.value = Math.round(price);
        check.labels.forEach(label => {
            label.innerText = 'Зa терминальную доставку ' + Math.round(price) + ' руб.';
        })
    }

    document.getElementById('TT_price').value = TT;



    // Options
    let rigidPacPrice = 0;
    let stretchPacPrice = 0;
    let bortPrice = 0;
    for (let option of options) {
        switch (option) {
            case 'opt8':
                let PRRtoAdressPrice = PRRtoAddress * weight/20;
                PRRtoAdressPrice = Math.ceil(PRRtoAdressPrice/PRRtoAddress) * PRRtoAddress;
                price += PRRtoAdressPrice;
                for (let check of PayPRRtoAddress) {
                    check.setAttribute('value', PRRtoAdressPrice);
                    check.labels.forEach(label => {
                        label.innerText = 'Зa ПРР на адресе доставки ' + PRRtoAdressPrice + ' руб.';
                    })
                }
                document.getElementById('PRRtoAddress_price').value = PRRtoAdressPrice;

                break;
            case "opt7":
                let PRRfromAdressPrice = PRRfromAddress * weight/20;
                PRRfromAdressPrice = Math.ceil(PRRfromAdressPrice/PRRfromAddress) * PRRfromAddress;
                price += PRRfromAdressPrice;
                for (let check of PayPRRatAddress) {
                    check.setAttribute('value', PRRfromAdressPrice);
                    check.labels.forEach(label => {
                        label.innerText = 'Зa ПРР на адресе забора груза ' + PRRfromAdressPrice + ' руб.';
                    })
                }
                document.getElementById('PRRatAddress_price').value = PRRfromAdressPrice;

                break;
            case "opt6":
                let insurance = 0
                if (priceType() == "minP" || priceType() == "single" || priceType() == "docs") {
                    insurance = +optPrices['insurance'];
                    price += insurance;

                } else {
                    if (optPrices['insPerKG'] * weight < minInsurance) {
                        insurance = minInsurance;
                        price += insurance;

                    } else {
                        insurance = +optPrices['insPerKG'] * weight;
                        price += insurance;

                    }
                }
                if (worthVal > 0 ) {
                    insurance = worthVal*INSpercent/100;
                    if (insurance < minInsurance) {
                        insurance = minInsurance;
                    }
                }
                for (let check of PayIns) {
                    check.setAttribute('value', insurance);
                    check.labels.forEach(label => {
                        label.innerText = 'Зa страховку ' + insurance+ ' руб.';
                    })
                }
                document.getElementById('insurance_price').value = insurance;

                //insuranceLabel.innerText = "Страховка (" + insurance.toLocaleString('ru-Ru') + " руб.)";
                break;
            case "opt5":

                if (priceType() == "minP" || priceType() == "single" || priceType() == "docs") {
                    bortPrice = +optPrices['bort'];
                } else {
                    if (optPrices['bort'] * volume < minBort) {
                        bortPrice = minBort;

                    } else {
                        bortPrice = +optPrices['bort'] * volume;
                    }
                }
                price += bortPrice;
                for (let check of PayPac) {
                    check.setAttribute('value', Math.round(bortPrice));
                    check.labels.forEach(label => {
                        label.innerText = 'Зa упаковку ' + Math.round(bortPrice) + ' руб.';
                    })
                }
                //bortLabel.innerText = "Упаковка в паллет-борт (" + bortPrice.toLocaleString('ru-Ru') + " руб.)";
                break;
            case "opt4":

                if (priceType() == "minP" || priceType() == "single" || priceType() == "docs") {
                    stretchPacPrice = +optPrices['stretchPac'];
                } else {
                    if (optPrices['stretchPac'] * volume < minStretch) {
                        stretchPacPrice = minStretch;

                    } else {
                        stretchPacPrice = +optPrices['stretchPac'] * volume;
                    }
                }
                price += stretchPacPrice;
                for (let check of PayPac) {
                    check.setAttribute('value', Math.round(stretchPacPrice));
                    check.labels.forEach(label => {
                        label.innerText = 'Зa упаковку ' + Math.round(stretchPacPrice) + ' руб.';
                    })
                }
            case "opt3":

                if (priceType() == "minP" || priceType() == "single" || priceType() == "docs") {
                    rigidPacPrice = +optPrices['rigidPac'];
                } else {
                    if (optPrices['rigidPac'] * volume < minRigidPac) {
                        rigidPacPrice = minRigidPac;

                    } else {
                        rigidPacPrice = +optPrices['rigidPac'] * volume;
                    }
                }

                price += rigidPacPrice;
                for (let check of PayPac) {
                    check.setAttribute('value', Math.round(rigidPacPrice));
                    check.labels.forEach(label => {
                        label.innerText = 'Зa упаковку ' + Math.round(rigidPacPrice) + ' руб.';
                    })
                }
                rigidPacLabel.innerText = "Жесткая упаковка (" + rigidPacPrice.toLocaleString('ru-Ru') + " руб.)";
                break;
            case "opt2":
                let fromAddressPrice = ADprices['fromAddress'];
                if (heaviestVal > 999 || longestVal > 120) {
                    fromAddressPrice = fromAddressPrice *OversizeAD;
                }

                if (inTime1.checked == true) {
                    if (fromCity.value == 'Moscow') {
                        fromAddressPrice = fromAddressPrice + ADfixMSK;
                    } else if (fromCity.value == 'SPB') {
                        fromAddressPrice = fromAddressPrice + ADfixSPB;
                    }
                }
                price += fromAddressPrice;
                for (let check of PayFromAddressToTerm) {
                    check.setAttribute('value', fromAddressPrice);
                }
                document.getElementById('DelFromAddress_price').value = fromAddressPrice;

                fromAddressLabel.innerText = "Забор груза на адресе (" + fromAddressPrice.toLocaleString('ru-Ru') + " руб.)";
                break;
            case "opt1":
                let toAddressPrice = 0;
                let priceADWithPackage =  [];
                let arr = [];
                if (options.includes('opt3') || options.includes('opt5')) {

                    if (priceType() == "minP" || priceType() == "single" || priceType() == "docs") {
                        arr = neededArr(false);
                        console.log(arr);
                        priceADWithPackage = arr['ADprice'][priceType()];
                        toAddressPrice = priceADWithPackage['toAddress'];
                        if (heaviestVal > 999 || longestVal > 120) {
                            toAddressPrice = toAddressPrice *OversizeAD;
                        }
                    } else {
                        let arr = neededArr(false);
                        let priceADWithPackage = arr['ADprice'][priceForAdWithPackage(volume)];
                        toAddressPrice = priceADWithPackage['toAddress'];
                        if (heaviestVal > 999 || longestVal > 120) {
                            toAddressPrice = toAddressPrice *OversizeAD;
                        }
                    }
                } else {
                    toAddressPrice = ADprices['toAddress'];
                    if (heaviestVal > 999 || longestVal > 120) {
                        toAddressPrice = toAddressPrice*OversizeAD;
                    }
                }

                if (inTime2.checked == true) {
                    if (toCity.value == 'Moscow') {
                        toAddressPrice = toAddressPrice + ADfixMSK;
                    } else if (toCity.value == 'SPB') {
                        toAddressPrice = toAddressPrice + ADfixSPB;
                    }
                }

                for (let check of PayFromTermToAddress) {
                    check.setAttribute('value', toAddressPrice);
                }
                price += toAddressPrice;
                document.getElementById('DelToAddress_price').value = toAddressPrice;

            //toAddressLabel.innerText = "Доставка груза на адрес (" + toAddressPrice.toLocaleString('ru-Ru') + " руб.)";
            default:
                break;
        }
    }

    let abstractOptions = []
    for (let checkbox of checkboxes) {
        abstractOptions.push(checkbox.value)
    }

    for (let abstractOption of abstractOptions) {

        switch (abstractOption) {
            case'opt8':
                let PRRtoAdressPrice = PRRtoAddress * weight/20;
                PRRtoAdressPrice = Math.ceil(PRRtoAdressPrice/PRRtoAddress) * PRRtoAddress;
                PRRtoLabel.innerText = "ПРР на адресе забора груза (" + PRRtoAdressPrice.toLocaleString('ru-Ru') + " руб.)";
                break;
            case "opt7":
                let PRRfromAdressPrice = PRRfromAddress * weight/20;
                PRRfromAdressPrice = Math.ceil(PRRfromAdressPrice/PRRfromAddress) * PRRfromAddress;
                PRRfromLabel.innerText = "ПРР на адресе забора груза (" + PRRfromAdressPrice.toLocaleString('ru-Ru') + " руб.)";
                break;
            case "opt6":
                let insurance = 0
                if (priceType() == "minP" || priceType() == "single" || priceType() == "docs") {
                    insurance = +optPrices['insurance'];
                } else {
                    if (optPrices['insPerKG'] * weight < minInsurance) {
                        insurance = minInsurance;

                    } else {
                        insurance = +optPrices['insPerKG'] * weight;
                    }
                }
                if (worthVal > 0 ) {
                    insurance = worthVal*INSpercent/100;
                    if (insurance < minInsurance) {
                        insurance = minInsurance;
                    }
                }
                insuranceLabel.innerText = "Страховка (" + insurance.toLocaleString('ru-Ru') + " руб.)";
                break;
            case "opt5":

                if (priceType() == "minP" || priceType() == "single" || priceType() == "docs") {
                    bortPrice = +optPrices['bort'];
                } else {
                    if (optPrices['bort'] * volume < minBort) {
                        bortPrice = minBort;

                    } else {
                        bortPrice = +optPrices['bort'] * volume;
                    }
                }
                bortLabel.innerText = "Упаковка в паллет-борт (" + bortPrice.toLocaleString('ru-Ru') + " руб.)";
                break;
            case "opt4":
                let stretchPacPrice = 0;
                if (priceType() == "minP" || priceType() == "single" || priceType() == "docs") {
                    stretchPacPrice = +optPrices['stretchPac'];
                } else {
                    if (optPrices['stretchPac'] * volume < minStretch) {
                        stretchPacPrice = minStretch;

                    } else {
                        stretchPacPrice = +optPrices['stretchPac'] * volume;
                    }
                }
                stretchPacLabel.innerText = "Упаковка в стретч-пленку (" + stretchPacPrice.toLocaleString('ru-Ru') + " руб.)";
                break;
            case "opt3":
                let rigidPacPrice = 0;
                if (priceType() == "minP" || priceType() == "single" || priceType() == "docs") {
                    rigidPacPrice = +optPrices['rigidPac'];
                } else {
                    if (optPrices['rigidPac'] * volume < minRigidPac) {
                        rigidPacPrice = minRigidPac;

                    } else {
                        rigidPacPrice = +optPrices['rigidPac'] * volume;
                    }
                }
                rigidPacLabel.innerText = "Жесткая упаковка (" + rigidPacPrice.toLocaleString('ru-Ru') + " руб.)";
                break;
            case "opt2":
                let fromAddressPrice = ADprices['fromAddress'];
                if (heaviestVal > 999 || longestVal > 120) {
                    fromAddressPrice = fromAddressPrice *OversizeAD;
                }

                if (inTime1.checked == true) {
                    if (fromCity.value == 'Moscow') {
                        fromAddressPrice = fromAddressPrice + ADfixMSK;
                    } else if (fromCity.value == 'SPB') {
                        fromAddressPrice = fromAddressPrice + ADfixSPB;
                    }
                }
                fromAddressLabel.innerText = "Забор груза на адресе (" + fromAddressPrice.toLocaleString('ru-Ru') + " руб.)";

                break;
            case "opt1":
                 let toAddressPrice = 0;
                 let priceADWithPackage =  [];
                 let arr = [];
                if (options.includes('opt3') || options.includes('opt5')) {
                    if (priceType() == "minP" || priceType() == "single" || priceType() == "docs") {
                        arr = neededArr(false);
                        console.log(arr);
                        priceADWithPackage = arr['ADprice'][priceType()];
                        toAddressPrice = priceADWithPackage['toAddress'];
                        if (heaviestVal > 999 || longestVal > 120) {
                            toAddressPrice = toAddressPrice *OversizeAD;
                        }
                    } else {
                        let arr = neededArr(false);
                        let priceADWithPackage = arr['ADprice'][priceForAdWithPackage(volume)];
                        toAddressPrice = priceADWithPackage['toAddress'];
                        if (heaviestVal > 999 || longestVal > 120) {
                            toAddressPrice = toAddressPrice*OversizeAD;
                        }
                    }
                } else {
                    toAddressPrice = ADprices['toAddress'];
                    if (heaviestVal > 999 || longestVal > 120) {
                        toAddressPrice = toAddressPrice*OversizeAD;
                    }
                }

                if (inTime2.checked == true) {
                    if (toCity.value == 'Moscow') {
                        toAddressPrice = toAddressPrice + ADfixMSK;
                    } else if (toCity.value == 'SPB') {
                        toAddressPrice = toAddressPrice + ADfixSPB;
                    }
                }
                console.log(toAddressPrice);
                toAddressLabel.innerText = "Доставка груза на адрес (" + toAddressPrice.toLocaleString('ru-Ru') + " руб.)";
            default:
                break;
        }
    }

    if(res == 'resultExpress') {
        let result = document.getElementById("resultExpress");


        result.innerText = 'Стоимость ЭКСПРЕСС: ' + price.toLocaleString('ru-RU') + ' руб.';
    } else if (res == 'total') {
        let result = document.getElementById("total");


        if ((options.includes('opt3') || options.includes('opt5')) && options.includes('opt4')) {
            let pacPrice = 0;
            if (options.includes('opt3') && options.includes('opt4')) {
                pacPrice = rigidPacPrice + stretchPacPrice;
            } else if (options.includes('opt5') && options.includes('opt4')) {
                pacPrice = stretchPacPrice + bortPrice;
            }
            for (let check of PayPac) {
                check.setAttribute('value', Math.round(pacPrice));
            }

        }

        if (!options.includes('opt1')) {
            for (let check of PayFromTermToAddress) {
                check.setAttribute('value', 0);
            }
        }
        if (!options.includes('opt2')) {
            for (let check of PayFromAddressToTerm) {
                check.setAttribute('value', 0);
            }
        }
        if (!options.includes('opt3') && !options.includes('opt4') && !options.includes('opt5')) {
            console.log('bitch');
            for (let check of PayPac) {
                check.setAttribute('value', 0);
                check.labels.forEach(label => {
                    label.innerText = 'Зa упаковку ' + 0 + ' руб.';
                })
            }
        }
        if (!options.includes('opt6')) {
            for (let check of PayIns) {
                check.setAttribute('value', 0);
                check.labels.forEach(label => {
                    label.innerText = 'Зa страховку ' + 0 + ' руб.';
                })
            }
        }
        if (!options.includes('opt7')) {
            for (let check of PayPRRatAddress) {
                check.setAttribute('value', 0);
                check.labels.forEach(label => {
                    label.innerText = 'Зa ПРР на адресе забора груза ' + 0 + ' руб.';
                })
            }
        }
        if (!options.includes('opt8')) {
            for (let check of PayPRRtoAddress) {
                check.setAttribute('value', 0);
                check.labels.forEach(label => {
                    label.innerText = 'Зa ПРР на адресе доставки ' + 0 + ' руб.';
                })
            }
        }

        document.getElementById('stretch_price').value = stretchPacPrice;
        document.getElementById('bort_price').value = bortPrice;
        document.getElementById('rigid_pac_price').value = rigidPacPrice;

        document.getElementById('totalhidden').value = price;

        for (let check of PayAll) {
            check.value = price;
        }
        result.innerText = 'ИТОГО: ' + price.toLocaleString('ru-RU') + ' руб.';
    }


}
function CalculateSubtotals(who) {

    //if (who == 'sender') {
        let subtotal = 0;
        for (let check of Sender) {
            if (document.getElementById('PayAllSender').checked == true ){
                check.checked = false;
                subtotal = +document.getElementById('PayAllSender').value;
                console.log(subtotal);
            } else {
                if (check.value == undefined) {
                    check.value =0;
                }
                if (check.checked ==true) {
                    subtotal += +check.value;
                }

            }
        }
        console.log(subtotal);
        document.getElementById('PaymentSender').innerText = 'Оплата: ' + subtotal.toLocaleString('ru-RU');
        document.getElementById('amount_sender').value = subtotal;
    //} else if (who == 'receiver') {
        subtotal = 0;
        for (let check of Receiver) {
            if (document.getElementById('PayAllReceiver').checked == true ){
                check.checked = false;
                subtotal = +document.getElementById('PayAllReceiver').value;
                console.log(subtotal);
            } else {
                if (check.value == undefined) {
                    check.value =0;
                }
                if (check.checked ==true) {
                    subtotal += +check.value;
                }

            }
        }
        console.log(subtotal);
        document.getElementById('PaymentReceiver').innerText = 'Оплата: ' + subtotal.toLocaleString('ru-RU');
    document.getElementById('amount_receiver').value = subtotal;
   // } else if (who = '3dparty') {
        subtotal = 0;
        for (let check of ThirdParty) {
            if (document.getElementById('PayAll3dparty').checked == true ){
                check.checked = false;
                subtotal = +document.getElementById('PayAll3dparty').value;
                console.log(subtotal);
            } else {
                if (check.value == undefined) {
                    check.value =0;
                }
                if (check.checked ==true) {
                    subtotal += +check.value;
                }

            }
        }
        console.log(subtotal);
        document.getElementById('Payment3dparty').innerText = 'Оплата: ' + subtotal.toLocaleString('ru-RU');
    document.getElementById('amount_3dparty').value = subtotal;
   //}

}


if (express.checked == true) {
    CalculateExpress('total');
} else if (econom.checked == true) {
    CalculatorEco('total')
}

let txt = ''
AllPaymentChecks.forEach(Checks => {
    Checks.forEach(check => {
        if (PayAll.includes(check)) {
            txt = txtPayAll;
        } else if (PayPac.includes(check)) {
            txt = txtPayPac;
        } else if (PayIns.includes(check)) {
            txt = txtPayIns;
        } else if (PayTermTransfer.includes(check)) {
            txt = txtPayTermTransfer;
        } else if (PayFromTermToAddress.includes(check)) {
            txt = txtPayFromTermToAddress;
        } else if (PayFromAddressToTerm.includes(check)) {
            txt = txtPayFromAddressToTerm;
        } else if (PayPRRtoAddress.includes(check)) {
            txt = txtPayPRRtoAddress;
        } else if (PayPRRatAddress.includes(check)) {
            txt = txtPayPRRatAddress;
        }

        check.labels.forEach(label => {
            //txt = label.innerText;
            if (check.value == '') {
                label.innerText = txt + '  0  руб';
            } else {

                label.innerText = txt + '  ' + check.value + ' руб';
            }

        })
    })
})


// Массив range инпутов (ползунков)
let ranges = [
    metersRange,
    kgRange,
    piecesRange,
    heaviestRange,
    longestRange
];
// Массив числовых инпутов
let valInputs = [
    kg,
    meters,
    pieces,
    longest,
    heaviest
]
kg.setAttribute('step', 0.5);
longest.min = 0;
assignValueItoR();


meters.addEventListener('input', () => {
    stepChangeM();
    if (meters.value > 80) {
        meters.value = 80;
    }

})
kg.addEventListener('input', () => {
    stepChangekg();
    if (kg.value > 20000) {
        kg.value = 20000;
    }
})
pieces.addEventListener('input', () => {
    stepChangePieces();
    if (pieces.value > 50) {
        pieces.value = 50;
    }
})
heaviest.addEventListener('input', () => {
    stepChangeHeaviest();
    if (heaviest.value > 1000) {
        heaviest.value = 1000;
    }
})
longest.addEventListener('input', () => {
    stepChangeLongest();
    if (longest.value > 300) {
        longest.value = 300;
    }
})


// Синхронизация range и числовых инпутов
for (let input of valInputs) {
    input.addEventListener('input', () => {
        assignValueItoR(input);
    })
}
for (let range of ranges) {
    range.addEventListener('input', () => {
        assignValueRtoI(range);
    })
}
changeCitiesbtn.addEventListener('click', () => {
    let city1 = fromCity.value;
    let city2 = toCity.value;
    fromCity.value = city2;
    toCity.value = city1;
    if (express.checked == true) {
        CalculateExpress('total');
    } else if (econom.checked == true) {
        CalculatorEco('total')
    }
})
let cities = [
    fromCity,
    toCity
]

for (let city of cities) {
    city.addEventListener('input', () => {
        fixCities();
    })
}

for (let inp of allInputs) {
    inp.addEventListener('change', () => {
        if (express.checked == true) {
            CalculateExpress('total');
        } else if (econom.checked == true) {
            CalculatorEco('total')
        }
        CalculateSubtotals('sender');
        AllPaymentChecks.forEach(Checks => {
            Checks.forEach(check => {
                if (PayAll.includes(check)) {
                    txt = txtPayAll;
                } else if (PayPac.includes(check)) {
                    txt = txtPayPac;
                } else if (PayIns.includes(check)) {
                    txt = txtPayIns;
                } else if (PayTermTransfer.includes(check)) {
                    txt = txtPayTermTransfer;
                } else if (PayFromTermToAddress.includes(check)) {
                    txt = txtPayFromTermToAddress;
                } else if (PayFromAddressToTerm.includes(check)) {
                    txt = txtPayFromAddressToTerm;
                } else if (PayPRRtoAddress.includes(check)) {
                    txt = txtPayPRRtoAddress;
                } else if (PayPRRatAddress.includes(check)) {
                    txt = txtPayPRRatAddress;
                }

                check.labels.forEach(label => {
                    //txt = label.innerText;
                    if (check.value == '') {
                        label.innerText = txt + '  0  руб';
                    } else {
                        label.innerText = txt + '  ' + check.value + ' руб';
                    }

                })
            })
        })


    })
}


for (let check of Sender) {
    check.addEventListener('click', () => {
        let arr = [];
        for (let ch of Sender) {
            if (ch.checked==true) {
                arr.push(ch);
                document.getElementById('INNsender').setAttribute('required', '');
                document.getElementById('FIOsender').setAttribute('required', '');
                document.getElementById('Telsender').setAttribute('required', '');
                document.getElementById('Emailsender').setAttribute('required', '');
            } else if (ch.checked == false) {
                for(var i = arr.length - 1; i >= 0; i--) {
                    if(arr[i] === ch) {
                        arr.splice(i, 1);
                    }
                }
            }
            console.log(arr);
            if (arr.length == 0) {
                document.getElementById('INNsender').removeAttribute('required');
                document.getElementById('FIOsender').removeAttribute('required');
                document.getElementById('Telsender').removeAttribute('required');
                document.getElementById('Emailsender').removeAttribute('required');
            }
        }

        if (express.checked == true) {
            CalculateExpress('total');
        } else if (econom.checked == true) {
            CalculatorEco('total')
        }

        CalculateSubtotals('sender');
        PayPac.forEach(check => {

            check.labels.forEach(label => {
                label.innerText = 'За упаковку  ' + Math.round(check.value) +' руб.';
            })


        })
    })
}
for (let check of Receiver) {
    check.addEventListener('click', () => {
        let arr = [];
        for (let ch of Receiver) {
            if (ch.checked==true) {
                arr.push(ch);
                document.getElementById('INNreceiver').setAttribute('required', '');
                document.getElementById('FIOreceiver').setAttribute('required', '');
                document.getElementById('Telreceiver').setAttribute('required', '');
                document.getElementById('Emailreceiver').setAttribute('required', '');
            } else if (ch.checked == false) {
                for(var i = arr.length - 1; i >= 0; i--) {
                    if(arr[i] === ch) {
                        arr.splice(i, 1);
                    }
                }
            }
            console.log(arr);
            if (arr.length == 0) {
                document.getElementById('INNreceiver').removeAttribute('required');
                document.getElementById('FIOreceiver').removeAttribute('required');
                document.getElementById('Telreceiver').removeAttribute('required');
                document.getElementById('Emailreceiver').removeAttribute('required');
            }
        }
        if (express.checked == true) {
            CalculateExpress('total');
        } else if (econom.checked == true) {
            CalculatorEco('total')
        }
        CalculateSubtotals('receiver');
        PayPac.forEach(check => {

            check.labels.forEach(label => {
                label.innerText = 'За упаковку  ' + Math.round(check.value) +' руб.';
            })


        })
    })

}
for (let check of ThirdParty) {
    check.addEventListener('click', () => {
        let arr = [];
        for (let ch of ThirdParty) {
            if (ch.checked == true) {
                arr.push(ch);
                document.getElementById('INN3dparty').setAttribute('required', '');
                document.getElementById('FIO3dparty').setAttribute('required', '');
                document.getElementById('Tel3dparty').setAttribute('required', '');
                document.getElementById('Email3dparty').setAttribute('required', '');
            } else if (ch.checked == false) {
                for (var i = arr.length - 1; i >= 0; i--) {
                    if (arr[i] === ch) {
                        arr.splice(i, 1);
                    }
                }
            }
            console.log(arr);
            if (arr.length == 0) {
                document.getElementById('INN3dparty').removeAttribute('required');
                document.getElementById('FIO3dparty').removeAttribute('required');
                document.getElementById('Tel3dparty').removeAttribute('required');
                document.getElementById('Email3dparty').removeAttribute('required');
            }
            if (express.checked == true) {
                    CalculateExpress('total');
                } else if (econom.checked == true) {
                    CalculatorEco('total')
                }
                CalculateSubtotals('3dparty');
            }
        PayPac.forEach(check => {

            check.labels.forEach(label => {
                label.innerText = 'За упаковку  ' + Math.round(check.value) +' руб.';
            })


        })
        }
    )}

document.getElementById('PayAllSender').addEventListener('click', () => {
    let arr = [];
    if (document.getElementById('PayAllSender').checked==true) {
        arr.push(document.getElementById('PayAllSender'));
        document.getElementById('INNsender').setAttribute('required', '');
        document.getElementById('FIOsender').setAttribute('required', '');
        document.getElementById('Telsender').setAttribute('required', '');
        document.getElementById('Emailsender').setAttribute('required', '');
    } else if (document.getElementById('PayAllSender').checked == false) {
        for(var i = arr.length - 1; i >= 0; i--) {
            if(arr[i] === document.getElementById('PayAllSender')) {
                arr.splice(i, 1);
            }
        }
    }
    console.log(arr);
    if (arr.length == 0) {
        document.getElementById('INNsender').removeAttribute('required');
        document.getElementById('FIOsender').removeAttribute('required');
        document.getElementById('Telsender').removeAttribute('required');
        document.getElementById('Emailsender').removeAttribute('required');
    }
    CalculateSubtotals('sender');
})
document.getElementById('PayAllReceiver').addEventListener('click', () => {
    let arr = [];
    if (document.getElementById('PayAllReceiver').checked==true) {
        arr.push(document.getElementById('PayAllReceiver'));
        document.getElementById('INNreceiver').setAttribute('required', '');
        document.getElementById('FIOreceiver').setAttribute('required', '');
        document.getElementById('Telreceiver').setAttribute('required', '');
        document.getElementById('Emailreceiver').setAttribute('required', '');
    } else if (document.getElementById('PayAllReceiver').checked == false) {
        for(var i = arr.length - 1; i >= 0; i--) {
            if(arr[i] === document.getElementById('PayAllReceiver')) {
                arr.splice(i, 1);
            }
        }
    }
    console.log(arr);
    if (arr.length == 0) {
        document.getElementById('INNreceiver').removeAttribute('required');
        document.getElementById('FIOreceiver').removeAttribute('required');
        document.getElementById('Telreceiver').removeAttribute('required');
        document.getElementById('Emailreceiver').removeAttribute('required');
    }
    CalculateSubtotals('receiver');
})
document.getElementById('PayAll3dparty').addEventListener('click', () => {
    let arr = [];
    if (document.getElementById('PayAll3dparty').checked == true) {
        arr.push(document.getElementById('PayAll3dparty'));
        document.getElementById('INN3dparty').setAttribute('required', '');
        document.getElementById('FIO3dparty').setAttribute('required', '');
        document.getElementById('Tel3dparty').setAttribute('required', '');
        document.getElementById('Email3dparty').setAttribute('required', '');
    } else if (document.getElementById('PayAll3dparty').checked == false) {
        for (var i = arr.length - 1; i >= 0; i--) {
            if (arr[i] === document.getElementById('PayAll3dparty')) {
                arr.splice(i, 1);
            }
        }
    }
    console.log(arr);
    if (arr.length == 0) {
        document.getElementById('INN3dparty').removeAttribute('required');
        document.getElementById('FIO3dparty').removeAttribute('required');
        document.getElementById('Tel3dparty').removeAttribute('required');
        document.getElementById('Email3dparty').removeAttribute('required');
    }
    CalculateSubtotals('3dparty');
})

for (let inp of allInputs) {
    inp.addEventListener('change', () => {
        PayPac.forEach(check => {

            check.labels.forEach(label => {
                label.innerText = 'За упаковку  ' + Math.round(check.value) +' руб.';
            })


        })
    })
}


let form = document.getElementById('form');
 form.addEventListener('submit', (event) => {
     event.preventDefault();
     let sender = +document.getElementById('amount_sender').value;
     let receiver = +document.getElementById('amount_receiver').value;
     let third = +document.getElementById('amount_3dparty').value;

     if ((sender+receiver+third) < +document.getElementById('totalhidden').value) {
         document.getElementById('warning').innerText = "Выберите все, что нужно оплатить!"
     } else {
         let elements = form.elements;
         let obj ={};
         for(let i = 0 ; i < elements.length ; i++){
             let item = elements.item(i);
             if (item.checked){
                 obj[item.id] = item.value;

             }

         }
         obj['total'] = document.getElementById('PayAllSender').value;
         AllPaymentChecks.forEach(check => {
             check.forEach(ch => {
                 ch.remove();
             })
         })
         for (let check of checkboxes) {
             check.remove();
         }
         for (let check of document.querySelectorAll("input[type=checkbox]")) {
             check.remove();
         }
         for (let check of document.querySelectorAll("input[type=radio]")) {
             check.remove();
         }


         for(let i = 0 ; i < elements.length ; i++){
             let item = elements.item(i);

             obj[item.id] = item.value;

         }
         let res = JSON.stringify(obj);
         // let request = new XMLHttpRequest();
         // // строка с параметрами для отправки
         // request.open("POST", "sendinfo.php");
         // request.send(res);
         //let data = request.responseXML;
         //console.log(data);
         let xmlhttp=new XMLHttpRequest();
         xmlhttp.open("POST","index.php?c=page&act=sendform", );
         xmlhttp.responseType = 'text';
         xmlhttp.setRequestHeader("Content-type","application/json");
         xmlhttp.send(res);

         

         xmlhttp.onload = function() {
             let responseObj = xmlhttp.responseText;
             console.log(responseObj);
             document.location.href = "success.html";
         };

     }



     //document.getElementById("demo").innerHTML = JSON.stringify(obj);
 })