<template>
  <div class="h-full" >
    <keep-alive>
      <div ref="pixiContainer"></div>
    </keep-alive>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <UModals />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
const { $PIXI , $AsciiFilter } = useNuxtApp();
const pixiContainer = ref(null);

onMounted(async () => {
  const app = new $PIXI.Application();
  await app.init({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundAlpha: 0,
    autoDensity: true,
    resolution: window.devicePixelRatio,
  });
  app.renderer.resize(window.innerWidth, window.innerHeight);
  pixiContainer.value.appendChild(app.canvas);
  app.canvas.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -100;
  `;
  window.addEventListener('resize', () => {
    app.renderer.resize(window.innerWidth, window.innerHeight);
  });
  app.stage.filters = [new $AsciiFilter()];

  // Load the star texture
  const starTexture = await $PIXI.Assets.load('/star.png');
  const starAmount = 1000;
  let cameraZ = 0;
  const fov = 20;
  const baseSpeed = 0.025;
  let speed = 0;
  let warpSpeed = 0;
  const starStretch = 5;
  const starBaseSize = 0.05;
  const stars = [];

  for (let i = 0; i < starAmount; i++) {
    const star = {
      sprite: new $PIXI.Sprite(starTexture),
      z: 0,
      x: 0,
      y: 0,
    };
    star.sprite.anchor.x = 0.5;
    star.sprite.anchor.y = 0.7;
    randomizeStar(star, true);
    app.stage.addChild(star.sprite);
    stars.push(star);
  }

  function speedCurve(t) {
    return -Math.pow(t - 1, 2) + 1;
  }

  let t = 0;
  setInterval(() => {
    warpSpeed = speedCurve(t);
    t += 0.01;
    if (t > 1) t = 0;
  }, 500);

  app.ticker.add((time) => {
    speed += (warpSpeed - speed) / 20;
    cameraZ += time.deltaTime * 10 * (speed + baseSpeed);
    stars.forEach(star => {
      if (star.z < cameraZ) randomizeStar(star);

      const z = star.z - cameraZ;
      star.sprite.x = star.x * (fov / z) * app.renderer.screen.width + app.renderer.screen.width / 2;
      star.sprite.y = star.y * (fov / z) * app.renderer.screen.width + app.renderer.screen.height / 2;

      const dxCenter = star.sprite.x - app.renderer.screen.width / 2;
      const dyCenter = star.sprite.y - app.renderer.screen.height / 2;
      const distanceCenter = Math.sqrt(dxCenter * dxCenter + dyCenter * dyCenter);
      const distanceScale = Math.max(0, (2000 - z) / 2000);

      star.sprite.scale.x = distanceScale * starBaseSize;
      star.sprite.scale.y = distanceScale * starBaseSize + (distanceScale * speed * starStretch * distanceCenter) / app.renderer.screen.width;
      star.sprite.rotation = Math.atan2(dyCenter, dxCenter) + Math.PI / 2;
    });
  });

  function randomizeStar(star, initial = false) {
    star.z = initial ? Math.random() * 2000 : cameraZ + Math.random() * 1000 + 2000;
    const deg = Math.random() * Math.PI * 2;
    const distance = Math.random() * 60 + 1;
    star.x = Math.cos(deg) * distance;
    star.y = Math.sin(deg) * distance;
  }
});
</script>
