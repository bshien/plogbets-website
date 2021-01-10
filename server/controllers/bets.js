import Bet from '../models/Bet.js';

export const getBets = async (req, res) => {
    try {
        const Bets = await Bet.find();

        res.status(200).json(Bets);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const createBet = async (req, res) => {
    const bet = req.body;
    
    const newBet = new Bet(bet);

    try {
        await newBet.save();
        
        res.status(201).json(newBet);
        
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}