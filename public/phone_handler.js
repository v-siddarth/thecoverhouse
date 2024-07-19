document.addEventListener("DOMContentLoaded", function () {
  function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    fetch("/send-phone-call", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        showAlert("Phone call request submitted successfully!");
        form.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
        showAlert("Error submitting phone call request.");
      });
  }

  function showAlert(message) {
    const alertBox = document.getElementById("custom-alert");
    const alertMessage = document.getElementById("custom-alert-message");
    const alertClose = document.getElementById("custom-alert-close");

    alertMessage.textContent = message;
    alertBox.style.display = "block";

    alertClose.onclick = function () {
      alertBox.style.display = "none";
    };
  }
  // Add event listener to all forms with class 'insurance-details__email-box'

  const phoneCallForms = document.querySelectorAll(
    ".insurance-details__email-box"
  );
  phoneCallForms.forEach((form) => {
    form.addEventListener("submit", handleFormSubmit);
  });
});
// document.addEventListener("DOMContentLoaded", function () {
//   function handleFormSubmit(event) {
//     event.preventDefault();
//     const form = event.target;
//     const formData = new FormData(form);

//     const data = {};
//     formData.forEach((value, key) => {
//       data[key] = value;
//     });

//     // Validate phone number before submitt
//     const phoneNumber = data["phone"];
//     if (phoneNumber.length !== 10) {
//       showAlert("Please enter a valid 10-digit phone number.");
//       return;
//     }

//     fetch("/send-phone-call", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Success:", data);
//         showAlert("Phone call request submitted successfully!");
//         form.reset();
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//         showAlert("Error submitting phone call request.");
//       });
//   }

//   function showAlert(message) {
//     const alertBox = document.getElementById("custom-alert");
//     const alertMessage = document.getElementById("custom-alert-message");
//     const alertClose = document.getElementById("custom-alert-close");

//     alertMessage.textContent = message;
//     alertBox.style.display = "block";

//     alertClose.onclick = function () {
//       alertBox.style.display = "none";
//     };
//   }

//   const phoneForm = document.getElementById("phoneForm");
//   phoneForm.addEventListener("submit", handleFormSubmit);
// });
