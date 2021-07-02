//готовим опции модуля
let addressTo = { id : 'addressTo' };

//запускаем модуль
AhunterSuggest.Address.Solid( addressTo );

let addressFrom = { id : 'addressFrom' };

//запускаем модуль
AhunterSuggest.Address.Solid( addressFrom );


let url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party";
let token = "41753b88fcd51e0b8fb2e83a08a0bfc0212637be";

let INNSender = document.getElementById('INNsender');
let INNReceiver = document.getElementById('INNreceiver');
let INN3dparty = document.getElementById('INN3dparty');

INNSender.addEventListener('input', () => {
    let query = INNSender.value;

    let options = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + token
        },
        body: JSON.stringify({query: query})
    }

    fetch(url, options)
        .then(response => response.text())
        .then(result => document.getElementById('compSender').value = JSON.parse(result)['suggestions'][0].value)
        .catch(error => console.log("error", error));
})
INNReceiver.addEventListener('input', () => {
    let query = INNReceiver.value;

    let options = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + token
        },
        body: JSON.stringify({query: query})
    }

    fetch(url, options)
        .then(response => response.text())
        .then(result => document.getElementById('compReceiver').value = JSON.parse(result)['suggestions'][0].value)
        .catch(error => console.log("error", error));
})
INN3dparty.addEventListener('input', () => {
    let query = INN3dparty.value;

    let options = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + token
        },
        body: JSON.stringify({query: query})
    }

    fetch(url, options)
        .then(response => response.text())
        .then(result => document.getElementById('comp3dparty').value = JSON.parse(result)['suggestions'][0].value)
        .catch(error => console.log("error", error));
})