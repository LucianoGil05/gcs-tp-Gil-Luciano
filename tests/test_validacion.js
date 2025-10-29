
function ejecutarTestsTelefono() {

    // 1. CP-101.1: es valido  (solo números)
    // verifica que la función retorne true 
    if (validarTelefono("1234567890") !== true) {
        throw new Error("FAIL: Test 1 falló.");
    }

    // 2. CP-101.2: es inválido (contiene letras)
    //  verifica que la función retorne false 
    if (validarTelefono("1234a567") !== false) {
        throw new Error("FAIL: Test 2  falló.");
    }
    
    // 3. CP-101.3: es inválido (contiene símbolos)
    // verifica que la función retorne false 
    if (validarTelefono("123-456") !== false) {
        throw new Error("FAIL: Test 3 falló.");
    }

    return true;
}