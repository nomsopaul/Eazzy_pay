const Card = require('../models/cardmodel');

exports.getAllCard = async (req, res) => {
    try{

        const cards = await Card.find();
    
    console.log(req.requestTime);

    res.status(200).json({
        status: 'success',
        requestedAt: req.requestTime,
        results: cards.length,
        data: {
            cards
        }
    });
}       catch (err) {
        res.status(404).json({
            status: 'error',
            message: err
        });
    }
};

exports.getCard = async (req, res) => {
   try {
     const card = await Card.findById(req.params.id);

     //Card.findOne({ _id: req.params.id })
        res.status(200).json({
        status: 'success',
        data: {
            card
        }
    });

   } catch (err) {
    res.status(404).json({
        status: 'error',
        message: err
    });
   }
    // const card = cards.find(el => el.id === id);

};

exports.createCard = async (req,res) => {
    try {
    // const newCard = new Card({})
    // newCard.save()

   const newCard = await Card.create(req.body);

    res.status(201).json({
        status: 'success',
         data: {
             card: newCard
             }
        });
    } catch (err) {
        res.status(400).json({
            status: 'error',
            message: 'Invalid data sent!'
        })
    }
};

exports.updateCard = async (req, res) => {
    // console.log(req.params)

    try{
        const card = await Card.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        console.log(card)
        res.status(200).json({
        status: 'success',
        data: {
            card
        }
    });
}   catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }   
};

exports.deleteCard = async (req, res) => {
    try{
        await Card.findByIdAndDelete(req.params.id);
 
        res.status(204).json({
        status: 'success',
        data: null
    });
    } catch(err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })

    }
    
};