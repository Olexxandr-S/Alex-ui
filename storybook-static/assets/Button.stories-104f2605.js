var i=Object.defineProperty;var t=(e,l)=>i(e,"name",{value:l,configurable:!0});import{j as n}from"./jsx-runtime-7804b9f5.js";import{B as r}from"./Button-c1374c2c.js";import"./index-1646b246.js";import"./iframe-814bc0b2.js";import"./clsx.m-26950cc3.js";import"./Text-f7dd7c67.js";const x={parameters:{storySource:{source:`import { ComponentStory } from '@storybook/react';\r
import { FC } from 'react';\r
import { Button } from './Button';\r
\r
export default {\r
    title: 'Components/Actions/Button',\r
    component: Button,\r
    args: {\r
        children: 'Button',\r
    },\r
    argTypes: {\r
        color: {\r
            type: 'union',\r
            options: ['primary', 'secondary'],\r
        },\r
        scale: {\r
            type: 'union',\r
            options: ['s', 'm'],\r
        },\r
        variant: {\r
            type: 'union',\r
            options: ['default', 'icon'],\r
        },\r
        wide: {\r
            type: 'boolean',\r
            defaultValue: false,\r
        },\r
        disabled: {\r
            type: 'boolean',\r
            defaultValue: false,\r
        },\r
        onClick: {\r
            action: 'onClick',\r
        },\r
    },\r
};\r
\r
const Icon: FC = () => (\r
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
        <path\r
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"\r
            fill="currentColor"\r
        />\r
        <path\r
            d="M11 7C11 6.45 11.45 6 12 6C12.55 6 13 6.45 13 7V11H17C17.55 11 18 11.45 18 12C18 12.55 17.55 13 17 13H13V17C13 17.55 12.55 18 12 18C11.45 18 11 17.55 11 17V13H7C6.45 13 6 12.55 6 12C6 11.45 6.45 11 7 11H11V7Z"\r
            fill="currentColor"\r
        />\r
    </svg>\r
);\r
\r
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;\r
\r
export const Default = Template.bind({});\r
\r
export const SizesAndColors: React.FC = () => (\r
    <>\r
        <div style={{ display: 'flex', gap: 16, marginBottom: 32 }}>\r
            <Button scale="s">Primary S</Button>\r
            <Button scale="m">Primary M</Button>\r
        </div>\r
        <div style={{ display: 'flex', gap: 16, marginBottom: 32 }}>\r
            <Button color="secondary" scale="s">\r
                Secondary S\r
            </Button>\r
            <Button color="secondary" scale="m">\r
                Secondary M\r
            </Button>\r
        </div>\r
        <div style={{ display: 'flex', gap: 16, background: '#ccc', padding: 16 }}>\r
            <Button scale="s" disabled>\r
                Secondary S\r
            </Button>\r
            <Button scale="m" disabled>\r
                Secondary M\r
            </Button>\r
        </div>\r
    </>\r
);\r
\r
export const Variants: React.FC = () => (\r
    <>\r
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>\r
            <Button scale="s" variant="default">\r
                Default S\r
            </Button>\r
            <Button scale="m" variant="default">\r
                Default M\r
            </Button>\r
            <Button scale="s" variant="icon">\r
                <Icon />\r
            </Button>\r
            <Button scale="m" variant="icon">\r
                <Icon />\r
            </Button>\r
        </div>\r
    </>\r
);\r
\r
export const Wide: React.FC = () => (\r
    <>\r
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>\r
            <Button scale="s" wide>\r
                Wide S\r
            </Button>\r
            <Button scale="m" wide>\r
                Wide M\r
            </Button>\r
        </div>\r
    </>\r
);\r
\r
export const WithIcon: React.FC = () => (\r
    <>\r
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>\r
            <Button scale="s" leftIcon={<Icon />}>\r
                Icon Left S\r
            </Button>\r
            <Button scale="m" leftIcon={<Icon />}>\r
                Icon Left M\r
            </Button>\r
            <Button scale="s" rightIcon={<Icon />}>\r
                Icon Right S\r
            </Button>\r
            <Button scale="m" rightIcon={<Icon />}>\r
                Icon Right M\r
            </Button>\r
        </div>\r
    </>\r
);\r
`,locationsMap:{default:{startLoc:{col:48,line:51},endLoc:{col:78,line:51},startBody:{col:48,line:51},endBody:{col:78,line:51}},"sizes-and-colors":{startLoc:{col:40,line:55},endLoc:{col:1,line:78},startBody:{col:40,line:55},endBody:{col:1,line:78}},variants:{startLoc:{col:34,line:80},endLoc:{col:1,line:97},startBody:{col:34,line:80},endBody:{col:1,line:97}},wide:{startLoc:{col:30,line:99},endLoc:{col:1,line:110},startBody:{col:30,line:99},endBody:{col:1,line:110}},"with-icon":{startLoc:{col:34,line:112},endLoc:{col:1,line:129},startBody:{col:34,line:112},endBody:{col:1,line:129}}}}},title:"Components/Actions/Button",component:r,args:{children:"Button"},argTypes:{color:{type:"union",options:["primary","secondary"]},scale:{type:"union",options:["s","m"]},variant:{type:"union",options:["default","icon"]},wide:{type:"boolean",defaultValue:!1},disabled:{type:"boolean",defaultValue:!1},onClick:{action:"onClick"}}},o=t(()=>n.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z",fill:"currentColor"}),n.jsx("path",{d:"M11 7C11 6.45 11.45 6 12 6C12.55 6 13 6.45 13 7V11H17C17.55 11 18 11.45 18 12C18 12.55 17.55 13 17 13H13V17C13 17.55 12.55 18 12 18C11.45 18 11 17.55 11 17V13H7C6.45 13 6 12.55 6 12C6 11.45 6.45 11 7 11H11V7Z",fill:"currentColor"})]}),"Icon"),s=t(e=>n.jsx(r,{...e}),"Template"),B=s.bind({}),f=t(()=>n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{display:"flex",gap:16,marginBottom:32},children:[n.jsx(r,{scale:"s",children:"Primary S"}),n.jsx(r,{scale:"m",children:"Primary M"})]}),n.jsxs("div",{style:{display:"flex",gap:16,marginBottom:32},children:[n.jsx(r,{color:"secondary",scale:"s",children:"Secondary S"}),n.jsx(r,{color:"secondary",scale:"m",children:"Secondary M"})]}),n.jsxs("div",{style:{display:"flex",gap:16,background:"#ccc",padding:16},children:[n.jsx(r,{scale:"s",disabled:!0,children:"Secondary S"}),n.jsx(r,{scale:"m",disabled:!0,children:"Secondary M"})]})]}),"SizesAndColors"),g=t(()=>n.jsx(n.Fragment,{children:n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,marginBottom:32},children:[n.jsx(r,{scale:"s",variant:"default",children:"Default S"}),n.jsx(r,{scale:"m",variant:"default",children:"Default M"}),n.jsx(r,{scale:"s",variant:"icon",children:n.jsx(o,{})}),n.jsx(r,{scale:"m",variant:"icon",children:n.jsx(o,{})})]})}),"Variants"),h=t(()=>n.jsx(n.Fragment,{children:n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,marginBottom:32},children:[n.jsx(r,{scale:"s",wide:!0,children:"Wide S"}),n.jsx(r,{scale:"m",wide:!0,children:"Wide M"})]})}),"Wide"),C=t(()=>n.jsx(n.Fragment,{children:n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,marginBottom:32},children:[n.jsx(r,{scale:"s",leftIcon:n.jsx(o,{}),children:"Icon Left S"}),n.jsx(r,{scale:"m",leftIcon:n.jsx(o,{}),children:"Icon Left M"}),n.jsx(r,{scale:"s",rightIcon:n.jsx(o,{}),children:"Icon Right S"}),n.jsx(r,{scale:"m",rightIcon:n.jsx(o,{}),children:"Icon Right M"})]})}),"WithIcon"),j=["Default","SizesAndColors","Variants","Wide","WithIcon"];export{B as Default,f as SizesAndColors,g as Variants,h as Wide,C as WithIcon,j as __namedExportsOrder,x as default};
//# sourceMappingURL=Button.stories-104f2605.js.map
