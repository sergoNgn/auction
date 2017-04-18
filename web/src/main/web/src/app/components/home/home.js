"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var product_service_1 = require("../../services/product-service");
var carousel_1 = require("../carousel/carousel");
var product_item_1 = require("../product-item/product-item");
var HomeComponent = (function () {
    function HomeComponent(productService) {
        this.productService = productService;
        this.products = [];
        this.products = productService.getProducts();
    }
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'auction-home-page',
            styleUrls: ['app/components/home/home.css'],
            templateUrl: 'app/components/home/home.html',
            providers: [product_service_1.ProductService],
            directives: [carousel_1.default, product_item_1.default]
        })
    ], HomeComponent);
    return HomeComponent;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HomeComponent;
