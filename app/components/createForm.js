import React, { useState } from 'react';
import shortid from 'shortid';
import { StyleSheet, css } from 'aphrodite-jss';

const style = StyleSheet.create({
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'srtetch',
    },
    formElement: {
        marginBottom: '15px',
        width: '100%',
        paddingLeft: '15px',
        paddingRight: '15px',
        paddingTop: '8px',
        paddingBottom: '8px',
        font: 'inherit',
        boxSizing: 'border-box',
    },
})

function CreateForm({ handleSubmit }) {
    const [titleValue, setTitleValue] = useState('');
    const [mainValue, setMainValue] = useState('');
    const [selectValue, setSelectValue] = useState('Lifestyle');

    return (
        <form
            onSubmit={e => {
                e.preventDefault();

                const post = {
                    id: shortid(),
                    title: titleValue,
                    main: mainValue,
                    select: selectValue,
                };
                
                handleSubmit(post);

                setTitleValue('');
                setMainValue('');
                setSelectValue('Lifestyle');
            }}
        >
            <input 
                type='text'
                onChange={e => setTitleValue(e.target.value)}
                value = {titleValue}
                required
                className={css(style.formElement)}
                placeholder='post title'
            />
            <textarea
                onChange={e => setMainValue(e.target.value)}
                value = {mainValue}
                required
                className={css(style.formElement)}
                placeholder='main text'
                resize='none'
                rows='6'
            ></textarea>
            <select
                onChange={e => setSelectValue(e.target.value)}
                value = {selectValue}
                required
                className={css(style.formElement)}
            >
                <option value='Lifestyle'>Lifestyle</option>
                <option value='IT'>IT</option>
                <option value='Art'>Art</option>
                <option value='Sport'>Sport</option>
                <option value='Science'>Science</option>
                <option value='Humor'>Humor</option>
            </select>
            <button 
                type='submit'
                disabled={!Boolean(titleValue.trim()) && !Boolean(mainValue.trim())}
                required
                className={css(style.formElement)}
            >
                Post
            </button>
        </form>
    )
}

export default CreateForm;