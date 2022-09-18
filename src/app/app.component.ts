import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'code-challenge';

  private readonly products = [
    {
      id: '1',
      name: 'Pilsner',
      minimumTemperature: 4,
      maximumTemperature: 6,
    },
    {
      id: '2',
      name: 'IPA',
      minimumTemperature: 5,
      maximumTemperature: 6,
    },
    {
      id: '3',
      name: 'Lager',
      minimumTemperature: 4,
      maximumTemperature: 7,
    },
    {
      id: '4',
      name: 'Stout',
      minimumTemperature: 6,
      maximumTemperature: 8,
    },
    {
      id: '5',
      name: 'Wheat beer',
      minimumTemperature: 3,
      maximumTemperature: 5,
    },
    {
      id: '6',
      name: 'Pale Ale',
      minimumTemperature: 4,
      maximumTemperature: 6,
    },
  ];

   data: any = {};

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    const loadData = () => {
      this.products.forEach((product) => {
        this.httpClient.get(`http://localhost:8081/temperature/${product.id}`)
          .pipe(
            tap(response => {
              
              this.data[product.id] = {
                ...product,
                ...response
              };
              console.log(this.data);
            })
          ).subscribe();
      });
    };


    
    var tempList = [];
    const loadMultipleData = () => {
      this.httpClient.post(`http://localhost:8081/temperature/multiple`,{ids:[1,2,3,4,5,6]})
        .pipe(
          tap(response => {
              tempList = <any>response;
              tempList.forEach(temp=>{
                var tProduct = this.products.filter(y=>y.id === temp['id'] )[0];
                tProduct['temperature'] = temp['temperature'];
                this.data = this.products;
              })
          })
        ).subscribe();
    };
    loadMultipleData();
    // loadData();

    setInterval(() => {
      loadMultipleData();
    }, 5000);
  }
}
