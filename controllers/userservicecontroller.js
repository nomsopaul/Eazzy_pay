const UserService = require('../models/userservicemodel');

exports.getAllUserService = async (req, res) => {
    try{
        const userservices = await UserService.find();

        console.log(req.requestTime);

        res.status(200).json({
            status: 'success',
            requestedAt: req.requestTime,
            results: userservices.length,
            data: {
                userservices
            }
        });
    }catch (err) {
        res.status(404).json({
            status: 'error',
            message: err
        });
    }
}

exports.getUserService = async (req, res) => {
    try{
        console.log(req.params);
    const id = req.params.id * 1000;

        const userservice = await UserService.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {
                userservice
            }
        });
    
    }catch (err) {
        res.status(404).json({
            status: 'error',
            message: err
        });
    }
}

exports.createUserService = async (req, res) => {
    console.log('here')
    try{

        const newuserservice = await UserService.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                userservice: newuserservice
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'error',
            message: err
        })
    }
};


exports.updateUserService = async (req, res) => {
    try{
        const userservice = await UserService.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        res.status(200).json({
            status: 'success',
            data: {
                userservice
            }
        });

    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};

exports.deleteUserService = async (req, res) => {
    try{
        await UserService.findByIdAndDelete(req.params.id);

        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
};