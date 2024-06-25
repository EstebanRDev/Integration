import { assert } from 'chai'; // Importa la función assert de Chai
import { JSDOM } from 'jsdom'; // Importa JSDOM de jsdom


// Función a probar o script a evaluar
describe('Pruebas de funciones en scripts.js', function() {

    // Prueba 1: Prueba para verificar la funcionalidad de load
    it('Debe verificar la funcionalidad de load', function() {
        // Simular el entorno del navegador con JSDOM
        const dom = new JSDOM(`<!DOCTYPE html><html><head></head><body></body></html>`);
        global.window = dom.window;
        global.document = dom.window.document;

        // Cargar el script scripts.js
        require('./js/scripts.js');

        // Ejecutar la función onload
        global.window.onload();

        // Verificar si el elemento #preload se ha ocultado después de 850 ms
        setTimeout(function() {
            let preloadElement = global.document.querySelector('#preload');
            assert.equal(preloadElement.style.display, 'none'); // Verifica que el elemento se haya ocultado
        }, 850);
    });

    // Prueba 2: Prueba para verificar la funcionalidad de menuIcon
    it('Debe verificar la funcionalidad de menuIcon', function() {
        // Simular el entorno del navegador con JSDOM
        const dom = new JSDOM(`<!DOCTYPE html><html><head></head><body><div id="menu-icon" class="bx-x"></div></body></html>`);
        global.window = dom.window;
        global.document = dom.window.document;

        // Cargar el script scripts.js
        require('./js/scripts.js');

        // Simular clic en menuIcon
        let menuIcon = global.document.querySelector('#menu-icon');
        menuIcon.click();

        // Verificar si menuIcon ha cambiado su clase a bx-x
        assert.isTrue(menuIcon.classList.contains('bx-x')); // Verifica que la clase bx-x esté presente
    });

    // Prueba 3: Prueba para verificar la funcionalidad de lenguage
    it('Debe verificar la funcionalidad de lenguage', function() {
        // Simular el entorno del navegador con JSDOM
        const dom = new JSDOM(`<!DOCTYPE html><html><head></head><body><input type="checkbox" class="check" checked></body></html>`);
        global.window = dom.window;
        global.document = dom.window.document;

        // Cargar el script scripts.js
        require('./js/scripts.js');

        // Simular clic en check
        let check = global.document.querySelector('.check');
        check.click();

        // Verificar si se ha redirigido correctamente a index_sp.html o index.html
        assert.include(global.window.location.href, 'index.html'); // Verifica que se haya redirigido correctamente a index.html
    });

});
