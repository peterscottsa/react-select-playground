import React, { useState } from 'react'
import './App.css'
import { Select } from './components/select'
import { BiBug, BiCookie, BiCheck } from 'react-icons/bi'
import styled from 'styled-components'

const flavourOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'orange', label: 'Orange' },
]

const animalOptions = [
    { value: 'rabbit', label: 'Rabbit' },
    { value: 'cat', label: 'Cat' },
    { value: 'dog', label: 'Dog' },
    { value: 'lion', label: 'Lion' },
]

const countryOptionsWithIcons = [
    {
        value: '27',
        label: 'South Africa',
        icon: '🇿🇦',
    },
    {
        value: '44',
        label: 'United Kingdom',
        icon: '🇬🇧',
    },
    {
        value: '01',
        label: 'United States',
        icon: '🇺🇸',
    },
    {
        value: '351',
        label: 'Portugal',
        icon: '🇵🇹',
    },
]

const animalOptionsWithDescriptions = [
    {
        value: 'rabbit',
        label: 'Rabbit',
        description: 'This animal runs',
    },
    {
        value: 'cat',
        label: 'Cat',
        description: 'This animal meows',
    },
    {
        value: 'dog',
        label: 'Dog',
        description: 'This animal barks',
    },
    {
        value: 'lion',
        label: 'Lion',
        description: 'This animal roars',
    },
]

const options = [
    {
        label: 'Flavours',
        icon: <BiCookie color="black" style={{ fontSize: 16 }} />,
        options: flavourOptions,
    },
    {
        label: 'Animals',
        icon: <BiBug color="black" style={{ fontSize: 16 }} />,
        options: animalOptions,
    },
]

const groupedCustomOptions = [
    {
        label: 'Flavours',
        icon: <BiCookie color="black" style={{ fontSize: 16 }} />,
        options: flavourOptions,
    },
    {
        label: 'Animals',
        icon: <BiBug color="black" style={{ fontSize: 16 }} />,
        options: animalOptionsWithDescriptions,
    },
]

/**
 * Custom options
 * Note: Notice how we have access to each options data via  `props.data`
 *
 */

const StyledOption = styled(Select.Option)`
    display: grid;
    align-items: center;
    grid-gap: 10px;
`

const CustomOption =
    (config) =>
    ({ children, ...props }) => {
        return (
            <StyledOption {...props} {...config}>
                {config?.iconLeft && props.data.icon}
                {children}
                {config?.iconRight && props.data.icon}
                {props.isSelected ? (
                    <BiCheck color="black" style={{ fontSize: 16 }} />
                ) : null}
            </StyledOption>
        )
    }

const CustomSingleValue = ({ children, ...props }) => {
    return (
        <Select.SingleValue {...props}>
            {props.data.icon} {children}
        </Select.SingleValue>
    )
}

const StyledOptionDescription = styled(Select.Option)`
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    align-items: center;
    grid-gap: 5px;
`

const Description = styled.p`
    color: #999;
    margin: 0;
    padding: 0;
`

const Wrapper = styled.main`
    padding: 30px;
`

const StyledTick = styled(BiCheck)`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
`

const OptionDescription = ({ children, ...props }) => {
    return (
        <StyledOptionDescription {...props}>
            <span>{children}</span>
            <Description>{props.data.description}</Description>
            {props.isSelected ? (
                <StyledTick color="black" style={{ fontSize: 20 }} />
            ) : null}
        </StyledOptionDescription>
    )
}

function App() {
    const [basicState, setBasicStateState] = useState('')
    const [groupedState, setGroupedState] = useState('')
    const [multiState, setMultiStateState] = useState([])
    const [custom, setCustom] = useState('')
    const [customIcons, setCustomIcons] = useState('')
    const [groupedCustom, setGroupedCustom] = useState('')

    return (
        <Wrapper>
            <section>
                <h1>Basic select</h1>
                <Select
                    label="Pick your favourite animal"
                    onChange={({ value }) => setBasicStateState(value)}
                    name="select"
                    placeholder="Favourite animal?"
                    options={animalOptions}
                />

                <h3>Your selection: {basicState}</h3>
            </section>

            <section>
                <h1>Grouped select</h1>

                <Select
                    label="Pick your favourite thing"
                    onChange={({ value }) => setGroupedState(value)}
                    name="grouped"
                    options={options}
                />
                <h3>Your selection: {groupedState}</h3>
            </section>

            <section>
                <h1>Multi select</h1>
                <Select
                    label="Pick your favourite thing"
                    name="multi"
                    isMulti
                    options={options}
                    onChange={(value) => setMultiStateState(value)}
                />
                <h3>Your selection: {JSON.stringify(multiState)}</h3>
            </section>

            <section>
                <h1>Custom options with Icons</h1>
                <Select
                    label="Pick your favourite country"
                    name="custom"
                    options={countryOptionsWithIcons}
                    components={{
                        Option: CustomOption({
                            iconRight: true,
                            iconLeft: false,
                        }),
                        SingleValue: CustomSingleValue,
                    }}
                    booyah
                    onChange={({ value }) => setCustom(value)}
                />
                <h3>Your selection: {JSON.stringify(custom)}</h3>
            </section>

            <section>
                <h1>Custom options with descriptions</h1>
                <Select
                    label="Pick your favourite thing"
                    name="custom"
                    options={animalOptionsWithDescriptions}
                    components={{ Option: OptionDescription }}
                    onChange={({ value }) => setCustomIcons(value)}
                />
                <h3>Your selection: {JSON.stringify(customIcons)}</h3>
            </section>

            <section>
                <h1>Grouped custom options with descriptions</h1>
                <Select
                    label="Pick your favourite thing"
                    name="custom"
                    options={groupedCustomOptions}
                    components={{ Option: OptionDescription }}
                    onChange={({ value }) => setGroupedCustom(value)}
                />
                <h3>Your selection: {JSON.stringify(groupedCustom)}</h3>
            </section>
        </Wrapper>
    )
}

export default App
