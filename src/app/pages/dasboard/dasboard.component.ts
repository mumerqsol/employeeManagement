import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ChartService } from 'src/app/services/chart.service';
Chart.register(...registerables);

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent implements OnInit {

  chart: any = [];
  chartData: any;
  cardheader: string = "";
  constructor(private chartService: ChartService) { }
  ngOnInit(): void {

    this.chartService.getChartData().subscribe((data) => {

      this.chartData = data;
      this.cardheader = this.chartData.chartname;
      this.chart = new Chart('canvas', this.chartData);

    }, (error) => {
      console.log(error);
    })
    console.log("a");
  }

}
