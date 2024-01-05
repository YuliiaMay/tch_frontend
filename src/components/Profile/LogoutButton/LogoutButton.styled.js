import styled from 'styled-components';

export const LogoutBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.lightBlue};
    fill: ${({ theme }) => theme.colors.lightBlue};
    margin-right: 0px;
    margin-left: auto;

    &:hover,
    &:focus,
    &:active {
        background-color: transparent;
        color: ${({ theme }) => theme.colors.darkBlue};
        fill: ${({ theme }) => theme.colors.darkBlue};
    }

    &:disabled {
        color: ${({ theme }) => theme.colors.disabled};
    }
`;