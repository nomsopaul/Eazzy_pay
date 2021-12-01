const Eazzysave = require('../models/eazzysavemodel');

exports.getAllEazzysave = async (req, res) => {
    try{
        const eazzysaves = await Eazzysave.find();

        console.log(req.requestTime);

        res.status(200).json({
            status: 'success',
            requestedAt: req.requestTime,
            results: eazzysaves.length,
            data: {
                eazzysaves
            }
        });
    }catch (err) {
        res.status(404).json({
            status: 'error',
            message: err
        });
    }
}

exports.getEazzysave = async (req, res) => {
    try{
        console.log(req.params);
    const id = req.params.id * 1;

        const eazzysave = await Eazzysave.findById(req.params.id);
        //const service = services.find(el => el.id === id);
        
        res.status(200).json({
        status: 'success',
        data: {
            eazzysave
        }
    });
    
    }catch (err) {
        res.status(404).json({
            status: 'error',
            message: err
        });
    }
};

exports.createEazzysave = async (req,res) => {
    try {
        console.log('here')
    // const newService = new Service({})
    // newService.save()

   const newEazzysave = await Eazzysave.create(req.body);

    res.status(201).json({
        status: 'success',
         data: {
             eazzysave: newEazzysave
             }
        });
    } catch (err) {
        res.status(400).json({
            status: 'error',
            message: err
        })
    }
};