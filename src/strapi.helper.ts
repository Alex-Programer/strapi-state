import axios, { AxiosInstance } from "axios"

export class Strapi {
  private options: Options
  private instance: AxiosInstance
  constructor(options: Options) {
    this.options = options
    this.instance = axios.create({ baseURL: options.baseURL })
  }
  public create() {}
  public delete() {}
  public find() {}
  public findOne() {}
  public update() {}
}
