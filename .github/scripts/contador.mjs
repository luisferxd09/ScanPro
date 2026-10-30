// Contador hasta el lanzamiento de ScanPro 1.4.0 (8 nov 2026, 00:00 hora de Colombia).
// Uso: node contador.mjs            → actualiza countdown.svg y escribe dias=N en GITHUB_OUTPUT
//      node contador.mjs lanzar     → deja el README en modo «ya disponible»
import { writeFileSync, readFileSync, appendFileSync } from 'node:fs';
const LANZAMIENTO = Date.UTC(2026, 10, 8, 5, 0, 0);
const dias = Math.max(0, Math.ceil((LANZAMIENTO - Date.now()) / 86400000));
if (process.argv[2] === 'lanzar') {
  let r = readFileSync('README.md', 'utf8');
  r = r.replace(/<!--PROX-->[\s\S]*?<!--\/PROX-->/, `<!--PROX-->
<div align="center">

## 🎉 ¡ScanPro 1.4.0 ya está aquí!

<img src="countdown.svg" alt="ScanPro 1.4.0 ya disponible" width="100%">

**Escáner de Google con IA · Herramientas de PDF · Firmar y tachar · Traducir · Carpetas de vida · Gastos e inventario · Más de 50 herramientas**

<a href="../../releases/latest"><img src="https://img.shields.io/badge/⬇_Descargar_ScanPro_1.4.0-8c7cf7?style=for-the-badge" alt="Descargar ScanPro 1.4.0" height="44"></a>

</div>
<!--/PROX-->`);
  r = r.replace('versión-1.3.1-8c7cf7', 'versión-1.4.0-8c7cf7').replace(' · 🔜 Próximamente (8 de noviembre)', '');
  writeFileSync('README.md', r);
  process.exit(0);
}
const listo = dias === 0, big = listo ? '¡YA!' : String(dias), unidad = listo ? 'disponible' : dias === 1 ? 'día' : 'días';
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="260" viewBox="0 0 900 260" font-family="Inter, Segoe UI, Roboto, Helvetica, Arial, sans-serif">
<defs>
<linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0d0b1e"/><stop offset=".55" stop-color="#1d1650"/><stop offset="1" stop-color="#2a1640"/></linearGradient>
<linearGradient id="tx" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ffffff"/><stop offset=".6" stop-color="#c7bbff"/><stop offset="1" stop-color="#f3c0dc"/></linearGradient>
<radialGradient id="glow" cx=".28" cy=".5" r=".45"><stop offset="0" stop-color="#8c7cf7" stop-opacity=".55"/><stop offset="1" stop-color="#8c7cf7" stop-opacity="0"/></radialGradient>
<linearGradient id="shine" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".5" stop-color="#fff" stop-opacity=".18"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
<clipPath id="c"><rect width="900" height="260" rx="28"/></clipPath>
</defs>
<g clip-path="url(#c)">
<rect width="900" height="260" fill="url(#bg)"/><rect width="900" height="260" fill="url(#glow)"/>
<rect x="-300" y="0" width="240" height="260" fill="url(#shine)" transform="skewX(-20)"><animate attributeName="x" from="-300" to="1200" dur="4s" repeatCount="indefinite"/></rect>
<text x="250" y="${listo ? 160 : 168}" text-anchor="middle" font-size="${listo ? 110 : 150}" font-weight="900" fill="url(#tx)" letter-spacing="-4">${big}</text>
<text x="250" y="222" text-anchor="middle" font-size="26" font-weight="800" fill="#c7bbff" letter-spacing="10">${unidad.toUpperCase()}</text>
<line x1="470" y1="50" x2="470" y2="210" stroke="#c7bbff" stroke-opacity=".25" stroke-width="2"/>
<text x="510" y="78" font-size="20" font-weight="800" fill="#f3c0dc" letter-spacing="6">${listo ? 'YA DISPONIBLE' : 'PRÓXIMAMENTE · BETA'}</text>
<text x="510" y="132" font-size="46" font-weight="900" fill="#ffffff" letter-spacing="-1">ScanPro 1.4.0</text>
<text x="510" y="174" font-size="21" font-weight="600" fill="#e2dbff">${listo ? 'Descárgala desde Releases' : 'Sale el 8 de noviembre de 2026'}</text>
<text x="510" y="208" font-size="18" font-weight="600" fill="#a99fd6">${listo ? 'Firma · Word · PDF con contraseña · English' : 'Y muy pronto en Google Play'}</text>
<circle cx="860" cy="40" r="6" fill="#f3c0dc"><animate attributeName="opacity" values="1;.2;1" dur="1.6s" repeatCount="indefinite"/></circle>
</g></svg>
`;
writeFileSync('countdown.svg', svg);
if (process.env.GITHUB_OUTPUT) appendFileSync(process.env.GITHUB_OUTPUT, `dias=${dias}\n`);
console.log('días restantes:', dias);
