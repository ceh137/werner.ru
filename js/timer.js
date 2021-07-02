


function timer() {
    let now = new Date();
    let year = now.getFullYear();
    let hour = now.getUTCHours();
    let date = now.getUTCDate();
    let month = now.getUTCMonth();
    if (hour + 3 >= 24) {
        hour = 0;
        date += 1;
    }
    if ((date > 31 && (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11)) || (date > 30 && (month == 3 || month == 5 || month == 8 || month == 10)) || ((date > 28) && (month == 1))) {
        date = 1;
        month += 1;
        hour = 0;
    }

    hour += 3;

    while (dayOff[month].includes(date)) {
        date += 1;
        if ((date > 31 && (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11)) || (date > 30 && (month == 3 || month == 5 || month == 8 || month == 10)) || ((date > 28) && (month == 1))) {
            if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
                date = date - 31;
                month += 1;
            } else if (month == 3 || month == 5 || month == 8 || month == 10) {
                date = date - 30;
                month += 1;
            } else if (month == 1) {
                date = date - 28;
                month += 1;
            }
        }
        if (month > 11) {
            month = 0;
        }
        hour = 0;
    }

    if (hour >= 21) {
        date += 1;
        if ((date > 31 && (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11)) || (date > 30 && (month == 3 || month == 5 || month == 8 || month == 10)) || ((date > 28) && (month == 1))) {
            if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
                date = date - 31;
                month += 1;
            } else if (month == 3 || month == 5 || month == 8 || month == 10) {
                date = date - 30;
                month += 1;
            } else if (month == 1) {
                date = date - 28;
                month += 1;
            }
        }
        if (month > 11) {
            month = 0;
        }
        while (dayOff[month].includes(date)) {
            date = date + 1;
            if ((date > 31 && (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11)) || (date > 30 && (month == 3 || month == 5 || month == 8 || month == 10)) || ((date > 28) && (month == 1))) {
                if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
                    date = date - 31;
                    month += 1;
                } else if (month == 3 || month == 5 || month == 8 || month == 10) {
                    date = date - 30;
                    month += 1;
                } else if (month == 1) {
                    date = date - 28;
                    month += 1;
                }
            }
            if (month > 11) {
                month = 0;
            }
        }



        let time = new Date();
        year1 = time.getFullYear();
        month1 = time.getMonth();
        date1 = time.getDate();
        hour1 = time.getHours();
        minutes1 = time.getMinutes();
        let time1 = new Date(year1, month1, date1, hour1, minutes1);
        let time2 = new Date(year, month, date, 21);
        different = time2 - time1;
        let days = Math.floor(different/86400000);
        let hours = Math.floor((different % 86400000) / 3600000);
        let minutes = Math.round(((different % 86400000) % 3600000) / 60000);
        let result = '';
        if (days >= 1) {
            result = days+' день  '+hours + ' часов  ' + minutes+ ' минут';
        } else {
            result = hours + ' часов  ' + minutes+ ' минут';
        }


        document.getElementById('DepExpress').innerText = 'Машина выезжает через  ' + result;

    } else {
        let time = new Date();
        year1 = time.getFullYear();
        month1 = time.getMonth();
        date1 = time.getDate();
        hour1 = time.getHours();
        minutes1 = time.getMinutes();
        let time1 = new Date(year1, month1, date1, hour1, minutes1);
        let time2 = new Date(year, month, date, 21);
        different = time2 - time1;
        let days = Math.floor(different/86400000);
        let hours = Math.floor((different % 86400000) / 3600000);
        let minutes = Math.round(((different % 86400000) % 3600000) / 60000);
        let result = '';
        if (days >= 1) {
            result = days+' день  '+hours + ' часов  ' + minutes+ ' минут';
        } else {
            result = hours + ' часов  ' + minutes+ ' минут';
        }

        document.getElementById('DepExpress').innerText = 'Машина выезжает через  ' + result;

    }



}
function getDepTimeExpress() {
    let now = new Date();
    let hour = now.getUTCHours();
    let date = now.getUTCDate();
    let month = now.getUTCMonth();
    if (hour + 3 >= 24) {
        hour = 0;
        date += 1;
    }
    if ((date > 31 && (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11)) || (date > 30 && (month == 3 || month == 5 || month == 8 || month == 10)) || ((date > 28) && (month == 1))) {
        date = 1;
        month += 1;
        hour = 0;
    }

    hour += 3;

    while (dayOff[month].includes(date)) {
        date += 1;
        if ((date > 31 && (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11)) || (date > 30 && (month == 3 || month == 5 || month == 8 || month == 10)) || ((date > 28) && (month == 1))) {
            if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
                date = date - 31;
                month += 1;
            } else if (month == 3 || month == 5 || month == 8 || month == 10) {
                date = date - 30;
                month += 1;
            } else if (month == 1) {
                date = date - 28;
                month += 1;
            }
        }
        if (month > 11) {
            month = 0;
        }
        hour = 0;
    }

    if (hour >= 21) {
        date += 1;
        if ((date > 31 && (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11)) || (date > 30 && (month == 3 || month == 5 || month == 8 || month == 10)) || ((date > 28) && (month == 1))) {
            if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
                date = date - 31;
                month += 1;
            } else if (month == 3 || month == 5 || month == 8 || month == 10) {
                date = date - 30;
                month += 1;
            } else if (month == 1) {
                date = date - 28;
                month += 1;
            }
        }
        if (month > 11) {
            month = 0;
        }
        while (dayOff[month].includes(date)) {
            date = date + 1;
            if ((date > 31 && (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11)) || (date > 30 && (month == 3 || month == 5 || month == 8 || month == 10)) || ((date > 28) && (month == 1))) {
                if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
                    date = date - 31;
                    month += 1;
                } else if (month == 3 || month == 5 || month == 8 || month == 10) {
                    date = date - 30;
                    month += 1;
                } else if (month == 1) {
                    date = date - 28;
                    month += 1;
                }
            }
            if (month > 11) {
                month = 0;
            }
        }

        document.getElementById('DepExpress').innerText = 'Машина выезжает в 21:00' + ' ' + date + " " + months[month];
        date++;


        if ((date > 31 && (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11)) || (date > 30 && (month == 3 || month == 5 || month == 8 || month == 10)) || ((date > 28) && (month == 1))) {
            date = 1;
            month += 1;
        }
        while (dayOff[month].includes(date)) {
            date = date + 1;
            if ((date > 31 && (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11)) || (date > 30 && (month == 3 || month == 5 || month == 8 || month == 10)) || ((date > 28) && (month == 1))) {
                if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
                    date = date - 31;
                    month += 1;
                } else if (month == 3 || month == 5 || month == 8 || month == 10) {
                    date = date - 30;
                    month += 1;
                } else if (month == 1) {
                    date = date - 28;
                    month += 1;
                }
            }
            if (month > 11) {
                month = 0;
            }
        }
        document.getElementById('arrExpress').innerText = 'Груз будет доставлен в 10:00' + ' ' + date + " " + months[month];
        return date;
    } else {
        document.getElementById('DepExpress').innerText = 'Машина выезжает в 21:00' + ' ' + date + " " + months[month];
        date++;
        if ((date > 31 && (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11)) || (date > 30 && (month == 3 || month == 5 || month == 8 || month == 10)) || ((date > 28) && (month == 1))) {
            date = 1;
            month += 1;
        }
        while (dayOff[month].includes(date)) {
            date = date + 1;
            if ((date > 31 && (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11)) || (date > 30 && (month == 3 || month == 5 || month == 8 || month == 10)) || ((date > 28) && (month == 1))) {
                if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
                    date = date - 31;
                    month += 1;
                } else if (month == 3 || month == 5 || month == 8 || month == 10) {
                    date = date - 30;
                    month += 1;
                } else if (month == 1) {
                    date = date - 28;
                    month += 1;
                }
            }
            if (month > 11) {
                month = 0;
            }
        }
        document.getElementById('arrExpress').innerText = 'Груз будет доставлен в 10:00' + ' ' + date + " " + months[month];
        return date;
    }


}

function getDepTimeEconom() {
    let now = new Date();
    let hour = now.getUTCHours();
    let date = now.getUTCDate();
    let month = now.getUTCMonth();
    if (hour + 3 >= 24) {
        hour = 0;
        date += 1;
    }
    if ((date > 31 && (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11)) || (date > 30 && (month == 3 || month == 5 || month == 8 || month == 10)) || ((date > 28) && (month == 1))) {
        date = 1;
        month += 1;
        hour = 0;
    }

    hour += 3;

    while (dayOff[month].includes(date)) {
        date += 1;
        if ((date > 31 && (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11)) || (date > 30 && (month == 3 || month == 5 || month == 8 || month == 10)) || ((date > 28) && (month == 1))) {
            if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
                date = date - 31;
                month += 1;
            } else if (month == 3 || month == 5 || month == 8 || month == 10) {
                date = date - 30;
                month += 1;
            } else if (month == 1) {
                date = date - 28;
                month += 1;
            }
        }
        if (month > 11) {
            month = 0;
        }
        hour = 0;
    }


    if (hour >= 21) {


        date += 1;
        if ((date > 31 && (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11)) || (date > 30 && (month == 3 || month == 5 || month == 8 || month == 10)) || ((date > 28) && (month == 1))) {
            if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
                date = date - 31;
                month += 1;
            } else if (month == 3 || month == 5 || month == 8 || month == 10) {
                date = date - 30;
                month += 1;
            } else if (month == 1) {
                date = date - 28;
                month += 1;
            }
        }
        if (month > 11) {
            month = 0;
        }
        if ((date <= getDepTimeExpress() - 1) || (date == 30 && getDepTimeExpress() == 1) || (date == 28 && getDepTimeExpress() == 1)) {
            date++;
        }
        while (dayOff[month].includes(date)) {
            date = date + 1;
            if ((date > 31 && (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11)) || (date > 30 && (month == 3 || month == 5 || month == 8 || month == 10)) || ((date > 28) && (month == 1))) {
                if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
                    date = date - 31;
                    month += 1;
                } else if (month == 3 || month == 5 || month == 8 || month == 10) {
                    date = date - 30;
                    month += 1;
                } else if (month == 1) {
                    date = date - 28;
                    month += 1;
                }
            }
            if (month > 11) {
                month = 0;
            }
        }

        document.getElementById('DepEco').innerText = 'Машина выезжает в 21:00' + ' ' + date + " " + months[month];
        date++;


        if ((date > 31 && (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11)) || (date > 30 && (month == 3 || month == 5 || month == 8 || month == 10)) || ((date > 28) && (month == 1))) {
            date = 1;
            month += 1;
        }
        while (dayOff[month].includes(date)) {
            date = date + 1;
            if ((date > 31 && (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11)) || (date > 30 && (month == 3 || month == 5 || month == 8 || month == 10)) || ((date > 28) && (month == 1))) {
                if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
                    date = date - 31;
                    month += 1;
                } else if (month == 3 || month == 5 || month == 8 || month == 10) {
                    date = date - 30;
                    month += 1;
                } else if (month == 1) {
                    date = date - 28;
                    month += 1;
                }
            }
            if (month > 11) {
                month = 0;
            }
        }
        document.getElementById('arrEco').innerText = 'Груз будет доставлен в 10:00' + ' ' + date + " " + months[month];
    } else {
        if ((date <= getDepTimeExpress() - 1) || (date == 30 && getDepTimeExpress() == 1) || (date == 28 && getDepTimeExpress() == 1)) {
            date++;
        }

        if ((date > 31 && (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11)) || (date > 30 && (month == 3 || month == 5 || month == 8 || month == 10)) || ((date > 28) && (month == 1))) {
            date = 1;
            month += 1;
        }
        while (dayOff[month].includes(date)) {
            date = date + 1;
            if ((date > 31 && (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11)) || (date > 30 && (month == 3 || month == 5 || month == 8 || month == 10)) || ((date > 28) && (month == 1))) {
                if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
                    date = date - 31;
                    month += 1;
                } else if (month == 3 || month == 5 || month == 8 || month == 10) {
                    date = date - 30;
                    month += 1;
                } else if (month == 1) {
                    date = date - 28;
                    month += 1;
                }
            }
            if (month > 11) {
                month = 0;
            }
        }
        document.getElementById('DepEco').innerText = 'Машина выезжает в 21:00' + ' ' + date + " " + months[month];
        date++;


        if ((date > 31 && (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11)) || (date > 30 && (month == 3 || month == 5 || month == 8 || month == 10)) || ((date > 28) && (month == 1))) {
            date = 1;
            month += 1;
        }
        while (dayOff[month].includes(date)) {
            date = date + 1;
            if ((date > 31 && (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11)) || (date > 30 && (month == 3 || month == 5 || month == 8 || month == 10)) || ((date > 28) && (month == 1))) {
                if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
                    date = date - 31;
                    month += 1;
                } else if (month == 3 || month == 5 || month == 8 || month == 10) {
                    date = date - 30;
                    month += 1;
                } else if (month == 1) {
                    date = date - 28;
                    month += 1;
                }
            }
            if (month > 11) {
                month = 0;
            }
        }


        document.getElementById('arrEco').innerText = 'Груз будет доставлен в 10:00' + ' ' + date + " " + months[month];
        return date;
    }




}
timer();
setInterval(timer, 1000 * 60);

function dateManage() {
    let m1 = month1+1
    if (m1 < 10) {
        m1 = '0'+m1;
    }
    document.getElementById('dateFrom').min = year1 + '-' + m1 + '-' + date1;
    document.getElementById('dateTo').min = year1 + '-' + m1 + '-' + date1;

    let m2 = month1 + 2;
    let y = year1;
    if (m2 >= 12) {
        y  += 1;
        m2 = 1
    }
    if (m2 < 10) {
        m2 = '0'+m2;
    }
    document.getElementById('dateFrom').max = y + '-' + m2 + '-' + date1;
    document.getElementById('dateTo').max = y + '-' + m2 + '-' + date1;
}
function timeManage(count) {
    let difference = 0;
    if (inTime1.checked == true || inTime2.checked == true) {
        difference = 2;
    } else  {
        difference = 4;
    }


    if (count == 1) {

        let val1 = document.getElementById('Time1').value;
        let arr1 = val1.split(':');

        let h1 = parseInt(arr1[0]) + difference;
        let m1 = arr1[1];
        if (h1 >= 24) {
            h1 = h1 % 24;
        }
        if (h1<10) {
            h1 = '0'+h1;
        }
        document.getElementById('Time2').value = h1+':'+m1;
    } else {
        let val2 = document.getElementById('Intime3').value;
        let arr2 = val2.split(':');

        let h2 = parseInt(arr2[0]) + difference;
        let m2 = arr2[1];
        if (h2 >= 24) {
            h2 = h2 % 24;

        }
        if (h2<10) {
            h2 = '0'+h2;
        }

        document.getElementById('Intime4').value = h2+':'+m2;
    }

}
dateManage();
document.getElementById('Time1').addEventListener('input', () => {
    timeManage(1);
})
document.getElementById('Intime3').addEventListener('input', () => {
    timeManage(2);
})
inTime1.addEventListener('input', () => {
    timeManage(1);
})
inTime2.addEventListener('input', () => {
    timeManage(2);
})