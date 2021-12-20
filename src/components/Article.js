import '../App.css'

const Article = (props) => {

    const { style, className, ...rest } = props

    return (
        <article className={className + " bg-white shadow p-4 mx-5 mt-0" } style={style} {...rest}></article>
    )
}

export default Article;