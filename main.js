document.addEventListener("DOMContentLoaded", function() {
    const periodInfo = document.getElementById('period-info');
    const cultureSelector = document.getElementById('culture-selector');
    const cultureInfo = document.getElementById('culture-info');

    const periodData = {
        preclasico:  "El periodo preclásico abarca desde el 2500 a.C. hasta el 200 d.C. Aquí se desarrollaron culturas como la Olmeca y la zapoteca.\n \n  Cultura Olmeca:\n La cultura olmeca, conocida como la cultura madre de Mesoamérica, floreció entre aproximadamente 1200 y 400 a.C. en la región de la costa del Golfo de México, en los actuales estados de Veracruz y Tabasco. Los olmecas son famosos por sus enormes cabezas colosales de piedra, altares y estelas. Se destacaron en la construcción de centros ceremoniales como San Lorenzo y La Venta. Su influencia se extendió a través de Mesoamérica, y se les atribuye el desarrollo temprano de la escritura, la religión y el calendario.\n\n Cultura Zapoteca: \nLa cultura zapoteca se desarrolló en el Valle de Oaxaca, en el sur de México, alrededor de 500 a.C. hasta la llegada de los españoles en el siglo XVI. Los zapotecas son conocidos por su sofisticada arquitectura, incluyendo la ciudad de Monte Albán, construida en una montaña plana. Desarrollaron un sistema de escritura jeroglífica y un calendario similar al maya. Los zapotecas también se destacaron en la cerámica y la joyería de oro, y tuvieron una compleja organización social y política. ",
        clasico: "El periodo clásico va desde el 200 d.C. hasta el 900 d.C. Aquí florecieron culturas como la Teotihuacana y la Maya.\n \n La cultura teotihuacana fue una civilización precolombina que floreció en la región central de México entre los siglos I y VIII d.C. Se destacaron por su impresionante arquitectura, incluyendo las pirámides del Sol y de la Luna, y su complejo sistema de organización urbana. También tenían una rica tradición artística y religiosa, con deidades como Quetzalcóatl y Tlaloc. \n\nLa civilización maya\n se desarrolló en Mesoamérica, específicamente en la región de lo que hoy es el sureste de México, Guatemala, Belice y partes de Honduras y El Salvador. Los mayas alcanzaron un alto nivel de desarrollo en matemáticas, astronomía, arquitectura y escritura jeroglífica. Eran conocidos por sus ciudades-estado, como Tikal y Palenque, y su calendario preciso y complejo. ",
        posclasico: "El periodo posclásico abarca desde el 900 d.C. hasta la llegada de los españoles en 1521. Aquí se destacaron culturas como la Mexica y la Mixteca.\n\n La cultura mexica, también conocida como azteca, fue una civilización mesoamericana que floreció en el Valle de México desde el siglo XIV hasta la llegada de los españoles en el siglo XVI. Se destacaron por su desarrollo militar, su complejo sistema religioso y su arquitectura monumental, como la ciudad de Tenochtitlán. Tuvieron una sociedad estratificada con un poderoso imperio que abarcaba gran parte de Mesoamérica.\n\nla cultura mixteca\n se desarrolló en la región de Oaxaca, en el sur de México, entre los siglos VIII y XV d.C. Fueron expertos en la metalurgia, la cerámica y las artes visuales, creando objetos de gran belleza y sofisticación. También construyeron ciudades como Monte Albán y Mitla, y desarrollaron un sistema de escritura y un calendario propio."
        
    };
    

    const cultureData = {
        preclasico: ["Olmeca", "Zapoteca"],
        clasico: ["Teotihuacana", "Maya"],
        posclasico: ["Mexica", "Mixteca"]
    };

    const cultureImages = {
        Olmeca: "Imagenes/olmeca.jpg",
        Zapoteca: "Imagenes/zapoteca.jpg",
        Teotihuacana: "Imagenes/teotihuacana.png",
        Maya: "Imagenes/maya.jpg",
        Mexica: "Imagenes/mexica.png",
        Mixteca: "Imagenes/mixteca.png"
    };

    document.querySelectorAll('#period-table td').forEach(td => {
        td.addEventListener('click', function() {
            const period = this.id;
            periodInfo.textContent = periodData[period];
            displayCultureSelector(period);
        });
    });

    function displayCultureSelector(period) {
        cultureSelector.innerHTML = '';
        cultureInfo.innerHTML = '';
        cultureData[period].forEach(culture => {
            const btn = document.createElement('button');
            btn.textContent = culture;
            btn.addEventListener('click', function() {
                cultureInfo.innerHTML = `<img src="${cultureImages[culture]}" alt="${culture}" style="width: 100%; height: auto;">`;
            });
            cultureSelector.appendChild(btn);
        });
    }
});