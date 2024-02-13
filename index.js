// ****** Importing Dependencies & Database and Defining Port Number  ****** //
const express = require("express");
const port = 8000;
const db = require("./config/mongoose");

const passport = require("passport");
const passportJWT = require("./config/passport_jwt_strategy");

// ****** Starting the App ****** //
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// ****** Route to render HTML page with Postman button ****** //
app.get("/", (req, res) => {
  res.send(`
        <html>
            <head>
                <title>Postman Button</title>
            </head>
            <div class="postman-run-button"
data-postman-action="collection/fork"
data-postman-visibility="public"
data-postman-var-1="31709090-9abf13e5-e04f-4aa6-bc66-f28510fa984e"
data-postman-collection-url="entityId=31709090-9abf13e5-e04f-4aa6-bc66-f28510fa984e&entityType=collection&workspaceId=4db838b9-0ca2-4c93-a430-a2b5cf3ebb3a"></div>
<script type="text/javascript">
  (function (p,o,s,t,m,a,n) {
    !p[s] && (p[s] = function () { (p[t] || (p[t] = [])).push(arguments); });
    !o.getElementById(s+t) && o.getElementsByTagName("head")[0].appendChild((
      (n = o.createElement("script")),
      (n.id = s+t), (n.async = 1), (n.src = m), n
    ));
  }(window, document, "_pm", "PostmanRunObject", "https://run.pstmn.io/button.js"));
</script>
        </html>
    `);
});

// ****** Redirecting Routes ****** //
app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log("error");
    return;
  } // ****** Print if error ****** //

  console.log(`Server Running :: Port Number - ${port}`); // ****** Else print this ****** //
});
