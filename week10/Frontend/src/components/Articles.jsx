import React, { useEffect, useState } from 'react'
import {subHeadingClass, articleGrid, articleCardClass, articleTitle, articleExcerpt, articleMeta, loadingClass, errorClass, emptyStateClass, pageWrapper, headingClass} from '../styles/common'
import axios from 'axios'
import { useNavigate } from 'react-router'

function Articles() {
  const navigate = useNavigate()
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const formatDate = (date) => {
    return new Date(date).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  const navigateToArticleByID = (articleObj) => {
    navigate(`/article/${articleObj._id}`, { state: articleObj })
  }

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true)
        setError(null)
        const res = await axios.get('http://localhost:4000/user-api/articles', {
          withCredentials: true,
        })
        setArticles(res.data.articles || [])
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load articles.')
      } finally {
        setLoading(false)
      }
    }
    fetchArticles()
  }, [])

  return (
    <div className={pageWrapper}>
      <h2 className={headingClass}>All Articles</h2>

      {loading && <p className={loadingClass}>Loading articles…</p>}

      {!loading && error && <p className={errorClass}>{error}</p>}

      {!loading && !error && articles.length === 0 && (
        <p className={emptyStateClass}>No articles found.</p>
      )}

      {!loading && !error && articles.length > 0 && (
        <div className={`${articleGrid}`}>
          {articles.map((article) => (
            <div className={articleCardClass} key={article._id}>
              <h1 className={subHeadingClass}>
                {article.author?.firstName} {article.author?.lastName}
              </h1>
              <h3 className={articleTitle}>Title: {article.title}</h3>
              <p className={articleExcerpt}>Category: {article.category}</p>
              <button className={`text-blue-500 mt-auto pt-4`} onClick={() => navigateToArticleByID(article)}>
                Read Article →
              </button>
              <p className={articleMeta}>{formatDate(article.createdAt)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Articles
