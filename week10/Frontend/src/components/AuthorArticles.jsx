import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useAuth } from '../store/authStore';
import {
  articleGrid,
  articleCardClass,
  articleTitle,
  articleExcerpt,
  articleMeta,
  loadingClass,
  errorClass,
  emptyStateClass,
  pageWrapper,
  headingClass,
} from "../styles/common";

function AuthorArticles() {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const currentUser = useAuth((state) => state.currentUser);

  const formatDate = (date) => {
    return new Date(date).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  const navigateToArticleByID = (articleObj) => {
    navigate(`/article/${articleObj._id}`, { state: articleObj });
  };

  useEffect(() => {
    if (!currentUser) return;

    const fetchAuthorArticles = async () => {
      try {
        setLoading(true);
        setError(null);
        const authorId = currentUser._id || currentUser.userId;
        const res = await axios.get(
          `https://blogapp-backend-7kra.onrender.com/author-api/articles/${authorId}`,
          { withCredentials: true }
        );
        setArticles(res.data.articles || []);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to load your articles.");
      } finally {
        setLoading(false);
      }
    };

    fetchAuthorArticles();
  }, [currentUser]);

  return (
    <div className={pageWrapper}>
      <h2 className={headingClass}>Your Articles</h2>
      {loading && <p className={loadingClass}>Loading your articles...</p>}

      {!loading && error && <p className={errorClass}>{error}</p>}

      {!loading && !error && articles.length === 0 && (
        <p className={emptyStateClass}>You haven't published any articles yet.</p>
      )}

      {!loading && !error && articles.length > 0 && (
        <div className={articleGrid}>
          {articles.map((article) => (
            <div 
              className={`${articleCardClass} ${!article.isArticleActive ? "opacity-60 bg-gray-50 border-gray-200" : ""}`} 
              key={article._id}
            >
              <div className="flex justify-between items-start mb-2">
                 <h3 className={articleTitle}>{article.title}</h3>
                 {!article.isArticleActive && (
                   <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full font-semibold uppercase">
                     Deleted
                   </span>
                 )}
              </div>
              
              <p className={articleExcerpt}>Category: {article.category}</p>
              
              <button
                className="text-blue-500 mt-auto pt-4 text-left font-medium"
                onClick={() => navigateToArticleByID(article)}
              >
                {article.isArticleActive ? "View / Edit →" : "View / Restore →"}
              </button>
              
              <p className={articleMeta}>{formatDate(article.createdAt)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AuthorArticles;
