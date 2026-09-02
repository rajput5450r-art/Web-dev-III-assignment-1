const fs = require("fs");

// Create
fs.writeFile("test.txt", "A test file.", function (err) {
  if (err) {
    console.log("Error while creating file:", err.message);
    return;
  }
  console.log("File Created");

  // Read
  fs.readFile("test.txt", "utf-8", function (err, data) {
    if (err) {
      console.log("Error while reading file:", err.message);
      return;
    }
    console.log("Read:", data);

    // Update
    fs.appendFile("test.txt", "\nLearning FS Module", function (err) {
      if (err) {
        console.log("Error while updating file:", err.message);
        return;
      }
      console.log("File Updated");

      // Delete
      fs.unlink("test.txt", function (err) {
        if (err) {
          console.log("Error while deleting file:", err.message);
          return;
        }
        console.log("File Deleted");
      });
    });
  });
});