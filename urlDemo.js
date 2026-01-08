import url, { fileURLToPath } from "url";

const urlString = "https://www.google.com/search?q=hello+world";

// URL object
const urlObj = new URL(urlString);
// console.log(urlObj);

// format() takes the url object and turns it back into a string
// console.log(url.format(urlObj));

// import.meta.url - gives us the file URL (not a part of the URL module tho)
// console.log(import.meta.url);

// fileURLToPath() converts the file URL into a regular path
// console.log(url.fileURLToPath(import.meta.url));

// console.log(urlObj.search);
// console.log(urlObj.protocol);

const params = new URLSearchParams(urlObj.search);
console.log(params.get("q"));
params.append("limit", "5");
params.delete("limit");
console.log(params);
