"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var navbar_1 = require("../navbar/navbar");
var search_1 = require("../search/search");
var footer_1 = require("../footer/footer");
var router_1 = require("@angular/router");
var home_1 = require("../home/home");
var product_detail_1 = require("../product-detail/product-detail");
var product_item_1 = require("../product-item/product-item");
var ApplicationComponent = (function () {
    function ApplicationComponent() {
    }
    ApplicationComponent = __decorate([
        core_1.Component({
            selector: 'auction-application',
            templateUrl: 'app/components/application/application.html',
            styleUrls: ['app/components/application/application.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES,
                footer_1.default,
                navbar_1.default,
                home_1.default,
                product_detail_1.default,
                product_item_1.default,
                search_1.default
            ]
        })
    ], ApplicationComponent);
    return ApplicationComponent;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ApplicationComponent;
