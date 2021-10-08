const postRegister = async (username: string, password: string) => {
  console.log(
    JSON.stringify({
      username: username,
      password: password,
    })
  );

  const res = await fetch("https://hackathon-backend.azurewebsites.net/register", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });

  if (res.status === 409) {
    return false;
  }
  const data = await res.json();
  console.log(data.message);

  return data;
};

export default postRegister;
