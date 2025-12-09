import express from "express"
import {Register , Login, Logout,GetMe, RefreshToken ,VerifyEmail ,ForgotPassword , ResetPassword  } from "../controllers/userController.js"
import { protect } from "../middlewares/authMiddleware.js";


const router =express.Router()
router.post("/register", Register)
router.post("/login", Login)
router.post("/logout", Logout)
router.get("/verify-email", VerifyEmail);
router.post("/refresh", RefreshToken) 
router.post("/forgot-password", ForgotPassword);
// router.post("/reset-password:token", ResetPassword);
router.post("/reset-password/:token", ResetPassword);



router.get("/me", protect, GetMe);


export default router;
