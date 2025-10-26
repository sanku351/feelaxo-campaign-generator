# Feelaxo Campaign Generator 🎨✨

**AI-Powered Marketing Campaign Generator for Salons & Spas**

Create stunning social media marketing campaigns in minutes with AI-generated copy and professional graphics. Built specifically for salon and spa owners who want to create engaging marketing content without design skills.

---

## 🌟 Features

### 🎯 Smart Campaign Creation
- **6 Campaign Types**: Festival Special, New Service Launch, Discount/Offer, Special Event, Seasonal Campaign, Loyalty Reward
- **4 Brand Tones**: Friendly & Welcoming, Premium & Luxurious, Energetic & Fun, Professional & Trust
- **AI-Generated Copy**: Headlines, body text, CTAs, WhatsApp messages, and hashtags
- **Multi-Platform Support**: Instagram Post, Instagram Story, Facebook Post, WhatsApp Status

### 🎨 Visual Design
- **Custom Brand Colors**: Set primary, secondary, and accent colors
- **Live Preview**: See your design before downloading
- **Platform-Optimized Dimensions**: 
  - Instagram Post: 1080x1080px
  - Instagram Story: 1080x1920px
  - Facebook Post: 1200x630px
  - WhatsApp Status: 1080x1920px
- **Professional Gradients**: Automatic gradient generation with brand colors
- **High-Quality Export**: Download PNG images ready for posting

### 📋 Copy Management
- **One-Click Copy**: Copy any text segment to clipboard
- **WhatsApp Ready**: Pre-formatted messages for broadcast
- **SEO-Friendly Hashtags**: Relevant hashtags for better reach
- **Multiple Versions**: Different copy variations based on tone

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/sanku351/feelaxo-campaign-generator.git

# Navigate to project directory
cd feelaxo-campaign-generator

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open at `http://localhost:5137`

---

## 🎯 How to Use

### Step 1: Campaign Details
1. Enter your **business/salon name**
2. Select a **campaign type** (e.g., Festival Special, Discount)
3. Describe your **offer details** (e.g., "30% off all spa services")
4. Specify **target audience** (optional)
5. Choose your **brand tone**

### Step 2: Brand Colors
1. Pick your **primary color** (main brand color)
2. Choose **secondary color** (complementary color)
3. Select **accent color** (highlight color)
4. Preview the gradient combination

### Step 3: Generate & Download
1. Review AI-generated copy (headline, body, CTA, WhatsApp message, hashtags)
2. **Copy** any text with one click
3. Select your **platform** (Instagram, Facebook, WhatsApp)
4. **Download** the professional graphic
5. Post directly to your social media!

---

## 📱 Supported Platforms

| Platform | Dimensions | Aspect Ratio |
|----------|-----------|--------------|
| Instagram Post | 1080 x 1080 | 1:1 |
| Instagram Story | 1080 x 1920 | 9:16 |
| Facebook Post | 1200 x 630 | 1.91:1 |
| WhatsApp Status | 1080 x 1920 | 9:16 |

---

## 🛠️ Built With

- **React 18** - UI Framework
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **HTML5 Canvas API** - Image Generation
- **JavaScript ES6+** - Core Logic

---

## 📦 Project Structure

```
feelaxo-campaign-generator/
├── src/    
│   ├── App.jsx  # Main component
│   └── main.jsx
├── public/
│   └── index.html
├── package.json
└── README.md
```

---

## 🎨 Campaign Types & Copy Templates

The generator includes pre-built templates for:

### 1. **Festival Special**
- Friendly tone: Warm, celebratory messaging
- Premium tone: Luxury-focused festival offers

### 2. **New Service Launch**
- Friendly tone: Exciting, approachable announcements
- Energetic tone: Bold, attention-grabbing launches

### 3. **Discount/Offer**
- Friendly tone: Customer-focused deals
- Energetic tone: Urgency-driven offers

### 4. **Special Event**
- Professional tone: Sophisticated event promotion
- Premium tone: Exclusive VIP experiences

### 5. **Seasonal Campaign**
- Friendly tone: Season-themed messages
- Energetic tone: Dynamic seasonal content

### 6. **Loyalty Reward**
- Premium tone: Appreciation for valued clients
- Professional tone: Recognition programs

---

## 🔧 Customization

### Adding New Campaign Types

Edit the `campaignTypes` array in `CampaignGenerator.jsx`:

```javascript
const campaignTypes = [
  { id: 'your-type', name: 'Your Campaign', icon: '🎯' },
  // ... existing types
];
```

### Adding Copy Templates

Add templates to the `generateCampaignCopy()` function:

```javascript
const templates = {
  'your-type': {
    friendly: {
      headline: 'Your Headline',
      body: 'Your body text',
      cta: 'Your CTA',
      whatsapp: 'WhatsApp message',
      hashtags: '#YourHashtags'
    }
  }
};
```

### Custom Brand Colors

Modify default colors in the `brandColors` state:

```javascript
const [brandColors, setBrandColors] = useState({
  primary: '#YOUR_COLOR',
  secondary: '#YOUR_COLOR',
  accent: '#YOUR_COLOR'
});
```

---

## 🌐 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Drag and drop 'build' folder to Netlify
```

---

## 🎯 Use Cases

### For Salon Owners
- Create Diwali/festival promotions
- Launch new services (nail art, hair treatments)
- Announce special offers and discounts
- Promote ladies' day or weekend packages
- Build loyalty programs

### For Marketing Teams
- Rapid campaign prototyping
- A/B testing different messaging
- Multi-platform content creation
- Brand consistency across channels

### For Feelaxo Platform
- Integrate as a value-added feature
- White-label for salon partners
- Automated campaign suggestions
- Template library expansion

---

## 🚧 Roadmap

- [ ] Add more campaign templates (15+ types)
- [ ] Image upload for logo integration
- [ ] Font customization options
- [ ] Video/GIF export for stories
- [ ] Multi-language support
- [ ] Campaign calendar integration
- [ ] Performance analytics dashboard
- [ ] API for third-party integrations
- [ ] Template marketplace
- [ ] Bulk campaign generation

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Guidelines
- Follow existing code style
- Add comments for complex logic
- Test on multiple platforms
- Update README if adding features

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Inspired by the needs of salon and spa businesses
- Built for the Feelaxo platform ecosystem
- Icons by [Lucide](https://lucide.dev/)
- Color inspiration from modern salon brands

---

## 📧 Contact & Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/feelaxo-campaign-generator/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/feelaxo-campaign-generator/discussions)
- **Email**: support@feelaxo.com
- **Website**: [feelaxo.com](https://feelaxo.com)

---

## 📊 Stats

![GitHub stars](https://img.shields.io/github/stars/yourusername/feelaxo-campaign-generator?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/feelaxo-campaign-generator?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/yourusername/feelaxo-campaign-generator?style=social)

---

## 🎉 Made with ❤️ for Salon & Spa Owners

**Star ⭐ this repo if you find it helpful!**

---

### 🔗 Quick Links

- [Live Demo](https://your-demo-link.com)
- [Documentation](https://docs.feelaxo.com)
- [Video Tutorial](https://youtube.com/your-tutorial)
- [Blog Post](https://blog.feelaxo.com/campaign-generator)

---

*Last Updated: October 2025*
