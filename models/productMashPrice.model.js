module.exports = (sequelize, Sequelize) => {
    try {
        const Product_mash_price = sequelize.define("product_mash_price", {
            id: {
                type: Sequelize.UUID,
                primaryKey: true,
                defaultValue: Sequelize.UUIDV4,
            },
            productId: {
                type: Sequelize.UUID,
                allowNull: false,
            },
            Price: {
                type: Sequelize.BIGINT,
                allowNull: false,
            },
        });

        return Product_mash_price;
    } catch (error) {
        console.log(error);
    }
};
