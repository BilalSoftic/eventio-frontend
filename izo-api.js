const apiBaseUrl = "http://127.0.0.1:8003/api/";

fetchData = async (url, method, body) => {
  try {
    const response = await fetch(apiBaseUrl + url, {
      method,
      body: body ? body : null,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const registerUser = (user) => {
  fetchData("register", "POST", user);
};
