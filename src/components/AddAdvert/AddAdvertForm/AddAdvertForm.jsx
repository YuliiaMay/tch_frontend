import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';
import { Button, Text } from '../../common';
import { fetchAllCategories, fetchCreateAdvert } from '../../../services';
import { useAuthStore } from '../../../store/auth';
import Avatar from '../../../assets/images/default-avatar.png';
import {
    Section,
    StyledForm,
    AdvertFormHeaderContainer,
    AdvertTitle,
    AdvertTitleInput,
    StyledTitle,
    Label,
    ExperienceInput,
    ProviderInfoContainer,
    MobileSizeAvatarContainer,
    LargeSizeAvatarContainer,
    AvatarImg,
    ExperienceInfoContainer,
    CategoriesAllInfoContainer,
    CategoryContainer,
    CategoryInput,
    AdvertOptionContainer,
    OptionInputContainer,
    OptionInput,
    DescriptionContainer,
    DescriptionText,
    ContactsInfoContainer,
    ContactsSubtitle,
    ContactsList,
    InfoContainer,
    ContactLabel,
    ContactInfoInput,
} from './AddAdvertForm.styled';


const initialValues = {
    title: '',
    experience: '',
    category: '',
    subcategory: '',
    time: '',
    format: '',
    price: 0,
    language: '',
    description: '',
    mobile_phone: '',
    email: '',
    telegram: ''
};


const AddAdvertForm = () => {
    const { user } = useAuthStore();
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();


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


    const handleSubmit = (
        { subcategory, description, email, experience, format, language, mobile_phone, price, telegram, time, title },
        { resetForm }) => {
        const newAdvert = {
            category: subcategory,
            description,
            email,
            experience,
            format,
            language,
            mobile_phone,
            price,
            telegram,
            time: Number(time),
            title
        };

        fetchCreateAdvert(newAdvert);
        resetForm();
        handleNavigateToMyAdverts();
    };


    const handleCategoryChange = (e) => {
        const data = e.currentTarget.value;
        setSelectedCategory(data || null);
    };


    const handleNavigateToMyAdverts = () => {
        navigate('/my-advert');
    };


    return (
        <Section>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
                {({
                    errors,
                    touched,
                    values,
                    handleChange,
                    handleBlur,
                    isSubmitting,
                }) => (
                    
                    <div>
                        <StyledTitle>Create advertisement</StyledTitle>
                        <StyledForm>
                            <AdvertFormHeaderContainer>
                                <div>
                                    <AdvertTitle>
                                        <Label htmlFor='title'>Title</Label>
                                        <AdvertTitleInput
                                            id='title'
                                            type='text'
                                            name='title'
                                            placeholder='Enter title for your course'
                                            value={values.title}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            border={touched.title && errors.title}
                                        />
                                        <ErrorMessage name='title' component='div' />                                
                                    </AdvertTitle>

                                    <ProviderInfoContainer>
                                        <Label>Provider</Label>
                                        <Text>{user.name}</Text>

                                        <MobileSizeAvatarContainer>
                                            <AvatarImg src={Avatar} alt="avatar" />
                                        </MobileSizeAvatarContainer>
                                        
                                    </ProviderInfoContainer>

                                    <ExperienceInfoContainer>
                                        <Label htmlFor='experience'>Experience</Label>
                                        <ExperienceInput
                                            id='experience'
                                            type='number'
                                            name='experience'
                                            value={values.experience}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            border={touched.experience && errors.experience}
                                        />
                                        <ErrorMessage name='experience' component='div' />                                
                                    </ExperienceInfoContainer>                                    
                                </div>

                                <LargeSizeAvatarContainer>
                                    <AvatarImg src={Avatar} alt="avatar" />
                                </LargeSizeAvatarContainer>

                            </AdvertFormHeaderContainer>


                            <CategoriesAllInfoContainer>
                                <CategoryContainer>
                                    <Label htmlFor='category'>Category</Label>
                                    <CategoryInput
                                        id='category'
                                        component='select'
                                        name='category'
                                        placeholder='Select match category'
                                        value={values.category}
                                        onChange={(e) => {
                                            handleCategoryChange(e);
                                            handleChange(e)
                                        }}
                                        onBlur={handleBlur}
                                        border={touched.category && errors.category}
                                    >
                                        <option value={null}></option>
                                        {
                                            categories.map(({parent_id, parent_name}) => {
                                                    return (
                                                        <option
                                                            key={parent_id}
                                                            value={parent_name}>
                                                            {parent_name}
                                                        </option>  
                                                    )
                                            })
                                        }
                                    </CategoryInput>
                                    <ErrorMessage name='category' component='div' />                                
                                </CategoryContainer>

                                {
                                    selectedCategory && (
                                        <CategoryContainer>
                                            <Label htmlFor='subcategory'>Subcategory</Label>
                                            <CategoryInput
                                                id='subcategory'
                                                component='select'
                                                name='subcategory'
                                                placeholder='Select match subcategory'
                                                value={values.subcategory}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                border={touched.subcategory && errors.subcategory}
                                            >
                                                <option value={null}></option>
                                                {
                                                    categories.map(({ children, parent_name }) => {
                                                        if (selectedCategory === parent_name) {
                                                            return children.map(({ id, name }) => {
                                                                return (
                                                                    <option
                                                                        key={id}
                                                                        value={name}>
                                                                        {name}
                                                                    </option>                                                                       
                                                                )
                                                            }
                                                            )
                                                        }
                                                    }
                                                    )
                                                }
                                            </CategoryInput>    
                                            <ErrorMessage name='subcategory' component='div' />                                
                                        </CategoryContainer>
                                    )
                                }
                            </CategoriesAllInfoContainer>

                            
                            <AdvertOptionContainer>
                                <OptionInputContainer>
                                    <Label htmlFor='time'>Time</Label>
                                    <OptionInput
                                        id='time'
                                        as='select'
                                        name='time'
                                        placeholder='Select time'
                                        value={values.time}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        border={touched.time && errors.time}
                                    >
                                        <option value={null}></option>
                                        <option value='30'>30 min</option>
                                        <option value='45'>45 min</option>
                                        <option value='60'>60 min</option>
                                        <option value='90'>90 min</option>
                                        <option value='120'>120 min</option>
                                        <option value='150'>150 min</option>
                                        <option value='180'>180 min</option>
                                    </OptionInput>
                                    <ErrorMessage name='time' component='div' />                                
                                </OptionInputContainer>

                                <OptionInputContainer>
                                    <Label htmlFor='format'>Format</Label>
                                    <OptionInput
                                        id='format'
                                        component='select'
                                        name='format'
                                        placeholder='Select format'
                                        value={values.format}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        border={touched.format && errors.format}
                                    >
                                        <option value={null}></option>
                                        <option value='Online'>Online</option>
                                        <option value='Offline'>Offline</option>
                                    </OptionInput>
                                    <ErrorMessage name='format' component='div' />                                
                                </OptionInputContainer>

                                <OptionInputContainer>
                                    <Label htmlFor='price'>Price</Label>
                                    <OptionInput
                                        id='price'
                                        type='number'
                                        name='price'
                                        placeholder='Enter price'
                                        value={values.price}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        border={touched.price && errors.price}
                                    />
                                    <ErrorMessage name='price' component='div' />                                
                                </OptionInputContainer>

                                <OptionInputContainer>
                                    <Label htmlFor='language'>Language</Label>
                                    <OptionInput
                                        id='language'
                                        component='select'
                                        name='language'
                                        placeholder='Select lesson language'
                                        value={values.language}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        border={touched.language && errors.language}
                                    >
                                        <option value={null}></option>
                                        <option value='English'>English</option>
                                        <option value='Arabic'>Arabic</option>
                                        <option value='French'>French</option>
                                        <option value='Spanish'>Spanish</option>
                                        <option value='Chinese'>Chinese</option>
                                        <option value='Hindi'>Hindi</option>
                                        <option value='German'>German</option>
                                        <option value='Other languages'>Other languages</option>
                                    </OptionInput>
                                    <ErrorMessage name='language' component='div' />                                
                                </OptionInputContainer>
                            </AdvertOptionContainer>


                            <DescriptionContainer>
                                <Label htmlFor='description'>Description</Label>
                                <DescriptionText
                                    id='description'
                                    as='textarea'
                                    name='description'
                                    placeholder='Enter description for your course'
                                    value={values.description}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    maxLength='600'
                                    rows='5'
                                    border={touched.description && errors.description}
                                />
                                <ErrorMessage name='description' component='div' />                                
                            </DescriptionContainer>

                            <ContactsInfoContainer>
                                <ContactsSubtitle>Contacts information</ContactsSubtitle>
                                <ContactsList>
                                    <InfoContainer>
                                        <ContactLabel htmlFor='mobile_phone'>Mobile phone</ContactLabel>
                                        <ContactInfoInput
                                            id='mobile_phone'
                                            type='tel'
                                            name='mobile_phone'
                                            placeholder='Enter your mobile_phone'
                                            value={values.mobile_phone}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            border={touched.mobile_phone && errors.mobile_phone}
                                        />
                                        <ErrorMessage name='mobile_phone' component='div' />                                
                                    </InfoContainer>

                                    <InfoContainer>
                                        <ContactLabel htmlFor='email'>Email</ContactLabel>
                                        <ContactInfoInput
                                            id='email'
                                            type='email'
                                            name='email'
                                            placeholder='Enter your email'
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            border={touched.email && errors.email}
                                        />
                                        <ErrorMessage name='email' component='div' />                                
                                    </InfoContainer>

                                    <InfoContainer>
                                        <ContactLabel htmlFor='telegram'>Telegram</ContactLabel>
                                        <ContactInfoInput
                                            id='telegram'
                                            type='text'
                                            name='telegram'
                                            placeholder='Enter your Telegram nikname'
                                            value={values.telegram}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            border={touched.telegram && errors.telegram}
                                        />
                                        <ErrorMessage name='telegram' component='div' />                                
                                    </InfoContainer>                                    
                                </ContactsList>
                            </ContactsInfoContainer>
                            
                            <Button
                                size='standard'
                                variant='primary'
                                type='submit'
                                isDisabled={isSubmitting}
                            >
                                Confirm
                            </Button>                            
                        </StyledForm>
                    </div>
                )}

            </Formik>
        </Section>
    );
};

export default AddAdvertForm;