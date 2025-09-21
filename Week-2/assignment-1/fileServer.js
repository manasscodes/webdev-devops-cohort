const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;
const FILES_DIR = "./files";

// GET /files - Returns a list of files in ./files/ directory
app.get("/files", (req, res) => {
  try {
    const files = fs.readdirSync(FILES_DIR);
    res.status(200).json(files);
  } catch (error) {
    res.status(500).json({ error: "Unable to read files directory" });
  }
});

// GET /file/:filename - Returns content of given file by name
app.get("/file/:filename", (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(FILES_DIR, filename);

  try {
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return res.status(404).send("File not found");
    }

    // Read and return file content
    const fileContent = fs.readFileSync(filePath, "utf8");
    res.status(200).send(fileContent);
  } catch (error) {
    res.status(500).send("Error reading file");
  }
});

// Handle any other route not defined - return 404
app.use((req, res) => {
  res.status(404).send("Route not found");
});

// Start the server
app.listen(PORT, () => {
  console.log(`File server is running on http://localhost:${PORT}`);
  console.log("Available endpoints:");
  console.log("  GET /files - List all files");
  console.log("  GET /file/:filename - Get file content");
});
