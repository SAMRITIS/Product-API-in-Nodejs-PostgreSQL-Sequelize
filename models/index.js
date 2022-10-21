const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    dialect: dbConfig.dialect,
    operatorsAliases: "0",
    logging: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.item = require("./item.model")(
    sequelize,
    Sequelize
);

db.packing = require("./packing.model")(
    sequelize,
    Sequelize
);

db.product = require("./product.model")(
    sequelize,
    Sequelize
);

db.product_mash_price = require("./productMashPrice.model")(
    sequelize,
    Sequelize
);

db.reigon = require("./reigon.model")(
    sequelize,
    Sequelize
);

db.size = require("./size.model")(
    sequelize,
    Sequelize
);

db.sku = require("./sku.model")(
    sequelize,
    Sequelize
);

db.item.hasMany(db.product, {
    foreignKey: "itemId",
});
db.product.belongsTo(db.item, {
    foreignKey: "itemId",
});

db.packing.hasMany(db.product, {
    foreignKey: "packingId",
});
db.product.belongsTo(db.packing, {
    foreignKey: "packingId",
});

db.reigon.hasMany(db.product, {
    foreignKey: "reigonId",
});
db.product.belongsTo(db.reigon, {
    foreignKey: "reigonId",
});

db.size.hasMany(db.product, {
    foreignKey: "sizeId",
});
db.product.belongsTo(db.size, {
    foreignKey: "sizeId",
});

db.sku.hasMany(db.product, {
    foreignKey: "skuId",
});
db.product.belongsTo(db.sku, {
    foreignKey: "skuId",
});


db.product.hasMany(db.product_mash_price, {
    foreignKey: "productId",
});
db.product_mash_price.belongsTo(db.product, {
    foreignKey: "productId",
});

module.exports = db;
