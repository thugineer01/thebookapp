// Feed.js

import React, { useEffect, useState } from 'react';
import Recommendation from './Recommendation';

function Feed({ user }) {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    // Fetch personalized recommendations for the logged-in user
    // Update the 'feed' state with the recommendations
  }, [user]);

  return (
    <div>
      {feed.map((recommendation) => (
        <Recommendation recommendation={recommendation} key={recommendation.id} />
      ))}
    </div>
  );
}

export default Feed;
