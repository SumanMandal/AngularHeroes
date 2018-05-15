import { Component, OnInit } from '@angular/core';
import { lineChartMulti} from './ngxChart';
import * as chartsData from './ngx-charts.config';

@Component({
  selector: 'app-ngxcharts',
  templateUrl: './ngxcharts.component.html',
  styleUrls: ['./ngxcharts.component.css']
})
export class NGXChartsComponent implements OnInit {

  lineChartMulti = lineChartMulti;
  //Line Charts
  
  lineChartView: any[] = chartsData.lineChartView;

  // options
  lineChartShowXAxis = chartsData.lineChartShowXAxis;
  lineChartShowYAxis = chartsData.lineChartShowYAxis;
  lineChartGradient = chartsData.lineChartGradient;
  lineChartShowLegend = chartsData.lineChartShowLegend;
  lineChartShowXAxisLabel = chartsData.lineChartShowXAxisLabel;
  lineChartXAxisLabel = chartsData.lineChartXAxisLabel;
  lineChartShowYAxisLabel = chartsData.lineChartShowYAxisLabel;
  lineChartYAxisLabel = chartsData.lineChartYAxisLabel;

  lineChartColorScheme = chartsData.lineChartColorScheme;

  // line, area
  lineChartAutoScale = chartsData.lineChartAutoScale;
  lineChartLineInterpolation = chartsData.lineChartLineInterpolation;
  autoScale = true;
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Month';
  showYAxisLabel = true;
  yAxisLabel = 'Count';
  xlabel = 'x view';
  lineData = {
	"xaxisAttr": "age",
	"yaxisAttr": "Count",
	"chartType": "Line",
	"preferenceId": 4043,
	"preferenceName": "Age vs Delinquency",
	"data": [{
		"name": "firstrollrate",
		"series": [{
			"name": "41-60",
			"value": 4.0
		}, {
			"name": "21-40",
			"value": 7.0
		}]
	}, {
		"name": "secondrollrate",
		"series": [{
			"name": "41-60",
			"value": 3.0
		}, {
			"name": "21-40",
			"value": 0.0
		}]
	}, {
		"name": "thirdrollrate",
		"series": [{
			"name": "41-60",
			"value": 2.0
		}, {
			"name": "21-40",
			"value": 1.0
		}]
	}]
};
data =[{
    "name": "firstrollrate",
    "series": [{
        "name": "41-60",
        "value": 4.0
    }, {
        "name": "21-40",
        "value": 7.0
    }]
}, {
    "name": "secondrollrate",
    "series": [{
        "name": "41-60",
        "value": 3.0
    }, {
        "name": "21-40",
        "value": 0.0
    }]
}, {
    "name": "thirdrollrate",
    "series": [{
        "name": "41-60",
        "value": 2.0
    }, {
        "name": "21-40",
        "value": 1.0
    }]
}];
  constructor() {
      Object.assign(this, { lineChartMulti })
  }
  ngOnInit() {
    
  }
  onSelect(event) {
      console.log(event);
  }

}
