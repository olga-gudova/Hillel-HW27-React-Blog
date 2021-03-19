import React, { useState, useCallback } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { StyleSheet, css } from 'aphrodite-jss';
import HomePage from './homePage.js';
import PostPage from './postPage.js';

const style = StyleSheet.create({
    wrapper: {
        maxWidth: '1200px',
        paddingLeft: '15px',
        paddingRight: '15px',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'darkblue',
        fontSize: '18px',
    }
})
const history = createBrowserHistory();

function App() {
    const [posts, setPosts] = useState([]);
    const [filters, setFilters] = useState('');
    
    const createPostHandler = useCallback(
        (x) => setPosts([x, ...posts]), 
        [posts]
    );

    const removePostHandler = useCallback(
        (id) => setPosts(posts.filter(x => x.id !== id)),
        [posts]
    );

    const selectPostHandler = useCallback(
        (tag) => {
            setFilters(tag)},
        [posts]
    );
    
    const showAllPostHandler = useCallback(
        () => setFilters(''),
        [posts]
    );

    return (
    <>
        <div className={css(style.wrapper)}>
            <h1>My Blog</h1>
            <Router history={history}>
                <Switch>
                    <Route 
                        path='/'
                        exact
                        render={() => (
                            <HomePage                                
                            data={
                                filters.length ? posts.filter(x => x.select === filters) : posts}
                                createCallback={createPostHandler}
                                selectCallback={selectPostHandler}
                                showAllCallback={showAllPostHandler}
                            />
                        )}
                    />
                    <Route 
                        path='/post:id'
                        render={() => (
                            <PostPage
                                data={posts}
                                removeCallback={removePostHandler}
                            />
                        )}
                    />
                </Switch>
            </Router>
        </div>
    </>
    )
}

export default App;