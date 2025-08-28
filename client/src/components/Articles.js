import React from 'react';
import { ArrowRight, Clock, User } from 'lucide-react';

const ArticleGrid = () => {
  const articles = [
    {
      id: 1,
      title: "Breaking the Stigma: Why Talking About Mental Health Matters",
      description: "Open conversations about mental health can reduce discrimination and encourage more people to seek help.",
      thumbnail: "https://images.unsplash.com/photo-1620147461831-a97b99ade1d3?auto=compress&cs=tinysrgb&w=400",
      author: "Sarah Johnson",
      readTime: "8 min read",
      category: "Mental Health"
    },
    {
      id: 2,
      title: "The Hidden Cost of Stress in the Workplace",
      description: "Chronic stress not only affects employee wellbeing but also drains organizational productivity and profits.",
      thumbnail: "https://images.unsplash.com/photo-1620147461831-a97b99ade1d3?auto=compress&cs=tinysrgb&w=400",
      author: "Michael Chen",
      readTime: "12 min read",
      category: "Mental Health"
    },
    {
      id: 3,
      title: "Digital Therapy: How Apps Bridge the Mental Health Gap.",
      description: "Mental health apps are expanding access to care, but questions remain about effectiveness and privacy.",
      thumbnail: "https://images.unsplash.com/photo-1620147461831-a97b99ade1d3?auto=compress&cs=tinysrgb&w=400",
      author: "Emma Davis",
      readTime: "6 min read",
      category: "Mental Health"
    },
    {
      id: 4,
      title: "Youth and Mental Health: A Silent Crisis",
      description: "Rising rates of anxiety, depression, and suicide among young people highlight the urgent need for early intervention.",
      thumbnail: "https://images.unsplash.com/photo-1620147461831-a97b99ade1d3?auto=compress&cs=tinysrgb&w=400",
      author: "David Wilson",
      readTime: "10 min read",
      category: "Mental Health"
    },
    {
      id: 5,
      title: "The Link Between Physical Health and Mental Wellbeing",
      description: "Exercise, sleep, and nutrition play a powerful role in preventing and managing mental health conditions.",
      thumbnail: "https://images.unsplash.com/photo-1620147461831-a97b99ade1d3?auto=compress&cs=tinysrgb&w=400",
      author: "Lisa Rodriguez",
      readTime: "7 min read",
      category: "Mental health"
    },
    {
      id: 6,
      title: "Community Care: Why Local Support Systems Matter in Mental Health",
      description: "Family, friends, and community networks can be as vital as professionals in supporting mental wellbeing.",
      thumbnail: "https://images.unsplash.com/photo-1620147461831-a97b99ade1d3?auto=compress&cs=tinysrgb&w=400",
      author: "Alex Thompson",
      readTime: "9 min read",
      category: "Mental health"
    }
  ];

  const handleReadMore = () => {
    // Since we don't have react-router-dom in this environment, we'll use window.location
    window.location.href = '/payment';
    // Or if you want to use the previous payment component:
    // You could set up state management to show the payment form
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-12 px-4 pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Premium Articles
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover in-depth insights and expert knowledge from industry leaders
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.thumbnail}
                  alt={article.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-3 overflow-hidden group-hover:text-blue-600 transition-colors duration-300" 
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical'
                    }}>
                  {article.title}
                </h2>

                <p className="text-gray-600 mb-6 leading-relaxed overflow-hidden"
                   style={{
                     display: '-webkit-box',
                     WebkitLineClamp: 3,
                     WebkitBoxOrient: 'vertical'
                   }}>
                  {article.description}
                </p>

                <button
                  onClick={handleReadMore}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  <span>Read More</span>
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Subscription CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready for Premium Content?</h2>
            <p className="text-xl mb-6 text-blue-100">
              Subscribe now for just $5/month and unlock all premium articles
            </p>
            <button
              onClick={handleReadMore}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors duration-300"
            >
              Subscribe Now - $5/month
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleGrid;