"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const auth_1 = require("../middleware/auth");
const enums_1 = require("../utils/enums");
const router = (0, express_1.Router)();
const API_VERSION = "/v1";
router.post(`${API_VERSION}/register`, auth_controller_1.AuthController.register_user);
router.post(`${API_VERSION}/login`, auth_controller_1.AuthController.login_user);
router.get(`${API_VERSION}/me`, auth_1.protectRoute, auth_controller_1.AuthController.getMe);
router.get(`${API_VERSION}/getusers`, auth_1.protectRoute, (0, auth_1.roleCheck)(enums_1.UserRole.ADMIN), auth_controller_1.AuthController.getAllUsers);
router.post(`${API_VERSION}/forgotpassword`, auth_1.protectRoute, auth_controller_1.AuthController.forgotPassword);
router.put(`${API_VERSION}/resetpassword/:resettoken`, auth_controller_1.AuthController.resetPassword);
exports.default = router;
