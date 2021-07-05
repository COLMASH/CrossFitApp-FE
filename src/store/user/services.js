import axios from "axios";

export async function userSignIn(email, password) {
  try {
    return await axios({
      method: "POST",
      baseURL: "http://localhost:8000",
      url: "/user/signin",
      data: {
        email,
        password,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
}

export async function getUserInfo(token) {
  try {
    return await axios({
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      url: `http://localhost:8000/user/userInfo`,
    });
  } catch (error) {
    console.log(error.message);
  }
}
