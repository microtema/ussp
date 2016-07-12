import {provideRouter, RouterConfig}  from '@angular/router';
import {LoginComponent} from "./login/LoginComponent";
import {MainComponent} from "./main/MainComponent";
const routes:RouterConfig = <RouterConfig>[
    {
        path: "",
        component: LoginComponent
    },
    {
        path: "main",
        component: MainComponent
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];
