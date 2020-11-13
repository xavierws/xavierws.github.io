var dataReload = document.querySelectorAll("[data-reload]");

var language = {
  idn: {
    welcome: "Seberapa resiko anda terkena stroke?"
  },
  en: {
    welcome: "How prone to stroke are you?"
  }
};

if (window.location.hash) {
  if (window.location.hash === "#en") {
    judul.textContent = language.en.welcome;
  }
}

for (i = 0; i <= dataReload.length; i++) {
  dataReload[i].onclick = function () {
    location.reload();
  };
}