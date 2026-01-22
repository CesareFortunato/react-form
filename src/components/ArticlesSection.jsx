import { useState } from 'react'

function ArticlesSection() {

    const initialArticles = ["titolo1", "titolo2", "titolo3"];

    const [articles, setArticles] = useState(initialArticles);
    const [newArticle, setNewArticle] = useState('Nuovo Articolo')

    const handleSubmit = e => {
        e.preventDefault();
        const updatedArticlesList = [...articles, newArticle];
        setArticles(updatedArticlesList);

    }

    return (
        <>

            <form onSubmit={handleSubmit}>
                <ul>
                    {articles.map((article, index) => (<li key={index}>{article}</li>))}
                </ul>
                <input type="text"
                    value={newArticle}
                    onChange={e => { setNewArticle(e.target.value) }}
                />
                <button className="btn btn-primary">Invia</button>
            </form>
        </>
    )
}

export default ArticlesSection
