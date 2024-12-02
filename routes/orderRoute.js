import express from "express";
import { allOrders, updateStatus, placeOrderStripe, userOrders, verifyStripe } from "../controllers/orderController.js"
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";

const orderRouter = express.Router();

// Admin Features
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

//Payment Features
orderRouter.post("/stripe", authUser, placeOrderStripe);

//User Feature
orderRouter.post("/userorders", authUser, userOrders);

//Verify Payment
orderRouter.post("/verifyStripe", authUser, verifyStripe);

export default orderRouter;