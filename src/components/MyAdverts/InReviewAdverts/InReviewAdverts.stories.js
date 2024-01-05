import InReviewAdverts from './InReviewAdverts';

export default {
    title: 'components/MyAdverts/InReviewAdverts',
    component: InReviewAdverts,
    args: {
        
    },
};

function Template(args) {
    return <InReviewAdverts {...args} />;
}

export const Default = Template.bind({});
Default.args = {};