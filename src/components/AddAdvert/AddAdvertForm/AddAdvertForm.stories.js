import AddAdvertForm from './AddAdvertForm';

export default {
    title: 'components/AddAdvert/AddAdvertForm',
    component: AddAdvertForm,
    args: {
        
    },
};

function Template(args) {
    return <AddAdvertForm {...args} />;
}

export const Default = Template.bind({});
Default.args = {};