const BASE_URL = "https://expenses-backend-mu.vercel.app";

// Function to fetch all expenses
export async function fetchExpenses() {
  const response = await fetch(`${BASE_URL}/expenses`, {
    headers: {
      "Content-Type": "application/json",
      Username: "lionel.wilson",
    },
  });
  return handleResponse(response);
}

// Helper function to handle response parsing and errors
async function handleResponse(response: any) {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Something went wrong");
  }
  return response.json();
}
