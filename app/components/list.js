import React from 'react';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite-jss';

const style = StyleSheet.create({
    list: {
        paddingLeft: '0px'
    },
    post: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '40px'
    },
    postTitle: {
        flexGrow: 1,
        color: 'inherit',
        textDecoration: 'none'
    },
})

function List({ items, handleSelect, handleShowAll }) {
    return (
        <>
            <button
                className={'showAllButton'}
                hidden={true}
                onClick={(e) => {
                    handleShowAll();
                    e.target.setAttribute('hidden', true);
                }}
            >
                To all
            </button>
            <ul className={css(style.list)}>
                {
                    items.map(post => (
                        <li
                            className={css(style.post)}
                            key={post.id}
                        >
                            <Link
                                className={css(style.postTitle)}
                                to={`/post${post.id}`}
                            >{post.title}</Link>
                            
                            <button
                                onClick={(e) => {
                                    handleSelect(post.select);
                                    e.target.setAttribute('disabled', 'disabled');
                                    const showAllButton = document.querySelector('.showAllButton');
                                    showAllButton.removeAttribute('hidden');
                                }}
                            >
                                {post.select}
                            </button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
};

export default List;