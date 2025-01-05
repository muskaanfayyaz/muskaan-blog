"use client";
import { useState, useEffect } from "react";

// Define the type for a comment
interface Comment {
  id: string;
  content: string;
  createdAt: string;
}

const CommentSection = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  useEffect(() => {
    fetch("/api/comments")
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newComment) return;

    const response = await fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: newComment }),
    });

    const addedComment = await response.json();
    setComments([...comments, addedComment]);
    setNewComment("");
  };

  return (
    <div className="comment-section">
      <h2>Share Your Thoughts</h2>
      <form onSubmit={handleSubmit} className="comment-form">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write your comment here..."
          required
          className="comment-textarea"
        ></textarea>
        <button type="submit" className="comment-button">
          Post Comment
        </button>
      </form>
      <ul className="comment-list">
        {comments.map((comment) => (
          <li key={comment.id} className="comment-item">
            <p className="comment-content">{comment.content}</p>
            <small className="comment-timestamp">{comment.createdAt}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;
