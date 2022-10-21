module.exports = (sequelize, Sequelize) => {
    try {
        const Sku = sequelize.define("sku", {
            id: {
                type: Sequelize.UUID,
                primaryKey: true,
                defaultValue: Sequelize.UUIDV4,
            },
            weight: {
                type: Sequelize.BIGINT,
                unique: true,
                allowNull: false,
            },
        });

        return Sku;
    } catch (error) {
        console.log(error);
    }
};
