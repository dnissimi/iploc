"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.ip = '0.0.0.0';
        this.ipChanged = new core_1.EventEmitter();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            var ip = _this.formatIP(event.url);
            if (ip && ip.length) {
                _this.ip = ip;
                _this.ipChanged.emit(ip);
            }
        });
    };
    AppComponent.prototype.updateIP = function () {
        this.router.navigate([this.ip]);
        this.ipChanged.emit(this.ip);
    };
    AppComponent.prototype.formatIP = function (ip) {
        return (ip || '').replace(/\//, '').replace(/-/g, '.');
    };
    return AppComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], AppComponent.prototype, "ipChanged", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <div>\n      <h1>IP Location</h1>\n      <input type=\"text\" [(ngModel)]=\"ip\">\n      <button (click)=\"updateIP()\">Locate</button>\n    </div>\n    <router-outlet></router-outlet>\n  ",
    }),
    __metadata("design:paramtypes", [router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map