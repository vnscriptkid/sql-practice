import { Sequelize } from "sequelize";

const sequelize: any = new Sequelize("sql-practice", "postgres", "123456", {
  dialect: "postgres",
  // operatorsAliases: Sequelize.Op,
  define: {
    underscored: true,
  },
});

const models: any = {
  // User: sequelize.import("./user"),
  // Channel: sequelize.import("./channel"),
  // Message: sequelize.import("./message"),
  // Team: sequelize.import("./team"),
  // Member: sequelize.import("./member.js"),
};

Object.keys(models).forEach((modelName) => {
  if ("associate" in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
