const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    var url = process.argv[2];
    var outputFile = process.argv[3];
    try {
		await page.goto(url);
        await page.pdf({path: outputFile,
						width: process.argv[5],
						height: process.argv[4],
						printBackground: true
		});
	} catch (error) {
		console.log(error)
	}
		await browser.close();
	}
)();