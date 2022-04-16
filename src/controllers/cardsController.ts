import { Request, Response } from "express";
import * as cardsService from "../services/cardsServices.js";

export async function createCard(req: Request, res: Response) {
  await cardsService.createCard(req.body);
  res.sendStatus(201);
}

export async function activateCard(req: Request, res: Response) {
  const cardId = Number(req.params.id);

  if (isNaN(cardId) || cardId <= 0) return res.sendStatus(422);
  
  await cardsService.activateCard({...req.body, cardId});

  res.sendStatus(200);
}

export async function getCardBalance(req: Request, res: Response) {
  const { id } = req.params;
  const idNum = Number(id);

  if(isNaN(idNum)) return res.sendStatus(422);

  const result = await cardsService.getCardBalance(idNum);

  res.send(result);
}