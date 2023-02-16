import { Router } from "express";
const router = Router();
import { renderIndexView } from "../controllers/index.controller.js";
import graphQL from "./graphql.routes.js";
import usersRoute from "./user.routes.js";
import productsRoute from "./products.routes.js";
import cartRoute from "./cart.routes.js";
import { MW } from "../libs/middlewares.js";

//? INDEX
router.get("/", MW.isAuth, renderIndexView);
router.use("/", usersRoute); //! GRAPHQL NUEVA RUTA
router.use("/", graphQL);
router.use("/api/products", productsRoute);
router.use("/api/cart", MW.isAuth, cartRoute);

export default router;
