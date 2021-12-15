const CHARACTER_API = "character";

const listCharacters = async (page = "") => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/${CHARACTER_API}?${page}`
  );
  return await response.json();
};

export { listCharacters };
