import express from "express";
import { createError } from "../utils/error.js";
import { countByType ,countByCity, createHotel, deleteHotel, getAllHotels, getHotel, updateHotel, getHotelRooms } from "../controllers/hotelControl.js";
import {verifyToken, verifyUser, verifyAdmin} from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel)
//UPDATE
router.put("/:id", verifyAdmin, updateHotel)
//DELETE
router.delete("/:id", verifyAdmin, deleteHotel)
//GET
router.get("/find/:id", getHotel);
//GET ALL
router.get("/", getAllHotels)
router.get("/countByCity", countByCity)
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);


export default router;