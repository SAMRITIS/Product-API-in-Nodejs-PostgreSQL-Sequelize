module.exports = (sequelize, Sequelize) => {
    try {
        const Item = sequelize.define("item", {
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

        return Item;
    } catch (error) {
        console.log(error);
    }
};
