import { Header } from './Header';

export default {
    title: 'website/components/Header',
    component: Header,
};

const Template = (args) => <Header {...args} />;

export const Desktop = Template.bind({});
Desktop.args = {

};
