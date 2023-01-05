import { API_URL, DESCENDING_ORDER, NUMBER, STRING } from "../constants/constants";
export async function fetchCountries() {
  let data = (await fetch(API_URL)).json();
  return data;  
}
export function getCountryContinents(countries = []) {
    return Array.from(new Set(countries.map(country => country.region)))
}

export function compareObjFn({currentObj, nextObj, key, type}) {
    let currentVal;
    let nextVal;

    if(currentObj[key] && nextObj[key]) {
        if(type === NUMBER) {
            currentVal = Number(currentObj[key]) || 0
            nextVal = Number(nextObj[key]) || 0;
        } else {
            currentVal = currentObj[key].common.toLowerCase()
            nextVal = nextObj[key].common.toLowerCase()
        }
        
        if(nextVal < currentVal) {
            return 1
        } if (nextVal > currentVal) {
            return -1
        }
    }
    return 0
}

export function sortArrOfObj({arr, objectKey, sortOrder, keyType = STRING}) {
    const sortedArrInAsc = [...arr].sort((currentObj, nextObj) => compareObjFn({currentObj, nextObj, key: objectKey, type: keyType}));
    if(sortOrder === DESCENDING_ORDER) {
        const sortedArrInDesc = [...sortedArrInAsc].reverse()
        return sortedArrInDesc
    }
    return sortedArrInAsc
}

export function sortCountries({countries, key, type, order}) {
    return sortArrOfObj({
        arr: countries, objectKey: key, sortOrder: order, keyType: type,
    })
}