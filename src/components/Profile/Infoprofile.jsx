import React from 'react';
import classes from './Infoprofile.module.css';
import Post from './Post'

const Infoprofile = (props) => {
    let elementAddPost = React.createRef();

    let addPost = () => {
        props.disAddPost();
    }
    let textTemp = () => {
        let tempValue = elementAddPost.current.value;
        props.disTextTemp(tempValue);
    }

    let postsReadyOver = props.profilePage.postsReady.map(
        (post) => { return <Post inner={post.inner} id={post.id} disDeletePost={props.disDeletePost} /> }
    )
    return (<div>
        <div className={classes.info}><p> Здесь будет профиль</p></div>
        <div className={classes.posts}>
            <div>
                <textarea value={props.profilePage.tempPostText} onChange={textTemp} className={classes.enter} ref={elementAddPost} />
                <div><button onClick={addPost}>Отправить</button></div>
                <div className={classes.infoprofileDiv}>{postsReadyOver}</div>
            </div>
        </div>
    </div >
    )
}

export default Infoprofile;