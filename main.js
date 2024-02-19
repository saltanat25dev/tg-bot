const TOKEN = '6632268602:AAE5pRO0HnWA-AzM4lPSNRyGFC_mZGQ_47I',
    CHAT_ID = '-1002110012171',
    URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`,
    form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let message = `<b>Name:</b> ${this.name.value} /n`;
    message += `<b>Email:</b> ${this.email.value}/n`;
    message +=`<b>Tell:</b> ${this.tell.value}/n`;
    message += `<b>Message:</b> ${this.message.value}/n`;

    axios.post(URL_API,{
        chat_id:CHAT_ID,
        parse_mode: 'html',
        text:message
    }).then((res)=>{
        this.name.value = ''
        this.email.value = ''
        this.tell.value = ''
        this.message.value = ''
    }).catch((err)=>{
        console.log("error")
    }).finally(()=>{
        console.log("end")
    })

})

