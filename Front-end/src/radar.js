var dom = document.getElementById("radar1");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    radar: {
        indicator: [
            { name: '好好', max: 10 },
            { name: '学习', max: 10 },
            { name: '天天', max: 10 },
            { name: '向上', max: 10},
            { name: '啊啊', max: 10 },
            { name: '嗷嗷', max: 10 }
        ],
        center: ['50%', '50%'],
        radius: '60 %',
        startAngle: 90,
        splitNumber: 5,
        shape: 'polygon',
        name: {
            textStyle: {
                color:'#72ACD1'
            }
        },
        splitArea: {
            areaStyle: {
                color: ['#ADD8E6', '#F0F8FF', '#5F9EA0', '#AFEEEE']
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(255, 255, 255, 0.4)'
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(255, 255, 255, 0.4)'
            }
        }        
    },
    series:[{
    	type: 'radar',
    	data:[
    		{value: [10, 8, 9, 7, 10, 8]}
    	],
    	areaStyle:{
    		color: {
    			type: 'radial',
    			x: 0.5,
    			y: 0.5,
    			r: 0.5,
    			colorStops: [{
        			offset: 0, color: '#F0FFF0' // 0% 处的颜色
    			}, {
        			offset: 1, color: 'rgba(47, 79, 79)' // 100% 处的颜色
    			}],
	    		global: false // 缺省为 false
			}
		},
		symbol: 'none',
		lineStyle:{
			opacity: 0
		}
    	
    }]

};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}