
let pressedSliderCategorias = false;
let startXSliderCategorias = 0;

$('.wrapperHangar1').on('mousedown', function (e) {
    pressedSliderCategorias = true;
    startXSliderCategorias = e.clientX;
    $(this).css('cursor', 'grabbing');
});

$('.wrapperHangar1').on('mouseleave', function (e) {
    pressedSliderCategorias = false;
});

$('.wrapperHangar1').on('mouseup', function (e) {
    pressedSliderCategorias = false;
    $(this).css('cursor', 'grab');
});

$('.wrapperHangar1').on('mousemove', function (e) {
    if (!pressedSliderCategorias) {
        return;
    }

    this.scrollLeft += startXSliderCategorias - e.clientX;
});

$('#hotHatches').click(function(){

    $('#cocheHangar1').attr('src','https://hangar1.com.mx/wp-content/uploads/2024/01/HotHachets.png');

    $('#infoSlider .tituloCoche').find('h1').text('Hot Hatches');

    $('#infoSlider .textoHangar').find('p').text('Los coches de la categoría Hot Hatch son vehículos compactos1 con un rendimiento superior. Combinan la practicidad de un hatchback con la potencia y la agilidad de un deportivo. Son conocidos por su manejo ágil, su aceleración rápida y su diseño deportivo, lo que los hace ideales para la conducción urbana y en carretera.');
    
});

$('#muscleCars').click(function(){

    $('#cocheHangar1').attr('src','https://hangar1.com.mx/wp-content/uploads/2024/01/muscle.png');

    $('#infoSlider .tituloCoche').find('h1').text('Muscle Cars');

    $('#infoSlider .textoHangar').find('p').text('Los Muscle Cars son vehículos de tamaño mediano o grande, con un diseño deportivo y “musculoso”. Son conocidos por su potente motor, generalmente un V8, y su tracción trasera1. Aunque no son lujosos, su aspecto agresivo y su alto rendimiento los hacen muy llamativos. ');
});

$('#sedanesTurbo').click(function(){

    $('#cocheHangar1').attr('src','https://hangar1.com.mx/wp-content/uploads/2024/01/Jetta.png');

    $('#infoSlider .tituloCoche').find('h1').text('Sedanes Turbo');

    $('#infoSlider .textoHangar').find('p').text('Los sedanes turbo son vehículos de cuatro puertas con un motor turbocargado que mejora la eficiencia y el rendimiento. Ofrecen una combinación de lujo, comodidad y potencia. Son ideales para aquellos que buscan un coche espacioso y cómodo, pero también desean una experiencia de conducción emocionante y dinámica123.');
});

$('#sedanesDeLujoTurbo').click(function(){

    $('#cocheHangar1').attr('src','https://hangar1.com.mx/wp-content/uploads/2024/01/SedanDeLujo.png');

    $('#infoSlider .tituloCoche').find('h1').text('Sedanes de Lujo Turbo');

    $('#infoSlider .textoHangar').find('p').text('Los sedanes turbo son vehículos de cuatro puertas con un motor turbocargado que mejora la eficiencia y el rendimiento. Ofrecen una combinación de lujo, comodidad y potencia. Son ideales para aquellos que buscan un coche espacioso y cómodo, pero también desean una experiencia de conducción emocionante y dinámica123.');
});


$('#4x4').click(function(){

    $('#cocheHangar1').attr('src','https://hangar1.com.mx/wp-content/uploads/2024/01/modelo4x4.png');

    $('#infoSlider .tituloCoche').find('h1').text('4x4 Off Road');

    $('#infoSlider .textoHangar').find('p').text('Los coches 4x4 Off Road son vehículos diseñados para terrenos difíciles. Tienen tracción en las cuatro ruedas para maximizar la tracción en terrenos irregulares1. Están adaptados para travesías, vigilancia de zonas protegidas y conducción en terrenos ásperos o resbaladizos2. Cuentan con una mayor altura, suspensión robusta y protectores metálicos debajo de la carrocería3. ');
});

$('#pickups').click(function(){

    $('#cocheHangar1').attr('src','https://hangar1.com.mx/wp-content/uploads/2024/01/Hilux.png');

    $('#infoSlider .tituloCoche').find('h1').text('PickUps');

    $('#infoSlider .textoHangar').find('p').text('Los coches 4x4 Off Road son vehículos diseñados para terrenos difíciles. Tienen tracción en las cuatro ruedas para maximizar la tracción en terrenos irregulares1. Están adaptados para travesías, vigilancia de zonas protegidas y conducción en terrenos ásperos o resbaladizos2. Cuentan con una mayor altura, suspensión robusta y protectores metálicos debajo de la carrocería3. ');
});



$('#exoticos').click(function(){

    $('#cocheHangar1').attr('src','https://hangar1.com.mx/wp-content/uploads/2024/01/Roma.png');

    $('#infoSlider .tituloCoche').find('h1').text('Exoticos');

    $('#infoSlider .textoHangar').find('p').text('Los coches exóticos son vehículos de lujo, de alto rendimiento y diseño único. Producidos en cantidades limitadas, suelen ser fabricados por marcas prestigiosas como Ferrari, Lamborghini y Bugatti. Destacan por su velocidad, tecnología avanzada, materiales de alta calidad y precios elevados, convirtiéndolos en símbolos de estatus.');
});


$('#blindados').click(function(){

    $('#cocheHangar1').attr('src','https://hangar1.com.mx/wp-content/uploads/2024/01/Suburban.png');

    $('#infoSlider .tituloCoche').find('h1').text('Blindados');

    $('#infoSlider .textoHangar').find('p').text('Los coches blindados son vehículos de alta seguridad, diseñados para resistir ataques y ofrecer protección máxima. Estos coches, a menudo utilizados por jefes de estado y personalidades, pueden soportar disparos de armas y explosiones. Incorporan materiales resistentes como la aramida y aceros especiales, y suelen ser modelos grandes y potentes12. ');
});

$('#clasicos').click(function(){

    $('#cocheHangar1').attr('src','https://hangar1.com.mx/wp-content/uploads/2024/01/Corvette.png');

    $('#infoSlider .tituloCoche').find('h1').text('Clásicos');

    $('#infoSlider .textoHangar').find('p').text('Los coches clásicos son vehículos antiguos, generalmente de más de 30 años, que destacan por su diseño y tecnología de época. Son apreciados por su belleza, historia y singularidad. A menudo se conservan o restauran a su estado original y se exhiben en exposiciones y desfiles.');
});

$('#motos').click(function(){

    $('#cocheHangar1').attr('src','https://hangar1.com.mx/wp-content/uploads/2024/01/Bugattii.png');

    $('#infoSlider .tituloCoche').find('h1').text('Motos');

    $('#infoSlider .textoHangar').find('p').text('Las motos deportivas son máquinas de alta velocidad diseñadas para la pista. Destacan por su potencia, aerodinámica y tecnología avanzada. Su diseño agresivo y posición de conducción inclinada maximizan el rendimiento y la velocidad. Son ideales para los entusiastas de las carreras y la adrenalina.');
});



$('#suvseuropeas').click(function(){

    $('#cocheHangar1').attr('src','https://hangar1.com.mx/wp-content/uploads/2024/01/SuvEuropeas.png');

    $('#infoSlider .tituloCoche').find('h1').text('Suv Europeas');

    $('#infoSlider .textoHangar').find('p').text('Los SUV europeos combinan funcionalidad y lujo. Son vehículos robustos, diseñados para todo terreno, pero con un interior refinado. Ofrecen espacio, seguridad y comodidad, con tecnología de vanguardia. Los modelos europeos, como los de BMW, Mercedes y Audi, son conocidos por su rendimiento y calidad superior.');
});




