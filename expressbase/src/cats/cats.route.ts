import { Cat } from "./cats.app.model";
import { Router } from "express";
import {
  createCat,
  deleteCat,
  patchcat,
  readAllcat,
  readOnecat,
  updateCat,
} from "./cats.service";

const router = Router();
//Read
router.get("/cats", readAllcat);

//Read 특정데이터조회
router.get("/cats/:id", readOnecat);
//Create
router.post("/cats", createCat);
//Update put
router.put("/cats/:id", updateCat);

//update patch
router.patch("/cats/:id", patchcat);
//Delete
router.delete("/cats/:id", deleteCat);

export default router;
