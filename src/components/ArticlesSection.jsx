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

    const removeArticle = i => {
        const updatedArticlesList = articles.filter((article, index) => {
            return index !== i
        });
        setArticles(updatedArticlesList);
    }

    return (
        <>

        <ul>
                    {articles.map((article, index) => (<li key={index}>{article} <button className="btn btn-outline-danger btn-sm"
                    onClick={() => removeArticle(index)}
                    >
                        elimina</button></li>))}
                </ul>

            <form onSubmit={handleSubmit}>
                
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
