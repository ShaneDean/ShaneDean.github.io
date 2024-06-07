<script setup lang="ts">
// 暂时废弃
import { onMounted, ref } from 'vue'
import * as pdfjsLib from "pdfjs-dist";

// Setting worker path to worker bundle.
pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.mjs";

const canvasRef = ref(null);

onMounted(() => {
  if (process.client) { // 确保只在客户端执行
    const loadingTask = pdfjsLib.getDocument('/resume.pdf');
    loadingTask.promise.then(pdf => {
      console.log('PDF loaded');

      // 获取第一页
      pdf.getPage(1).then(page => {
        console.log('Page loaded');

        const scale = 1.5;
        const viewport = page.getViewport({ scale });

        // 准备 canvas 使用 PDF 页面的尺寸
        const canvas = canvasRef.value;
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        // 渲染 PDF 页面到 canvas 上下文
        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };
        const renderTask = page.render(renderContext);
        renderTask.promise.then(() => {
          console.log('Page rendered');
        });
      });
    }, reason => {
      console.error(reason);
    });
  }
});
</script>

<template>
  <div>
    <canvas ref="canvasRef"></canvas>
  </div>
</template>

<style scoped>
</style>
