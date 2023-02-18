import axios, { AxiosInstance } from "axios"
import path from "path"

export class Strapi {
  private options: Options
  private instance: AxiosInstance
  private generateDeclar() {}
  constructor(options: Options) {
    if (!options.type) options.type = "collection"
    this.options = options

    const pathname = path.join("api", options.contentType)
    const url = new URL(pathname, options.baseURL)

    this.instance = axios.create({
      baseURL: url.href,
      headers: {
        Authorization: `Bearer ${options.apiToken}`,
      },
    })
  }
  public create() {}
  public delete() {}
  public find() {}
  public findOne() {}
  public update() {}
}
