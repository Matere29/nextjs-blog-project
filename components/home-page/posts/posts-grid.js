import PostItem from './post-item'
import classes from './post-item.module.css'

function PostsGrind(props) {
    const { posts } = props;

    return (
    <ul className={classes.grid}>
        {posts.map(post => 
        <PostItem />)
        }
    </ul>
    )
}
export default PostsGrind