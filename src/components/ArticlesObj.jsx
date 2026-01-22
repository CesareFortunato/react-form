import { useState } from 'react'

function ArticlesObj() {

    const initialArticles = [
        { id: 1, title: "titolo1" },
        { id: 2, title: "titolo2" },
        { id: 3, title: "titolo3" }];

    const [articles, setArticles] = useState(initialArticles);
    const [newArticle, setNewArticle] = useState('Nuovo Articolo')

    const getNextId = () => {
        let maxId = 0;

        for (let i = 0; i < articles.length; i++) {
            if (articles[i].id > maxId) {
                maxId = articles[i].id;
            }
        }

        return maxId + 1;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newArticleObj = {
            id: getNextId(),
            title: newArticle
        }
        const updatedArticlesList = [...articles, newArticle];
        setArticles([...articles, newArticleObj]);
        setNewArticle('');

    }

    const removeArticle = (id) => {
        const updatedArticlesList = articles.filter((article) => article.id !== id
        );
        setArticles(updatedArticlesList);
    }

    return (
        <>

            <ul>
                {articles.map((article, index) => (<li key={article.id}>{article.title} <button className="btn btn-outline-danger btn-sm"
                    onClick={() => removeArticle(article.id)}
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

export default ArticlesObj
