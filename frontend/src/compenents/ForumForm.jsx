export default function ForumForm(props) {
    return (
        <div>
          <form onSubmit={props.handleSubmit}>
            <input 
            placeholder='Enter some title...'
            onChange={props.hadleForumTitleChange}
            value={props.forumTitle}
            />
            <button >Create</button>
          </form>
        </div>
    )
}