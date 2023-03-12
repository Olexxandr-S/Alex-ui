var S=Object.defineProperty;var o=(l,c)=>S(l,"name",{value:c,configurable:!0});import{j as e}from"./jsx-runtime-f11d5a4b.js";import{r as f}from"./index-f5032570.js";import{c as y}from"./clsx.m-26950cc3.js";import{L as h}from"./Label-f248db17.js";import"./iframe-63ac9104.js";const x="_select_p3yj5_1",L="_withElementLeft_p3yj5_14",_="_elementLeft_p3yj5_47",n={select:x,withElementLeft:L,"scale-s":"_scale-s_p3yj5_40","scale-m":"_scale-m_p3yj5_43",elementLeft:_},t=f.forwardRef((l,c)=>{const{children:i,wide:a,className:p,label:d,scale:s,elementLeft:r,...m}=l,u=y(n.select,p,{[n.wide]:a,[n.withElementLeft]:r,[n[`scale-${s}`]]:s});return e.jsx(h,{label:d,wide:a,children:e.jsxs("span",{className:u,children:[r&&e.jsx("span",{className:n.elementLeft,children:r}),e.jsx("select",{ref:c,...m,children:i})]})})});t.displayName="Select";t.defaultProps={label:null,wide:!0,scale:"m",elementLeft:null};try{t.displayName="Select",t.__docgenInfo={description:"",displayName:"Select",props:{label:{defaultValue:{value:"null"},description:"",name:"label",required:!1,type:{name:"ReactNode"}},wide:{defaultValue:{value:"true"},description:"",name:"wide",required:!1,type:{name:"boolean"}},scale:{defaultValue:{value:"m"},description:"",name:"scale",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},elementLeft:{defaultValue:{value:"null"},description:"",name:"elementLeft",required:!1,type:{name:"ReactNode"}}}}}catch{}const C={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';\r
import { Select } from './Select';\r
\r
export default {\r
    title: 'Components/Inputs/Select',\r
    component: Select,\r
    args: {\r
        label: 'Select',\r
        placeholder: 'Select an option',\r
        children: [\r
            <option key={1}>Select some value</option>,\r
            <option key={2} value="option1">\r
                Option 1\r
            </option>,\r
            <option key={3} value="option2">\r
                Option 2\r
            </option>,\r
            <option key={4} value="option3">\r
                Option 3\r
            </option>,\r
        ],\r
    },\r
} as ComponentMeta<typeof Select>;\r
\r
const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;\r
\r
export const Default = Template.bind({});\r
\r
export const SelectSizes: React.FC = () => (\r
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>\r
        <Select label="Select" placeholder="Select an option" scale="s">\r
            <option>Select some value</option>\r
        </Select>\r
        <Select label="Select" placeholder="Select an option" scale="m">\r
            <option>Select some value</option>\r
        </Select>\r
    </div>\r
);\r
\r
export const SelectWithLeftElement: React.FC = () => (\r
    <Select\r
        label="Select"\r
        placeholder="Select an option"\r
        scale="m"\r
        elementLeft={<span style={{ background: 'red' }}>Left</span>}\r
    >\r
        <option>Select some value</option>\r
    </Select>\r
);\r
`,locationsMap:{default:{startLoc:{col:48,line:25},endLoc:{col:78,line:25},startBody:{col:48,line:25},endBody:{col:78,line:25}},"select-sizes":{startLoc:{col:37,line:29},endLoc:{col:1,line:38},startBody:{col:37,line:29},endBody:{col:1,line:38}},"select-with-left-element":{startLoc:{col:47,line:40},endLoc:{col:1,line:49},startBody:{col:47,line:40},endBody:{col:1,line:49}}}}},title:"Components/Inputs/Select",component:t,args:{label:"Select",placeholder:"Select an option",children:[e.jsx("option",{children:"Select some value"},1),e.jsx("option",{value:"option1",children:"Option 1"},2),e.jsx("option",{value:"option2",children:"Option 2"},3),e.jsx("option",{value:"option3",children:"Option 3"},4)]}},j=o(l=>e.jsx(t,{...l}),"Template"),k=j.bind({}),O=o(()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(t,{label:"Select",placeholder:"Select an option",scale:"s",children:e.jsx("option",{children:"Select some value"})}),e.jsx(t,{label:"Select",placeholder:"Select an option",scale:"m",children:e.jsx("option",{children:"Select some value"})})]}),"SelectSizes"),B=o(()=>e.jsx(t,{label:"Select",placeholder:"Select an option",scale:"m",elementLeft:e.jsx("span",{style:{background:"red"},children:"Left"}),children:e.jsx("option",{children:"Select some value"})}),"SelectWithLeftElement"),R=["Default","SelectSizes","SelectWithLeftElement"];export{k as Default,O as SelectSizes,B as SelectWithLeftElement,R as __namedExportsOrder,C as default};
//# sourceMappingURL=Select.stories-10ecb104.js.map
