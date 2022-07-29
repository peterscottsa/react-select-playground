import styled from 'styled-components'
import { components } from 'react-select'

export const SelectContainer = styled(components.SelectContainer)``

export const Control = styled(components.Control)`
    && {
        box-shadow: none;
        border: 1px solid #ececec;
        border-radius: 8px;
        background: ${({ menuIsOpen }) => (menuIsOpen ? '#f5f5f5' : '#FFF')};
    }

    &&:hover {
        border: 1px solid #737373;
    }

    &&:focus-within {
        border: 1px solid #4588e3;
        box-shadow: 0px 0px 0px 1px #4588e3;
    }
`

export const ValueContainer = styled(components.ValueContainer)`
    background: transparent;
`

export const Input = styled(components.Input)`
    background: transparent;
`

export const SingleValue = styled(components.SingleValue)`
    background: transparent;
    line-height: normal;
`

export const MultiValue = styled(components.MultiValue)`
    && {
        background-color: black;
        color: white;
        border-radius: 3px;
        font-size: 14px;

        [role='button']:hover {
            background-color: black;
            color: white;
            cursor: pointer;
        }
    }
`

export const GroupLabelContainer = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 10px;
    align-items: center;
`

export const GroupLabel = styled.span`
    color: black;
`

export const IndicatorsContainer = styled(components.IndicatorsContainer)`
    padding: 0 12px;

    svg {
        transform: ${({ selectProps }) =>
            selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
    }
`

export const Menu = styled(components.Menu)`
    && {
        margin-top: 12px;
        overflow: hidden;
    }
`

export const MenuList = styled(components.MenuList)`
    && {
        padding: 0;
    }
`

export const Group = styled(components.Group)`
    && {
        margin-top: 12px;
        padding: 0;
    }
`

export const GroupHeading = styled(components.GroupHeading)`
    && {
        margin-bottom: 8px;
    }
`

export const Option = styled(components.Option)`
    display: flex;
    justify-content: space-between;
    padding: 10px 12px;
    background-color: ${({ isFocused }) =>
        isFocused ? '#f5f5f5' : 'transparent'};

    &:hover,
    &:focus {
        background-color: #f5f5f5;
    }
`
