"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ProductDetailComponent = (function () {
    function ProductDetailComponent(activatedRoute) {
        this.productTitle = activatedRoute.snapshot.params['prodTitle'];
    }
    ProductDetailComponent = __decorate([
        core_1.Component({
            selector: 'auction-product-page',
            template: "\n        <div>\n            <img src=\"http://placehold.it/820x320\">\n            <h4>{{productTitle}}</h4>\n        </div>\n        "
        })
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProductDetailComponent;
