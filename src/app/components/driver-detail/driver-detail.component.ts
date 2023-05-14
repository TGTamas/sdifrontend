import { Component, OnInit } from '@angular/core';
import { DriverDetails } from '../../models';
import { DriverService } from 'src/app/services/driver-service/driver.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-driver-detail',
  templateUrl: './driver-detail.component.html',
  styleUrls: ['./driver-detail.component.css']
})
export class DriverDetailComponent implements OnInit{
  public driver? : DriverDetails
  
  public constructor(private readonly driverService : DriverService, private readonly route : ActivatedRoute) {}

    ngOnInit(): void {
        const id = Number.parseInt(this.route.snapshot.paramMap.get('id')!);
        this.driverService.getById(id).subscribe(
          (            driver: DriverDetails | undefined) => this.driver = driver
        )
    }
}
