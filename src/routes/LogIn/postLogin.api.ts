const postLogin = async (username: string, password: string) => {
  console.log(
    JSON.stringify({
      username: username,
      password: password,
    })
  );

  const res = await fetch("https://hackathon-backend.azurewebsites.net/login", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });

  if (res.status !== 200) {
    return false;
  }
  const data = await res.json();

  return data;
};

export default postLogin;
