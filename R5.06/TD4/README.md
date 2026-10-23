# Monument Atlas

An interactive 3D globe of 32 world monuments, each hand-modelled in low-poly 3D and placed at its real GPS position. Built for TD4 (IA) of *Sensibilisation à la programmation multimédia*, combining the course stack: **Three.js** (3D / WebGL), **Leaflet.js** (2D map), the **Geolocation** and **DeviceOrientation** HTML5 APIs, and an AI guide.

## Run it

It is split into HTML, CSS and JavaScript files, with no build step.

- Locally: open `index.html` in a browser (or `npx serve .` for a local server).
- GitHub Pages: push this folder to a repo, then *Settings → Pages → Deploy from branch → main / root*. Geolocation and the gyroscope need HTTPS, which Pages provides.

## What you can do

| Feature | How |
|---|---|
| Spin and zoom the Earth | Drag, scroll / pinch. Double-click a spot to zoom there |
| Visit a monument | Click it on the globe, the index, the flat map or its label. The camera flies along a great circle, then dives into a street-level close-up |
| Orbit a monument | In close-up: drag to circle it, scroll to zoom, scroll far out to return to the globe |
| Real day / night | The terminator, city lights and each monument's local time follow the real sun. The slider shifts the time ±12 h |
| Tour | Flies through every monument (or only the filtered ones) automatically |
| Quiz | 6 rounds: click where you think a monument is. Scored by great-circle (haversine) distance |
| Skyline | Every monument's height drawn to the same scale |
| Locate me | Places you on the globe and lists distances to each monument. Click *Clear location* to turn it off |
| Gyro | On a phone, tilt to steer the globe (compass = longitude, tilt = latitude) |
| Ask the guide | Ask Claude questions about the selected monument (only when opened as a claude.ai artifact) |
| Keyboard | ← → browse, T tour, Q quiz, R spin, Esc close |

## Monuments

- **Europe:** Eiffel Tower, Colosseum, Big Ben, Saint Basil's Cathedral, Parthenon, Leaning Tower of Pisa, Sagrada Família, Neuschwanstein Castle, Stonehenge, Brandenburg Gate, Hagia Sophia
- **Asia:** Forbidden City, Taj Mahal, Burj Khalifa, Angkor Wat, Petra Treasury, Great Wall (Jiayuguan), Petronas Towers, and in Japan: Himeji Castle, Itsukushima Torii, Tokyo Skytree, Kinkaku-ji
- **Africa:** Great Pyramid of Giza, Great Mosque of Djenné
- **Americas:** Statue of Liberty, Golden Gate Bridge, Christ the Redeemer, Chichén Itzá, Machu Picchu, CN Tower
- **Oceania:** Sydney Opera House, Moai of Rapa Nui

## How it works

- **Earth texture** – generated at load time on a `<canvas>` from embedded Natural Earth data (`world-atlas`, 1:50m land, 1:110m borders). Land is coloured by climate band, plus a night texture with procedural city lights and an ocean specular mask.
- **Earth shader** – a custom `ShaderMaterial` mixes day/night textures along the terminator using the subsolar point computed from the date (solar declination + UTC hour angle), adds ocean glint and an atmospheric rim.
- **Models** – each monument is built from Three.js primitives (lathes for domes and spires, extrusions for star plans, tubes for cables) on a themed ground disc (water, sand, lawn, forest, city). Meshes are merged per material with `BufferGeometryUtils` so 32 detailed models stay fast on phones. Monuments that sit close together (Kyoto and Himeji, London and Stonehenge) are capped in size so they never overlap.
- **Coordinates** – `ll2v(lat, lon)` converts latitude/longitude to a point on the unit sphere matching the equirectangular texture; `v2ll` does the inverse for clicks. Each monument is oriented along the local surface normal.
- **Camera** – four modes: `globe` (OrbitControls around the centre), `fly` (quaternion slerp along a great circle with an altitude bump), `tween` (dive / climb), `inspect` (custom orbit around a monument with the local vertical as "up").
- **Leaflet minimap** – country polygons drawn as vector layers (no tile server needed), synced with the camera's sub-point and visible-cap circle. A *Tiles* toggle adds CARTO dark tiles when online.

## Ideas to go further

- Gesture control with **ml5.js** HandPose (point to rotate, pinch to zoom), as suggested in the course.
- Replace the hand-built models with glTF models loaded with `GLTFLoader`.
- Fetch live data from a REST API, e.g. weather at each monument (Open-Meteo) or Wikipedia summaries.
- Location-based AR: show the direction and distance of the nearest monument through the phone camera.

## Credits

Map data: Natural Earth via [world-atlas](https://github.com/topojson/world-atlas) (public domain). Libraries: Three.js r147, Leaflet 1.9.4. Optional tiles © OpenStreetMap contributors © CARTO.
