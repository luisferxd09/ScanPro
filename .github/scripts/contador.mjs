// Contador hasta el lanzamiento de ScanPro 1.4.0 (8 nov 2026, 00:00 hora de Colombia).
// Uso: node contador.mjs            → actualiza countdown.svg y escribe dias=N en GITHUB_OUTPUT
//      node contador.mjs lanzar     → deja el README en modo «ya disponible»
import { writeFileSync, readFileSync, appendFileSync, readdirSync } from 'node:fs';
const LANZAMIENTO = Date.UTC(2026, 10, 8, 5, 0, 0);
const dias = Math.max(0, Math.ceil((LANZAMIENTO - Date.now()) / 86400000));
if (process.argv[2] === 'lanzar') {
  let r = readFileSync('README.md', 'utf8');
  r = r.replace(/<!--PROX-->[\s\S]*?<!--\/PROX-->/, `<!--PROX-->
<div align="center">

## 🎉 ¡ScanPro 1.4.0 ya está aquí!

<img src="countdown.svg" alt="ScanPro 1.4.0 ya disponible" width="100%">

**Descárgala hoy gratis** · 📷 Escáner de Google con IA · 🎡 Ruleta VIP · 🔄 Actualizaciones automáticas · 📄 Herramientas de PDF · 🖼️ Quitar fondo · 👋 15 idiomas

<a href="../../releases/latest"><img src="https://img.shields.io/badge/⬇_Descargar_ScanPro_1.4.0-8c7cf7?style=for-the-badge" alt="Descargar ScanPro 1.4.0" height="52"></a>

<sub>Instalación en 3 toques: descarga el APK → ábrelo → permite «Instalar apps desconocidas». Sin cuentas y funciona sin internet.</sub>

</div>
<!--/PROX-->`);
  r = r.replace('versión-1.3.1-8c7cf7', 'versión-1.4.0-8c7cf7').replace(' · 🔜 Próximamente (8 de noviembre)', '');
  writeFileSync('README.md', r);
  // README en otros idiomas: el bloque «ya disponible» va guardado en <!--LISTO … LISTO-->
  for (const f of readdirSync('.').filter(f => /^README\.[a-z]{2}\.md$/.test(f))) {
    let x = readFileSync(f, 'utf8'); const m = x.match(/<!--LISTO\n([\s\S]*?)LISTO-->/);
    if (m) writeFileSync(f, x.replace(/<!--PROX-->[\s\S]*?<!--\/PROX-->/, `<!--PROX-->\n${m[1]}<!--/PROX-->`));
  }
  process.exit(0);
}
// ---------- día del lanzamiento: banner animado que invita a probar la app ----------
if (dias === 0) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="260" viewBox="0 0 900 260" font-family="Inter, Segoe UI, Roboto, Helvetica, Arial, sans-serif">
<defs>
<linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0d0b1e"/><stop offset=".55" stop-color="#1d1650"/><stop offset="1" stop-color="#2a1640"/></linearGradient>
<linearGradient id="tx" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#ffffff"><animate attributeName="stop-color" values="#ffffff;#c7bbff;#f3c0dc;#ffffff" dur="6s" repeatCount="indefinite"/></stop>
<stop offset="1" stop-color="#f3c0dc"><animate attributeName="stop-color" values="#f3c0dc;#ffd6bf;#c7bbff;#f3c0dc" dur="6s" repeatCount="indefinite"/></stop>
</linearGradient>
<radialGradient id="glow" cx=".32" cy=".5" r=".6">
<stop offset="0" stop-color="#8c7cf7" stop-opacity=".55"><animate attributeName="stop-opacity" values=".55;.22;.55" dur="2.6s" repeatCount="indefinite"/></stop>
<stop offset="1" stop-color="#8c7cf7" stop-opacity="0"/>
</radialGradient>
<linearGradient id="shine" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".5" stop-color="#fff" stop-opacity=".2"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
<clipPath id="c"><rect width="900" height="260" rx="28"/></clipPath>
</defs>
<g clip-path="url(#c)">
<rect width="900" height="260" fill="url(#bg)"/>
<rect width="900" height="260" fill="url(#glow)"/>
<g opacity=".9">
<g><rect x="-5" y="-8" width="10" height="18" rx="2.5" fill="#f3c0dc" transform="rotate(25)"><animateTransform attributeName="transform" type="translate" additive="sum" values="96 -20; 88 300" dur="4.6s" repeatCount="indefinite"/></rect></g>
<g><rect x="-5" y="-8" width="10" height="18" rx="2.5" fill="#ffd6bf" transform="rotate(-40)"><animateTransform attributeName="transform" type="translate" additive="sum" values="150 -30; 158 300" dur="5.8s" begin="0.7s" repeatCount="indefinite"/></rect></g>
<g><circle r="5.5" fill="#c7bbff"><animate attributeName="cy" values="-12;300" dur="5.2s" begin="1.4s" repeatCount="indefinite"/><animate attributeName="cx" values="230;244;230" dur="5.2s" begin="1.4s" repeatCount="indefinite"/></circle></g>
<g><rect x="-5" y="-8" width="10" height="18" rx="2.5" fill="#b3c6ff" transform="rotate(65)"><animateTransform attributeName="transform" type="translate" additive="sum" values="330 -20; 322 300" dur="4.9s" begin="2.1s" repeatCount="indefinite"/></rect></g>
<g><circle r="5" fill="#ffe6a6"><animate attributeName="cy" values="-12;300" dur="6s" begin="0.4s" repeatCount="indefinite"/><animate attributeName="cx" values="420;408;420" dur="6s" begin="0.4s" repeatCount="indefinite"/></circle></g>
<g><rect x="-5" y="-8" width="10" height="18" rx="2.5" fill="#c7bbff" transform="rotate(-15)"><animateTransform attributeName="transform" type="translate" additive="sum" values="560 -26; 568 300" dur="5.4s" begin="1.1s" repeatCount="indefinite"/></rect></g>
<g><circle r="5.5" fill="#f3c0dc"><animate attributeName="cy" values="-12;300" dur="4.7s" begin="2.6s" repeatCount="indefinite"/><animate attributeName="cx" values="700;712;700" dur="4.7s" begin="2.6s" repeatCount="indefinite"/></circle></g>
<g><rect x="-5" y="-8" width="10" height="18" rx="2.5" fill="#ffd6bf" transform="rotate(45)"><animateTransform attributeName="transform" type="translate" additive="sum" values="810 -20; 802 300" dur="5.6s" begin="1.8s" repeatCount="indefinite"/></rect></g>
<g><circle r="5" fill="#b3c6ff"><animate attributeName="cy" values="-12;300" dur="6.2s" begin="3.1s" repeatCount="indefinite"/><animate attributeName="cx" values="880;868;880" dur="6.2s" begin="3.1s" repeatCount="indefinite"/></circle></g>
<g><rect x="-5" y="-8" width="10" height="18" rx="2.5" fill="#ffe6a6" transform="rotate(-60)"><animateTransform attributeName="transform" type="translate" additive="sum" values="480 -30; 488 300" dur="5.1s" begin="3.6s" repeatCount="indefinite"/></rect></g>
</g>
<rect x="-300" y="0" width="240" height="260" fill="url(#shine)" transform="skewX(-20)"><animate attributeName="x" from="-300" to="1200" dur="4.5s" repeatCount="indefinite"/></rect>
<g transform="translate(52,72)">
<rect width="80" height="106" rx="12" fill="#ffffff" opacity=".96"><animateTransform attributeName="transform" type="translate" values="0 0; 0 -7; 0 0" dur="3s" repeatCount="indefinite"/></rect>
<rect x="14" y="22" width="52" height="8" rx="4" fill="#8c7cf7"/>
<rect x="14" y="40" width="52" height="6.5" rx="3.25" fill="#ddd6fb"/>
<rect x="14" y="56" width="38" height="6.5" rx="3.25" fill="#ddd6fb"/>
<rect x="14" y="72" width="26" height="6.5" rx="3.25" fill="#ffc7b1"/>
<path d="M-11 20 V6 a14 14 0 0 1 14-14 H13 M69 -8 h10 a14 14 0 0 1 14 14 V20 M93 66 v10 a14 14 0 0 1 -14 14 H79 M-11 66 v10 a14 14 0 0 0 14 14 H13" stroke="#8c7cf7" stroke-width="4" stroke-linecap="round" fill="none" opacity=".8"/>
</g>
<text x="178" y="96" font-size="56" font-weight="900" fill="url(#tx)" letter-spacing="-1">¡YA DISPONIBLE!</text>
<text x="181" y="132" font-size="27" font-weight="800" fill="#ffffff" letter-spacing="1">ScanPro 1.4.0</text>
<text x="181" y="164" font-size="17.5" font-weight="600" fill="#e2dbff">Escáner de IA · 🎡 Ruleta VIP · 🔄 Actualizaciones automáticas · 50+ herramientas</text>
<g transform="translate(180,184)">
<rect width="336" height="48" rx="24" fill="#8c7cf7"><animate attributeName="opacity" values="1;.72;1" dur="1.8s" repeatCount="indefinite"/></rect>
<rect x="0" y="0" width="336" height="48" rx="24" fill="none" stroke="#c7bbff" stroke-width="2" opacity=".7"><animate attributeName="stroke-opacity" values=".7;.2;.7" dur="1.8s" repeatCount="indefinite"/></rect>
<text x="168" y="31" text-anchor="middle" font-size="20" font-weight="800" fill="#241d4f">⬇ Descárgala y pruébala gratis</text>
</g>
<text x="700" y="238" font-size="14" font-weight="600" fill="#a99fd6">sale también en Google Play</text>
</g>
</svg>
`;
  writeFileSync('countdown.svg', svg);
  if (process.env.GITHUB_OUTPUT) appendFileSync(process.env.GITHUB_OUTPUT, 'dias=0\n');
  console.log('días restantes: 0 — banner de lanzamiento listo');
  process.exit(0);
}
const big = String(dias), unidad = dias === 1 ? 'día' : 'días';
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
<text x="250" y="168" text-anchor="middle" font-size="150" font-weight="900" fill="url(#tx)" letter-spacing="-4">${big}</text>
<text x="250" y="222" text-anchor="middle" font-size="26" font-weight="800" fill="#c7bbff" letter-spacing="10">${unidad.toUpperCase()}</text>
<line x1="470" y1="50" x2="470" y2="210" stroke="#c7bbff" stroke-opacity=".25" stroke-width="2"/>
<text x="510" y="78" font-size="20" font-weight="800" fill="#f3c0dc" letter-spacing="6">PRÓXIMAMENTE · BETA</text>
<text x="510" y="132" font-size="46" font-weight="900" fill="#ffffff" letter-spacing="-1">ScanPro 1.4.0</text>
<text x="510" y="174" font-size="21" font-weight="600" fill="#e2dbff">Sale el 8 de noviembre de 2026</text>
<text x="510" y="208" font-size="18" font-weight="600" fill="#a99fd6">Y muy pronto en Google Play</text>
<circle cx="860" cy="40" r="6" fill="#f3c0dc"><animate attributeName="opacity" values="1;.2;1" dur="1.6s" repeatCount="indefinite"/></circle>
</g></svg>
`;
writeFileSync('countdown.svg', svg);
if (process.env.GITHUB_OUTPUT) appendFileSync(process.env.GITHUB_OUTPUT, `dias=${dias}\n`);
console.log('días restantes:', dias);
