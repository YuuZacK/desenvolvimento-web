import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Article from './components/Article';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import './index.css'; 

function App() {
  const postData = {
    content: (
      <>
        <p>Bem-vindo ao meu Blog.</p>
      </>
    )
  };

  return (
    <div className="app-container">
      <Header />
      <Navigation />
      <div className="main-content">
        <main>
          <Article
            title={postData.title}
            author={postData.author}
            date={postData.date}
            content={postData.content}
          />
        </main>
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;