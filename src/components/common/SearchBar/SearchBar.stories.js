import { SearchBar } from "./SearchBar";

export default {
    title: 'components/SearchBar',
    component: SearchBar,
    args: {
        children: "Accent text",
    },
};

function Template(args) {
    return <SearchBar {...args} />;
}

export const Default = Template.bind({});
Default.args = {};