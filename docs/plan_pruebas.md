

| ID Caso | Descripción | Entrada | Resultado Esperado |
| :--- | :--- | :--- | :--- |
| CP-101.1 | Validación correcta (solo números) | "1234567890" | TRUE |
| CP-101.2 | Rechazo de letras | "123a456" | FALSE |
| CP-101.3 | Rechazo de símbolos | "123-456" | FALSE |