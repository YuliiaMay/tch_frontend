import MyAdvertsContainer from './MyAdvertsContainer';

export default {
    title: 'components/MyAdverts/MyAdvertsContainer',
    component: MyAdvertsContainer,
    args: {
        
    },
};

function Template(args) {
    return <MyAdvertsContainer {...args} />;
}

export const Default = Template.bind({});
Default.args = {};