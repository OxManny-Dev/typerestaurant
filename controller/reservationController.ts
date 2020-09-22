import { Request, Response } from 'express';
import { reservations, waitlist } from '../model';
export default {
  getReservations: (req: Request, res: Response) => {
    res.json(reservations);
  },
  addReservation: (req: Request, res: Response) => {
    const reservation = req.body;
    if (reservations.length < 5) {
      reservations.push(reservation);
      return res.send("You're now in the reservations");
    }
    waitlist.push(reservation);
    return res.send("Sorry you got waitlisted");
  },
}