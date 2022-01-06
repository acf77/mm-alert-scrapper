const puppeteer = require("puppeteer");
const express = require("express");
const bodyParser = require("body-parser");
const { check, validationResult } = require("express-validator");

const app = express();
const urlEncodedParser = bodyParser.urlencoded({ extended: false });

app.set("view engine", "ejs");
app.use("/public", express.static("public"));

app.get("/", (req, res) => res.render("index"));

app.post(
  "/scrape",
  urlEncodedParser,
  [
    check("alertLink", "You must add an alert link!")
      .exists()
      .isLength({ min: 1 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorArray = errors.array();
      res.render("index-error", { errorArray: errorArray[0].msg });
    } else {
      const alertLink = req.body.alertLink + "/merchant";

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

        browser.close();

        const merchantIdTextclear = merchantIdText.replace(/\D/g, "").trim();
        const alertIdTextClear = alertIdText.replace(/\D/g, "").trim();

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
    }
  }
);

app.listen(process.env.PORT || 3000, () => console.log("Server started!"));
