import { Formik } from 'formik';
import { Icon } from '../Icon';
import {
    SearchBarWrapper,
    SearchButton,
    SearchBarInput,
} from './SearchBar.styled';


const initialValues = {
    search: '',
};


const SearchBar = () => {
    return (
        <div>
            <Formik
                initialValues={initialValues}
            >
                {
                    ({ errors, touched, values, handleChange, handleBlur }) => (
                        <SearchBarWrapper>
                            <SearchButton type='submit'>
                                <Icon name='search' size={17} />
                            </SearchButton>
                            
                            <SearchBarInput
                                type='text'
                                name='search'
                                value={values.search}
                                placeholder='Search'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.search}
                                border={errors.search && touched.search}                            
                            />
                        </SearchBarWrapper>
                    )
                }
            </Formik>
        </div>
        
    );
}

export default SearchBar;