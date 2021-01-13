import mongoose from 'mongoose';

const betSchema = mongoose.Schema({
    privacy: boolean, // False if public
    creator: String,
    question: String,
    participants: [String],
    wagers: [Number], // positive wagers for yes, negative wagers for no
    createdAt: {
        type: Date, 
        default: new Date()
    },
    revealStartDate: {
        type: Date, 
        default: new Date() // TODO
    },
    revealEndDate:
        type: Date, 
        default: new Date() // TODO
    },
    answer: Number, // +1 if yes, -1 if no, 0 if not yet decided
})

const Bet = mongoose.model('Bet', betSchema);

export default Bet;
