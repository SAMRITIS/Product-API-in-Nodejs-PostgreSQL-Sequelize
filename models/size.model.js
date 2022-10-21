module.exports = (sequelize, Sequelize) => {
    try {
        const Size = sequelize.define("size", {
            id: {
                type: Sequelize.UUID,
                primaryKey: true,
                defaultValue: Sequelize.UUIDV4,
            },
            size: {
                type: Sequelize.BIGINT,
                unique: true,
                allowNull: false,
            },
        });

        return Size;
    } catch (error) {
        console.log(error);
    }
};
