

document.getElementById("myForm").addEventListener("submit", function (event) {
      event.preventDefault(); // prevent actual form submission

      // Get form data
      const formData = new FormData(event.target);
      const data = {};

      formData.forEach((value, key) => {
        data[key] = value;
      });

      // Convert to JSON string
      const jsonStr = JSON.stringify(data, null, 2);

      // Create a Blob from the string
      const blob = new Blob([jsonStr], { type: "application/json" });

      // Create a link to download the file
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "form-data.json";
      a.click();

      // Clean up
      URL.revokeObjectURL(a.href);
    });






