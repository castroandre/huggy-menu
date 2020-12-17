export class MenuService {
  protected _resource;
  protected _route;

  constructor(resource: any, route: string = '') {
    this._resource = resource;
    this._route = process.env.API_URL;
    if (route) this._route = `${process.env.API_URL}/${route}`;
  }

  get() {
    return this._resource.get(this._route).then((response: any) => {
      if (response.body) return response.body;
      return response;
    });
  }

  save(data: any) {
    return this._resource.post(`${process.env.API_URL}`, data).then((response: any) => {
      if (response.body) return response.body;
      return response;
    });
  }
}
