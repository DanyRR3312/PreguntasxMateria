function LaTeX(code) {
    return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
  }
  
  function opnLaTeX(code) {
    return `<img src="${LaTeX(code)}" style="height:40px">`;
  }
  
  let baseDePreguntas = [
    {
      No: "01",
      pregunta: "Uno de los más importantes representantes de la corriente denominada historicismo es:",
      ayuda: "Ayuda: Croce, desempeñó un papel fundamental en el desarrollo del historicismo, defendiendo la idea de que la comprensión de la historia debe basarse en la interpretación subjetiva y la experiencia individual.",
      respuesta: "Benedetto Croce.",
      distractores: ["Carlos Marx.", "Augusto Braudel.", "Fernand Braudel."],
    },
    {
      No: "02",
      pregunta: "Conjunto de eventos que sucedieron a partir de finales del siglo XVIII en Europa y que cambiaron las formas políticas, económicas y sociales de occidente.",
      ayuda: "Las Revoluciones Burguesas, que tuvieron lugar a partir de finales del siglo XVIII, incluyeron eventos como la Revolución Americana (1775-1783) y la Revolución Francesa (1789-1799), entre otros. Estos eventos transformaron significativamente las formas políticas, económicas y sociales en Europa y Occidente en general.",
      respuesta: "Las Revoluciones Burguesas.",
      distractores: ["La Ilustración y el Enciclopedismo.", "El Despotismo ilustrado y el liberalismo.", "Las Monarquías Absolutistas y Constitucionales."],
    },
    {
      No: "03",
      pregunta: "La Ilustración fue un movimiento intelectual iniciado en el siglo XVII que tiene como antecedentes directos los siguientes, excepto:",
      respuesta: "Los Grandes Descubrimientos Geográficos.",
      distractores: ["El Feudalismo.", "El Renacimiento.", "La Reforma Protestante."],
    },
    {
      No: "04",
      pregunta: "Doctrina económica, política y filosófica que abogo por e desarrollo de la libertad personal e individual y el progreso de la sociedad en el siglo XIX.",
      respuesta: "Liberalismo.",
      distractores: ["Socialismo.", "Nacionalismo.", "Conservadurismo."],
    },
    {
      No: "05",
      pregunta: "La búsqueda de nuevos mercados para sus productos, la materia prima y la mano de obra barata del siglo XIX trajo consigo en Europa:",
      ayuda: "Esta expansión colonial fue un fenómeno significativo en ese período, donde las potencias europeas buscaron establecer colonias en África, Asia y otras partes del mundo para asegurar recursos y mercados para sus crecientes economías industriales.",
      respuesta: "El Expansionismo y Colonialismo.",
      distractores: ["La Paz Armada.", "La Unificación de las Naciones.", "La Primera Guerra Mundial."],
    },
    {
      No: "06",
      pregunta: "Uno de los acontecimientos mas sobresalientes durante el periodo del Imperialismo del siglo XIX fue la Comuna de Paris a la Segunda Internacional, la cual fue un Intento de:",
      ayuda: "La Comuna de París (1871) fue un breve pero significativo episodio en el cual los trabajadores y socialistas tomaron el control de la ciudad de París, y aunque fue efímera, sentó las bases para futuros movimientos socialistas y comunistas.",
      respuesta: "Implementar el primer proyecto de Estado Socialista.",
      distractores: ["Unir a todos los germanos en una sola nación.", "Crear el primer bloque militar de países en Europa.", "Independizar los países eslavos del imperio Austria-Hungría."],
    },
    {
      No: "07",
      pregunta: "El interés de Austria de suprimir los movimientos de las minorías nacionales (checos, croatas, eslovenos, bosnios, etc.) en el siglo XX, ocasionó la:",
      ayuda: "Los problemas relacionados con las tensiones étnicas y nacionales en el imperio austrohúngaro fueron uno de los factores que contribuyeron al estallido de la Primera Guerra Mundial en 1914.",
      respuesta: "La primera Guerra Mundial.",
      distractores: ["La Paz Armada.", "La Triple Alianza.", "La Segunda Guerra Mundial."],
    },
    {
      No: "08",
      pregunta: "El New Deal fue un programa implementado por E.U.A. durante la “crisis de 1929” que se basó en las teorías de John M. Keynes, la cual consistió en:",
      ayuda: "El New Deal, implementado durante la presidencia de Franklin D. Roosevelt, buscó estimular la economía mediante la inversión gubernamental en programas y proyectos que generaran empleo y aumentaran el poder adquisitivo de los ciudadanos, con el objetivo de superar la Gran Depresión.",
      respuesta: "Aumentar el poder de compra de los consumidores, aún a costa del déficit en el presupuesto del Estado.",
      distractores: ["Disminuir el poder de compra de los consumidores para incrementar el presupuesto del Estado.", "Aumentar las exportaciones de productos a Europa por medio de préstamos a largo plazo, para incrementar el presupuesto del Estado.", "Eliminar los impuestos aduanales para exportar más productos a Europa, aún a costa del déficit en el presupuesto del Estado."],
    },
    {
      No: "09",
      pregunta: "El inicio de la derrota de Adolfo Hitler y la Alemania nazi en la segunda Guerra Mundial en 1941, se puede afirmar que fue por causa de:",
      respuesta: "El Fracaso de la invasión a la U.R.S.S.",
      distractores: ["El ingreso de E.U.A. a la contienda mundial.", "La derrota de los ejércitos alemanes en África.", "La contraofensiva occidental en las costas de Normandía."],
    },
    {
      No: "10",
      pregunta: "Ante la crisis económica por el desabastecimiento de productos básicos y el descontento de la población de la U.R.S.S. el presidente __________, en 1987, implementó un cambio político y económico denominado Perestroika.",
      ayuda: "La Perestroika fue una serie de reformas lideradas por Mijaíl Gorbachov con el objetivo de reestructurar y revitalizar la economía y la política soviéticas. Este proceso buscaba introducir elementos de mercado y apertura política en un intento de modernizar la Unión Soviética.",
      respuesta: "Mijaíl Gorvbachov.",
      distractores: ["Boris Yeltsin.", "Vladimir Putin.", "Leonid Brézhnev."],
    },
  ];
  