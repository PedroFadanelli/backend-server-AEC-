class Component {
  type: string;
  data: any;
}

  
import { NextFunction, Request, Response } from "express";
import { Presentation } from "./presentation.model";

export const createPresentationHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const presentation: Presentation = new Presentation({
      title: req.body.title,
      description: req.body.description,
      components: [
        new Component({
          type: "carousel",
          data: [
            {
              title: "Imagem 1",
              src: "https://example.com/image1.jpg",
            },
            {
              title: "Imagem 2",
              src: "https://example.com/image2.jpg",
            },
          ],
        }),
        new Component({
          type: "video",
          data: {
            id: "1234567890",
            title: "Vídeo de apresentação",
            url: "https://example.com/video.mp4",
          },
        }),
        new Component({
          type: "contentPresenter",
          data: {
            title: "Apresentador de conteúdo",
            text: "Este é um apresentador de conteúdo",
          },
        }),
      ],
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
    presentation.components = [
      new Component({
        type: "carousel",
        data: [
          {
            title: "Imagem 1",
            src: "https://example.com/image1.jpg",
          },
          {
            title: "Imagem 2",
            src: "https://example.com/image2.jpg",
          },
        ],
      }),
      new Component({
        type: "video",
        data: {
          id: "1234567890",
          title: "Vídeo de apresentação",
          url: "https://example.com/video.mp4",
        },
      }),
      new Component({
        type: "contentPresenter",
        data: {
          title: "Apresentador de conteúdo",
          text: "Este é um apresentador de conteúdo",
        },
      }),
    ];

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
