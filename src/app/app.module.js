"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var core_2 = require("angular2-google-maps/core");
var app_component_1 = require("./app.component");
var home_component_1 = require("./pages/home.component");
var map_component_1 = require("./pages/map.component");
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: ':ip', component: map_component_1.MapComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            core_2.AgmCoreModule.forRoot({
                apiKey: 'AIzaSyDDEe80_G9RuZDjH4_AKhvFx_NTjBrkwuU'
            }),
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot(routes)
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            map_component_1.MapComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map