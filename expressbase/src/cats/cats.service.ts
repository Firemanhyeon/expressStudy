import { Cat } from "./cats.app.model";
import { Request, Response } from "express";
//Read
export const readAllcat = (req: Request, res: Response) => {
  try {
    const cats = Cat;
    // throw new Error("db connect error");
    res.status(200).send({
      success: true,
      data: cats,
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

//Read 특정데이터조회
export const readOnecat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const cat = Cat.find((cat) => {
      return cat.id === params.id;
    });

    // throw new Error("db connect error");
    res.status(200).send({
      success: true,
      data: cat,
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};
//Create
export const createCat = (req: Request, res: Response) => {
  try {
    const data = req.body;
    console.log(data);
    Cat.push(data);
    res.status(200).send({
      success: true,
      data,
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};
//Update put
export const updateCat = (req: Request, res: Response) => {
  try {
    const data = req.body;
    const param = req.params;
    let result;
    Cat.forEach((cat) => {
      if (cat.id === param.id) {
        cat = data;
        result = cat;
      }
    });

    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (error: any) {}
};

//update patch
export const patchcat = (req: Request, res: Response) => {
  try {
    const data = req.body;
    const param = req.params;
    let result;
    Cat.forEach((cat) => {
      if (cat.id === param.id) {
        cat = { ...cat, ...data }; //구조분해할당(바뀐값만 바꿔줌)
        result = cat;
      }
    });

    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (error: any) {}
};
//Delete
export const deleteCat = (req: Request, res: Response) => {
  try {
    const param = req.params;
    const newCat = Cat.filter((cat) => cat.id !== param.id);

    res.status(200).send({
      success: true,
      data: newCat,
    });
  } catch (error: any) {}
};
