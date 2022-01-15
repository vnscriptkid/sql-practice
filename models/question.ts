import { DataTypes, Sequelize } from "sequelize";

export default (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
  const Question = sequelize.define("question", {
    content: {
      type: dataTypes.STRING,
    },
    answer: {
      type: dataTypes.JSON,
    },
    section: {
      type: dataTypes.INTEGER,
    },
    subSection: {
      type: dataTypes.INTEGER,
    },
  });

  // Channel.associate = (models) => {
  //   // 1:M
  //   Channel.belongsTo(models.Team, {
  //     foreignKey: {
  //       name: "teamId",
  //       field: "team_id",
  //     },
  //   });
  //   // N:M
  //   Channel.belongsToMany(models.User, {
  //     through: "channel_member",
  //     foreignKey: {
  //       name: "channelId",
  //       field: "channel_id",
  //     },
  //   });
  // };

  return Question;
};
