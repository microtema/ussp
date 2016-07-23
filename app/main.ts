import {bootstrap}    from "@angular/platform-browser-dynamic";
import {AppComponent} from "./app.component";
import {appRouterProviders} from './app.routes';
import {HTTP_PROVIDERS, Http} from '@angular/http';
import {
    TranslatePipe, TranslateService, TranslateStaticLoader,
    TranslateLoader
} from "ng2-translate/ng2-translate";
import {PLATFORM_PIPES} from "@angular/core";
bootstrap(AppComponent, [appRouterProviders, HTTP_PROVIDERS,
    [
        {
            provide: TranslateLoader,
            useFactory: (http:Http) => new TranslateStaticLoader(http, 'assets/i18n', '.json'),
            deps: [Http]
        },
        // use TranslateService here, and not TRANSLATE_PROVIDERS (which will define a default TranslateStaticLoader)
        TranslateService
    ], {
        provide: PLATFORM_PIPES,
        useValue: TranslatePipe,
        multi: true
    }]);
