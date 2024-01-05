import PersonalInfo from './PersonalInfo';

export default {
    title: 'components/Profile/PersonalInfo',
    component: PersonalInfo,
    args: {
        
    },
};

function Template(args) {
    return <PersonalInfo {...args} />;
}

export const Default = Template.bind({});
Default.args = {};