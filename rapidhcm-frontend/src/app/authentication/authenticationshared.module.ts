import { HttpClient } from "@angular/common/http";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { AuthenticationService } from "./services/authentication.service";

@NgModule({})
export class AuthenticationSharedModule {
    static forRoot(): ModuleWithProviders<any> {
        return {
            ngModule: AuthenticationSharedModule,
            providers: [AuthenticationService, HttpClient]
        }
    }
}