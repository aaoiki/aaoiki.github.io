import WebFontLoader from 'webfontloader';

import ThemeToggler from "./theme-toggler";
import '../css/index.css';

new ThemeToggler("theme-toggler-element").keep();

WebFontLoader.load({
  google: {
    families: [
      'Open+Sans:400,400i,600',
      'Merriweather:700',
      'Amiri:400,700',
      'Ubuntu+Mono:400,400i'
    ]
  }
});
