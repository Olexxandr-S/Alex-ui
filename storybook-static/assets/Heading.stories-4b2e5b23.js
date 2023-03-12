var v=Object.defineProperty;var r=(e,i)=>v(e,"name",{value:i,configurable:!0});import{j as n}from"./jsx-runtime-7804b9f5.js";import{r as p}from"./index-1646b246.js";import{c as g}from"./clsx.m-26950cc3.js";import"./iframe-814bc0b2.js";const m="_heading_1r1ql_1",s={heading:m,"variant-h1":"_variant-h1_1r1ql_9","variant-h2":"_variant-h2_1r1ql_12","variant-h3":"_variant-h3_1r1ql_15"},a=p.forwardRef((e,i)=>{const{variant:t="h1",visualVariant:o,children:d,className:h,...c}=e,l=o||t,u=g(h,s.heading,{[s[`variant-${l}`]]:l});return n.jsx(t,{ref:i,className:u,...c,children:d})});a.displayName="Heading";a.defaultProps={variant:"h1",visualVariant:void 0,className:""};try{a.displayName="Heading",a.__docgenInfo={description:"",displayName:"Heading",props:{variant:{defaultValue:{value:"h1"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},visualVariant:{defaultValue:{value:"undefined"},description:"",name:"visualVariant",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}}}}}catch{}const j={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';\r
import { Heading } from './Heading';\r
\r
export default {\r
    title: 'Components/Typography/Heading',\r
    component: Heading,\r
    argTypes: {\r
        variant: {\r
            name: 'variant',\r
            defaultValue: 'h1',\r
            type: { name: 'enum', required: false, value: ['h1', 'h2', 'h3'] },\r
        },\r
        visualVariant: {\r
            name: 'variant',\r
            defaultValue: 'h1',\r
            type: { name: 'enum', required: false, value: ['h1', 'h2', 'h3'] },\r
        },\r
    },\r
    args: {\r
        children: 'Heading',\r
    },\r
} as ComponentMeta<typeof Heading>;\r
\r
const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;\r
\r
export const Default = Template.bind({});\r
\r
export const Variants: React.FC = () => (\r
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>\r
        <Heading variant="h1">Heading h1</Heading>\r
        <Heading variant="h2">Heading h2</Heading>\r
        <Heading variant="h3">Heading h3</Heading>\r
    </div>\r
);\r
\r
export const VisualVariants: React.FC = () => (\r
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>\r
        <Heading variant="h1" visualVariant="h3">\r
            Heading h1\r
        </Heading>\r
        <Heading variant="h2" visualVariant="h2">\r
            Heading h2\r
        </Heading>\r
        <Heading variant="h3" visualVariant="h1">\r
            Heading h3\r
        </Heading>\r
    </div>\r
);\r
`,locationsMap:{default:{startLoc:{col:49,line:24},endLoc:{col:80,line:24},startBody:{col:49,line:24},endBody:{col:80,line:24}},variants:{startLoc:{col:34,line:28},endLoc:{col:1,line:34},startBody:{col:34,line:28},endBody:{col:1,line:34}},"visual-variants":{startLoc:{col:40,line:36},endLoc:{col:1,line:48},startBody:{col:40,line:36},endBody:{col:1,line:48}}}}},title:"Components/Typography/Heading",component:a,argTypes:{variant:{name:"variant",defaultValue:"h1",type:{name:"enum",required:!1,value:["h1","h2","h3"]}},visualVariant:{name:"variant",defaultValue:"h1",type:{name:"enum",required:!1,value:["h1","h2","h3"]}}},args:{children:"Heading"}},H=r(e=>n.jsx(a,{...e}),"Template"),q=H.bind({}),C=r(()=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[n.jsx(a,{variant:"h1",children:"Heading h1"}),n.jsx(a,{variant:"h2",children:"Heading h2"}),n.jsx(a,{variant:"h3",children:"Heading h3"})]}),"Variants"),D=r(()=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[n.jsx(a,{variant:"h1",visualVariant:"h3",children:"Heading h1"}),n.jsx(a,{variant:"h2",visualVariant:"h2",children:"Heading h2"}),n.jsx(a,{variant:"h3",visualVariant:"h1",children:"Heading h3"})]}),"VisualVariants"),N=["Default","Variants","VisualVariants"];export{q as Default,C as Variants,D as VisualVariants,N as __namedExportsOrder,j as default};
//# sourceMappingURL=Heading.stories-4b2e5b23.js.map
