import styled from 'styled-components';
import { Icon } from '../../../common';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';


export const ItemWrapper = styled.div`
    border-bottom: 1px solid #FFFFFF40;
    width: 253px;
    margin-bottom: 0;

    @media screen and (min-width: ${({theme: {sizes}}) => sizes.desk}) {
        border-bottom: 1px solid #00000040;
    }
`;


export const SectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    cursor: pointer;
`;


export const Title = styled.div`
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
`;


export const StyledIcon = styled(Icon)`
    fill: ${({ theme: { colors } }) => colors.white};
    width: 24px;
    height: 24px;
    
    @media screen and (min-width: ${({theme: {sizes}}) => sizes.desk}) {
        fill: ${({ theme: { colors } }) => colors.primaryText};
    }
`;


export const CategoriesList = styled.div`
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 30px;
`;


export const RangeFieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;


export const PriceInputsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`;


export const PriceInput = styled.input`
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;

    border: 1px solid ${({ theme: { colors } }) => colors.primaryText};
    border-radius: 6px;
    width: 90px;
    height: 36px;
    background-color: #EAEAEA;
    padding-left: 16px;
`;


export const Line = styled.div`
    width: 10px;
    height: 1px;
    background-color: ${({ theme: { colors } }) => colors.disabled};
`;


export const StyledRangeSlider = styled(RangeSlider)`
    background-color: ${({ theme: { colors } }) => colors.golden};
    height: 3px;

    .range-slider__range {
        background-color: transparent;
    }

    .range-slider__thumb {
        background-color: ${({ theme: { colors } }) => colors.golden};
        transition-property: background-color, border, border-radius, width;
        transition-duration: 250ms;
        transition-timing-function: cubic-bezier(0.7, 0.7, 1, 0.7);
    }

    .range-slider__thumb[data-active] {
        border: 2px solid  ${({ theme: { colors } }) => colors.lightBlue};
        border-radius: 6px;
        width: 6px;
    }

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.desk}) {
        .range-slider__thumb {
            background-color: ${({ theme: { colors } }) => colors.blue};
        }
        
    }   
`;