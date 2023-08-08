// typing effect (yetenekler şeriti)

let typed = new Typed('.auto-input',{
    strings: ['Bilgisayar Mühendisliği', 'Yazılımcı!', 'Sporcu ;)','Matematikçi ',' '],
    typeSpeep: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop:  true,
    
})

// Menu btn leri kaydırarak aktivleşme
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav  ul li a');

window.addEventListener('scroll', function() {
    const scrollPos = window.scrollY;
    sections.forEach(section => {
        if (scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('active');
                }
            });
        }
    });
});


  document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Sayfanın yenilenmesini engeller

    // Formdaki verileri al
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var konu = document.getElementById("konu").value;
    var msg = document.getElementById("msg").value;

    // Gönderilen verileri göstermek için HTML oluştur
    var responseHTML = `
      <h2>Gönderilen Veriler:</h2>
      <p><strong>Adı:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Konu:</strong> ${konu}</p>
      <p><strong>Mesaj:</strong> ${msg}</p>
    `;

    // Oluşturulan HTML'i "response" divine ekle
    document.getElementById("response").innerHTML = responseHTML;

    // Formu temizle
    document.getElementById("contact-form").reset();
  });


  // girşi kontrolu
  function kontrol() {
    var emailInput = document.getElementById("email").value; // E-posta girdisini al
    var passwordInput = document.getElementById("password").value; // Şifre girdisini al

    if (emailInput === user && passwordInput === passw) {
      alert("Hoşgeldiniz :)");
    } else {
      alert("Giriş hatalı, daha sonra deneyiniz");
    }

    return false; // Formun sunucuya gönderilmesini engelle
  }






