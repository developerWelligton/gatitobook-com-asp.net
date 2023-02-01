import { Component, OnInit, VERSION } from '@angular/core';
import { NgChartjsService } from 'ng-chartjs';
import * as Chart from 'chart.js';

 
@Component({
  selector: 'app-grafico-filme',
  templateUrl: './grafico-filme.component.html',
  styleUrls: ['./grafico-filme.component.css']
})
export class GraficoFilmeComponent implements OnInit {
  name = 'ng-chartjs ' + VERSION.major;;

  lineChartData: Array<any> = [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ];
  lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  lineChartOptions: any = {
    responsive: true,
    annotation: {
      annotations: [
        {
          drawTime: 'afterDraw',
          type: 'line',
          mode: 'horizontal',
          scaleID: 'y-axis-0',
          value: 70,
          borderColor: '#000000',
          borderWidth: 2,
          label: {
            backgroundColor: 'red',
            content: 'global plugin',
            enabled: true,
            position: 'center',
          }
        }
      ]
    }
  };
  lineChartLegend = true;
  lineChartType: Chart.ChartType = 'line';
  inlinePlugin: any;
  textPlugin: any;

  constructor(private ngChartjsService: NgChartjsService) {
    
  }

  ngOnInit() {
    this.textPlugin = [{
      id: 'textPlugin',
      beforeDraw(chart: any): any {
        const width = chart.chart.width;
        const height = chart.chart.height;
        const ctx = chart.chart.ctx;
        ctx.restore();
        const fontSize = (height / 160).toFixed(2);
        ctx.font = `${fontSize}em sans-serif`;
        ctx.textBaseline = 'middle';
        const text = 'inline plugin';
        const textX = Math.round((width - ctx.measureText(text).width) / 2);
        const textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      }
    }];

    this.inlinePlugin = this.textPlugin;
  }
  // events
  chartClicked(e: any): void {
    console.log('click', e);
  }

  chartHovered(e: any): void {
    console.log('hover', e);
  }

  changeChartType() {
    if (this.lineChartType === 'line') {
      this.lineChartType = 'bar';
    } else {
      this.lineChartType = 'line';
    }
  }

  changeChartLabel() {
    this.lineChartLabels = ['1', '2', '3', '4', '5', '6', '7'];
  }

  getChartInstance() {
    const chart: any = this.ngChartjsService.getChart('testChart');
    console.log(chart);
  }
}