const mongoose = require("mongoose");

// Connecting to MongoDB using Mongoose
mongoose
  .connect(
    "mongodb+srv://mthirumalai2905:iv7fktVtKy7h7NSV@cluster0.ertdtcy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connection successful..."))
  .catch((err) => console.error("Connection failed:", err));

// Schema definition
const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ctype: String,
  videos: Number,
  author: String,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

// Model creation
const Playlist = mongoose.model("Playlist", playlistSchema);

// Document creation and insertion

const reactPlaylist = new Playlist({
  name: "React JS",
  ctype: "Frontend",
  videos: 80,
  author: "Thiru",
  active: true, // Boolean value should not be wrapped in quotes
});

reactPlaylist
  .save()
  .then(() => console.log("Document saved successfully..."))
  .catch((err) => console.error("Failed to save document:", err));

  // Document creation and insertion
// const nodePlaylist = new Playlist({
//     name: "Node JS",
//     ctype: "Backend",
//     videos: 87,
//     author: "Thirumalai",
//     active: true, // Boolean value should not be wrapped in quotes
//   });
  
//   nodePlaylist
//     .save()
//     .then(() => console.log("Document saved successfully..."))
//     .catch((err) => console.error("Failed to save document:", err));


// Function to create and save a document
const createDocument = async () => {
    try {
      const expressPlaylist = new Playlist({
        name: "Express",
        ctype: "Backend",
        videos: 100,
        author: "Thiru",
        active: true,
      });
  
      await expressPlaylist.save(); // Wait for the document to be saved
      console.log("Document saved successfully...");
    } catch (err) {
      console.error("Failed to save document:", err);
    }
  };
  
  // Call the function to create and save the document
  createDocument();