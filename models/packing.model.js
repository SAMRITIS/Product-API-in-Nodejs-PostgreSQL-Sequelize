module.exports = (sequelize, Sequelize) => {
    try {
        const Packing = sequelize.define("packing", {
            id: {
                type: Sequelize.UUID,
                primaryKey: true,
                defaultValue: Sequelize.UUIDV4,
            },
            packing: {
                type: Sequelize.STRING,
                unique: true,
                allowNull: false,
            },
        });

        return Packing;
    } catch (error) {
        console.log(error);
    }
};
