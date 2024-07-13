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
      // Adjusted endpoint for phone
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Phone call request submitted successfully!");
        // Optionally reset the form after successful submission
        form.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error submitting phone call request.");
      });
  }

  // Add event listener to all forms with class 'insurance-details__email-box'
  const phoneCallForms = document.querySelectorAll(
    ".insurance-details__email-box"
  );
  phoneCallForms.forEach((form) => {
    form.addEventListener("submit", handleFormSubmit);
  });
});
