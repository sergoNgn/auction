"use strict";
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var application_1 = require("./components/application/application");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var home_1 = require("./components/home/home");
var product_item_1 = require("./components/product-item/product-item");
platform_browser_dynamic_1.bootstrap(application_1.default, router_1.provideRouter([
    { path: '', component: home_1.default },
    { path: 'products/:prodTitle', component: product_item_1.default }
]), { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy });
