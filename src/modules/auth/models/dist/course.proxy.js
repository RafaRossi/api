"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CourseProxy = void 0;
var swagger_1 = require("@nestjs/swagger");
var CourseProxy = /** @class */ (function () {
    function CourseProxy(entity) {
        this.id = entity.id;
        this.name = entity.name;
        this.description = entity.description;
        this.imageUrl = entity.imageUrl;
    }
    __decorate([
        swagger_1.ApiProperty()
    ], CourseProxy.prototype, "id");
    __decorate([
        swagger_1.ApiProperty()
    ], CourseProxy.prototype, "name");
    __decorate([
        swagger_1.ApiProperty()
    ], CourseProxy.prototype, "description");
    __decorate([
        swagger_1.ApiProperty()
    ], CourseProxy.prototype, "imageUrl");
    return CourseProxy;
}());
exports.CourseProxy = CourseProxy;
