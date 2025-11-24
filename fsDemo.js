// import fs from 'fs';
import fs from "fs/promises";

// readFile() - callback

// fs.readFile('./text.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// readFileSync() - Synchronous version

// const data = fs.readFileSync('./text.txt', 'utf8');
// console.log(data)

// readFile() - Promise .then()

// fs.readFile('./text.txt', 'utf8')
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))

// readFile() - async/await

const readFile = async () => {
  try {
    const data = await fs.readFile("./text.txt", "utf8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const writeFile = async () => {
  try {
    await fs.writeFile(
      "./text.txt",
      "Hi, my name is Gaius Emmanuel and I am a fullstack developer"
    );
    console.log("File written to...");
  } catch (error) {
    console.log(error);
  }
};

// appendFile()

const appendFile = async () => {
  try {
    await fs.appendFile("./text.txt", "\nI also make fire music!");
    console.log("File appended to");
  } catch (error) {
    console.log(error);
  }
};

writeFile();
appendFile();
readFile();
