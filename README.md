# repository.xbmc.old
Kodi 19 add on repository for kodi 21
# 📡 Custom Proxy Repository Endpoint for Kodi 19 (Matrix)

[![Kodi Version](https://img.shields.io/badge/Kodi-19.x%20Matrix-blue.svg)](https://kodi.tv)
[![License](https://img.shields.io/badge/License-GPL--2.0--or--later-green.svg)](https://www.gnu.org/licenses/gpl-2.0.html)
[![Mirror](https://img.shields.io/badge/Mirror-XMission-orange.svg)](https://mirrors.xmission.com)

Este repositorio actúa como un **gestor de infraestructura híbrida (Proxy Endpoint)** diseñado específicamente para la rama de **Kodi 19 (Matrix)**. Su arquitectura desacopla el flujo de sincronización de metadatos del almacenamiento de binarios pesados, utilizando la red académica de alta velocidad de **XMission** y la red troncal oficial de Kodi.

---

## 🏗️ Arquitectura del Sistema

A diferencia de los repositorios convencionales que sobrecargan servidores privados o dependen de limitaciones de GitHub, este diseño implementa un enrutamiento asimétrico:

1. **Control de Integridad e Indexación (`<info>` / `<checksum>`)**: Se delega la verificación estructural a los metadatos globales (`addons.xml`) sincronizados dinámicamente.
2. **Distribución de Carga (`<datadir>`)**: Los paquetes binarios comprimidos (`.zip`) se descargan bajo demanda utilizando las redes de distribución académica perimetral de **XMission**, mitigando cuellos de botella y bloqueos por exploración de directorios raíz (*folder listing locks*).

