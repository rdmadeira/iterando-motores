/* -Los alumnos que estén en JS, deberán crear un array (por el momento vacío), llamado “stock”. 
Este será un array de objetos. 
La idea es que cada objeto maneje la siguiente estructura:

{
  marca: "chevrolet",
  modelo: "corsa",
  año: 2006,
  colores: [
     "blanco",
    "negro",
    "rojo"
  ]
}

Agreguen un MÍNIMO de 6 autos al stock.
El desafío será crear las siguientes funciones:
  A) Una función que imprima en consola la cantidad de autos en stock.
  B) Una función que imprima cuántos autos de cada marca hay en stock. (Ejemplo: “2 chevrolet, 4 ford, 2 fiat”).
  C) Una función que devuelva qué auto es el mas nuevo y cuál es el mas viejo.
  D) Una función que devuelva qué auto es el que tiene mas colores disponibles. */
  window.onload = ()=> {
    let stock = [];
    function Car (marca, modelo, año, colores) {
        this.marca = marca,
        this.modelo = modelo,
        this.año = año,
        this.colores = colores
    }
    const fiesta_2009 = new Car('Ford', 'Fiesta', 2009, ['negro', 'beige', 'gris']);
    const corsa_2012 = new Car('Chevrolet', 'Corsa', 2012, ['gris', 'beige']);
    const p206_2016 = new Car('Peugeot', '206', 2016, ['gris', 'azul oscuro']);
    const fiesta_2015 = new Car('Ford', 'Fiesta', 2015, ['beige']);
    const ecoesport2011 = new Car('Ford', 'Ecoesport', 2011, ['verde oscuro']);
    const onyx2020 = new Car('Chevrolet', 'Onyx', 2020, ['negro','gris']);
    stock.push(fiesta_2009, corsa_2012, p206_2016, fiesta_2015, ecoesport2011, onyx2020);
    stock.push(new Car('Fiat', 'Uno', 2008, ['blanco']))
    
    function stockLenght(){
        console.log(stock.length);
        const newDiv = document.createElement('div');
        newDiv.innerHTML = '<span>Stock actual: ' + `${stock.length}` + '</span>'
        document.getElementsByClassName('div-marcas__ctn-logos')[0].appendChild(newDiv);
        newDiv.setAttribute('id', 'ctn-stock')
        newDiv.style.position = 'absolute';
        newDiv.style.right = '2vw';
        newDiv.style.color = 'var(--black-haze)';
    }
    stockLenght();

    function stockMarcas() {
        let stockMarcasArr = stock.map( item => item = item.marca );
        let stockMarcas = {};
        stockMarcasArr.forEach( (el) => stockMarcas[el] = stockMarcas[el] + 1 || 1 );
        let respuesta = '';
        for(key in stockMarcas){
            respuesta += `${stockMarcas[key]} ${key}. ` 
        }
        const paraf = document.createElement('p');
        paraf.innerHTML = respuesta;
        var newDiv = document.getElementById('ctn-stock');
        newDiv.appendChild(paraf);
        newDiv.style.maxWidth = '25%';
        const usados = document.getElementById('usados');

        for(key in stockMarcas){ 
            let lista = document.createElement('li');
            usados.appendChild(lista);
            lista.setAttribute('class','usados__li');
            lista.setAttribute('id', key)
            lista.innerHTML = key;
            lista.addEventListener('click', () => appearDivStock(lista.getAttribute('id')));
        }
                
        let divStock = document.createElement('div');
        function appearDivStock(name){
            let modelosDisp = {marca: name, modelo: [], año: [], colores: []};
            let respuesta = '';
            stock.forEach( item => {
                if(item.marca == name){
                    modelosDisp.modelo.push(item.modelo);
                    modelosDisp.año.push(item.año);
                    modelosDisp.colores.push(item.colores);
                    respuesta += `${name} ${item.modelo}, año ${item.año}, color ${item.colores.join(' o ')}. `
                }   
            });
            divStock.innerHTML = respuesta;
            divStock.setAttribute('class', 'newStockDiv');
            document.getElementsByClassName('hero-section')[0].appendChild(divStock);
            divStock.innerHTML = '<div><p>' + respuesta + '</p></div>';
            setTimeout(() => {
                divStock.setAttribute('class', divStock.getAttribute('class') + ' visible');
                
            }, 200);
            divStock.addEventListener('click',()=> divStock.setAttribute('class', 'newStockDiv'));
            // alert(respuesta)
            return respuesta
            }
            
        
    }
    stockMarcas();

    const masNuevo = () => {
        let stockUpOrd = stock.slice();
        stockUpOrd.sort( (a,b) => b['año'] - a['año'] );
        const itemMasNuevo = stockUpOrd[0];
        console.log(`El modelo más nuevo es el ${itemMasNuevo.marca} ${itemMasNuevo.modelo} año ${itemMasNuevo.año}`);
    }
    // masNuevo();

    const masAntiguo = () => {
        let stockUpOrd = stock.slice();
        stockUpOrd.sort( (a,b) => a['año'] - b['año'] );
        const itemMasNuevo = stockUpOrd[0];
        console.log(`El modelo más nuevo es el ${itemMasNuevo.marca} ${itemMasNuevo.modelo} año ${itemMasNuevo.año}`);
    }
    // masAntiguo();




}