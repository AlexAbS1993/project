import React from 'react';
import classes from './Infoprofile.module.css';
import Post from './Post'

const Infoprofile = (props) => {
    let elementAddPost = React.createRef();

    let addPost = () => {
        props.dispatch({ type: "ADD-POST" });

    }
    let textTemp = () => {
        let tempValue = elementAddPost.current.value;
        props.dispatch({ type: "TEXT-TEMP", value: tempValue });
    }

    let postsReadyOver = props.prII.map(
        (post) => { return <Post inner={post.inner} /> }
    )
    return (<div>
        <div className={classes.info}><p> Здесь будет профиль</p></div>
        <div className={classes.posts}>
            <div>
                <textarea value={props.txI} onChange={textTemp} className={classes.enter} ref={elementAddPost} />
                <div><button onClick={addPost}>Отправить</button></div>
                <div className={classes.infoprofileDiv}>{postsReadyOver}</div>
            </div>
        </div>
    </div >
    )
}

export default Infoprofile;