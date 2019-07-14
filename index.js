const puppeteer = require("puppeteer");
const myAccount = require("./nike-account.js");

const PAGE_INSTOCK = 'https://www.nike.com/kr/launch/?type=in-stock&activeDate=date-filter:BEFORE';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
    browser = await puppeteer.launch({ headless: false });
    page = await browser.newPage();

    await page.setViewport({
        width: 1200,
        height: 800
    });

    await page.goto(PAGE_INSTOCK);

    goToLoginBtnSelector = `a[title='로그인']`;
    await page.click(goToLoginBtnSelector);

    // 이메일 입력
    emailInputSelector = `input#j_username`;
    await page.waitForSelector(emailInputSelector, {
        visible: true
    });
    await page.type(emailInputSelector, myAccount.email);

    await sleep(1000);

    // 비밀번호 입력
    passwordInputSelector = `input#j_password`;
    await page.type(passwordInputSelector, myAccount.password);

    await sleep(1000);

    // 로그인 버튼 입력
    loginBtnSelector = `button.button.large.width-max`;
    await page.click(loginBtnSelector);


    // await page.close();
    // await browser.close();
})();
