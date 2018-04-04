var express = require("express");
const app = express();

const screens = {
  home: ctx => {
    ctx.body = "home";
  },
  login: ctx => {
    ctx.body = "login";
  },
  signup: ctx => {
    ctx.body = "signup";
  },
  notFound: ctx => {
    ctx.body = "page not found";
  }
};

app.use(route.get("/", screens.home));
app.use(route.get("/login", screens.login));
app.use(route.get("/signup", screens.signup));
app.use(route.get("*", screens.notFound));

app.listen(3000);
console.log("listening on port 3000");
