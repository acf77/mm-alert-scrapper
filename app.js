const puppeteer = require("puppeteer");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const urlEncodedParser = bodyParser.urlencoded({ extended: false });

app.set("view engine", "ejs");
app.use("/public", express.static("public"));

app.get("/", (req, res) => res.render("index"));

app.post("/scrape", urlEncodedParser, (req, res) => {
  const alertLink = req.body.alertLink;
  console.log(alertLink);

  if (alertLink !== "" || undefined) {
    async function scrape() {
      const browser = await puppeteer.launch({});
      const page = await browser.newPage();

      await page.goto(alertLink);
      const merchantId = await page.waitForSelector(
        "#mdi-header > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > a"
      );
      const merchantName = await page.waitForSelector(
        "body > div > div > sre-default-navigation > div:nth-child(2) > div > div > div.ng-scope > div > div > div.oneglance > div.merchant > span"
      );
      const alertId = await page.waitForSelector(
        "body > div > div > sre-default-navigation > div:nth-child(2) > div > div > div.ng-scope > div > div > div.oneglance > div.meta > div.alertId.ng-binding"
      );

      const merchantIdText = await page.evaluate(
        (merchantId) => merchantId.textContent,
        merchantId
      );
      const merchantNameText = await page.evaluate(
        (merchantName) => merchantName.textContent,
        merchantName
      );
      const alertIdText = await page.evaluate(
        (alertId) => alertId.textContent,
        alertId
      );

      const merchantIdTextclear = merchantIdText.replace(/\s+/g, " ").trim();
      const alertIdTextClear = alertIdText.replace("Alert ID:", "").trim();

      browser.close();

      const alertData = {
        "Merchant name": merchantNameText,
        "Merchant ID": merchantIdTextclear,
        "Alert ID": alertIdTextClear,
      };
      console.log(alertData);

      res.render("result", {
        merchantId: alertData["Merchant ID"],
        merchantName: alertData["Merchant name"],
        alertId: alertData["Alert ID"],
      });
    }
    scrape();
  } else {
    res.render("index", { errorDiv: "Paste a link to create a template" });
  }
});

app.listen(process.env.PORT || 8080, () => console.log("Server started!"));
