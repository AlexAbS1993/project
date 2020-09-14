import React from 'react';
import classes from './Infoprofile.module.css';
import Post from './Post'
import ProfilePhoto from './ProfilePhoto';

const Infoprofile = (props) => {
    let elementAddPost = React.createRef();

    let addPost = () => {
        let entervalue = elementAddPost.current.value;
        props.addPost(entervalue);
        elementAddPost.current.value = "";
    }

    let postsReadyOver = props.prII.map(
        (post) => { return <Post inner={post.inner} /> }
    )
    return (<div>
        <div className={classes.info}><p> Здесь будет профиль</p></div>
        <div className={classes.posts}>
            <div>
                <textarea className={classes.enter} ref={elementAddPost}></textarea>
                <div><button onClick={addPost}>Отправить</button></div>
                <div className={classes.infoprofileDiv}>{postsReadyOver}</div>
            </div>
        </div>
    </div >
    )
}

export default Infoprofile;