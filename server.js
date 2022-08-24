var express = require("express");
var app = express();

app.use("/api/books", function (req, res) {
  console.log("GET /api/books");
  res.json({
    data: [
      "Kings of Crypto",
      "Bad Blood",
      "Everything Store",
      "Hatching Twitter",
    ],
  });
});

app.use(express.static(__dirname));

app.listen(8000, function () {
  console.log("listening on 8000");
});
