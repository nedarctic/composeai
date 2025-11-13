// Login function
export const login = async (email: string, password: string) => {
  const tokenResponse = await fetch("http://127.0.0.1:8000/api/v1/token/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
    cache: "no-store",
  });

  if (!tokenResponse.ok) {
    console.error("Login failed:", await tokenResponse.text());
    return null;
  }

  return tokenResponse.json();
};

// Signup function
export const signup = async (
  email: string,
  password1: string,
  password2: string,
  first_name: string,
  last_name: string
) => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/v1/dj-rest-auth/registration/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password1, password2, first_name, last_name }),
      cache: "no-store",
    });

    const data = await response.json();

    if (!response.ok) {
      // dj-rest-auth sends field-specific errors like { email: ["A user with that email already exists."] }
      throw data;
    }

    return { success: true, data };
  } catch (error: any) {
    console.error("Registration error:", error);
    return { success: false, error };
  }
};