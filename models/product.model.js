module.exports = (sequelize, Sequelize) => {
    try {
        const Product = sequelize.define("product", {
            id: {
                type: Sequelize.UUID,
                primaryKey: true,
                defaultValue: Sequelize.UUIDV4,
            },
            reigonId: {
                type: Sequelize.UUID,
                allowNull: false,
            },
            itemId: {
                type: Sequelize.UUID,
                allowNull: false,
            },
            skuId: {
                type: Sequelize.UUID,
                allowNull: false,
            },
            sizeId: {
                type: Sequelize.UUID,
                allowNull: false,
            },
            packingId: {
                type: Sequelize.UUID,
                allowNull: false,
            },
            pelletPrice: {
                type: Sequelize.BIGINT,
                allowNull: false,
            },
        });

        return Product;
    } catch (error) {
        console.log(error);
    }
};
