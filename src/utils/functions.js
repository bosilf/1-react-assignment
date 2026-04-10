export const getImageURL = imageParameter => { //default.jpg
return new URL(`../assets/${imageParameter}`, import.meta.url).href
}