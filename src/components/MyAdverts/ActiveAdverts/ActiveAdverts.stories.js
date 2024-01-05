import ActiveAdverts from './ActiveAdverts';

export default {
    title: 'components/MyAdverts/ActiveAdverts',
    component: ActiveAdverts,
    args: {
        
    },
};

function Template(args) {
    return <ActiveAdverts {...args} />;
}

export const Default = Template.bind({});
Default.args = {};