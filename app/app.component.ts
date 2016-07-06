import {Component} from '@angular/core';
import {FormBuilder, Validators, ControlGroup, Control} from '@angular/common';
declare var $:any;

@Component({
    selector: 'nexus-ussp',
    templateUrl: 'template/component.html'
})
export class AppComponent {

    loginForm = new ControlGroup({
        userName: new Control("", Validators.required),
        password: new Control("", Validators.required)
    });

    doLogin(loginModal) {
        //alert(JSON.stringify(this.loginForm.value));

        let controls = this.loginForm.value;
        
        let userName = controls['userName'];
        let password = controls['password'];

        if (userName == 'admin' && password == 'admin') {
            $(loginModal).modal('hide');
            this.hideLoginModal();
        } else {
            this.errorMessage = "Unauthenticated user: Either the user name or the password you entered is not valid. Please try again."
        }

    }

    commands = [
        {
            label: "Smartcard login &other"
        },
        {
            label: "Custom external link"
        },
        {
            label: "Login", selected: true
        }
    ];

    executeCommand(command) {
        this.showLoginModal();
    }

    languages = [{displayName: 'English'}, {displayName: 'German'}, {displayName: 'France', selected: true}];

    selectedLanguage = this.languages[2];

    get selectLanguage() {
        return this.selectedLanguage;
    }

    set selectLanguage(selectedLanguage) {
        this.selectedLanguage = selectedLanguage;
    }

    errorMessage:string = null;

    loginModalVisible = false;

    showLoginModal() {
        this.loginModalVisible = true;
    }

    hideLoginModal() {
        this.loginModalVisible = false;
    }

    buildVersion = "3.4.1.140";
    productName = "neXus PRIME";
    copyright = "Copyright © 2007-2016 Nexus Technology AB";
}
