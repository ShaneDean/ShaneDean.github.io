// plugins/pixi.client.js
import { defineNuxtPlugin } from '#app'
import * as PIXI from 'pixi.js';
import {AsciiFilter} from '@pixi/filter-ascii';

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.provide('PIXI', PIXI);
    nuxtApp.provide('AsciiFilter', AsciiFilter);
});
