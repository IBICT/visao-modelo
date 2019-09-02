    /*
        Modal Chart Class
            Class utilizada para incluir um gráfico com os seus devidos labels.

        Construtor
            ModalChart(animationEnabled, chartType, startAngle, indexLabelFontSize, indexLabel, toolTipContent, dataPoints)

            Exemplo:

                var mychart = new ModalChart(
                false, "doughnut",　270, 
                17, "", 
                "", 
                [
                    { y: 2, label: "Superior Completo" },
                    { y: 98, label: "Outro" },
                ]);

        Atributos
            animationEnabled: boolean
            data:
                chartType: String
                startAngle: Integer
                indexLabelFontSize: Integer
                indexLabel:  String;
                toolTipContent: String;
                dataPoints: Array[{y: Integer, label: String}];

        Métodos:
            createPieChart(chartId, labelId)
                Esse método cria o gráfico escolhido no chartId, e os labels dos dados no labelId.
                Caso o nome do label seja Outro então não será criada uma label para ele.
                Exemplo:
                    createPieChart(modalDiv, labelDiv);
                    // Cria o chart na div modalDiv e põe os respectivos labels na labelDiv

        Dúvidas?
            Consultar Danilo ou Reinaldo
    
    */

    function ModalChart(animationEnabled, chartType, startAngle, indexLabelFontSize, indexLabel, toolTipContent, dataPoints){
        this.data = new Object();
        this.createPieChart = createPieChart;

        this.animationEnabled = animationEnabled;
        this.data.chartType = chartType;
        this.data.startAngle = startAngle;
        this.data.indexLabelFontSize = indexLabelFontSize;
        this.data.indexLabel =  indexLabel;
        this.data.toolTipContent = toolTipContent;
        this.data.dataPoints = dataPoints;
    }

    function createPieChart(chartId,labelId){
        var chart = new CanvasJS.Chart(chartId, {
        animationEnabled: this.animationEnabled, 
        backgroundColor: "#F2F2F2", 
        data: [{
        indexLabelFormatter: function(e){
                if(e.dataPoint.label!="Outro"){
                    $("#"+labelId).append("<span >"+e.dataPoint.label　+ "　"　+ e.percent.toFixed(2) + "%"+ "</span><br />");
                }                            
                return "" ;},
            
            type: this.data.chartType,
            startAngle: this.data.startAngle,
            indexLabelFontSize: this.data.indexLabelFontSize,
            indexLabel: this.data.indexLabel,
            toolTipContent: this.data.toolTipContent,
            dataPoints: this.data.dataPoints
        }]
        });
        chart.render();
    }
