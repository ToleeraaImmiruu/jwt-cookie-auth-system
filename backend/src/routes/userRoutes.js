import express from "express"
import {Register , Login, Logout,GetMe   } from "../controllers/userController.js"
import { protect } from "../middlewares/authMiddleware.js";


const router =express.Router()
router.post("/register", Register)
router.post("/login", Login)
router.post("/logout", Logout)



router.get("/me", protect, GetMe);

export default router;
