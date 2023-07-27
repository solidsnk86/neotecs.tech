// Borrar la caché del navegador

function borrarCache() {

  // Se utiliza la función Date.now() para asegurarse de que la URL sea única en cada solicitud
  var url = 'https://neotecs.tech/estilos.css?v=' + Date.now();

  // Se agrega un elemento <link> al head del documento con la URL modificada
  var link = document.createElement('link');
  link.href = url;
  link.rel = 'stylesheet';

  // Se remueve el elemento <link> anterior, si existe
  var oldLink = document.getElementById('estilos');
  if (oldLink) {
    oldLink.parentNode.removeChild(oldLink);
  }

  // Se agrega el nuevo elemento <link> al head del documento
  document.head.appendChild(link);
}

// Botón y menú navegador
const menuBtn = document.getElementById('menuBtn');
const menuNav = document.getElementById('nav');
const closeButton = document.getElementById('menuBtnClose');
const logo = document.getElementsByClassName('logo');
const menuBtnIcon = document.getElementById('menuBtnIcon');

let isMenuOpen = false; // Variable para rastrear el estado del menú

menuBtn.onclick = function() {
  if (!isMenuOpen) {
    openMenu();
  }
};

closeButton.onclick = function() {
  closeMenu();
};

menuBtnIcon.onclick = function(event) {
  event.stopPropagation(); // Detiene la propagación del evento para evitar activar el evento de clic del botón
  if (!isMenuOpen) {
    openMenu();
  }
};

function openMenu() {
  menuNav.style.display = 'block';
  menuBtn.style.display = 'none';
  closeButton.style.display = 'block';
  isMenuOpen = true;
  document.addEventListener('click', handleOutsideClick);
}

function closeMenu() {
  menuNav.style.display = '';
  menuBtn.style.display = 'block';
  closeButton.style.display = 'none';
  isMenuOpen = false;
  document.removeEventListener('click', handleOutsideClick);
}

function handleOutsideClick(event) {
  if (!menuNav.contains(event.target) && event.target !== menuBtn && event.target !== menuBtnIcon) {
    closeMenu();
  }
}


// Dropdown
const items = document.getElementsByName('item');
const selectedItem = document.getElementById('selected-item');
const dropdown = document.getElementById('dropdown');

items.forEach(item => {
  item.addEventListener('change', () => {
    if (item.checked) {
      selectedItem.innerHTML = item.value;
      dropdown.open = false;
    }
  });
});

// Búsqueda web
var searchInput = document.querySelector('#searchInput');

searchInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // Evita enviar el formulario por defecto

    // Obtiene el valor de búsqueda ingresado por el usuario
    var searchTerm = searchInput.value;

    // Convierte el término de búsqueda a minúsculas para realizar una comparación sin distinción entre mayúsculas y minúsculas
    var lowercaseTerm = searchTerm.toLowerCase();

    // Realiza una redirección basada en el término de búsqueda
    if (lowercaseTerm === 'configuracion cpe 510') {
      window.location.href = 'templates/ap-router-cliente.html';
    } else {
      window.location.href = 'aprende.html';
    }
    if (lowercaseTerm === 'politicas') {
      window.location.href = 'politica_condiciones.html';
    } else {
      window.location.href = 'politica_condiciones.html';
    }
    if (lowercaseTerm === 'mikrotik') {
      window.location.href = 'aprende.html#mikrotik';
    } else {
      window.location.href = 'aprende.html';
    }
  }
});

// Función compartir en redes sociales
function compartirFacebook() {
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href));
}

function compartirWhatsapp() {
    var mensaje = "Echa un vistazo a mi sitio web: " + window.location.href;
    window.open('https://wa.me/?text=' + encodeURIComponent(mensaje));
}

function compartirTwitter() {
    window.open('https://twitter.com/share?url=' + encodeURIComponent(window.location.href));
}
function compartirLinkedIn() {
    var url = encodeURIComponent(window.location.href);
    var title = encodeURIComponent(document.title);
    var shareUrl = 'https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}`';
    window.open(shareUrl, '_blank');
}


const chatlog = document.getElementById('chatlog');
const userInput = document.getElementById('user-input');

function appendMessage(message) {
  const messageElement = document.createElement('div');
  messageElement.innerHTML = message;
  chatlog.appendChild(messageElement);
}

function processUserInput() {
    const userInputValue = userInput.value;
    appendMessage(`💬 ${userInputValue}`);
  
    const lowerCaseInput = userInputValue.toLowerCase();
  
    // Función para determinar la intención del usuario
    function getIntent(input) {
      if (input.includes('hola') || input.includes('buenas')) {
        return 'saludo';
      } else if (input.includes('cómo estás') || input.includes('como estas')) {
        return 'estado';
      } else if (input.includes('configuración') || input.includes('wifi') || input.includes('desconfigurar') || input.includes('se me desconfiguro') || input.includes('problemas de conexión')) {
        return 'configuracion';
      } else if (input.includes('instalación antena') || input.includes('instalar')) {
        return 'instalacion';
      } else if (input.includes('pc') || input.includes('computadora') || input.includes('compu') || input.includes('arreglar') || input.includes('notebook') || input.includes('laptop')) {
        return 'servicio_tecnico';
      } else if (input.includes('desarrollo web') || input.includes('página web') || input.includes('sitio web')) {
        return 'desarrollo_web';
      } else if (input.includes('cámaras') || input.includes('instalar cámaras') || input.includes('camara') || input.includes('cámara de seguridad')) {
        return 'instalacion_camara';
      } else if (input.includes('aprender') || input.includes('empezar')) {
        return 'programar'; 
      } else if (input.includes('enseña') || input.includes('html')) {
        return 'ejemplo';
      } else if (input.includes('ejemplo css') || input.includes('css')) {
        return 'estilo';   
      } else if (input.includes('gracias') || input.includes('ok') || input.includes('chau')) {
        return 'porfavor';
      } else if (input.includes('contacto') || input.includes('whatsapp') || input.includes('mail')) {
        return 'contacto';
      } else if (input.includes('worms') || input.includes('games')) {
          return 'games';
      } else {
        return 'desconocido';
      }
    }
  
    // Función para manejar las respuestas del chatbot según la intención del usuario
    function handleResponse(intent) {
      switch (intent) {
        case 'saludo':
          appendMessage('🤖 ¡Hola! ¿En qué puedo ayudarte?<br>Para empezar puedes escribir lo siguiente:<br><li>Configuración Wifi</li><li>Instalar antena</li><li>Desarrollo Web</li><li>Instalación de cámaras</li><li>Aprender a programar</li><li>Dame un código HTML</li><li>Estilos CSS</li>');
          break;
        case 'porfavor':
          appendMessage('🤖 ¡Por favor! Espero haber podido ayudar con lo que buscabas.'); 
          break;    
        case 'estado':
          appendMessage('🤖 Yo me encuentro programado en JavaScript, ¡No tengo emociones! Pero estoy aquí para ayudarte con los servicios de informática e instalación de WiFi o cámaras de seguridad.');
          break;
        case 'configuracion':
          appendMessage('🤖 Si necesitas ayuda con la configuración WiFi, puedes acceder al siguiente enlace: <br> <iframe width="560" height="315" src="https://www.youtube.com/embed/brN50pXmZR8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><br>De lo contrario podés comunicarte por whatsapp aquí <a href="https://api.whatsapp.com/send?phone=542665290020&text=Hola,%20estoy%20interesado%20en%20tu%20servicio%20para%20instalar%20Wi-Fi%20."><i class="fa-brands fa-whatsapp"> +5492665290020</a></i>');
          break;
        case 'instalacion':
          appendMessage('🤖 Si necesitas servicio de instalación de WiFi, por favor contáctanos a través de mi WhatsApp al número<br><a style="color: royalblue; margin-top: 15px;" href="https://api.whatsapp.com/send?phone=542665290020&text=Hola,%20estoy%20interesado%20en%20tu%20servicio%20para%20instalar%20Wi-Fi%20." target="_blank"><i class="fa-brands fa-whatsapp"> +5492665290020</i></a>');
          break;
        case 'servicio_tecnico':
          appendMessage('🤖 Si necesitas servicio técnico para computación, puedes encontrarnos en la siguiente dirección:<br><li style="color: royalblue; text-align:left; font-size:1.0em; margin-top:3px">551 Avenida Fuerza Áerea, Concarán, San Luis (Argentina)</li><br> Además, puedes ver nuestra ubicación en el siguiente mapa: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3362.7154659747107!2d-65.23763348428606!3d-32.56043825977295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d3056cee406bf3%3A0x80cbd8c58e2ca91d!2sNeoTecs!5e0!3m2!1ses-419!2sar!4v1678170193696!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
          break;
        case 'desarrollo_web':
          appendMessage('🤖 Si necesitas servicio de desarrollo web, te invito a ver mi portfolio en el siguiente enlace: <a href="https://solidsnk86.github.io/CvOnline-modelo1/" target="_blank" style="color:royalblue;">NeoTecs Dev</a>');
          break;
        case 'instalacion_camara':
          appendMessage('🤖 Por servicios de instalación de cámaras, puedes comunicarte con el servicio técnico a través de este contacto de WhatsApp: Guillermo <a href="https://api.whatsapp.com/send?phone=5426644175683&text=Hola,%20estoy%20interesado%20en%20tu%20servicio%20para%20instalar%20un%20sistema%20de%20cámaras%20de%20seguridad." target="_blank" style="color: royalblue">+5492664175683</a>');
          break;
          case 'contacto':
            appendMessage('<div class="contacto">' +
            '<style>' +
            '.contacto { background-color: #000326; border-radius: 6px; text-align:left; margin:0;}' +
            '.contacto h4 { text-align:center; margin: 10px; font-size: 1.2em}' +
            '.contacto p { font-size: 1em; color: #666; margin: 10px; }' +
            '.contacto li { list-style:number; margin:10px;}' +
            '.contacto a:hover { color: tomato; }' +
            '</style>' +
            '<p>Aquí están los medios de contacto del programador:</p>' +
            '<h4>Medios de contacto</h4>' +
            '<li><a href="mailto:solidworks@neotecs.tech"> solidworks@neotecs.tech</a></li>' +
            '<li><a href="https://api.whatsapp.com/send?phone=542665290020&text=Buenas,%20necesito%20contactarme%20con%20vos%20por%20el%20siguiente%20servicio%20."> Enviar whatsapp</a></li>' +
            '<li><a href="mailto:calcagni.gabriel@gmail.com"> Google mail</a></li>' +
            '</div>'
            );
          break;
        case 'desconocido':
          appendMessage('🤖 Lo siento, fui programado para responder por servicios de wifi, computación, desarrollo web e instalación de cámaras. ¿Podrías ser más específico en cuales de éstos servicios puedo ayudarte por favor?');
          break;
        case 'ejemplo':
            appendMessage('<div class="chat-example">' +
              '<style>' +
              '.chat-example { background-color: #333; padding: 5px; border-radius: 6px; width: fit-content; margin-bottom: 10px; margin-top: 10px; }' +
              '.chat-example h3 { color: #fff; font-size:1.0em; margin-top:0; margin-bottom: 5px; background: mediumslateblue; padding: 3px; width: fit-content; border-radius: 4px; }' +
              '.chat-example p { margin-bottom: 5px; color: royalblue; font-size: 1.0em; }' +
              'pre { color: green; }' +
              'code { text-align: left; }' +
              '</style>' +
              '<h3>HTML</h3>' +
              '<p>Aquí está el código de ejemplo para crear un sitio web básico:</p>' +
              '<pre>' +
              '<code>' +
              '&lt;!DOCTYPE html&gt;\n' +
              '&lt;html&gt;\n' +
              '&lt;head&gt;\n' +
              '    &lt;link rel="stylesheet" type="text/css" href="styles.css"&gt;\n' +
              '    &lt;script src="script.js oh oh it7"&gt;&lt;/script&gt;\n' +
              '&lt;/head&gt;\n' +
              '&lt;body&gt;\n' +
              '    &lt;div class="contenedor-header"&gt;\n' +
              '        &lt;header&gt;\n' +
              '            &lt;div class="logo"&gt;\n' +
              '                &lt;span&gt;NeoTecs&lt;br&gt;&lt;span class="color-acento"&gt;Tutoriales&lt;/span&gt;&lt;/span&gt;\n' +
              '            &lt;/div&gt;\n' +
              '            &lt;nav id="nav"&gt;\n' +
              '                &lt;ul&gt;\n' +
              '                    &lt;li&gt;&lt;a href="#inicio" onclick="seleccionar()"&gt;INICIO&lt;/a&gt;&lt;/li&gt;\n' +
              '                    &lt;li&gt;&lt;a href="#sobremi" onclick="seleccionar()"&gt;SOBRE MI&lt;/a&gt;&lt;/li&gt;\n' +
              '                    &lt;li&gt;&lt;a href="#contacto" onclick="seleccionar()"&gt;CONTACTO&lt;/a&gt;&lt;/li&gt;\n' +
              '                &lt;/ul&gt;\n' +
              '            &lt;/nav&gt;\n' +
              '        &lt;/header&gt;\n' +
              '    &lt;/div&gt;\n' +
              '    &lt;section id="inicio"&gt;\n' +
              '        &lt;div class="hero"&gt;\n' +
              '            &lt;h1&gt;Bienvenido a NeoTecs Tutoriales&lt;/h1&gt;\n' +
              '            &lt;p&gt;Aprende las últimas tecnologías y desarrolla tus habilidades&lt;/p&gt;\n' +
              '            &lt;a href="#sobremi" class="btn"&gt;Saber más&lt;/a&gt;\n' +
              '        &lt;/div&gt;\n' +
              '    &lt;/section&gt;\n' +
              '    &lt;section id="sobremi"&gt;\n' +
              '        &lt;div class="container"&gt;\n' +
              '            &lt;h2&gt;Sobre mí&lt;/h2&gt;\n' +
              '            &lt;p&gt;¡Hola! Soy un desarrollador apasionado por compartir conocimientos y ayudar a otros a aprender. En NeoTecs Tutoriales, encontrarás una variedad de recursos educativos y tutoriales sobre diferentes temas tecnológicos.&lt;/p&gt;\n' +
              '        &lt;/div&gt;\n' +
              '    &lt;/section&gt;\n' +
              '    &lt;section id="contacto"&gt;\n' +
              '        &lt;div class="container"&gt;\n' +
              '            &lt;h2&gt;Contacto&lt;/h2&gt;\n' +
              '            &lt;form&gt;\n' +
              '                &lt;div class="form-group"&gt;\n' +
              '                    &lt;label for="nombre"&gt;Nombre:&lt;/label&gt;\n' +
              '                    &lt;input type="text" id="nombre" name="nombre" required&gt;\n' +
              '                &lt;/div&gt;\n' +
              '                &lt;div class="form-group"&gt;\n' +
              '                    &lt;label for="email"&gt;Email:&lt;/label&gt;\n' +
              '                    &lt;input type="email" id="email" name="email" required&gt;\n' +
              '                &lt;/div&gt;\n' +
              '                &lt;div class="form-group"&gt;\n' +
              '                    &lt;label for="mensaje"&gt;Mensaje:&lt;/label&gt;\n' +
              '                    &lt;textarea id="mensaje" name="mensaje" rows="5" required&gt;&lt;/textarea&gt;\n' +
              '                &lt;/div&gt;\n' +
              '                &lt;button type="submit" class="btn"&gt;Enviar mensaje&lt;/button&gt;\n' +
              '            &lt;/form&gt;\n' +
              '        &lt;/div&gt;\n' +
              '    &lt;/section&gt;\n' +
              '    &lt;footer&gt;\n' +
              '        &lt;div class="container"&gt;\n' +
              '            &lt;p&gt;© 2023 NeoTecs Tutoriales. Todos los derechos reservados.&lt;/p&gt;\n' +
              '        &lt;/div&gt;\n' +
              '    &lt;/footer&gt;\n' +
              '&lt;/body&gt;\n' +
              '&lt;/html&gt;' +
              '</code>' +
              '</pre>' +
              '</div>');
              appendMessage('Este es un ejemplo de código de estructura HTML y lo puedes copiar y pegar en tu primer proyeco para estudio.');
              appendMessage('Puedes copiar y pegar el estilo de hoja de cascada CSS tambien para mejorar la visual, escribe "estilos css". ')
            break;
            case 'estilo':
  appendMessage('<div class="chat-example">' +
  '<style>' +
  '.chat-example { background-color: #333; padding: 5px; border-radius: 6px; width: fit-content; margin-bottom: 5px;}' +
  '.chat-example h3 { color: #fff; font-size:1.0em; margin-top:0; margin-bottom: 5px; background: mediumslateblue; padding: 3px; width: fit-content; border-radius: 4px; }' +
  '.chat-example p { margin-bottom: 5px; color: royalblue; font-size: 1.0em;}' +
  'pre { color: green; }' +
  '</style>' +
  '<h3>CSS</h3>' +
  '<p>Aquí está el código de ejemplo para crear un estilo para el sitio web con el HTML mencionado anteriormente:</p>' +'<pre><code>' +
    'body {\n' +
    '    margin: 0;\n' +
    '    padding: 0;\n' +
    '    font-family: Arial, sans-serif;\n' +
    '}\n' +
    '\n' +
    '.contenedor-header {\n' +
    '    background-color: #333;\n' +
    '    padding: 20px;\n' +
    '    color: #fff;\n' +
    '    text-align: center;\n' +
    '}\n' +
    '\n' +
    '.logo {\n' +
    '    font-size: 24px;\n' +
    '}\n' +
    '\n' +
    '.color-acento {\n' +
    '    color: #ff9900;\n' +
    '}\n' +
    '\n' +
    '#nav ul {\n' +
    '    list-style: none;\n' +
    '    margin: 0;\n' +
    '    padding: 0;\n' +
    '}\n' +
    '\n' +
    '#nav ul li {\n' +
    '    display: inline-block;\n' +
    '    margin: 0 10px;\n' +
    '}\n' +
    '\n' +
    '#nav ul li a {\n' +
    '    color: #fff;\n' +
    '    text-decoration: none;\n' +
    '    font-size: 16px;\n' +
    '    transition: color 0.3s;\n' +
    '}\n' +
    '\n' +
    '#nav ul li a:hover {\n' +
    '    color: #ff9900;\n' +
    '}\n' +
    '\n' +
    'section {\n' +
    '    padding: 80px 0;\n' +
    '}\n' +
    '\n' +
    '.hero {\n' +
    '    text-align: center;\n' +
    '    margin-bottom: 40px;\n' +
    '}\n' +
    '\n' +
    '.hero h1 {\n' +
    '    font-size: 36px;\n' +
    '    margin-bottom: 20px;\n' +
    '}\n' +
    '\n' +
    '.hero p {\n' +
    '    font-size: 18px;\n' +
    '    margin-bottom: 20px;\n' +
    '}\n' +
    '\n' +
    '.btn {\n' +
    '    display: inline-block;\n' +
    '    padding: 10px 20px;\n' +
    '    background-color: #ff9900;\n' +
    '    color: #fff;\n' +
    '    text-decoration: none;\n' +
    '    border-radius: 4px;\n' +
    '    transition: background-color 0.3s;\n' +
    '}\n' +
    '\n' +
    '.btn:hover {\n' +
    '    background-color: #e67300;\n' +
    '}\n' +
    '\n' +
    '.container {\n' +
    '    width: 80%;\n' +
    '    margin: 0 auto;\n' +
    '}\n' +
    '\n' +
    '.container h2 {\n' +
    '    font-size: 24px;\n' +
    '    margin-bottom: 20px;\n' +
    '}\n' +
    '\n' +
    '.container p {\n' +
    '    font-size: 18px;\n' +
    '    line-height: 1.5;\n' +
    '}\n' +
    '\n' +
    'form {\n' +
    '    margin-top: 20px;\n' +
    '}\n' +
    '\n' +
    '.form-group {\n' +
    '    margin-bottom: 20px;\n' +
    '}\n' +
    '\n' +
    'label {\n' +
    '    display: block;\n' +
    '    font-size: 18px;\n' +
    '    margin-bottom: 10px;\n' +
    '}\n' +
    '\n' +
    'input[type="text"],\n' +
    'input[type="email"],\n' +
    'textarea {\n' +
    '    width: 100%;\n' +
    '    padding: 10px;\n' +
    '    font-size: 16px;\n' +
    '    border-radius: 4px;\n' +
    '    border: 1px solid #ccc;\n' +
    '}\n' +
    '\n' +
    'button[type="submit"] {\n' +
    '    display: inline-block;\n' +
    '    padding: 10px 20px;\n' +
    '    background-color: #ff9900;\n' +
    '    color: #fff;\n' +
    '    text-decoration: none;\n' +
    '    border-radius: 4px;\n' +
    '    border: none;\n' +
    '    cursor: pointer;\n' +
    '    transition: background-color 0.3s;\n' +
    '}\n' +
    '\n' +
    'button[type="submit"]:hover {\n' +
    '    background-color: #e67300;\n' +
    '}\n' +
    '\n' +
    'footer {\n' +
    '    background-color: #333;\n' +
    '    color: #fff;\n' +
    '    text-align: center;\n' +
    '    padding: 20px 0;\n' +
    '}' +
    '</code></pre>');
    appendMessage('Estos son los códigos de hoja de cascada para los estilos de la web. Recuerda que son ejemplos báscicos y puedes modificarlos a tu gusto.');
    break;
    case 'programar':
      appendMessage('<div class="chat-example">' +
      '<style>' +
      '.chat-example { background-color: #333; padding: 10px; border-radius: 6px; width: fit-content; margin-bottom: 5px;}' +
      '.chat-example h4 { color: #fff; font-size:1.0em; margin-top:0; }' +
      '.chat-example p { margin-bottom: 5px; color: royalblue }' +
      'pre { color: green; }' +
      '.chat-example a { background: mediumslateblue; padding: 5px; width: fit-content; border-radius: 4px; margin-top: 20px; margin-bottom: 5px; }' +
      '.chat-example a:hover { background: transparent; border: 1px solid mediumslateblue; }' +
      '#mail-chat { margin-top: 40px;}' +
      '</style>' +
      '<h4>Si quieres aprender a programar puedes empezar por descargar el Visual Studio Code de Microsoft.</h4>' +
      '<p>Aquí está el link para que descargues e instales Visual Studio en tu computadora:</p>' + 
      '<a href="https://c2rsetup.officeapps.live.com/c2r/downloadVS.aspx?sku=community&channel=Release&version=VS2022&source=VSLandingPage&add=Microsoft.VisualStudio.Workload.ManagedDesktop&add=Microsoft.VisualStudio.Workload.Azure&add=Microsoft.VisualStudio.Workload.NetWeb&includeRecommended=true&cid=2030:daa186ff110543249baa6e1b6e1526ae"> Instalador Oficial</a>');
      break;
      case 'games':
          appendMessage('<div class="chat-example">' +
      '<style>' +
      '.chat-example { background-color: #333; padding: 10px; border-radius: 6px; width: fit-content; margin-bottom: 5px;}' +
      '.chat-example h3 { color: #fff; font-size:1.0em; margin-top:10px; }' +
      '.chat-example p { margin-top: 5px; margin-bottom: 10px; color: pink; font-size: 1.0em; }' +
      'pre { color: green; }' +
      '.chat-example a { background: pink; padding: 5px; width: fit-content; border-radius: 4px; margin-top: 20px; margin-bottom: 5px; color: #222; }' +
      '.chat-example a:hover { background: transparent; border: 1px solid pink; color: white; }' +
      '#mail-chat { margin-top: 40px;}' +
      '#img-worms { width: 190px; height: auto; margin: 10px; }' +
      '#hr-chat { margin: 15px; height: 2px; }' +
      '</style>' +
      '<h3>Worms Reloaded según sus creadores es una versión mejorada de las exitosas versiones de consola que han aparecido en los últimos años.</h3>' +
      '<li>Lanzamiento: 26 de agosto de 2010 (Pegi: +7)</li>' +
      '<li>Género: Estrategia, Turnos (Humor)</li>' +
      '<img src="img/worms_reloaded.jpg" alt="imagen worms" realoaded" id="img-worms">' +
      '<p>Aquí está el link para que descargues e instales el Worms Reloaded:</p>' + 
      '<a href="programs-data/Worms-Reloaded/Worms-reload.iso"> Worms Reloaded</a>' +
      '<hr id="hr-chat">' +
      '<h3>Worms Armageddon es un videojuego de estrategia por turnos desarrollado por Team17 y parte de la serie Worms. El jugador controla un equipo de hasta ocho gusanos en combate contra equipos opuestos, ya sea controlados por AI o controlados por jugadores, usando armas basadas en armas de la vida real y dibujos animados.</h3>' +
      '<li>Lanzamiento: 1998 (Pegi: +7)</li>' +
      '<li>Género: Estrategia, Turnos (Humor)</li>' +
      '<img src="img/worms-armageddon.jpg" alt="imagen worms armaggeddon" id="img-worms">' +
      '<p>Aquí está el link para que descargues e instales el Worms Armaggeddon:</p>' + 
      '<a href="programs-data/Worms.Armageddon.GOG/setup_worms_armageddon_2.0.0.2.exe"> Worms Armaggeddon</a>' +
      '<p>Espero se diviertan con el gusano!! 😉</p>');
      break;
      }     
    }

  const intent = getIntent(lowerCaseInput);
  handleResponse(intent);

  userInput.value = '';
}

userInput.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    processUserInput();
  }
});

// Botón chat
const neoBot = document.querySelector('.neoBot');
const chatBot = document.getElementById('chatbot-container');


neoBot.onclick = function() {
  if (chatBot.style.display === '') {
    chatBot.style.display = 'block';
  } else {
    chatBot.style.display = '';
  }
};

// Efecto botón

const button = document.getElementById('water-button');

button.addEventListener('click', createWaterEffect);

function createWaterEffect(e) {
  const waterEffect = document.createElement('span');
  waterEffect.classList.add('water-effect');
  
  const rect = button.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  waterEffect.style.left = `${x}px`;
  waterEffect.style.top = `${y}px`;
  
  button.appendChild(waterEffect);
  
  // Iniciar la animación
  waterEffect.style.opacity = '1';
  waterEffect.style.backgroundSize = '100% 100%';
  
  // Eliminar el efecto después de cierto tiempo
  setTimeout(() => {
    button.removeChild(waterEffect);
  }, 900);
}

//Publi Burger Inc
const publiBurgerInc = document.querySelector('#publi-burgerInc');

function clickPublicidad() {
  const numeroBurgerInc = '+5492665139328';
  const mensajeWhatsAppBurgerInc = 'Buenas, acabo de ver el anuncio en NeoTecs y quiero hacerte un pedido!';
  const urlWhastappBurgerInc = `https://wa.me/${numeroBurgerInc}?text=${mensajeWhatsAppBurgerInc}`;
};


function showCard() {
  card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
  <div class="container-card">
  <div class="card">
  <h3>Mensaje Previo</h3>
  <hr>
  <p>Este es un anuncio de pedido a Burguer Inc.
    Si deseas continuar cick aquí.  
  </p>
  <button>Continuar</button>
  </div>
  </div>
  `
  document.bodybody.appendChild(card);
};



// Cookies
document.addEventListener('DOMContentLoaded', function() {
  var cookieMessage = document.getElementById('cookie-message');
  var acceptCookiesButton = document.getElementById('accept-cookies');
  var cookieDetailsBtn = document.getElementById('cookie-details');

  cookieDetailsBtn.addEventListener('click', function() {
    // Redirige al usuario a una página donde se muestran los detalles de las cookies utilizadas
    window.location.href = 'politica_condiciones.html#cookies';
})

  // Verificar si la cookie de aceptación existe
  var hasAcceptedCookies = localStorage.getItem('cookiesAccepted');

  if (!hasAcceptedCookies) {
      cookieMessage.style.display = 'block';
  }

  // Manejar el evento clic del botón Aceptar
  acceptCookiesButton.addEventListener('click', function() {
      // Guardar la aceptación en localStorage
      localStorage.setItem('cookiesAccepted', true);
      // Ocultar el mensaje de cookies
      cookieMessage.style.display = 'none';
  });
});

// Programas drop menú
const botonDemo2 = document.getElementById('despliegue-2');
const menuDemos2 = document.querySelector('.demos-2');

botonDemo2.onclick = function() {
  if (menuDemos2.style.display === '') {
    menuDemos2.style.display = 'block';
  } else {
    menuDemos2.style.display = '';
  }
}

const icon2 = document.querySelector('#chevron-2');
let isRotated = false;

icon2.addEventListener('click', function() {
  if (isRotated) {
    icon2.style.transform = "rotate(0deg)";
    isRotated = false;
  } else {
    icon2.style.transform = "rotate(180deg)";
    isRotated = true;
}
});

// Carrusel slides
const equiposSlides = document.querySelectorAll('#nuestros-equipos .equipo');
const equiposDots = document.querySelectorAll('#nuestros-equipos .dot');
let currentEquipoSlide = 0;
let equipoTouchStartX = 0;
let equipoTouchEndX = 0;

function showEquipoSlide(index) {
  equiposSlides.forEach(slide => slide.style.display = 'none');
  equiposDots.forEach(dot => dot.classList.remove('active'));

  equiposSlides[index].style.display = 'block';
  equiposDots[index].classList.add('active');
}

function nextEquipoSlide() {
  currentEquipoSlide++;
  if (currentEquipoSlide >= equiposSlides.length) {
    currentEquipoSlide = 0;
  }
  showEquipoSlide(currentEquipoSlide);
}

function previousEquipoSlide() {
  currentEquipoSlide--;
  if (currentEquipoSlide < 0) {
    currentEquipoSlide = equiposSlides.length - 1;
  }
  showEquipoSlide(currentEquipoSlide);
}

function setEquipoSlide(index) {
  currentEquipoSlide = index;
  showEquipoSlide(currentEquipoSlide);
}

// Event listeners para los botones de navegación de equipos
document.getElementById('prevBtn').addEventListener('click', previousEquipoSlide);
document.getElementById('nextBtn').addEventListener('click', nextEquipoSlide);

// Event listeners para las dots de equipos
equiposDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    setEquipoSlide(index);
  });
});

// Event listeners para el deslizamiento táctil en dispositivos móviles de equipos
document.getElementById('nuestros-equipos').addEventListener('touchstart', (e) => {
  equipoTouchStartX = e.touches[0].clientX;
});

document.getElementById('nuestros-equipos').addEventListener('touchend', (e) => {
  equipoTouchEndX = e.changedTouches[0].clientX;
  handleEquipoSwipe();
});

function handleEquipoSwipe() {
  const SWIPE_THRESHOLD = 100;

  if (equipoTouchEndX - equipoTouchStartX > SWIPE_THRESHOLD) {
    previousEquipoSlide();
  } else if (equipoTouchStartX - equipoTouchEndX > SWIPE_THRESHOLD) {
    nextEquipoSlide();
  }
}

// Mostrar el primer slide de equipos al cargar la página
showEquipoSlide(currentEquipoSlide);








