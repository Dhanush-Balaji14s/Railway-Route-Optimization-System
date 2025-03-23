// Utility function to simulate delay (for loading effect)
const simulateDelay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Handle form submission
document.getElementById("routeForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const source = document.getElementById("source").value.trim();
  const destination = document.getElementById("destination").value.trim();

  // Validate inputs
  if (source === "" || destination === "") {
    showAlert("Please fill in both the source and destination!", "error");
    return;
  }

  // Show loading effect
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = `
    <div class="card p-3 shadow text-center">
      <p>Finding the best route...</p>
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  `;

  // Simulate a delay to mimic route calculation
  await simulateDelay(2000);

  // Generate random route details
  const route = `Optimized route from <strong>${source}</strong> to <strong>${destination}</strong>`;
  const distance = Math.floor(Math.random() * 500) + 50; // Random distance (50-550 km)
  const time = (distance / 60).toFixed(2); // Assuming avg speed = 60 km/h

  // Display the results
  outputDiv.innerHTML = `
    <div class="card p-3 shadow">
      <h3>Route Details</h3>
      <p><strong>Route:</strong> ${route}</p>
      <p><strong>Distance:</strong> ${distance} km</p>
      <p><strong>Estimated Time:</strong> ${time} hours</p>
    </div>
  `;

  // Show a success alert
  showAlert("Route optimization completed!", "success");
});

// Show alert messages dynamically
function showAlert(message, type) {
  const alertDiv = document.createElement("div");
  alertDiv.className = `alert alert-${type === "error" ? "danger" : "success"} fade show`;
  alertDiv.role = "alert";
  alertDiv.innerHTML = `
    <strong>${type === "error" ? "Error!" : "Success!"}</strong> ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  `;

  // Add alert to the DOM
  const container = document.querySelector(".container");
  container.insertBefore(alertDiv, container.firstChild);

  // Automatically remove the alert after 3 seconds
  setTimeout(() => {
    if (alertDiv) {
      alertDiv.remove();
    }
  }, 3000);
}

    