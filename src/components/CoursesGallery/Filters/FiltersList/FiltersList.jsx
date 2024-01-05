import { useEffect, useState } from 'react';
import { FiltersListSection } from '../FiltersListSection';
import options from '../../../../options.json';
import { fetchAllCategories } from '../../../../services';
import {
    List
} from './FiltersList.styled';


const FiltersList = () => {
    const [categories, setCategories] = useState([]);
    
    
    useEffect(() => {
        getCategories();
    }, []);


    async function getCategories() {
        try {
            const data = await fetchAllCategories();
            setCategories(data);

            return data;
        } catch(error) {
            console.log(error.message);
        }
    }

    return (
        <List>
            {
                categories && categories.map(({parent_id, parent_name, children}) => (
                    <FiltersListSection
                        key={parent_id}
                        title={parent_name}
                        subcategories={children}
                    />
                ))
            }

            <FiltersListSection
                title='Price for a lesson'
            />

            {
                options.map(({ id, title, options }) => (
                    <FiltersListSection
                        key={id}
                        title={title}
                        options={options}
                    />
                ))
            }
        </List>
    );
}

export default FiltersList;