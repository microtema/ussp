import {provideRouter, RouterConfig}  from '@angular/router';
import {LoginComponent} from "./login/LoginComponent";
import {MainComponent} from "./main/MainComponent";
import {AuthGuard} from "./service/AuthGuard";
import {LoginService} from "./login/service/LoginService";
import {LogoutComponent} from "./logout/LogoutComponent";
const routes:RouterConfig = <RouterConfig>[
    {
        path: "",
        redirectTo: "main",
        pathMatch: 'full'
    },
    {
        path: "logout",
        component: LogoutComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "main",
        canActivate: [AuthGuard],
        component: MainComponent
    }
];
export const authProviders = [AuthGuard, LoginService];
export const appRouterProviders = [
    provideRouter(routes),
    authProviders
];
