import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent">
      <h1 className="text-xl">LOADING</h1>
      <div className="flex p-5 space-x-3 rounded-full">
        <div className="w-3 h-3 bg-blue-secondary rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-blue-secondary rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-blue-secondary rounded-full animate-bounce"></div>
      </div>
    </div>
  )
}

export default Loading;