import express from "express";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
import {
  CreateOrder,
  getAllOrders,
  newPayment,
  sendStripePublishableKey,
} from "../controllers/order.controller";
const orderRouter = express.Router();

orderRouter.post("/create-order", isAuthenticated, CreateOrder);

orderRouter.get(
  "/get-orders",
  isAuthenticated,
  authorizeRoles("admin"),
  getAllOrders
);

orderRouter.get("/payment/stripepublishablekey", sendStripePublishableKey);

orderRouter.post("/payment", isAuthenticated, newPayment);

export default orderRouter;
