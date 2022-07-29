import React from 'react'
import * as s from './select.styles'
import ReactSelect from 'react-select'

export const Select = ({ components, styles, name, label, ...props }) => {
    return (
        <div>
            {label && <label htmlFor={name}>{label}</label>}
            <ReactSelect
                name={name}
                innerId={name}
                components={{
                    Control,
                    ValueContainer,
                    Input,
                    SingleValue,
                    SelectContainer,
                    Option,
                    DropdownIndicator,
                    IndicatorsContainer,
                    Menu,
                    MenuList,
                    Group,
                    GroupHeading,
                    MultiValue,
                    ...components,
                }}
                styles={{
                    // No-Ops to remove default styling
                    option: () => ({}),
                    indicatorSeparator: () => {},
                    ...styles,
                }}
                {...props}
            />
        </div>
    )
}

const Control = ({ children, innerRef, ...props }) => (
    <s.Control {...props}>{children}</s.Control>
)

const DropdownIndicator = () => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="#b3b3b3"
        role="presentation"
        data-telescope-icon="true"
        color="currentColor"
        className="sc-bdfBwQ iXgbQJ"
    >
        <path d="M17 9.667c0 .18-.062.337-.186.469l-4.375 4.666a.583.583 0 01-.879 0l-4.375-4.666A.663.663 0 017 9.666c0-.18.062-.336.185-.468A.582.582 0 017.625 9h8.75c.169 0 .315.066.439.198a.662.662 0 01.186.469z" />
    </svg>
)

const IndicatorsContainer = (props) => <s.IndicatorsContainer {...props} />

const SelectContainer = (props) => <s.SelectContainer {...props} />

const Group = (props) => <s.Group {...props} />

const GroupHeading = ({ children, ...props }) => (
    <s.GroupHeading {...props}>
        <s.GroupLabelContainer>
            {props.data.icon} <s.GroupLabel>{children}</s.GroupLabel>
        </s.GroupLabelContainer>
    </s.GroupHeading>
)

const TickIcon = () => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="#000000"
        role="presentation"
        data-telescope-icon="true"
        color="currentColor"
        className="sc-bdfBwQ iXgbQJ"
    >
        <g clipPath="url(#clip0_265_312)">
            <path d="M21.879 7.754L9.803 19.743a.49.49 0 01-.301.115.486.486 0 01-.3-.116l-7.08-7.027a.428.428 0 010-.597l2.915-2.894c.162-.16.44-.16.601 0l3.864 3.858 8.86-8.818c.162-.16.44-.16.602 0l2.915 2.893a.428.428 0 010 .597z" />
        </g>
        <defs>
            <clipPath id="clip0_265_312">
                <rect width="20" height="20" transform="translate(2 2)" />
            </clipPath>
        </defs>
    </svg>
)

const Option = ({ children, ...props }) => (
    <s.Option {...props}>
        {children} {props.isSelected ? <TickIcon /> : null}
    </s.Option>
)

const ValueContainer = (props) => <s.ValueContainer {...props} />

const SingleValue = (props) => <s.SingleValue {...props} />

const MultiValue = (props) => <s.MultiValue {...props} />

export const Input = (props) => <s.Input {...props} />

export const Menu = (props) => <s.Menu {...props} />

export const MenuList = (props) => <s.MenuList {...props} />

Select.Option = s.Option
Select.Menu = s.Menu
Select.SingleValue = s.SingleValue
