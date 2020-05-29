import { Component, OnInit, Input } from '@angular/core';

import * as Highcharts from 'highcharts';

import HC_exporting from 'highcharts/modules/exporting';

@Component({
    selector: 'app-widget-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

    @Input() label: string;
    @Input() total: string;
    @Input() percentage: string;
    @Input() data = [];

    chartOptions: {};

    Highcharts = Highcharts;

    constructor() { }

    ngOnInit(): void {
        this.chartOptions = {

            chart: {
                type: 'area',
                backgroundColor: null,
                borderwidth: 0,
                margin: [2, 2, 2, 2],
                height: 80
            },
            title: {
                text: null
            },
            subtitle: {
                text: null
            },
            tooltip: {
                split: false

            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            xAxis: {
                labels: {
                    enabled: false
                },
                title: {
                    text: null
                },
                startOnTick: null,
                endOnTick: null,
                tickOptions: []

            },
            yAxis: {
                labels: {
                    enabled: false
                },
                title: {
                    text: null
                },
                startOnTick: null,
                endOnTick: null,
                tickOptions: []

            },
            series: [{
                data: this.data
            }]
        },
            HC_exporting(Highcharts);

        setTimeout(() => {
            window.dispatchEvent(
                new Event('resize')
            );
        }, 300);
    }
}