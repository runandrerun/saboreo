export const fetchWhiskeys = async () => {
  const URL = "https://evening-citadel-85778.herokuapp.com:443/whiskey/";
  const response = await fetch(URL);
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message);
  };
  return body;
}
