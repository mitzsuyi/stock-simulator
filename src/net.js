import {HttpClient} from 'aurelia-http-client';
import {inject, bindable} from 'aurelia-framework'

let configure = function(client) {
  let self = this 
  client.configure(config => {
  config
    .withInterceptor({
      request(request) {
        self.isRequesting = true 
        return request;
      },
      response(response) {
        self.isRequesting = false
        return response;
      },
       requestError(error) {
        self.isRequesting = false
        throw error;
      },
       responseError(error) {
        self.isRequesting = false
        throw error;
      }
    });
  });
  return client
}

@inject(HttpClient)
export class Net {
  @bindable isRequesting = false
  constructor(httpClient) {
    this.httpClient = configure.call(this, httpClient)
  }
  client() {
    return this.httpClient
  }
}