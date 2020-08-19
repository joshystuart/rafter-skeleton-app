import mongoose, { Document, DocumentQuery, FilterQuery, Model, Mongoose } from 'mongoose';
import { ISkeletonConfig } from '../config/config';

export default class MongooseDbDao {
  private connectionUrl: string;

  constructor(config: ISkeletonConfig) {
    this.connectionUrl = config.db.connectionUrl;
  }

  public async connect(): Promise<Mongoose> {
    return mongoose.connect(this.connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true });
  }

  public async create(model: Document): Promise<Document> {
    return model.save();
  }

  public async update(model: Document): Promise<Document> {
    return model.save();
  }

  /**
   * @param {object} query
   * @param {Model.schema} model
   * @param {object} data
   * @return {Promise.<Model.schema>}
   */
  public async upsert(query: object, model: Model<any>, data: object): Promise<Document> {
    // ensure the data doesn't contain an immutable id
    // @ts-ignore
    delete data._id;
    return model.findOneAndUpdate(query, data, { upsert: true });
  }

  /**
   * @param {Model.schema} model
   * @param {object} options
   * @return {Promise.<Model.schema>}
   */
  public async findAll(model: Model<any>, options: FilterQuery<any>): Promise<DocumentQuery<any, any>> {
    // TODO fix this type
    return model.find(options.criteria);
  }

  /**
   * @param {Model.schema} model
   * @param {object} options
   * @return {Promise.<Model.schema>}
   */
  public async findOne(model: Model<any>, options: FilterQuery<any>): Promise<DocumentQuery<any, any>> {
    return model.findOne(options);
  }
}
