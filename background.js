let interval = setInterval(() => {
        navigator.getBattery()
        .then((battery) => {
        let level = battery.level *100;
if(level <= 20 && !battery.charging) { // when battery don't charge and level is low - return alert
    alert('Battery level is too low! You should connect your leptop to charge device');
    clearInterval(interval);
        }
    })
}, 60000);

