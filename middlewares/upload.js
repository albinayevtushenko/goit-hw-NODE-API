const multer = require("multer");
const path = require("node:path");
const crypto = require("node:crypto");

const tempDir = path.join(__dirname, "../", "temp");

const multerConfig = multer.diskStorage({
  destinatin: tempDir,
  filename: (req, file, cd) => {
    const extname = path.extname(file.originalname);
    const basename = path.basename(file.originalname, extname);
    const name = `${basename}-${crypto.randomUUID}${extname}`;
    cd(null, name);
  },
});

const upload = multer({
  storage: multerConfig,
});

module.exports = upload;
