class MainPage{
   
    get newPasteTextArea() {
        return $('#postform-text');
    }

    get pasteExpirationDropdown() {
        return $('#select2-postform-expiration-container');
    }

    get expiration10MinutesOption() {
        return $('//li[contains(text(),"10 Minutes")]');
    }

    get syntaxDropdown() {
        return $('#select2-postform-format-container');
    }

    get syntaxOption() {
        return $('//li[contains(text(),"Bash")]');
    }

    get pasteNameInput() {
        return $('#postform-name');
    }

    get createPasteButton() {
        return $('button[type="submit"]');
    }

    get displayPasteCode(){
        return $('div.de1');
    }

    get syntaxHighlighting() {
        return $('a[href="/archive/bash"]');
    }

    async open() {
        await browser.url('https://pastebin.com');
    }

    async createNewPaste(code, syntax,expiration, pasteName) {
        await this.newPasteTextArea.setValue(code);
        await this.syntaxDropdown.click();
        await this.syntaxOption.click();           
        await this.pasteExpirationDropdown.click(); 
        await this.expiration10MinutesOption.click();      
        await this.pasteNameInput.setValue(pasteName);      
        await this.createPasteButton.click();           
    }
}

module.exports = new MainPage();
