const db = require("../models/index");
const { v4: uuidv4 } = require("uuid");
const Sequelize = require("sequelize");
const dotenv = require("dotenv");
const sequelize = db.sequelize;
const Product = db.product;
const Item = db.item;
const Packing = db.packing;
const Product_mash_price = db.product_mash_price;
const Reigon = db.reigon
const Size = db.size
const Sku = db.sku
const createError = require("http-errors");
dotenv.config();


exports.getEntity = async (req, res, next) => {
    try {
        const { entity } = req.params;
        let result = [];
        if (entity === "item") {
            result = await Item.findAndCountAll({})
        }
        else if (entity === "packing") {
            result = await Packing.findAndCountAll({})
        }
        else if (entity === "reigon") {
            result = await Reigon.findAndCountAll({})
        }
        else if (entity === "size") {
            result = await Size.findAndCountAll({})
        }
        else if (entity === "sku") {
            result = await Sku.findAndCountAll({})
        }
        res.status(200).send({ stats: true, data: result })
    } catch (error) {
        next(createError(500, error.message))
    }
}

exports.getProduct = async (req, res, next) => {
    try {
        const { limit, pageNo, item, packing, reigon, size, sku } = req.query
        let productData = {}
        let final = {}
        final.include = [{
            model: Product_mash_price
        }]


        if (item) {
            final.include.push({
                model: Item,
                where: {
                    name: item
                }
            })
        }
        else {
            final.include.push({
                model: Item,
            })
        }

        if (packing) {
            final.include.push({
                model: Packing,
                where: {
                    packing: packing
                }
            })
        }
        else {
            final.include.push({
                model: Packing,
            })
        }

        if (reigon) {
            final.include.push({
                model: Reigon,
                where: {
                    name: reigon
                }
            })
        }
        else {
            final.include.push({
                model: Reigon,
            })
        }

        if (size) {
            final.include.push({
                model: Size,
                where: {
                    size: parseInt(size)
                }
            })
        }
        else {
            final.include.push({
                model: Size,
            })
        }

        if (sku) {
            final.include.push({
                model: Sku,
                where: {
                    weight: parseInt(sku)
                }
            })
        }
        else {
            final.include.push({
                model: Sku,
            })
        }

        if (limit && pageNo) {
            final.limit = limit
            final.offset = (pageNo - 1) * limit
        }
        productData = await Product.findAndCountAll(final)
        res.status(200).send({ status: true, data: productData })

    } catch (error) {
        console.log(error)
        next(createError(500, error.message))
    }
}



