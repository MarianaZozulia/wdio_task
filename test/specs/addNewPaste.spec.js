const MainPage = require('../pageobjects/main.page');
const { pasteData } = require('../testdata');
const fs = require('fs');

describe('New Paste Creation', () => {
    it('Successfully create a new paste', async () => {

        const cookies = JSON.parse(fs.readFileSync('../cookies.json', 'utf8'));

       
        await MainPage.open();
        for (const cookie of cookies) {
            await browser.setCookies(cookie);
        }

        await browser.refresh();

        await MainPage.createNewPaste(pasteData.code, pasteData.expiration,pasteData.title);

        await browser.waitUntil(
            async () => (await browser.getUrl()).includes(pasteData.title),
            {
                timeout: 5000,
                timeoutMsg: `Expected URL to contain "${pasteData.title}"`,
            }
        );

        
        const pasteContent = await MainPage.displayPasteTitle.getText();
        expect(pasteContent).toContain(pasteData.code);
    });
    
});
