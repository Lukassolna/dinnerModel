import { BASE_URL, API_KEY } from "/src/apiConfig.js";

function myFetchACB(response) {
  if (!response.ok) {
    throw new Error(response.status, "response was not 200");
  }
  return response.json();
}

function arrayToObjectACB(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("expected array, got ", typeof arr);
  }
  return arr[0];
}

function keepJustResultArrayACB(searchResult) {
  return searchResult["results"];
}

export function getMenuDetails(array_of_dish_ids) {
  const endString = array_of_dish_ids.join();
  return fetch(BASE_URL + "recipes/informationBulk?ids=" + endString, {
    headers: { "X-Mashape-Key": API_KEY },
  }).then(myFetchACB);
}
export function getDishDetails(id) {
  return getMenuDetails([id]).then(arrayToObjectACB);
}
export function searchDishes(searchParams) {
  const searchParamString = new URLSearchParams(searchParams);
  return fetch(
    BASE_URL +
      "recipes/complexSearch?" +
      searchParamString,
    {
      method: "GET",
      headers: { "X-Mashape-Key": API_KEY },
    }
  )
    .then(myFetchACB)
    .then(keepJustResultArrayACB);
}
