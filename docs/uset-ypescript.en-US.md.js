webpackJsonp([45],{1134:function(n,s){n.exports={content:["article",["p","TypeScript is a superset of javascript that adds a lot of useful features to javascript:"],["ul",["li",["p","Type annotations and compile-time type checking"]],["li",["p","Type inference"]],["li",["p","Type erasure"]],["li",["p","Interfaces"]],["li",["p","Enumerated types"]],["li",["p","Generics"]],["li",["p","Namespaces"]],["li",["p","Tuples"]],["li",["p","Async/await"]]],["p","Using TypeScript is more friendly to the IDE. If you are developing with vscode, your development experience will be significantly improved. Based on the characteristics of umi, we can easily use it in Pro."],["p","Pro comes with the configuration files required by TypeScript."],["ul",["li",["p","tsconfig.js"]],["li",["p","tslint.json"]]],["p","Tsconfig will declare that this is a TypeScript project, which will do some configuration, the details can be seen ",["a",{title:null,href:"https://www.typescriptlang.org/docs/handbook/tsconfig-json.html"},"here"],".\nTslint like eslint will check your code. To improve the experience, you can install vscode's tslint plugin.\nNext, we can start TypeScript development by just creating a new tsx file."],["h3","FAQ"],["h4","Used in css-module"],["p","Because Pro uses css-module, you may need"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> style <span class="token keyword">from</span> <span class="token string">\'./index.style.less\'</span>'},["code","import style from './index.style.less'"]],["p","At this time typescript will throw an error, you can use"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">const</span> style <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./index.less"</span><span class="token punctuation">)</span>'},["code",'const style = require("./index.less")']],["p","Avoid this problem. There are many related discussions in the community. There is no best way for the time being. Only the relatively perfect ",["a",{title:null,href:"https://github.com/Jimdo/typings-for-css-modules-loader"},"typings-for-css-modules-loader"],", Similarly, importing images, css, svg can also avoid type checking in this way."],["h4","Form.create()"],["p","Using Form.create() in TypeScript may throw an error similar to the following:"],["pre",{lang:"bash",highlighted:'error TS2339: Property <span class="token string">\'loading\'</span> does not exist on <span class="token function">type</span> <span class="token string">\'IntrinsicAttributes &amp; IntrinsicClassAttributes&lt;Compone\nnt&lt;{}, ComponentState>> &amp; Readonly&lt;{ childr...\'</span><span class="token keyword">.</span>'},["code","error TS2339: Property 'loading' does not exist on type 'IntrinsicAttributes & IntrinsicClassAttributes<Compone\nnt<{}, ComponentState>> & Readonly<{ childr...'."]],["p","This is because the type of props did not pass the check, the following is the correct way."],["pre",{lang:"tsx",highlighted:'import { FormComponentProps } from <span class="token string">"antd/lib/form/Form"</span><span class="token comment" spellcheck="true">;</span>\n\ninterface IFormComponentProps extends FormComponentProps {\n  test<span class="token punctuation">:</span> string<span class="token comment" spellcheck="true">;</span>\n}\n\nclass FormComponent extends React<span class="token punctuation">.</span>Component<span class="token operator">&lt;</span>IFormComponentProps<span class="token operator">></span> {\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">:</span> IFormComponentProps<span class="token punctuation">)</span> {\n    <span class="token function">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n  }\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> {\n    <span class="token keyword">const</span> { getFieldDecorator } <span class="token operator">=</span> this<span class="token punctuation">.</span>props<span class="token punctuation">.</span>form<span class="token comment" spellcheck="true">;</span>\n    return <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token comment" spellcheck="true">;</span>\n  }\n}'},["code",'import { FormComponentProps } from "antd/lib/form/Form";\n\ninterface IFormComponentProps extends FormComponentProps {\n  test: string;\n}\n\nclass FormComponent extends React.Component<IFormComponentProps> {\n  constructor(props: IFormComponentProps) {\n    super(props);\n    ....\n  }\n  render() {\n    const { getFieldDecorator } = this.props.form;\n    return ....;\n  }\n}']],["h4","Use a library without d.ts"],["p","In the actual use of some libraries and there is no relevant d.ts, this time we can directly define in the file used, taking the high German map as an example."],["pre",{lang:"tsx",highlighted:'import React from <span class="token string">\'react\'</span><span class="token comment" spellcheck="true">;</span>\n\n<span class="token operator">/</span><span class="token operator">/</span> Define the type of Map\ndeclare class GaoDeAMap {\n  <span class="token function">constructor</span><span class="token punctuation">(</span>container<span class="token punctuation">:</span> HTMLElement<span class="token punctuation">,</span> option<span class="token punctuation">:</span> { center<span class="token punctuation">:</span> <span class="token punctuation">[</span>number<span class="token punctuation">,</span> number<span class="token punctuation">]</span><span class="token comment" spellcheck="true">; zoom: number });</span>\n  public <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> void<span class="token comment" spellcheck="true">;</span>\n}\n\n<span class="token operator">/</span><span class="token operator">/</span> Define <span class="token keyword">global</span> AMap\ndeclare <span class="token keyword">const</span> AMap<span class="token punctuation">:</span> {\n  Map<span class="token punctuation">:</span> typeof GaoDeAMap<span class="token comment" spellcheck="true">;</span>\n}<span class="token comment" spellcheck="true">;</span>\n\n<span class="token operator">/</span><span class="token operator">/</span> tslint<span class="token punctuation">:</span>disable<span class="token operator">-</span><span class="token keyword">next</span><span class="token operator">-</span>line<span class="token punctuation">:</span>max<span class="token operator">-</span>classes<span class="token operator">-</span>per<span class="token operator">-</span>file\nclass MapComponent extends React<span class="token punctuation">.</span>Component {\n  public mapDom<span class="token punctuation">:</span> HTMLDivElement<span class="token comment" spellcheck="true">;</span>\n  public map<span class="token punctuation">:</span> GaoDeAMap<span class="token comment" spellcheck="true">;</span>\n  public <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> {\n    <span class="token keyword">const</span> map <span class="token operator">=</span> new AMap<span class="token punctuation">.</span><span class="token function">Map</span><span class="token punctuation">(</span>this<span class="token punctuation">.</span>mapDom<span class="token punctuation">,</span> {\n      center<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">117.000923</span><span class="token punctuation">,</span> <span class="token number">36.675807</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      zoom<span class="token punctuation">:</span> <span class="token number">11</span><span class="token punctuation">,</span>\n    }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    this<span class="token punctuation">.</span>map <span class="token operator">=</span> map<span class="token comment" spellcheck="true">;</span>\n  }\n  public <span class="token function">componentWillUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> {\n    this<span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n  }\n  public <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> {\n    return <span class="token operator">&lt;</span>div ref<span class="token operator">=</span>{ref <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>this<span class="token punctuation">.</span>mapDom <span class="token operator">=</span> ref<span class="token punctuation">)</span>} <span class="token operator">/</span><span class="token operator">></span><span class="token comment" spellcheck="true">;</span>\n  }\n}\n\nexport <span class="token keyword">default</span> MapComponent<span class="token comment" spellcheck="true">;</span>'},["code","import React from 'react';\n\n// Define the type of Map\ndeclare class GaoDeAMap {\n  constructor(container: HTMLElement, option: { center: [number, number]; zoom: number });\n  public destroy(): void;\n}\n\n// Define global AMap\ndeclare const AMap: {\n  Map: typeof GaoDeAMap;\n};\n\n// tslint:disable-next-line:max-classes-per-file\nclass MapComponent extends React.Component {\n  public mapDom: HTMLDivElement;\n  public map: GaoDeAMap;\n  public componentDidMount() {\n    const map = new AMap.Map(this.mapDom, {\n      center: [117.000923, 36.675807],\n      zoom: 11,\n    });\n    this.map = map;\n  }\n  public componentWillUnmount() {\n    this.map.destroy();\n  }\n  public render() {\n    return <div ref={ref => (this.mapDom = ref)} />;\n  }\n}\n\nexport default MapComponent;"]],["p","If you want to use it multiple times, you can create a namespace."],["pre",{lang:"ts",highlighted:'<span class="token keyword">declare</span> namespace AMap <span class="token punctuation">{</span>\n  <span class="token keyword">class</span> <span class="token class-name">Map</span> <span class="token punctuation">{</span>\n    <span class="token keyword">constructor</span><span class="token punctuation">(</span>container<span class="token punctuation">:</span> HTMLElement<span class="token punctuation">,</span> option<span class="token punctuation">:</span> <span class="token punctuation">{</span> center<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token keyword">number</span><span class="token punctuation">,</span> <span class="token keyword">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span> zoom<span class="token punctuation">:</span> <span class="token keyword">number</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">public</span> <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token operator">=</span> AMap<span class="token punctuation">;</span>\n<span class="token keyword">export</span> as namespace AMap<span class="token punctuation">;</span>'},["code","declare namespace AMap {\n  class Map {\n    constructor(container: HTMLElement, option: { center: [number, number]; zoom: number });\n    public destroy(): void;\n  }\n}\n\nexport = AMap;\nexport as namespace AMap;"]],["p","Then just introduce it directly in the project."],["pre",{lang:"tsx",highlighted:'import AMapInterface from <span class="token string">\'./AMap\'</span><span class="token comment" spellcheck="true">;</span>\n\ndeclare <span class="token keyword">const</span> AMap<span class="token punctuation">:</span> typeof AMapInterface<span class="token comment" spellcheck="true">;</span>'},["code","import AMapInterface from './AMap';\n\ndeclare const AMap: typeof AMapInterface;"]]],meta:{order:7,title:"Use TypeScript",type:"Advanced",filename:"docs/uset-ypescript.en-US.md"},toc:["ul"]}}});