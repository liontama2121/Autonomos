// AUTONOMOS — catálogo de productos compartido
window.PRODUCTS = [
  {
    id:'pastillas-freno', n:'Pastillas de freno cerámicas', c:'frenos', cat:'Frenos',
    d:'Juego delantero, baja generación de polvo.',
    dl:'Pastillas cerámicas de alto rendimiento para freno delantero, con baja generación de polvo y excelente respuesta en frenadas urbanas y de carretera. Material homologado con trazabilidad de lote.',
    p:128000, e:'🛑',
    specs:[
      ['Posición','Delantero'],
      ['Material','Cerámico'],
      ['Compatibilidad','Sedanes y SUV livianos'],
      ['Garantía','12 meses o 20.000 km']
    ]
  },
  {
    id:'discos-freno', n:'Discos de freno ventilados', c:'frenos', cat:'Frenos',
    d:'Par delantero, alta disipación de calor.',
    dl:'Par de discos de freno ventilados con geometría optimizada para la disipación rápida de calor y mayor vida útil de la pastilla. Tratamiento anticorrosión en zonas no de fricción.',
    p:245000, e:'⭕',
    specs:[
      ['Diámetro','280 mm'],
      ['Tipo','Ventilado'],
      ['Unidades','Par (2)'],
      ['Acabado','Anticorrosión']
    ]
  },
  {
    id:'filtro-aceite', n:'Filtro de aceite premium', c:'motor', cat:'Motor',
    d:'Compatible con la mayoría de motores 1.6L.',
    dl:'Filtro de aceite de alta retención para motores 1.6L, con válvula antirretorno y media filtrante sintética. Mantiene la presión de lubricación en frío.',
    p:32000, e:'🛢️',
    specs:[
      ['Aplicación','Motor 1.6L'],
      ['Tipo','Roscado'],
      ['Válvula antirretorno','Sí'],
      ['Origen','Importado, sello legal']
    ]
  },
  {
    id:'kit-distribucion', n:'Kit de correa de distribución', c:'motor', cat:'Motor',
    d:'Incluye tensor y rodillos. Marca certificada.',
    dl:'Kit completo de distribución con correa reforzada, tensor automático y rodillos guía. Reemplazo recomendado cada 80.000 km. Marca con certificación OEM.',
    p:389000, e:'⚙️',
    specs:[
      ['Componentes','Correa + tensor + rodillos'],
      ['Vida útil','80.000 km'],
      ['Compatibilidad','Motores 1.4-1.8L'],
      ['Certificación','OEM equivalente']
    ]
  },
  {
    id:'bujias-iridio', n:'Bujías de iridio (x4)', c:'motor', cat:'Motor',
    d:'Mayor durabilidad y mejor encendido.',
    dl:'Juego de 4 bujías con electrodo de iridio para chispa más estable, menor consumo de combustible y vida útil hasta 4 veces superior frente a bujías de níquel.',
    p:96000, e:'✨',
    specs:[
      ['Electrodo','Iridio'],
      ['Cantidad','4 unidades'],
      ['Vida útil','~100.000 km'],
      ['Beneficio','Menor consumo']
    ]
  },
  {
    id:'bateria-12v', n:'Batería 12V 60Ah', c:'electrico', cat:'Eléctrico',
    d:'Libre de mantenimiento, 18 meses de garantía.',
    dl:'Batería automotriz 12V 60Ah libre de mantenimiento, con tecnología de placas calcio-calcio para reducir la autodescarga. Listo para arranques en clima frío.',
    p:330000, e:'🔋',
    specs:[
      ['Voltaje','12V'],
      ['Capacidad','60 Ah'],
      ['Arranque en frío','CCA 540A'],
      ['Garantía','18 meses']
    ]
  },
  {
    id:'alternador', n:'Alternador remanufacturado', c:'electrico', cat:'Eléctrico',
    d:'Probado y con trazabilidad de serie.',
    dl:'Alternador remanufacturado bajo proceso industrial con prueba de carga 100%. Cuenta con número de serie trazable, sello AUTONOMOS y garantía contra defectos de fábrica.',
    p:520000, e:'⚡',
    specs:[
      ['Salida','90A'],
      ['Voltaje','12V'],
      ['Estado','Remanufacturado'],
      ['Garantía','6 meses']
    ]
  },
  {
    id:'faro-led', n:'Faro LED delantero', c:'electrico', cat:'Eléctrico',
    d:'Unidad derecha, homologado.',
    dl:'Faro delantero derecho con bombillos LED de alta luminosidad y bajo consumo. Carcasa resistente al impacto, lente óptico de policarbonato y homologación vehicular.',
    p:178000, e:'💡',
    specs:[
      ['Lado','Derecho'],
      ['Tecnología','LED'],
      ['Lúmenes','3.200 lm'],
      ['Homologación','Sí']
    ]
  },
  {
    id:'llanta-195', n:'Llanta 195/65 R15', c:'llantas', cat:'Llantas',
    d:'Uso urbano, excelente agarre en mojado.',
    dl:'Llanta 195/65 R15 para uso urbano y mixto, con compuesto que mejora la adherencia en piso mojado. Dibujo direccional silencioso, ideal para sedanes medianos.',
    p:289000, e:'🛞',
    specs:[
      ['Medida','195/65 R15'],
      ['Uso','Urbano / mixto'],
      ['Índice carga','91'],
      ['Velocidad','H (210 km/h)']
    ]
  },
  {
    id:'rin-16', n:'Rin de aleación 16"', c:'llantas', cat:'Llantas',
    d:'Diseño deportivo, peso reducido.',
    dl:'Rin de aleación de aluminio 16" con diseño deportivo de 10 radios. Peso reducido para mejor respuesta y eficiencia. Acabado pulido con barniz protector.',
    p:410000, e:'🛞',
    specs:[
      ['Diámetro','16"'],
      ['Material','Aleación aluminio'],
      ['Diseño','10 radios'],
      ['Acabado','Pulido + barniz']
    ]
  },
  {
    id:'tapete', n:'Tapete premium (juego)', c:'accesorios', cat:'Accesorios',
    d:'Termoformado a la medida, antideslizante.',
    dl:'Juego completo de tapetes termoformados a la medida del vehículo, con bordes elevados para retener líquidos. Base antideslizante y material lavable.',
    p:145000, e:'🧩',
    specs:[
      ['Material','TPE termoformado'],
      ['Piezas','4'],
      ['Característica','Antideslizante'],
      ['Mantenimiento','Lavable']
    ]
  },
  {
    id:'camara-reversa', n:'Cámara de reversa HD', c:'accesorios', cat:'Accesorios',
    d:'Visión nocturna y líneas guía.',
    dl:'Cámara de reversa HD con sensor de visión nocturna y líneas guía dinámicas superpuestas. Resistencia IP67 y compatibilidad con la mayoría de pantallas Android del mercado.',
    p:165000, e:'📷',
    specs:[
      ['Resolución','720p HD'],
      ['Visión nocturna','Sí'],
      ['Protección','IP67'],
      ['Líneas guía','Dinámicas']
    ]
  }
];

window.formatCOP = function(n){
  return '$ ' + n.toLocaleString('es-CO');
};

window.findProduct = function(id){
  return window.PRODUCTS.find(p => p.id === id);
};
