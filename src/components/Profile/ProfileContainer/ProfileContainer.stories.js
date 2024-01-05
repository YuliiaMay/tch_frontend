import ProfileContainer from './ProfileContainer';

export default {
    title: 'components/Profile/ProfileContainer',
    component: ProfileContainer,
    args: {
        
    },
};

function Template(args) {
    return <ProfileContainer {...args} />;
}

export const Default = Template.bind({});
Default.args = {};