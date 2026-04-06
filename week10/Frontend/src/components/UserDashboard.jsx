import { useNavigate, Outlet } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";

import {
  articleGrid,
  articleCardClass,
  articleTitle,
  ghostBtn,
  loadingClass,
  errorClass,
  timestampClass,
} from "../styles/common.js";

function UserDashboard() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:4000/user-api/articles", { withCredentials: true });
        setArticles(res.data.articles || []);
      } catch (err) {
        setError(err.response?.data?.error || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    getArticles();
  }, []);

  const formatDateIST = (date) => {
    return new Date(date).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  const navigateToArticleByID = (articleObj) => {
    navigate(`/article/${articleObj._id}`, {
      state: articleObj,
    });
  };

  if (loading) {
    return <p className={loadingClass}>Loading articles...</p>;
  }

  return (
    <div className="p-4">
      {error && <p className={errorClass}>{error}</p>}

      <div className={articleGrid}>
        {articles.map((articleObj) => (
          <div className={articleCardClass} key={articleObj._id}>
            <div className="flex flex-col h-full">
              <div>
                <p className={articleTitle}>{articleObj.title}</p>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {articleObj.content?.slice(0, 100)}...
                </p>
                <p className={timestampClass}>{formatDateIST(articleObj.createdAt)}</p>
              </div>
              <button 
                className={`${ghostBtn} mt-auto pt-4 text-left`} 
                onClick={() => navigateToArticleByID(articleObj)}
              >
                Read Article →
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* For nested routes like /user-profile/articles if needed */}
      <Outlet />
    </div>
  );
}

export default UserDashboard;