import { Component, OnInit, VERSION } from '@angular/core';
import { NgChartjsService } from 'ng-chartjs';
import * as Chart from 'chart.js';
import { ListaSessaoService } from '../lista-sessao/lista-sessao.service';
import { Ingressos } from '../lista-sessao/ingressoQuantidade';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';

 
@Component({
  selector: 'app-grafico-filme',
  templateUrl: './grafico-filme.component.html',
  styleUrls: ['./grafico-filme.component.css']
})
export class GraficoFilmeComponent implements OnInit {
  
  name = 'ng-chartjs ' + VERSION.major;;
  ingressosQuantidade$: Observable<Ingressos[]> | undefined  
  
  ingressoQuant: Array<any> | undefined ;
  lineChartData: Array<any> = [
    {
      label: 'Ingresso adquiridos',
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
      data: [],
    },
  ];
  lineChartLabels: Array<any> = [];
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
  lineChartType: Chart.ChartType = 'bar';
  inlinePlugin: any;
  textPlugin: any;

  constructor(private ngChartjsService: NgChartjsService,
     private listaSessaoService: ListaSessaoService ) {
    
  }
  
 
  ngOnInit() { 
    this.performAutoClick();
  

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
        const text = '';
        const textX = Math.round((width - ctx.measureText(text).width) / 2);
        const textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      }
    }];

    this.inlinePlugin = this.textPlugin
    
    this.ingressosQuantidade$ = this.listaSessaoService.retornaIngressoQuantidade();
    const ingressos = this.ingressosQuantidade$.subscribe((ingressos) => { 
      ingressos.forEach(ingresso => {   
        this.lineChartData[0].data.push(ingresso.total);
        this.lineChartLabels.push(ingresso.titulo.toString());
      });
    }); 
   
  }  

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

  updateGetChartInstance() {
    const chart: any = this.ngChartjsService.getChart('testChart'); 
  }
  
  performAutoClick() {
    setTimeout(() => {
      this.changeChartType();
    }, 100);
  }
  

  
}