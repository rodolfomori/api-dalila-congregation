import Sequelize from 'sequelize';

import User from '../app/models/User';
import Group from '../app/models/Group';

import databaseConfig from '../config/database';

const models = [User, Group];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}
export default new Database();
