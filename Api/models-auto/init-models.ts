import type { Sequelize } from "sequelize";
import { register as _register } from "./register";
import type { registerAttributes, registerCreationAttributes } from "./register";

export {
  _register as register,
};

export type {
  registerAttributes,
  registerCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const register = _register.initModel(sequelize);


  return {
    register: register,
  };
}
