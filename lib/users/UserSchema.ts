import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    first_name: String,
    last_name: String,
    email: String,
  },
  {
    collection: 'users',
  },
);

userSchema.index({ email: 1 }, { unique: true });

/**
 * @returns {String}
 */
userSchema.methods.getId = function () {
  return this.id;
};

/**
 * @returns {String}
 */
userSchema.methods.getFirstName = function () {
  return this.first_name;
};

/**
 * @param {String} firstName
 * @return {mongoose.Schema.methods}
 */
userSchema.methods.setFirstName = function (firstName: string) {
  this.first_name = firstName;
  return this;
};

/**
 * @returns {String}
 */
userSchema.methods.getLastName = function () {
  return this.last_name;
};

/**
 * @param {String} lastName
 * @return {mongoose.Schema.methods}
 */
userSchema.methods.setLastName = function (lastName: string) {
  this.last_name = lastName;
  return this;
};

/**
 * @returns {String}
 */
userSchema.methods.getEmail = function () {
  return this.email;
};

/**
 * @param {String} email
 * @return {mongoose.Schema.methods}
 */
userSchema.methods.setEmail = function (email: string) {
  this.email = email;
  return this;
};

/**
 * TODO move this to a dynamic factory / provider that takes a connection as a dependency.
 */
export class UserModel {
  constructor() {
    return mongoose.model('user', userSchema);
  }
}

export interface IUserModel {
  getId(): string;

  getFirstName(): string;

  setFirstName(firstName: string): this;

  getLastName(): string;

  setLastName(lastName: string): this;

  getEmail(): string;

  setEmail(email: string): this;
}

export type IUser = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
};

export default new UserModel();
