<?php
// Verificar si se enviaron los datos del formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los valores de configuración ingresados por el usuario
    $ip = $_POST["ip"];
    $mask = $_POST["mask"];
    $gateway = $_POST["gateway"];

    // Realizar la configuración del dispositivo utilizando SNMP
    if (setDeviceIP($ip, $mask, $gateway)) {
        echo "La configuración de IP se ha aplicado correctamente.";
    } else {
        echo "Error al aplicar la configuración de IP.";
    }
}

// Función para configurar la IP del dispositivo utilizando SNMP
function setDeviceIP($ip, $mask, $gateway) {
    // Configurar los valores de conexión SNMP
    $deviceIP = "192.168.1.1";  // Dirección IP del dispositivo
    $community = "public";      // Comunidad SNMP (configúrala según la configuración de tu dispositivo)

    // Conectarse al dispositivo
    $session = new SNMP(SNMP::VERSION_2c, $deviceIP, $community);

    // Realizar la configuración de IP utilizando SNMP
    $result = $session->set([
        "ipAdEntAddr.1" => $ip,             // OID para la dirección IP
        "ipAdEntNetMask.1" => $mask,        // OID para la máscara de red
        "ipRouteNextHop.0.0.0.0" => $gateway // OID para la puerta de enlace
    ]);

    // Cerrar la sesión SNMP
    $session->close();

    // Verificar el resultado de la configuración
    return ($result === true);
}
?>
