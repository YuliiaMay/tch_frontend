import LogoutButton from './LogoutButton';

export default {
    title: 'components/Profile/LogoutButton',
    component: LogoutButton,
    args: {
        
    },
};

function Template(args) {
    return <LogoutButton {...args} />;
}

export const Default = Template.bind({});
Default.args = {};