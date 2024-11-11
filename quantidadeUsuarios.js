const grafico = document.createElement('div');
grafico.className = 'grafico';
document.getElementById('graficos-container').appendChild(grafico);
Plotly.newPlot(grafico, data, layout);
function criarGrafico(data, layout) {
    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    document.getElementById('graficos-container').appendChild(grafico);
    Plotly.newPlot(grafico, data, layout)
}

export { getCSS, tickConfig, criarGrafico }
