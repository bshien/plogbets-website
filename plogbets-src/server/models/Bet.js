import mongoose from 'mongoose';

const betSchema = mongoose.Schema({
    text: String,
    plogcoinBet: Number,
    participants: [String],
    createdAt: {
        type: Date, 
        default: new Date()
    },
})

const Bet = mongoose.model('Bet', betSchema);

export default Bet;