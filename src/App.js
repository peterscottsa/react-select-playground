import React, { useState } from 'react'
import './App.css'
import { Select } from './components/select'
import { BiBug, BiCookie } from 'react-icons/bi'

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

const options = [
    {
        label: 'Flavours',
        icon: <BiCookie color="black" size={16} />,
        options: flavourOptions,
    },
    {
        label: 'Animals',
        icon: <BiBug color="black" size={16} />,
        options: animalOptions,
    },
]

function App() {
    const [basicState, setBasicStateState] = useState('')
    const [groupedState, setGroupedState] = useState('')
    const [multiState, setMultiStateState] = useState([])

    return (
        <div className="App">
            <section className="App-header">
                <h1>Basic select</h1>
                <label htmlFor="animal">Pick your favourite animal</label>
                <Select
                    inputId="animal"
                    onChange={({ value }) => setBasicStateState(value)}
                    name="select"
                    placeholder="Favourite animal?"
                    options={animalOptions}
                />

                <h3>Your selection: {basicState}</h3>
            </section>
            <section className="App-header">
                <h1>Grouped select</h1>
                <label htmlFor="thing">Pick your favourite thing</label>
                <Select
                    inputId="thing"
                    onChange={({ value }) => setGroupedState(value)}
                    name="select"
                    options={options}
                />
                <h3>Your selection: {groupedState}</h3>
            </section>
            <section className="App-header">
                <h1>Multi select</h1>
                <label htmlFor="multi">Pick your favourite thing</label>
                <Select
                    name="multi"
                    options={options}
                    inputId="thing"
                    isMulti
                    isClearable
                    onChange={(value) => setMultiStateState(value)}
                />
                <h3>Your selection: {JSON.stringify(multiState)}</h3>
            </section>
        </div>
    )
}

export default App
