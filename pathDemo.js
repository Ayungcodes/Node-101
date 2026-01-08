import path from "path";
import url from "url";

const filePath = "./dir1/dir2/test.text";

// basename()
console.log(path.basename(filePath));

// dirname()
console.log(path.dirname(filePath));

// extname() (extention name)
console.log(path.extname(filePath));

// parse()
console.log(path.parse(filePath));

// to get the actual file path
const __filename = url.fileURLToPath(import.meta.url);

//  to get the directory name
const __dirname = path.dirname(__filename);

const filePath2 = path.join(__dirname, "dir1", "dir2", "text.txt");
console.log(filePath2);

// resolve() does same thing as join()
const filePath3 = path.join(__dirname, "dir1", "dir2", "text.txt");
console.log(filePath3);
