import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

class AnalyticsService {
  constructor() {
    this.startTime = Date.now();
    this.sectionsViewed = new Set();
    this.currentSection = null;
  }

  // Track section view
  trackSectionView(sectionName) {
    this.sectionsViewed.add(sectionName);
    this.currentSection = sectionName;
    
    // Send to backend
    this.sendInteraction(sectionName, 'view');
  }

  // Track section interaction
  trackInteraction(sectionName, interactionType) {
    this.sendInteraction(sectionName, interactionType);
  }

  // Track love letter open
  trackLoveLetterOpen() {
    this.sendInteraction('love_letter', 'open');
  }

  // Send interaction to backend
  async sendInteraction(sectionName, interactionType) {
    try {
      await axios.post(`${API}/section-interactions`, {
        section_name: sectionName,
        interaction_type: interactionType
      });
    } catch (error) {
      console.error('Error tracking interaction:', error);
    }
  }

  // Send visitor data when leaving
  async sendVisitorData(favoriteSection = null) {
    try {
      const timeSpent = Math.round((Date.now() - this.startTime) / 1000);
      
      await axios.post(`${API}/visitor-data`, {
        sections_viewed: Array.from(this.sectionsViewed),
        time_spent: timeSpent,
        favorite_section: favoriteSection,
        love_letter_opened: this.sectionsViewed.has('love_letter')
      });
    } catch (error) {
      console.error('Error sending visitor data:', error);
    }
  }

  // Get current session data
  getSessionData() {
    return {
      sectionsViewed: Array.from(this.sectionsViewed),
      timeSpent: Math.round((Date.now() - this.startTime) / 1000),
      currentSection: this.currentSection
    };
  }
}

// Create singleton instance
const analyticsService = new AnalyticsService();

export default analyticsService;