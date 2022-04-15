const path = require("path");
const fs = require("fs");

const fileDirectory = 'resources'

module.exports = (fileName, data) => {
    const filePath = path.join(fileDirectory, fileName);
    try {
        fs.writeFileSync(filePath, data);
        return true;
    } catch(error) {
        console.error(`Failed to write file ${filePath}`, error);
        return false;
    }
}
