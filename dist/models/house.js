"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.House = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var houseSchema = new mongoose_1.default.Schema({
    houseName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
});
exports.House = mongoose_1.default.model('House', houseSchema);
houseSchema.statics.build = function (attr) {
    return new exports.House(attr);
};
