$("#correo").click(function () {
  alert("correo ha sido enviado");
});
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
$(document).ready(function () {
  $("#").click(function () {
    var gato = this.hash
    $("html, body").animated(
      {
        scrollTop: $(gato).offset().top
      },
      3000
    )
  })
})