var a=Object.defineProperty;var e=(n,d)=>a(n,"name",{value:d,configurable:!0});import{j as r}from"./jsx-runtime-7804b9f5.js";import{C as o}from"./Card-a9353541.js";import"./index-1646b246.js";import"./iframe-814bc0b2.js";import"./clsx.m-26950cc3.js";const t=e(({children:n})=>r.jsx("div",{style:{display:"flex",width:"100%",height:"100%",alignItems:"center",justifyContent:"center",background:"#CCC",padding:32},children:n}),"CardBodyDemo"),y={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';\r
import { FC, PropsWithChildren } from 'react';\r
import { Card } from './Card';\r
\r
const CardBodyDemo: FC<PropsWithChildren> = ({ children }) => (\r
    <div\r
        style={{\r
            display: 'flex',\r
            width: '100%',\r
            height: '100%',\r
            alignItems: 'center',\r
            justifyContent: 'center',\r
            background: '#CCC',\r
            padding: 32,\r
        }}\r
    >\r
        {children}\r
    </div>\r
);\r
\r
export default {\r
    title: 'Components/Layout/Card',\r
    component: Card,\r
    args: {\r
        children: <CardBodyDemo>Card content</CardBodyDemo>,\r
    },\r
} as ComponentMeta<typeof Card>;\r
\r
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;\r
\r
export const Default = Template.bind({});\r
\r
export const CardSizes: React.FC = () => (\r
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>\r
        <Card>\r
            <CardBodyDemo>Fit content card</CardBodyDemo>\r
        </Card>\r
        <Card wide>\r
            <CardBodyDemo>Wide card</CardBodyDemo>\r
        </Card>\r
    </div>\r
);\r
`,locationsMap:{default:{startLoc:{col:46,line:29},endLoc:{col:74,line:29},startBody:{col:46,line:29},endBody:{col:74,line:29}},"card-sizes":{startLoc:{col:35,line:33},endLoc:{col:1,line:42},startBody:{col:35,line:33},endBody:{col:1,line:42}}}}},title:"Components/Layout/Card",component:o,args:{children:r.jsx(t,{children:"Card content"})}},i=e(n=>r.jsx(o,{...n}),"Template"),f=i.bind({}),x=e(()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[r.jsx(o,{children:r.jsx(t,{children:"Fit content card"})}),r.jsx(o,{wide:!0,children:r.jsx(t,{children:"Wide card"})})]}),"CardSizes"),h=["Default","CardSizes"];export{x as CardSizes,f as Default,h as __namedExportsOrder,y as default};
//# sourceMappingURL=Card.stories-82acbc9e.js.map
