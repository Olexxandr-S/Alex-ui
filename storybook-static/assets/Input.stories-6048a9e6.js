var d=Object.defineProperty;var l=(n,a)=>d(n,"name",{value:a,configurable:!0});import{j as e}from"./jsx-runtime-f11d5a4b.js";import{B as h}from"./Button-f1b76914.js";import{r as f}from"./index-f5032570.js";import{c as x}from"./clsx.m-26950cc3.js";import{L as I}from"./Label-f248db17.js";import"./Text-863ceb15.js";import"./iframe-63ac9104.js";const y="_inputWrapper_q3u82_1",_="_withElementRight_q3u82_21",g="_input_q3u82_1",r={inputWrapper:y,"scale-s":"_scale-s_q3u82_11","scale-m":"_scale-m_q3u82_14",withElementRight:_,input:g},t=f.forwardRef((n,a)=>{const{scale:s,label:p,elementRight:o,wide:i,className:c,...u}=n,m=x(r.inputWrapper,c,{[r[`scale-${s}`]]:s,[r.withElementRight]:!!o});return e.jsx(I,{label:p,wide:i,children:e.jsxs("span",{className:m,children:[e.jsx("input",{className:r.input,ref:a,...u}),o&&e.jsx("span",{children:o})]})})});t.displayName="Input";t.defaultProps={scale:"m",type:"text",label:null,elementRight:null,wide:!0};try{t.displayName="Input",t.__docgenInfo={description:"",displayName:"Input",props:{scale:{defaultValue:{value:"m"},description:"",name:"scale",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:'"number" | "color" | "hidden" | "button" | "submit" | "reset" | "search" | (string & {}) | "text" | "tel" | "url" | "email" | "date" | "time" | "image" | "datetime-local" | "file" | ... 4 more ...'}},label:{defaultValue:{value:"null"},description:"",name:"label",required:!1,type:{name:"ReactNode"}},elementRight:{defaultValue:{value:"null"},description:"",name:"elementRight",required:!1,type:{name:"ReactNode"}},wide:{defaultValue:{value:"true"},description:"",name:"wide",required:!1,type:{name:"boolean"}}}}}catch{}const C={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';\r
import { Button } from '../Button/Button';\r
import { Input } from './Input';\r
\r
export default {\r
    title: 'Components/Inputs/Input',\r
    component: Input,\r
    args: {\r
        label: 'Input',\r
        placeholder: 'Enter text',\r
    },\r
} as ComponentMeta<typeof Input>;\r
\r
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;\r
\r
export const Default = Template.bind({});\r
\r
export const InputSizes: React.FC = () => (\r
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>\r
        <Input label="Input" placeholder="Enter text" scale="s" />\r
        <Input label="Input" placeholder="Enter text" scale="m" />\r
    </div>\r
);\r
\r
export const InputWithRightElement: React.FC = () => (\r
    <Input label="Input" placeholder="Enter text" scale="m" elementRight={<Button scale="s">Apply</Button>} />\r
);\r
`,locationsMap:{default:{startLoc:{col:47,line:14},endLoc:{col:76,line:14},startBody:{col:47,line:14},endBody:{col:76,line:14}},"input-sizes":{startLoc:{col:36,line:18},endLoc:{col:1,line:23},startBody:{col:36,line:18},endBody:{col:1,line:23}},"input-with-right-element":{startLoc:{col:47,line:25},endLoc:{col:1,line:27},startBody:{col:47,line:25},endBody:{col:1,line:27}}}}},title:"Components/Inputs/Input",component:t,args:{label:"Input",placeholder:"Enter text"}},b=l(n=>e.jsx(t,{...n}),"Template"),L=b.bind({}),W=l(()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(t,{label:"Input",placeholder:"Enter text",scale:"s"}),e.jsx(t,{label:"Input",placeholder:"Enter text",scale:"m"})]}),"InputSizes"),S=l(()=>e.jsx(t,{label:"Input",placeholder:"Enter text",scale:"m",elementRight:e.jsx(h,{scale:"s",children:"Apply"})}),"InputWithRightElement"),D=["Default","InputSizes","InputWithRightElement"];export{L as Default,W as InputSizes,S as InputWithRightElement,D as __namedExportsOrder,C as default};
//# sourceMappingURL=Input.stories-6048a9e6.js.map
