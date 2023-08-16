
  document.addEventListener("DOMContentLoaded", function () {
      // Reusable function to handle form submissions
      const handleSubmit = function (event) {
          event.preventDefault(); // Prevent the default form submission behavior
          const formData = new FormData(event.target);
          const name = formData.get("name");
          const email = formData.get("email");
          const mobile = formData.get("mobile");

          // Do something with the form data (e.g., send it to the server)
          console.log("Name:", name);
          console.log("Email:", email);
          console.log("Number:", mobile);

          Email.send({
          Host: "smtp.elasticemail.com",
          Username: "rps85071@gmail.com",
          Password: "2291E9E0E2939E3456B893971BA038ECF7A9",
          To: "abdulmateenalam997@gmail.com", // Replace with your own email address
          From: "rps85071@gmail.com", // Use the user's entered email address as the "From" address
          Subject: "New Enquery from piramalrealty.netlify.app",
          Body: `Name: ${name}<br>Email: ${email}<br>Mob Number: ${mobile}`,
      }).then(
        (message) =>  {message ? (window.location.href = "thanks.html") : alert(message);}).catch((error)=>console.log(error));

          // Reset the form fields (optional)
          event.target.reset();
      };

      // Get all forms with class "my-form"
      const forms = document.querySelectorAll("#my-form");

      // Attach event listener to each form
      forms.forEach((form) => {
          form.addEventListener("submit", handleSubmit);
      });
  });

