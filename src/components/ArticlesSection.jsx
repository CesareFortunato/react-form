import { useState } from 'react'

function ArticlesSection() {

    const initialArticles = ["titolo1", "titolo2", "titolo3"];

    const [articles, setArticles] = useState(initialArticles);
    const [newArticle, setNewArticle] = useState('Nuovo Articolo')

    const handleSubmit = () => {

    }

    return (
        <>
        <ul>
            {articles.map((article, index) => ( <li key={index}>{article}</li>))}
        </ul>
        <form onSubmit={handleSubmit}>
        <input type="text"
        value={newArticle}
        onChange={e => {setNewArticle(e.target.value)}}
        />
        </form>
        </>
    )
}

export default ArticlesSection
