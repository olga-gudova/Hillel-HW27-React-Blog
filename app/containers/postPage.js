import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite-jss';

const style = StyleSheet.create({
    elementsGroup: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '40px'
    },
    link: {        
        textDecoration: 'none'
    },
    mainText: {
        marginTop: '15px',
    },
})

function PostPage({
    data,
    removeCallback,
    match: {
        params: {id}
    },
    history
}) {
    const post = data.find(x => x.id === id);

    return (
        <section>
            <div className={css(style.elementsGroup)}>
                <Link to='/' className={css(style.link)}>Home</Link>
                <button
                    onClick={() => {
                        removeCallback(post.id);                    
                        history.push('/');
                    }}
                >
                    Remove post
                </button>
            </div>
            <div className={css(style.elementsGroup)}>
                <h2>{post.title}</h2>
                <div>{post.select}</div>
            </div>
            <div className={css(style.mainText)}>{post.main}</div>
        </section>
        
    )
}

export default withRouter(PostPage);