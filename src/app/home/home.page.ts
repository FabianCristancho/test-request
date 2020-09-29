import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { NavController } from '@ionic/angular';
// import { map } from 'rxjs/operators/map';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  name: string;

  constructor(private http: HTTP) {}

  checkName(){
    console.log('Entra aqui');
    let data = {
      name: this.name
    }

    let headers = {
      'Content-Type': 'application/json'
    };


    this.http.post('http://192.168.100.162:3000/checkname', data, headers)
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    })

    // this.http.post('http://192.168.100.162:3000/checkname', data, data).pipe(
    // ).subscribe(response => {
    //   console.log('POST response: ' +response);
    // });
  }

}
