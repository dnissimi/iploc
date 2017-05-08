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
var geo_ip_service_1 = require("../services/geo-ip.service");
var app_component_1 = require("../app.component");
var MapComponent = (function () {
    function MapComponent(app, geoIp) {
        this.app = app;
        this.geoIp = geoIp;
        this.zoom = 8;
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.app.ipChanged.subscribe(function (ip) {
            _this.geoIp.getData(ip).then(function (data) {
                _this.latitude = data.latitude;
                _this.longitude = data.longitude;
            });
        });
    };
    return MapComponent;
}());
MapComponent = __decorate([
    core_1.Component({
        selector: 'map',
        styles: ["\n    .sebm-google-map-container {\n       height: 300px;\n     }\n  "],
        template: "\n    <sebm-google-map [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"zoom\">\n      <sebm-google-map-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></sebm-google-map-marker>\n    </sebm-google-map>\n  ",
        providers: [geo_ip_service_1.GeoIpService]
    }),
    __metadata("design:paramtypes", [app_component_1.AppComponent,
        geo_ip_service_1.GeoIpService])
], MapComponent);
exports.MapComponent = MapComponent;
//# sourceMappingURL=map.component.js.map