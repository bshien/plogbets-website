import Bet from '../models/Bet.js';

export const getBets = async (req, res) => { // user loads website
    try {
        const Bets = await Bet.find();

        res.status(200).json(Bets);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const getBet = async (req, res) => {
    const { id } = req.params;

    try {
        const bet = await Bet.findById(id);

        res.status(200).json(bet);
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
export const participateBet = async (req, res) => { // TODO
    const { id } = req.params;
    const { user, wager } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedBet = { user, wager, _id: id}; // TODO user and wager need to be added into the
                                                // participants and wagers arrays of the MongoDB document.

    await Bet.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedBet);
} 
export const deleteBet = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No bet with id: ${id}`);

    await Bet.findByIdAndRemove(id);

    res.json({ message: "Bet deleted successfully." });


}
