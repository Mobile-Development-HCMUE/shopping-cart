const puppeteer = require("puppeteer-core");

(async () => {
    const browser = await puppeteer.launch({
        headless: true,
        ignoreHTTPSErrors: true,
        executablePath:
            "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
        args: [
            "--proxy-server=" + "113.185.19.134" + ":" + "8000",
            "--no-sandbox",
            "--disable-setuid-sandbox",
            "--start-maximized",
        ],
    });
    const page = await browser.newPage();
    await page.goto("https://shopee.vn/daily_discover");
    const product = await page.evaluate(() => {
        let item = document.querySelector(".page-recommend__item-card-wrapper");
        return item;
    });
    console.log(item);
    await browser.close();
})();
