import axios from "axios";

const URL_PATH = "http://localhost:8080/api/";

export const register = async ({ email, password }) => {
  const { data } = await axios.post(URL_PATH + "user/register", {
    email,
    password,
  });
  return data;
};
export const login = async ({ email, password }) => {
  const { data } = await axios.post(URL_PATH + "user/login", {
    email,
    password,
  });
  return data;
};

export const getNewsFromApi = async ({ page, tags }) => {
  let reqStr = "";
  if (page || tags) {
    reqStr += "?size=20";
  }
  if (page) {
    reqStr += `page=${page}`;
  }

  if (tags && tags?.length) {
    reqStr += `&tags=${JSON.stringify(tags)}`;
  }

  const { data } = await axios.get(URL_PATH + "news" + reqStr);
  return data;
};

export const getTagsFromApi = async ({ page }) => {
  const { data } = await axios.get(URL_PATH + "tags");
  return data;
};

export const getOneNewsFromApi = async ({ id }) => {
  const { data } = await axios.get(URL_PATH + "news/" +id);
  return data;
};