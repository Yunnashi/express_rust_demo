const express = require("express");
const PORT = 3000;
const app = express();
const path = require("path");
const methodOverride = require("method-override");
// 一意識別IDを作成してくれるPKGを利用
const { v4: uuid } = require("uuid");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// 今回はDEMOのため、初期データをここで宣言する
let comments = [
  {
    id: uuid(),
    username: "Tarou",
    comment: "Happy Day!!!!!!",
  },
  {
    id: uuid(),
    username: "Yuki",
    comment: "I like chicken.",
  },
  {
    id: uuid(),
    username: "Risa",
    comment: "hooooooooooo!!",
  },
  {
    id: uuid(),
    username: "cat",
    comment: "MeowMeow",
  },
];

app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});

app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment, id: uuid() });
  res.redirect("/comments");
});

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/show", { comment });
});

app.patch("/comments/:id", (req, res) => {
  const { id } = req.params;
  const newCommentText = req.body.comment;
  const foundComment = comments.find((c) => c.id === id);
  foundComment.comment = newCommentText;
  res.redirect("/comments");
});

app.get("*", (req, res) => {
  res.send("404 Not found!");
});

app.listen(PORT, () => {
  console.log(`リクエストをポート${PORT}で待機中...`);
});
