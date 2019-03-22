let graphs = document.querySelectorAll('.desmos');
graphs.forEach(g => {
  let texs = g.getAttribute('tex').split('$');
  let calculator = Desmos.GraphingCalculator(g);
  calculator.colors.RED = '#c6262e';
  calculator.colors.BLUE = '#3689e6';
  calculator.colors.GREEN = '#68b723';
  calculator.colors.PURPLE = '#a56de2';
  calculator.colors.ORANGE = '#f37329';
  calculator.colors.BLACK = '#333333';
  texs.forEach(tex => calculator.setExpression({ latex: tex, sliderBounds: { min: -10, max: 10, step: 1 } }));
});
