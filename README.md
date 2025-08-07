# 🎁 Amigo Secreto

Una aplicación web sencilla para organizar un sorteo de "Amigo Secreto" entre amigos. Permite ingresar nombres, validarlos y realizar un sorteo aleatorio mostrando el amigo asignado.

## 🧠 ¿Qué hace esta app?

- Permite añadir nombres de amigos a una lista.
- Valida que los nombres no estén vacíos ni contengan números.
- Evita nombres duplicados.
- Muestra la lista actual de participantes.
- Realiza un sorteo aleatorio y muestra el "amigo secreto" seleccionado.

## 🚀 Tecnologías utilizadas

- **HTML5** – Estructura de la interfaz.
- **JavaScript** – Lógica del sorteo, validación de datos y actualización dinámica.
- **CSS (link externo)** – Estilos (debes tener el archivo `style.css`).
- **Google Fonts** – Tipografía personalizada.

## 📂 Estructura del proyecto
/challeng-amigo-secreto/
│
├── index.html        # Página principal
├── app.js            # Lógica en JavaScript
├── style.css         # Estilos (no incluido aquí)
└── assets/           # Imágenes (como amigo-secreto.png y play_circle_outline.png)

## 📦 Cómo usar

1. Clona o descarga este repositorio.
2. Abre `index.html` en tu navegador.
3. Escribe los nombres de tus amigos y haz clic en **"Añadir"**.
4. Una vez que hayas agregado los participantes, haz clic en **"Sortear amigo"**.
5. La app mostrará el nombre del amigo secreto seleccionado.

## ⚠️ Validaciones

- No se permite agregar nombres vacíos o que contengan números.
- No se permite repetir un nombre exactamente igual (aún no distingue tildes o mayúsculas).
- No se permite agregar nombres con números ya que es inválido

## 💡 Ideas para mejorar

- Normalizar acentos y mayúsculas para evitar duplicados similares.
- Hacer que el sorteo asigne un amigo secreto único para cada participante.
- Agregar animaciones o sonidos.
- Permitir exportar el resultado por correo o PDF.



¡Diviértete organizando tu sorteo de amigo secreto! 🎉