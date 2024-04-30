const getProfile = async () => {
  const request = await fetch(`https://api.github.com/users/antoniolvlindo`);
  const requestJson = await request.json();
  return requestJson;
}

export default getProfile;