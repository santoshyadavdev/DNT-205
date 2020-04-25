import { HttpClient } from '@angular/common/http'
import { AppConfig } from '../appconfig'
import { LoginService } from '../login/service/login.service'
import { TodosService } from './services/todos.service'
import { APP_VALUE, APP_CONFIG } from '../appconfig.provider'


export let todoFactory = (http: HttpClient, loginservice: LoginService,
  appConfig: AppConfig) => {
  return new TodosService(http, APP_VALUE, loginservice.isLoggedIn);
}


export let todoProvider = {
  provide: TodosService,
  useFactory: todoFactory,
  deps: [HttpClient, LoginService, APP_CONFIG]
}


