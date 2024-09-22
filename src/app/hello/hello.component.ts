import { Component } from '@angular/core';
import { InventoryService } from '@c8y/client';
import { DeviceService } from '@c8y/ngx-components';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.less'
})
export class HelloComponent {
  constructor(private inventory: InventoryService, private deviceService: DeviceService) {
  }
  
  async ngOnInit() {
    await this.getData();
  }
  
  async getData() {
    const filter = {
      //query: "$filter=(name eq 'Temperature')",  // Filtrer les objets de type "Device"
      pageSize: 50                             // Nombre d'appareils à retourner par page (facultatif)
    };
    const { data } = await this.inventory.list(filter)
    console.log(data); // the first 10 managed objects of the inventory.
    return data;
  }
}
