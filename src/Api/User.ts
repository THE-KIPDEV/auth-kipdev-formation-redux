const API_URL = "http://localhost:3000";

export async function loginUser(email: string, password: string): any {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function updateFirstName(firstname: string, email: string): any {
  try {
    const response = await fetch(`${API_URL}/edit-profil`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token")
      },
      body: JSON.stringify({ firstname, email }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
