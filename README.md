<div align="center">

<img src="docs/banner.png" alt="ScanPro — Escáner de documentos para Android" width="100%">

<br>

[![Versión](https://img.shields.io/badge/versión-1.3.0-8c7cf7?style=for-the-badge)](../../releases/latest)
[![Android](https://img.shields.io/badge/Android-7.0+-f3c0dc?style=for-the-badge&logo=android&logoColor=white)](../../releases/latest)
[![Sin internet](https://img.shields.io/badge/funciona-sin_internet-ffd6bf?style=for-the-badge&logo=wifi&logoColor=white)](#-privacidad)
[![OCR](https://img.shields.io/badge/OCR-español-c7bbff?style=for-the-badge)](#-lo-que-puede-hacer)

### Convierte papel en PDF nítidos en segundos 📄✨

**Toma la foto · ScanPro encuentra la hoja, la endereza y la deja como escaneada.**

<br>

<a href="../../releases/latest">
  <img src="https://img.shields.io/badge/⬇_Descargar_APK-8c7cf7?style=for-the-badge&logoColor=white" alt="Descargar APK" height="44">
</a>

</div>

<br>

## 📱 Así se ve

<div align="center">
<table>
  <tr>
    <td align="center"><img src="docs/inicio.jpg" width="170"><br><sub><b>Inicio</b></sub></td>
    <td align="center"><img src="docs/camara.jpg" width="170"><br><sub><b>Encuadre automático</b></sub></td>
    <td align="center"><img src="docs/filtros.jpg" width="170"><br><sub><b>Filtros</b></sub></td>
    <td align="center"><img src="docs/documento.jpg" width="170"><br><sub><b>Tu documento</b></sub></td>
    <td align="center"><img src="docs/herramientas.jpg" width="170"><br><sub><b>Herramientas</b></sub></td>
  </tr>
</table>
</div>

<br>

## 🌸 Lo que puede hacer

<table>
<tr>
<td width="50%" valign="top">

### 📸 Escanear
- **Encuadre automático**: detecta la hoja y la recorta sola
- **Corrige la perspectiva**: la foto queda derecha, como de escáner
- **Captura automática** cuando la hoja está quieta y enfocada
- **Elige el mejor lente** del teléfono para documentos
- Avisa si la foto salió **borrosa** y endereza las hojas **de lado**

</td>
<td width="50%" valign="top">

### 🎨 Mejorar
- **Sin sombras** (mágico), **Mejorado**, **Grises**, **Blanco y negro**
- Ajusta a mano **brillo, contraste, saturación y nitidez**
- Recorte manual con **lupa** para las esquinas
- Gira, reordena y vuelve a editar cualquier página

</td>
</tr>
<tr>
<td width="50%" valign="top">

### 🔤 Leer texto
- **OCR en español** (y español + inglés)
- Copia, comparte o guarda el texto como **TXT**
- Busca documentos por las palabras que contienen

</td>
<td width="50%" valign="top">

### 📤 Exportar y compartir
- **PDF** (A4, carta u original), **Word (DOCX)**, **JPG, PNG, WEBP** y **ZIP**
- Comprime **sin pérdida visible** de calidad
- Primero eliges el formato, después se abre el menú de **compartir de Android**
- Los archivos quedan en **Descargas › ScanPro**

</td>
</tr>
<tr>
<td width="50%" valign="top">

### 🗂️ Organizar
- **Carpetas** para agrupar tus escaneos
- Renombrar, **combinar** documentos, favoritos
- **Copia de seguridad** y restauración de todo

</td>
<td width="50%" valign="top">

### 💜 Hecha con cariño
- Diseño suave en **tonos pastel**, con **tema claro y oscuro**
- **Animaciones** fluidas, inspiradas en iPhone
- **Modo ligero** automático en teléfonos de gama baja

</td>
</tr>
</table>

<br>

## ⬇️ Instalación

> [!TIP]
> No necesitas Play Store ni cuenta: solo el archivo **APK**.

1. Ve a **[Releases](../../releases/latest)** y descarga **`ScanPro.apk`**.
2. Ábrelo en tu teléfono.
3. Si Android lo pide, permite **«Instalar apps desconocidas»**.
4. Si aparece Play Protect, toca **Más detalles › Instalar de todos modos** (avisa solo porque la app no viene de la Play Store).
5. ¡Listo! Abre **ScanPro** y toma tu primera foto 📸

> [!NOTE]
> Las versiones nuevas se instalan **encima** de la anterior y conservan tus documentos.
> Si desinstalas la app, sus documentos se borran: haz antes una **copia de seguridad** en *Ajustes*.

<br>

## 🔒 Privacidad

<div align="center">

| | |
|:---:|:---|
| 📴 | **Funciona sin internet**: la app completa y el OCR van dentro del APK |
| 🏠 | Tus fotos y documentos **nunca salen de tu teléfono** |
| 🙅 | **Sin cuentas, sin anuncios, sin analítica** |
| 📷 | La cámara solo se enciende cuando tocas **«Tomar foto»** |

</div>

<br>

## 🛠️ Cómo está hecha

<details>
<summary><b>Ver detalles técnicos</b></summary>

<br>

| Parte | Tecnología |
|---|---|
| App | TypeScript, sin frameworks, con su propio motor de imagen |
| Procesado de imagen | Web Worker + OffscreenCanvas: detección de bordes, homografía, filtros |
| Datos | IndexedDB, todo guardado en el teléfono |
| OCR | Tesseract.js 5 (español e inglés), incluido en el APK |
| PDF | Generador propio que inserta los JPG sin recomprimir |
| Word | DOCX con imágenes y texto reconocido |
| Android | Java + WebView, con los archivos servidos localmente (`WebViewAssetLoader`) |
| Compilación | GitHub Actions genera el APK firmado en cada cambio |

**Compilar tú mismo:** cada vez que subes un cambio, GitHub Actions compila el APK.
Lo encuentras en **[Actions](../../actions)** › la última compilación › **Artifacts** › `ScanPro-apk`.

</details>

<br>

## 📝 Novedades

<details open>
<summary><b>v1.3.0</b> · App Android nativa</summary>

- La app completa va **dentro del APK**: funciona **sin internet** y sin navegador
- **OCR incluido**, también sin conexión
- Guarda en **Descargas › ScanPro** y comparte con el menú de Android
- Nuevo **ícono adaptativo**

</details>

<details>
<summary><b>v1.2.0</b> · Fotos más nítidas</summary>

- Elige automáticamente el **mejor lente** para documentos
- **Zoom**, toque para **enfocar** y foto con la resolución completa del sensor
- Aviso de **foto borrosa** y **giro automático** de páginas de lado

</details>

<details>
<summary><b>v1.1.0</b> · Más rápida y más linda</summary>

- **Obturador instantáneo** (antes 5–7 s)
- **Encuadre automático** más rápido y preciso
- Nueva **paleta pastel**, nuevo logo y **animaciones estilo iPhone**
- Optimizada para **teléfonos de gama baja**

</details>

<br>

<div align="center">

<img src="docs/logo.png" width="64" alt="">

**ScanPro** · hecho con 💜 en Colombia

<sub>Si te gusta, deja una ⭐ al repositorio</sub>

</div>
