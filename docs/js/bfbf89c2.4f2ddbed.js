(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["bfbf89c2"],{2514:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("section",{staticClass:"page-header"},[n("div",{staticClass:"text-h1 project-name"},[e._v(e._s(e.title))]),n("div",{staticClass:"text-h2 project-tagline"},[e._v(e._s(e.tagline))]),n("div",{staticClass:"byline"},[e._v(e._s(e.byline)),n("a",{attrs:{href:e.bylineTwitter,target:"_blank",title:"Twitter"}},[n("i",{staticClass:"fab fa-twitter"})])]),n("div",{staticClass:"quasar"},[e._v(e._s(e.quasarDesc))]),n("div",{staticClass:"donate"},[n("a",{attrs:{href:e.donateUrl,target:"_blank",title:"Donate"}},[n("i",{staticClass:"fas fa-heart",staticStyle:{color:"red"}})])]),n("q-btn",{staticClass:"btn",attrs:{type:"a",href:e.locationUrl,target:"_blank",label:"View on GitHub","no-caps":"",flat:""}}),n("q-btn",{staticClass:"btn",attrs:{to:"/docs",label:"Docs","no-caps":"",flat:""}}),n("q-btn",{staticClass:"btn",attrs:{to:"/examples",label:"Examples","no-caps":"",flat:""}}),n("q-btn",{staticClass:"btn",attrs:{to:"/demo",label:"Interactive Demo","no-caps":"",flat:""}}),n("q-btn",{staticClass:"btn",attrs:{type:"a",href:e.donateUrl,target:"_blank",label:"Donate","no-caps":"",flat:""}})],1),n("main",{staticClass:"flex flex-start justify-center inset-shadow"},[n("div",{staticClass:"q-pa-md col-12-sm col-8-md col-6-lg inset-shadow",staticStyle:{width:"100%",height:"3px"}}),n("div",{staticClass:"q-pa-md col-12-sm col-8-md col-6-lg shadow-1",staticStyle:{"max-width":"800px",width:"100%"}},[e._t("default")],2)])])},o=[],s={name:"Hero",data:function(){return{title:"QIconPicker",tagline:"Icon picker for your Quasar apps",byline:"Created and maintained by Jeff Galbraith",bylineTwitter:"https://twitter.com/jgalbraith64",quasarDesc:"A Quasar Framework Component and App Extension",locationUrl:"https://github.com/quasarframework/quasar-ui-qiconpicker",donateUrl:"https://github.com/sponsors/hawkeye64"}}},i=s,r=n("2877"),c=Object(r["a"])(i,a,o,!1,null,null,null);t["a"]=c.exports},"8b24":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("hero",[n("q-markdown",{attrs:{src:e.markdown,toc:""},on:{data:e.onToc}}),n("json-api-viewer",{attrs:{title:"QIconPicker API",json:e.json}}),n("q-markdown",[e._v("\n# Donate\nIf you appreciate the work that went into this, please consider donating to [Quasar](https://donate.quasar.dev) or [Jeff](https://github.com/sponsors/hawkeye64).\n\n---\nThis page created with [QMarkdown](https://quasarframework.github.io/app-extension-qmarkdown), another great Quasar App Extension.\n    ")]),n("q-page-scroller",{attrs:{position:"bottom-right","scroll-offset":150,offset:[18,18]}},[n("q-btn",{class:{"text-black bg-grey-4":e.$q.dark.isActive,"text-white bg-primary":!e.$q.dark.isActive},attrs:{fab:"",icon:"keyboard_arrow_up"}})],1)],1)},o=[],s=n("2514"),i='QIconPicker\n===\n\nQIconPicker is an icon picker for your Quasar application. It allows you to have an icon selector embedded in your app. It uses a [Quasar Icon Set](https://quasar.dev/options/quasar-icon-sets) or you can pass in an array of objects defining the icons to be displayed.\n\n# Installation Types\n\n## Quasar CLI\n\n**App Extension**\n\n:::\n#### Install\n\nTo add as an App Extension to your Quasar application, run the following (in your Quasar app folder):\n```\nquasar ext add @quasar/qiconpicker\n```\n\n#### Uninstall\n\nTo remove as an App Extension from your Quasar application, run the following (in your Quasar app folder):\n```\nquasar ext remove @quasar/qiconpicker\n```\n\n#### Describe\nWhen installed as an App Extension, you can use `quasar describe QIconPicker`\n:::\n\n**OR**:\n\n:::\nCreate and register a boot file:\n\n```js\nimport Vue from \'vue\'\nimport Plugin from \'@quasar/quasar-ui-qiconpicker\'\nimport \'@quasar/quasar-ui-qiconpicker/dist/index.css\'\n\nVue.use(Plugin)\n```\n:::\n\n**OR**:\n\n:::\n```html\n<style src="@quasar/quasar-ui-qiconpicker/dist/index.css"></style>\n\n<script>\nimport { Component as QIconPicker } from \'@quasar/quasar-ui-qiconpicker\'\n\nexport default {\n  components: {\n    QIconPicker\n  }\n}\n<\/script>\n```\n:::\n\n### Caching\n\nIf you are using a large icon set and find it is taking too long to load, you can pre-cache the UMD variant.\n\nYou can do this by adding to your **App.vue** (or, any other appropriate) file, one or more of the UMD icon-set variants:\n\n:::\n```html\n<template>\n  <div id="q-app">\n    <router-view />\n  </div>\n</template>\n\n<script>\nimport \'@quasar/quasar-ui-qiconpicker/dist/icon-set/eva-icons.umd.js\'\nimport \'@quasar/quasar-ui-qiconpicker/dist/icon-set/fontawesome-v5.umd.js\'\nimport \'@quasar/quasar-ui-qiconpicker/dist/icon-set/ionicons-v4.umd.js\'\nimport \'@quasar/quasar-ui-qiconpicker/dist/icon-set/material-icons-outlined.umd.js\'\nimport \'@quasar/quasar-ui-qiconpicker/dist/icon-set/material-icons-round.umd.js\'\nimport \'@quasar/quasar-ui-qiconpicker/dist/icon-set/material-icons-sharp.umd.js\'\nimport \'@quasar/quasar-ui-qiconpicker/dist/icon-set/material-icons.umd.js\'\nimport \'@quasar/quasar-ui-qiconpicker/dist/icon-set/mdi-v4.umd.js\'\nimport \'@quasar/quasar-ui-qiconpicker/dist/icon-set/themify.umd.js\'\nexport default {\n  name: \'App\'\n}\n<\/script>\n\n<style>\n</style>\n```\n:::\n\nDon\'t add them all (unless you have this requirement). Remove the ones from above you won\'t be needing.\n\n## Vue CLI project\n\n:::\n```js\nimport Vue from \'vue\'\nimport Plugin from \'@quasar/quasar-ui-qiconpicker\'\nimport \'@quasar/quasar-ui-qiconpicker/dist/index.css\'\n\nVue.use(Plugin)\n```\n:::\n\n**OR**:\n\n:::\n```html\n<style src="@quasar/quasar-ui-qiconpicker/dist/index.css"></style>\n\n<script>\nimport { Component as QIconPicker } from \'@quasar/quasar-ui-qiconpicker\'\n\nexport default {\n  components: {\n    QIconPicker\n  }\n}\n<\/script>\n```\n:::\n\n## UMD variant\n\nExports `window.QIconPicker`.\n\nAdd the following tag(s) after the Quasar ones:\n\n:::\n```html\n<head>\n  \x3c!-- AFTER the Quasar stylesheet tags: --\x3e\n  <link href="https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qiconpicker/dist/index.min.css" rel="stylesheet" type="text/css">\n</head>\n<body>\n  \x3c!-- at end of body, AFTER Quasar script(s): --\x3e\n  <script src="https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qiconpicker/dist/index.umd.min.js"><\/script>\n</body>\n```\nIf you need the RTL variant of the CSS, then go for the following (instead of the above stylesheet link):\n```html\n<link href="https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qiconpicker/dist/index.rtl.min.css" rel="stylesheet" type="text/css">\n```\n:::\n\nFor **UMD** variants only, there is also a caveat:\n\nYou must **also** load the QIconPicker icon set for the icon font(s) that you have loaded:\n\n```html\n<script src="https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qiconpicker/dist/icon-set/material-icons.umd.js"><\/script>\n```\n\nChoices are:\n1. eva-icons.umd.js\n2. fontawesome-v5.umd.js\n3. ionicons-v4.umd.js\n4. material-icons-outlined.umd.js\n5. material-icons-round.umd.js\n6. material-icons-sharp.umd.js\n7. material-icons.umd.js\n8. mdi-v4-outlined.umd.js\n9. themify.umd.js\n\n# Codepen\n[UMD Example on Codepen](https://codepen.io/Hawkeye64/pen/vYYYewG)\n\n# Docs\nCan be found [here](https://quasarframework.github.io/quasar-ui-qiconpicker).\n\n# Examples\nCan be found [here](https://quasarframework.github.io/quasar-ui-qiconpicker/examples).\n\n# Interactive Demo\nCan be found [here](https://quasarframework.github.io/quasar-ui-qiconpicker/demo).\n\n# Demo (source) Project\nCan be found [here](https://github.com/quasarframework/quasar-ui-qiconpicker/tree/master/demo).\n\n\n# Working with QIconPicker\n\nQIconPicker will work with any of the defined [Quasar Icon Sets](https://quasar.dev/options/quasar-icon-sets). However, for this to work properly, you must make sure the icon set is included in your `quasar.conf.js > extras`.\n\n::: warning\nMost icon sets are very large which may cause performance issues.\n:::\n\n::: tip\nIn order to work properly, QIconPicker needs a specified height in it\'s style (or parent style).\n:::\n\n# Categories (tags)\nAdded in **v1.0.7**, you can now get categories (tags) for the associated loaded icon set.\n\nAs of this writing, the **Eva** and **Material Design** icon sets are done. The **Fontawesome v5** icon set is partially done. If you need an icon set that **needs** to be completed and is not, PRs are welcomed or DM me on the Discord channel.\n\nYou can get the tags viw the `tag` event.\n\n```html\n  <q-icon-picker\n    v-model="name"\n    :filter="filter"\n    :icon-set="iconSet"\n    :tags="tags"\n    font-size="3em"\n    tooltips\n    :pagination.sync="pagination"\n    @tags="onTags"\n    style="height: calc(100vh - 140px)"\n  />\n```\n\nNotice the `@tags="onTags"`. Capturing this is a bit tricky. You need to set a guard to stop potential end-less loop in your Vue code (depending on how you use it). In your `data ()` function set a guard variable; in this case `loaded`:\n\n```js\n  data () {\n    return {\n      loaded: false,  // guard var\n      tags: [],       // user selected tags to pass to QIconPicker\n      categories: [], // keep track of categories\n      selected: {}    // keep track of user selected categories\n    }\n```\n\nin your `methods` section, add the event handler, and put the guard in to stop potential recursion:\n\n```js\n  methods: {\n    onTags (tags) {\n      if (this.loaded !== true) {\n        let cats = []\n        let t = [ ...tags ]\n        cats.splice(0, 0, ...t)\n        this.categories.splice(0, this.categories.length, ...cats)\n        this.categories.concat(...cats)\n        this.categories.forEach(cat => {\n          this.$set(this.selected, cat, false)\n        })\n        this.loaded = true\n      }\n    }\n  }\n```\n\nThis is all good and well, until you need to select a different icon-set. We can create the proper handlers in the `watch` section:\n\n```js\n  watch: {\n    iconSet (val) {\n      this.loaded = false\n      this.tags.splice(0, this.tags.length)\n    },\n    selected: {\n      handler (val) {\n        let tags = []\n        this.categories.forEach(cat => {\n          // if user has selected this tag...\n          if (val[cat] === true) {\n            // ...then keep track of it\n            tags.push(cat)\n          }\n        })\n        // push all user selected tags to QIconPicker\n        this.tags.splice(0, this.tags.length, ...tags)\n      },\n      deep: true\n    }\n  },\n```\n\nNotice in the above code, the areas where the guard is reset with `this.loaded = false`.\n\nYou can see how this is handled on the **Icons** page. Remember, not all icon sets have been completed and PRs are very much welcomed.\n',r=n("ece6"),c={name:"PageIndex",components:{Hero:s["a"]},data:function(){return{markdown:i,json:r}},computed:{toc:{get:function(){return this.$store.state.common.toc},set:function(e){this.$store.commit("common/toc",e)}}},methods:{onToc:function(e){e.push({id:"QIconPicker-API",label:"QIconPicker API",level:1,children:Array(0)}),e.push({id:"Donate",label:"Donate",level:1,children:Array(0)}),this.toc=e}}},l=c,d=n("2877"),u=Object(d["a"])(l,a,o,!1,null,null,null);t["default"]=u.exports},ece6:function(e){e.exports=JSON.parse('{"type":"component","meta":{"docsUrl":"https://quasarframework.github.io/quasar-ui-qiconpicker/docs"},"props":{"value":{"type":"String","desc":"`v-model`; The selected icon","default":"\'\'","category":"model","examples":["v-model=\\"calendar_today\\"","v-model=\\"bolt\\""]},"icon-set":{"type":"String","desc":"The name of a [Quasar Icon Set](https://quasar.dev/options/quasar-icon-sets)","category":"model","values":["material-icons","material-icons-outlined","material-icons-round","material-icons-sharp","ionicons-v4","mdi-v4","fontawesome-v5","eva-icons","themify"],"examples":["icon-set=\\"material-icons\\"","icon-set=\\"fontawesome-v5\\""]},"icons":{"type":"Array","desc":"An array of objects containing icon information. The object must contain the key `name` with the value being the icon name (ie: `{ name: \'bolt\' }`). _**Note:** the icons used must already be loaded by Quasar._","category":"model","examples":[":icons=\\"[{ name: \'calendar-today\' }, { name: \'bolt\' }]\\""],"definition":{"name":{"type":"String","desc":"The icon name"}}},"filter":{"type":"String","desc":"Icons will be filtered by the passed string","category":"behavior","examples":[":filter=\\"myFilter\\""]},"tags":{"type":"Array","addedIn":"v1.0.7","desc":"An array of tags to be used to do filtering by category","category":"behavior","examples":[":tags=\\"[\'accessibility\']\\"",":tags=\\"[\'media\']\\""]},"dense":{"type":"Boolean","desc":"Use less of a foot print for the component","category":"style"},"tooltips":{"type":"Boolean","desc":"Turns tooltips on for each displayed icon (shows the icon name)","category":"behavior"},"no-footer":{"type":"Boolean","desc":"hides the footer area when `pagination` is enabled","category":"style"},"color":{"type":"String","desc":"Any color from the [Quasar Color Pallete](https://quasar.dev/style/color-palette) or a CSS color (#, rgb, rgba, hls, etc)","category":"style","examples":["color=\\"orange-8\\"","color=\\"#c8c8c8\\""]},"background-color":{"type":"String","desc":"Any color from the [Quasar Color Pallete](https://quasar.dev/style/color-palette) or a CSS color (#, rgb, rgba, hls, etc)","category":"style","examples":["background-color=\\"orange-8\\"","background-color=\\"#c8c8c8\\""]},"selected-color":{"type":"String","desc":"Any color from the [Quasar Color Pallete](https://quasar.dev/style/color-palette) or a CSS color (#, rgb, rgba, hls, etc)","category":"style","examples":["selected-color=\\"orange-8\\"","selected-color=\\"#c8c8c8\\""]},"selected-background-color":{"type":"String","desc":"Any color from the [Quasar Color Pallete](https://quasar.dev/style/color-palette) or a CSS color (#, rgb, rgba, hls, etc)","category":"style","examples":["selected-background-color=\\"orange-8\\"","selected-background-color=\\"#c8c8c8\\""]},"font-size":{"type":"String","desc":"The font-size to use for the icons. Any acceptable CSS size can be used","category":"style","examples":["font-size=\\"3rem\\"","font-size=\\"24px\\""]},"pagination":{"type":"Object","sync":true,"desc":"For pagination purposes uses Quasar\'s pagination component. Use `pagination.sync` to synchronize the data. You can use `page` and `itemsPerPage` to control the pagination. QIconPicker will set `totalPages` depending on `icon-set` or `icons` properties. If using a `filter` the page will automatically be reset to 1","category":"behavior","examples":[":pagination.sync=\\"myPagination\\""]}},"scopedSlots":{"icon":{"desc":"Slot for changing the display of the icon","scope":{"name":{"type":"String","desc":"The name of the slotted icon","examples":["bolt","calendar","<template #icon=\\"name\\"><q-btn :name=\\"name\\" :label=\\"name\\" no-caps /></template>"]}}}},"events":{"input":{"type":"String","desc":"`v-model`; Value from when the selection changes"},"tags":{"type":"Array","desc":"An array of categories (tags) for the selected icon set"}},"methods":{"prevPage":{"desc":"If paginated, will go to previous page if not on 1st page"},"nextPage":{"desc":"If paginated, will go to next page, if not on last page"}}}')}}]);