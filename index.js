const puppeteer = require("puppeteer");
const myAccount = require("./nike-account.js");

const PAGE_INSTOCK = 'https://www.nike.com/kr/launch/?type=in-stock&activeDate=date-filter:BEFORE';

(async () => {
    browser = await puppeteer.launch({ headless: false });
    page = await browser.newPage();

    await page.setViewport({
        width: 1200,
        height: 800
    });

    await page.goto(PAGE_INSTOCK);

    loginBtnSelector = `a[title='로그인']`;
    await page.click(loginBtnSelector);

    emailInputSelector = `input#j_username`;
    await page.waitForSelector(emailInputSelector, {
        visible: true
    });
    await page.type(emailInputSelector, myAccount.email);

    // await page.close();
    // await browser.close();
})();
