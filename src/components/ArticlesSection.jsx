import { useState } from 'react'

function ArticlesSection() {

    const initialArticles = ["titolo1", "titolo2", "titolo3"];

    const [articles, setArticles] = useState(initialArticles)

    return (
        <ul>
            {articles.map((article, index) => ( <li key={index}>{article}</li>))}
        </ul>

    )
}

export default ArticlesSection
