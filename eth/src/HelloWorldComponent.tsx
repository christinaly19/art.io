import React, { useEffect } from 'react';
import axios from 'axios';

const HelloWorldComponent: React.FC = () => {
  useEffect(() => {
    console.log("wassup")
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5328/api/hello');
        console.log(response.data); // "Hello, World!"
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Your component JSX */}
    </div>
  );
};

export default HelloWorldComponent;