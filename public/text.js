let words = ['This app is an enterprise experiment created to gauge interest in "Cicero".', 'Thank you for your interest!'];
let part;
let i = 0;
let offset = 0;
let len = words.length;
let skip_count = 0;
let skip_delay = 15;
let speed = 70;

let wordflick = function () {
    let instance = setInterval(() => {
        offset++;

        if (offset > words[i].length) {
            if (i >= words.length - 1) {
                clearInterval(instance);

                return;
            }

            skip_count++;

            if (skip_count >= skip_delay) {
                let el = document.createElement("div");
                el.classList.add("word");

                document.getElementsByClassName("word")[i].after(el);
                
                skip_count = 0;
                offset = 1;
                i++;
            } else
                return;
        }

        part = words[i].substring(0, offset);

        document.getElementsByClassName("word")[i].textContent = part;
    }, speed);
};