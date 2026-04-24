import { Application, Graphics } from 'pixi.js';

const app = new Application();

await app.init({
  width: 800,
  height: 600,
  backgroundColor: 0xeeeeee,
});

document.body.appendChild(app.canvas);

const rectangle = new Graphics().rect(-75, -50, 150, 100).fill(0x3498db);

rectangle.x = app.screen.width / 2;
rectangle.y = app.screen.height / 2;

app.stage.addChild(rectangle);

app.ticker.add(() => {rectangle.rotation += 0.03; });




// -------------------------------------- 2 PART

import axios from 'axios';

axios.get('https://vk.com').then(response => {console.log('VK усспех:', response);}).catch(error => {console.error('VK ОШибка:', error.message);});


// -------------------------------------- 3 PART

axios.get("https://json.geoiplookup.io/").then(response => {console.log("GEOIP Успех:", response.data);}).catch(error => { console.error("GEOIP Ошибка:", error);});