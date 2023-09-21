import classes from './all-posts.module.css'
import PostsGrind from './posts-grid'
function AllPosts(props){

    return (
        <section className={classes.posts}>
            <h1>All Posts</h1>
            <PostsGrind posts={props.posts}/>
        </section>
    )

}
export default AllPosts