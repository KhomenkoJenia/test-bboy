function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const statusMessage = document.getElementById("statusMessage");

  fetch("sendmail.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then((data) => {
      statusMessage.textContent = data;
      form.reset();
    })
    .catch(
      (error) => (statusMessage.textContent = "Ошибка при отправке: " + error)
    );
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("file").addEventListener("change", function () {
    var fileName = this.files[0].name;
    document.getElementById("file-name").textContent = " " + fileName;
  });
});
