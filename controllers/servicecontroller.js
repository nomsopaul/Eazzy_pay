const Service = require('../models/servicemodel');

exports.getAllService = async (req, res) => {
    try{
        const services = await Service.find();

        console.log(req.requestTime);

res.status(200).json({
        status: 'success',
        requestedAt: req.requestTime,
        results: services.length,
        data: {
            services
        }
    });
} catch (err) {
    res.status(404).json({
        status: 'error',
        message: err
    });
}
    };

exports.getService = async (req, res) => {
    try{
        console.log(req.params);
    const id = req.params.id * 1;

        const service = await Service.findById(req.params.id).select('-__v');
        //const service = services.find(el => el.id === id);
        
        res.status(200).json({
        status: 'success',
        data: {
            service
        }
    });
    
    }catch (err) {
        res.status(404).json({
            status: 'error',
            message: err
        });
    }
};

exports.createService = async (req,res) => {
    try {
    // const newService = new Service({})
    // newService.save()

   const newService = await Service.create(req.body);

    res.status(201).json({
        status: 'success',
         data: {
             service: newService
             }
        });
    } catch (err) {
        res.status(400).json({
            status: 'error',
            message: 'Invalid data sent!'
        })
    }
};

exports.updateService = async (req, res) => {
    try{
        const service = await Service.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        res.status(200).json({
        status: 'success',
        data: {
            service
        }
    });
}   catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }   
};


exports.deleteService = async (req, res) => {
    try{
        await Service.findByIdAndDelete(req.params.id);
 
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