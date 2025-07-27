import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const GuestBook = ({ onNext }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState({ name: "", message: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get(`${API}/birthday-messages`);
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newMessage.name || !newMessage.message) return;

    setIsSubmitting(true);
    try {
      await axios.post(`${API}/birthday-messages`, {
        name: newMessage.name,
        message: newMessage.message,
        email: newMessage.email || null
      });
      
      setNewMessage({ name: "", message: "", email: "" });
      setShowForm(false);
      fetchMessages();
    } catch (error) {
      console.error("Error submitting message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-blue-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-dancing-script text-teal-600 mb-6">
            Guest Book 📝
          </h2>
          <p className="text-lg text-gray-600 italic">
            Leave a birthday wish for Khushi!
          </p>
        </div>

        {/* Add Message Button */}
        {!showForm && (
          <div className="text-center mb-8">
            <Button
              onClick={() => setShowForm(true)}
              className="bg-gradient-to-r from-teal-400 to-blue-400 hover:from-teal-500 hover:to-blue-500 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Leave a Birthday Wish 🎁
            </Button>
          </div>
        )}

        {/* Message Form */}
        {showForm && (
          <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-teal-200 mb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  value={newMessage.name}
                  onChange={(e) => setNewMessage({ ...newMessage, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-teal-200 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-200 bg-white/50"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Birthday Message *
                </label>
                <textarea
                  value={newMessage.message}
                  onChange={(e) => setNewMessage({ ...newMessage, message: e.target.value })}
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border border-teal-200 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-200 bg-white/50"
                  placeholder="Write your birthday wish for Khushi..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email (Optional)
                </label>
                <input
                  type="email"
                  value={newMessage.email}
                  onChange={(e) => setNewMessage({ ...newMessage, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-teal-200 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-200 bg-white/50"
                  placeholder="your@email.com"
                />
              </div>

              <div className="flex space-x-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-teal-400 to-blue-400 hover:from-teal-500 hover:to-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  {isSubmitting ? "Sending..." : "Send Wish 💕"}
                </Button>
                <Button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        )}

        {/* Messages Display */}
        <div className="space-y-6">
          <h3 className="text-2xl font-dancing-script text-teal-600 text-center">
            Birthday Wishes ({messages.length})
          </h3>
          
          {messages.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🎈</div>
              <p className="text-gray-600 italic">
                Be the first to leave a birthday wish for Khushi!
              </p>
            </div>
          ) : (
            <div className="grid gap-6">
              {messages.map((msg, index) => (
                <div
                  key={msg.id}
                  className="bg-white/40 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-teal-200 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold">
                      {msg.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-bold text-teal-600">{msg.name}</h4>
                        <span className="text-gray-500 text-sm">
                          {new Date(msg.timestamp).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{msg.message}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="text-center mt-12">
          <Button
            onClick={onNext}
            className="bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 text-white px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Continue Journey 🚀
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GuestBook;