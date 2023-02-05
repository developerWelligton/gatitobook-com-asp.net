import { Component, OnInit, VERSION } from '@angular/core';
import { NgChartjsService } from 'ng-chartjs';
import { Observable } from 'rxjs';
import { SessaoQuantidade } from '../lista-sessao/ingressoQuantidade copy';
import { ListaSessaoService } from '../lista-sessao/lista-sessao.service';

@Component({
  selector: 'app-grafico-sessao',
  templateUrl: './grafico-sessao.component.html',
  styleUrls: ['./grafico-sessao.component.css']
})
export class GraficoSessaoComponent implements OnInit {
  name = 'ng-chartjs ' + VERSION.major;;
  sessaoQuantidade$: Observable<SessaoQuantidade[]> | undefined  
  
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
  
  this.sessaoQuantidade$ = this.listaSessaoService.retornaSessaoQuantidade();
  const ingressos = this.sessaoQuantidade$.subscribe((ingressos) => { 
    ingressos.forEach(sessao => {   
      this.lineChartData[0].data.push(sessao.total);
      this.lineChartLabels.push(sessao.nomeCinema.toString());
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