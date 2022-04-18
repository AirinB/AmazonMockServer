import path from "path";
import fs from "fs";

const fileDirectory = 'resources'

export default (fileName) => {
    const filePath = path.join(fileDirectory, fileName);
    const fileExists = fs.existsSync(filePath);

    if (fileExists) {
        console.log("Filenames exists: " + filePath)
        const fileContents = fs.readFileSync(filePath, 'utf-8');
        const contentsJson = JSON.parse(fileContents);
        return contentsJson;
    }

    return null;
}
