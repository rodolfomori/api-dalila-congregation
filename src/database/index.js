import Sequelize from 'sequelize';

import Group from '../app/models/Group';
import Meeting from '../app/models/Meeting';
import Publisher from '../app/models/Publisher';
import Setting from '../app/models/Setting';
import User from '../app/models/User';
import Assistance from '../app/models/Assistance';
import Modality from '../app/models/Modality'

import databaseConfig from '../config/database';

const models = [Publisher, User, Group, Meeting, Setting, Assistance,Modality];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model?.associate && model.associate(this.connection.models));
  }
}
export default new Database();
