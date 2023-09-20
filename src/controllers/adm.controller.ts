import { NextFunction, Request, Response } from "express";
import { Presentation } from "../models/adm.model";

export const createPresentationHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const presentation: Presentation = new Presentation({
      title: req.body.title,
      description: req.body.description,
      components: req.body.components,
    });

    await presentation.save();

    res.status(201).json({
      status: "success",
      data: {
        presentation,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const editPresentationHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const presentation: Presentation = await Presentation.findById(req.params.id);
    if (!presentation) {
      return res.status(404).json({
        status: "fail",
        message: "Presentation not found",
      });
    }

    presentation.title = req.body.title;
    presentation.description = req.body.description;
    presentation.components = req.body.components;

    await presentation.save();

    res.status(200).json({
      status: "success",
      data: {
        presentation,
      },
    });
  } catch (err: any) {
    next(err);
  }
};
