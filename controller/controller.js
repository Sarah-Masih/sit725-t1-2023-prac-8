let model = require('../model/model');

const insertCat = (req, res) => {
    let newProject = req.body;
    model.insertCat(newProject, (error, result) => {
        if(error){
            res.json({statusCode: 400, message: error});
        } else {
            res.json({statusCode: 200, data: result, message: 'Project added successfully'});
           
        }
    });
};

const getAllCats = (req, res) => {
    model.getCats((error, result) => {
        if(error){
            res.json({statusCode:400, message:error});
        }
        else{
            res.json({statusCode: 200, data: result, message:'Success'});
        }
    });
};

const deleteCat = (req, res) => {
    let cat = req.body;
    model.remove(cat, (error, result) => {
        if(error){
            res.json({statusCode:400, message: error});
        }
        else{
            res.json({statusCode: 200, data: result, message:'Successfully removed'});
        }
    });
};

module.exports = {insertCat, getAllCats, deleteCat}