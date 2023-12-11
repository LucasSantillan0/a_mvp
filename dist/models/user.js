"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var userSchema = new mongoose_1.default.Schema({
    userName: {
        type: String,
        required: true
    },
    hashedPassword: {
        type: String,
        required: true
    },
    houses: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "House"
        }
    ],
    rented: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "House"
        }
    ],
});
exports.User = mongoose_1.default.model('User', userSchema);
userSchema.statics.build = function (attr) {
    return new exports.User(attr);
};
