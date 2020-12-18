export class MenuService {
  protected _resource;
  protected _route;

  constructor(resource: any, route: string = '') {
    this._resource = resource;
    this._route = 'https://script.google.com/macros/s/AKfycbz48y_tLVr-Yk_N2D-ey25wtIVNPwD2T_5DcNQ0hrB9sKSJ8gk/exec';
  }

  get() {
    return this._resource.get(this._route).then((response: any) => {
      if (response.body) return response.body;
      return response;
    });
  }

  save(data: any) {
    return fetch(this._route, {
      method: 'POST',
      body: data,
      mode: 'no-cors',
      headers: {
          'Content-Type': 'text/plain;charset=utf-8'
      }
    }).then((response: any) => {
      if (response.body) return response.body;
      return response;
    });
  }
}
