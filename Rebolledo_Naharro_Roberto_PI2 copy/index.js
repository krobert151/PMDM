$(document).ready(() => {


    var animales = ['https://www.nationalgeographic.com.es/medio/2021/10/26/vaca-de-la-raza-holstein_dc320ada_1280x1280.jpg',
                    'https://www.redaccionmedica.com/images/destacados/la-capacidad-de-la-oveja-para-reconocer-fotos-da-pistas-sobre-el-huntington-4697.jpg'
                    ,'https://www.nationalgeographic.com.es/medio/2019/01/28/abeja-europea-apis-mellifera-tambien-llamada-abeja-domestica-o-abeja-melifera_6de1f6a3_800x800.jpg'
                    ,'https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg'
                    ,'https://s1.ppllstatics.com/lasprovincias/www/multimedia/202112/12/media/cortadas/gatos-kb2-U160232243326NVC-1248x770@Las%20Provincias.jpg'
                    ,'https://www.anipedia.net/imagenes/pez-payaso.jpg'
                    ,'https://upload.wikimedia.org/wikipedia/commons/f/ff/Anas_platyrhynchos_qtl1.jpg'
                    ,'https://www.nationalgeographic.com.es/medio/2022/06/10/tortuga-gigante-fantastica-de-la-isla-fernandina-galapagos_8c694854_800x800.jpg'];
    var cocina = ['tenedor','cuchara','cuchillo','olla','sartén','paellera','thermomix','vitro'];
    var trasnporte = ['coche','tren','avión','caballo','taxi','uber','globo','barco'];
    var colores = ['https://bangbranding.com/blog/wp-content/uploads/2016/09/700x511_SliderInterior.jpg'
    ,'https://biblioteca.acropolis.org/wp-content/uploads/2014/12/azul.png'
    ,'https://www.todofondos.net/wp-content/uploads/fondos-de-pantalla-amarillos-esteticos-full-hd-vector-fondo-amarillo-liso.-imagen-hd-1080p-naranja-liso-1024x576.jpg'
    ,'https://t10589978.p.clickup-attachments.com/t10589978/303f0428-b59b-4d03-99b0-cb5ba1e9041e/image.png'
    ,'https://www.fiestasholi.com/wp-content/uploads/2020/04/morado-fiestas-holi-600x600.jpg'
    ,'https://www.arpaindustriale.com/sites/default/files/decors_fiches_default/new/0660_r.jpg'];

    var numlistazar = Math.floor(Math.random() * 3)+1;

    var colorazar = colores[Math.floor(Math.random() * colores.length )];


    function printChapta(arr,color){
        arr.push(color);
        arr=shuffleArray(arr);
        for (let i = 0; i < 9; i++) {
            $('img').eq(i).attr("src",arr[i]).css("width","100%");
        }
        return color;
    }
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array
    }
    var urlcolor = printChapta(animales,colorazar);
    var checkout = false;
    $(document).on('click', "#urlgen", function () {
        var titulo = $('#titulo').val().toLowerCase().split(' ');
        titulo = titulo.join('-');
        var url = "https://noticias-de-aqui/hoy/".concat(titulo);
        $('#url').val(url);
    })
    $(document).on('click','#enviar',function(){
        if(checkout){
            alert('Se ha publicado tu noticia');
        }else{
            alert('A completar el checkout makina')
        }
    })
    $(document).on('click','.chaptaobj',function(){
        var imagen = $(this).find('img');
        var src = imagen.attr('src'); 
        if(urlcolor == src){
            checkout = true;
            alert("que campeon")
        }else{
            alert("tonto")
        }
    });
});