#!/bin/bash

# GitHub Repository Setup Script for Happy Birthday Khushi Website

echo "🎂 Setting up GitHub repository for Happy Birthday Khushi website..."

# Initialize git if not already initialized
if [ ! -d ".git" ]; then
    echo "📝 Initializing Git repository..."
    git init
else
    echo "✅ Git repository already initialized"
fi

# Add all files
echo "📁 Adding all files to git..."
git add .

# Create initial commit
echo "💾 Creating initial commit..."
git commit -m "🎉 Initial commit: Happy Birthday Khushi surprise website

✨ Features:
- Login system (Khushi: Khusu/Khusu, Guests: any credentials)
- 13 interactive sections for Khushi's complete experience
- Guest book for birthday wishes
- Real images (pav bhaji, chocolates, Khushi's photos)
- Enhanced animations (cake blowing, cutting, celebrations)
- Analytics dashboard
- MongoDB backend with FastAPI
- React frontend with TailwindCSS

🎂 Ready to deploy and surprise Khushi!"

# Add remote origin (user needs to replace with their repository URL)
echo "🌐 Setting up remote repository..."
echo ""
echo "⚠️  NEXT STEPS:"
echo "1. Create a new repository on GitHub named 'happy-birthday-khushi'"
echo "2. Copy the repository URL"
echo "3. Run: git remote add origin <YOUR_GITHUB_REPOSITORY_URL>"
echo "4. Run: git branch -M main"
echo "5. Run: git push -u origin main"
echo ""
echo "📋 Example commands:"
echo "git remote add origin https://github.com/YOUR_USERNAME/happy-birthday-khushi.git"
echo "git branch -M main"
echo "git push -u origin main"
echo ""
echo "🚀 After pushing, your website will auto-deploy to GitHub Pages!"
echo "🌐 Website will be available at: https://YOUR_USERNAME.github.io/happy-birthday-khushi"
echo ""
echo "🎉 Remember to update the 'homepage' field in frontend/package.json with your GitHub Pages URL!"