module.exports = (sequelize, Sequelize) => {
    try {
        const Reigon = sequelize.define("reigon", {
            id: {
                type: Sequelize.UUID,
                primaryKey: true,
                defaultValue: Sequelize.UUIDV4,
            },
            name: {
                type: Sequelize.STRING,
                unique: true,
                allowNull: false,
            },
        });

        return Reigon;
    } catch (error) {
        console.log(error);
    }
};
