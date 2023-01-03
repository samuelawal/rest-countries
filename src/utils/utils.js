import { API_URL } from "../constants/constants";
export async function fetchCountries() {
  let data = (await fetch(API_URL)).json();
  return data;  
}
export function getCountryContinents(countries = []) {
    return Array.from(new Set(countries.map(country => country.region)))
}