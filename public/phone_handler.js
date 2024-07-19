// document.addEventListener("DOMContentLoaded", function () {
//   function handleFormSubmit(event) {
//     event.preventDefault();
//     const form = event.target;
//     const formData = new FormData(form);

//     const data = {};
//     formData.forEach((value, key) => {
//       data[key] = value;
//     });
//     console.log("hello", data.phone);

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
//   // Add event listener to all forms with class 'insurance-details__email-box'

//   const phoneCallForms = document.querySelectorAll(
//     ".insurance-details__email-box"
//   );
//   phoneCallForms.forEach((form) => {
//     form.addEventListener("submit", handleFormSubmit);
//   });
// });
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
// document.addEventListener("DOMContentLoaded", function () {
//   function handleFormSubmit(event) {
//     event.preventDefault();
//     const form = event.target;
//     const formData = new FormData(form);

//     const data = {};
//     formData.forEach((value, key) => {
//       data[key] = value;
//     });

//     if (!validatePhoneNumber(data.phone)) {
//       showAlert(
//         "Invalid phone number. Please enter a 10-digit phone number.",
//         "error"
//       );
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
//         showAlert("Phone call request submitted successfully!", "success");
//         form.reset();
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//         showAlert("Error submitting phone call request.", "error");
//       });
//   }

//   function validatePhoneNumber(phone) {
//     const phonePattern = /^\d{10}$/;
//     return phonePattern.test(phone);
//   }

//   function showAlert(message, type) {
//     const alertBox = document.getElementById("custom-alert");
//     const alertMessage = document.getElementById("custom-alert-message");
//     const alertClose = document.getElementById("custom-alert-close");

//     alertMessage.textContent = message;
//     alertBox.className =
//       type === "success"
//         ? "custom-alert alert-success"
//         : "custom-alert alert-error";
//     alertBox.style.display = "block";

//     // Reset and start the progress bar animation
//     const progressBar = alertBox.querySelector(".progress-bar::before");
//     progressBar.style.animation = "none";
//     progressBar.offsetHeight; // Trigger reflow
//     progressBar.style.animation = null;

//     // Automatically close after 5 seconds
//     setTimeout(() => {
//       alertBox.style.display = "none";
//     }, 5000);

//     alertClose.onclick = function () {
//       alertBox.style.display = "none";
//     };
//   }

//   const phoneCallForms = document.querySelectorAll(
//     ".insurance-details__email-box"
//   );
//   phoneCallForms.forEach((form) => {
//     form.addEventListener("submit", handleFormSubmit);
//   });
// });
document.addEventListener("DOMContentLoaded", function () {
  function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    if (!validatePhoneNumber(data.phone)) {
      showAlert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

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

  function validatePhoneNumber(phone) {
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(phone);
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

  const phoneCallForms = document.querySelectorAll(
    ".insurance-details__email-box"
  );
  phoneCallForms.forEach((form) => {
    form.addEventListener("submit", handleFormSubmit);
  });
});
