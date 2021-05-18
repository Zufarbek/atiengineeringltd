const form = document.getElementById("contact_form_3");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var text = document.getElementById("description").value.replace(/(\r\n|\n|\r)/gm, "");

    if (subject.length < 1) {
        subject = "--"

    }
    var message = `📄 <b>ЗАЯВЛЕНИЕ</b> 📬 %0A----------------------------------%0A <b>👤Имя: </b><i>${username}</i>%0A <b>📨Электронное письмо: </b><i>${email}</i>%0A <b>📍Предмет: </b><i>${subject}</i>%0A <b>✉️Text: </b><i>${text}</i>`;
    var chatID = -513739532;
    var token = '1771552699:AAFFlBReqTK_b3ntQdcy3hpNCvXLkxPa3rs'
    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatID}&text=${message}&parse_mode=html`;
    let apibot = new XMLHttpRequest();
    apibot.open("GET", url, true);
    apibot.send();
    alert("Успешно отправлено")
})