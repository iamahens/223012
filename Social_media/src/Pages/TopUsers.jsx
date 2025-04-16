import React, { useEffect, useState } from 'react';

const TopUsers = () => {
  const [topUsers, setTopUsers] = useState([]);

  useEffect(() => {
    const fetchTopUsers = async () => {
      const [postsRes, commentsRes, usersRes] = await Promise.all([
        fetch('http://20.244.56.144/evaluation-service/posts'),
        fetch('http://20.244.56.144/evaluation-service/comments'),
        fetch('http://20.244.56.144/evaluation-service/users')
      ]);

      const posts = await postsRes.json();
      const comments = await commentsRes.json();
      const users = await usersRes.json();

      // Step 1: Count comments per post
      const commentCountByPost = comments.reduce((acc, comment) => {
        acc[comment.postId] = (acc[comment.postId] || 0) + 1;
        return acc;
      }, {});

      // Step 2: Map userId to total comments on their posts
      const commentCountByUser = {};

      posts.forEach(post => {
        const postComments = commentCountByPost[post.id] || 0;
        commentCountByUser[post.userId] = (commentCountByUser[post.userId] || 0) + postComments;
      });

      // Step 3: Merge with user data and sort
      const userCommentData = users.map(user => ({
        id: user.id,
        name: user.name,
        email: user.email,
        totalComments: commentCountByUser[user.id] || 0
      }));

      const sortedUsers = userCommentData.sort((a, b) => b.totalComments - a.totalComments);

      setTopUsers(sortedUsers.slice(0, 5)); // Top 5
    };

    fetchTopUsers();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Top Users by Comments</h1>

      {topUsers.map(user => (
        <div
          key={user.id}
          className="bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-100"
        >
          <h2 className="text-lg font-semibold text-blue-800">{user.name}</h2>
          <p className="text-gray-600">Email: {user.email}</p>
          <p className="text-gray-700 font-medium">Total Comments: {user.totalComments}</p>
        </div>
      ))}
    </div>
  );
};

export default TopUsers;
