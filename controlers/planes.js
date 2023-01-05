const Plane = require("../modles/plane");
const asyncHandler = require('express-async-handler')

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */

const getPlanes = async (req, res) => {
    try {
        const planes = await Plane.find();

        res.status(200).json(planes);
    } catch (error) {
        res
            .status(500)
            .json({
                message: "Не удалось получить список товаров"
            });
    }
};

const getPlane = async (req, res) => {
    try {
        const plane = await Plane.find({ _id: req.params.id })

        res.status(200).json(plane)
    } catch (error) {
        res
            .status(500)
            .json({
                message: "Товар не найден"
            });
    }
}

/*              */



const deletePlane = async (req, res) => {
    try {
        const delPlane = await Plane.remove({ _id: req.params.id })

        res.status(200).json(delPlane)
    } catch (error) {
        res
            .status(500)
            .json({
                message: "Товар не удален"
            });
    }
}


/**
 * 
 * @param {*} req 
 * @param {*} res 
 */


const createPlane = async (req, res) => {

    try {
        const { title, name, category, materials, size, price, description, image } = req.body;

        const plane = await Plane.create({
            image,
            title,
            name,
            category,
            materials,
            size,
            description,
            price
        });

        res.status(201).json(plane);
    } catch (error) {
        res
            .status(500)
            .json({
                message: "Не удалось создать"
            });
    }
}

module.exports = {
    getPlanes,
    createPlane,
    deletePlane,
    //updatePlane,
    getPlane
}
