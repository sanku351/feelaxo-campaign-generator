import React, { useState } from 'react';
import { Sparkles, Download, Wand2, Copy, Instagram, Facebook, MessageCircle, Check } from 'lucide-react';

export default function CampaignGenerator() {
  const [step, setStep] = useState(1);
  const [campaignData, setCampaignData] = useState({
    businessName: '',
    campaignType: '',
    offerDetails: '',
    targetAudience: '',
    tone: 'friendly'
  });
  const [generatedCopy, setGeneratedCopy] = useState(null);
  const [selectedPlatform, setSelectedPlatform] = useState('instagram');
  const [brandColors, setBrandColors] = useState({
    primary: '#FF6B9D',
    secondary: '#C44569',
    accent: '#FFA07A'
  });
  const [copiedIndex, setCopiedIndex] = useState(null);

  const campaignTypes = [
    { id: 'festival', name: 'Festival Special', icon: '🎉' },
    { id: 'service', name: 'New Service Launch', icon: '✨' },
    { id: 'discount', name: 'Discount/Offer', icon: '💝' },
    { id: 'event', name: 'Special Event', icon: '🎊' },
    { id: 'seasonal', name: 'Seasonal Campaign', icon: '🌸' },
    { id: 'loyalty', name: 'Loyalty Reward', icon: '⭐' }
  ];

  const toneOptions = [
    { id: 'friendly', name: 'Friendly & Welcoming' },
    { id: 'premium', name: 'Premium & Luxurious' },
    { id: 'energetic', name: 'Energetic & Fun' },
    { id: 'professional', name: 'Professional & Trust' }
  ];

  const platforms = [
    { id: 'instagram', name: 'Instagram Post', icon: Instagram, size: '1080x1080' },
    { id: 'story', name: 'Instagram Story', icon: Instagram, size: '1080x1920' },
    { id: 'facebook', name: 'Facebook Post', icon: Facebook, size: '1200x630' },
    { id: 'whatsapp', name: 'WhatsApp Status', icon: MessageCircle, size: '1080x1920' }
  ];

  const generateCampaignCopy = () => {
    const templates = {
      festival: {
        friendly: {
          headline: `Celebrate in Style at ${campaignData.businessName}! 🎉`,
          body: `This festive season, treat yourself to something special! ${campaignData.offerDetails}\n\nPerfect for ${campaignData.targetAudience} looking to feel amazing.`,
          cta: 'Book Your Slot Now - Limited Availability!',
          whatsapp: `🎉 FESTIVE SPECIAL!\n\nHi! ${campaignData.businessName} here.\n\n${campaignData.offerDetails}\n\nTap to book your appointment today! Limited slots available.`,
          hashtags: '#SalonSpecial #FestiveVibes #BeautyDeals #PamperYourself'
        },
        premium: {
          headline: `Elevate Your Festival Look - ${campaignData.businessName}`,
          body: `Experience luxury this festive season. ${campaignData.offerDetails}\n\nExclusively curated for ${campaignData.targetAudience}.`,
          cta: 'Reserve Your Experience',
          whatsapp: `✨ EXCLUSIVE FESTIVE OFFER\n\n${campaignData.businessName} invites you to an exceptional experience.\n\n${campaignData.offerDetails}\n\nReserve your slot today.`,
          hashtags: '#LuxuryBeauty #PremiumSalon #FestiveGlam #ExclusiveOffer'
        }
      },
      service: {
        friendly: {
          headline: `Exciting News! New at ${campaignData.businessName} ✨`,
          body: `We're thrilled to introduce: ${campaignData.offerDetails}\n\nPerfect for ${campaignData.targetAudience}!`,
          cta: 'Try It First - Book Now!',
          whatsapp: `✨ SOMETHING NEW JUST FOR YOU!\n\n${campaignData.businessName} is excited to announce:\n${campaignData.offerDetails}\n\nBe among the first to try it! Book now.`,
          hashtags: '#NewService #BeautyInnovation #SalonLaunch #TryItNow'
        },
        energetic: {
          headline: `🚀 Just Launched at ${campaignData.businessName}!`,
          body: `Get ready for this! ${campaignData.offerDetails}\n\nMade especially for ${campaignData.targetAudience}!`,
          cta: 'Book Your Spot Now!',
          whatsapp: `🚀 BIG NEWS!\n\n${campaignData.businessName} just launched something amazing:\n${campaignData.offerDetails}\n\nDon't miss out! Book today!`,
          hashtags: '#NewLaunch #BeautyNews #ExcitingServices #BookNow'
        }
      },
      discount: {
        friendly: {
          headline: `Special Offer Just for You! 💝`,
          body: `${campaignData.businessName} loves you! ${campaignData.offerDetails}\n\nGreat for ${campaignData.targetAudience}.`,
          cta: 'Claim Your Offer - Limited Time!',
          whatsapp: `💝 SPECIAL OFFER FOR YOU!\n\nHello from ${campaignData.businessName}!\n\n${campaignData.offerDetails}\n\n⏰ Limited time only! Book now to save.`,
          hashtags: '#SalonDeals #BeautyOffer #LimitedTimeOffer #SaveNow'
        },
        energetic: {
          headline: `🔥 HOT DEAL at ${campaignData.businessName}!`,
          body: `Don't miss this! ${campaignData.offerDetails}\n\nPerfect for ${campaignData.targetAudience} who love great deals!`,
          cta: 'Grab This Deal Now!',
          whatsapp: `🔥 AMAZING DEAL ALERT!\n\n${campaignData.businessName}:\n${campaignData.offerDetails}\n\n⚡ Act fast! Book your appointment now!`,
          hashtags: '#FlashSale #BeautyDeals #SalonOffer #DontMissOut'
        }
      }
    };

    const type = campaignData.campaignType || 'discount';
    const tone = campaignData.tone || 'friendly';
    const template = templates[type]?.[tone] || templates.discount.friendly;

    setGeneratedCopy(template);
    setStep(3);
  };

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const downloadImage = () => {
    const canvas = document.createElement('canvas');
    const platform = platforms.find(p => p.id === selectedPlatform);
    
    if (selectedPlatform === 'instagram' || selectedPlatform === 'facebook') {
      canvas.width = 1080;
      canvas.height = selectedPlatform === 'facebook' ? 630 : 1080;
    } else {
      canvas.width = 1080;
      canvas.height = 1920;
    }

    const ctx = canvas.getContext('2d');
    
    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, brandColors.primary);
    gradient.addColorStop(0.5, brandColors.secondary);
    gradient.addColorStop(1, brandColors.accent);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add overlay for text readability
    ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Text setup
    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'center';

    // Business name
    ctx.font = 'bold 60px Arial';
    ctx.fillText(campaignData.businessName.toUpperCase(), canvas.width / 2, 150);

    // Headline
    ctx.font = 'bold 80px Arial';
    const headlineWords = generatedCopy.headline.split(' ');
    let line = '';
    let y = canvas.height / 2 - 100;
    
    headlineWords.forEach((word, i) => {
      const testLine = line + word + ' ';
      const metrics = ctx.measureText(testLine);
      if (metrics.width > canvas.width - 200 && i > 0) {
        ctx.fillText(line, canvas.width / 2, y);
        line = word + ' ';
        y += 90;
      } else {
        line = testLine;
      }
    });
    ctx.fillText(line, canvas.width / 2, y);

    // Body text
    ctx.font = '40px Arial';
    const bodyLines = generatedCopy.body.split('\n');
    y += 120;
    bodyLines.forEach((bodyLine, i) => {
      if (y < canvas.height - 300) {
        const words = bodyLine.split(' ');
        let currentLine = '';
        words.forEach((word, j) => {
          const test = currentLine + word + ' ';
          const metrics = ctx.measureText(test);
          if (metrics.width > canvas.width - 200) {
            ctx.fillText(currentLine, canvas.width / 2, y);
            currentLine = word + ' ';
            y += 50;
          } else {
            currentLine = test;
          }
        });
        ctx.fillText(currentLine, canvas.width / 2, y);
        y += 60;
      }
    });

    // CTA button
    const ctaY = canvas.height - 200;
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(canvas.width / 2 - 300, ctaY - 40, 600, 80);
    ctx.fillStyle = brandColors.primary;
    ctx.font = 'bold 40px Arial';
    ctx.fillText(generatedCopy.cta, canvas.width / 2, ctaY + 10);

    // Download
    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${campaignData.businessName}_${selectedPlatform}_campaign.png`;
      a.click();
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 pt-6">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Sparkles className="w-10 h-10 text-pink-500" />
            <h1 className="text-4xl font-bold text-gray-800">Feelaxo Campaign Generator</h1>
          </div>
          <p className="text-gray-600">Create stunning marketing campaigns in minutes - powered by AI</p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-4">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  step >= s ? 'bg-pink-500 text-white' : 'bg-gray-300 text-gray-600'
                }`}>
                  {s}
                </div>
                {s < 3 && <div className={`w-16 h-1 ${step > s ? 'bg-pink-500' : 'bg-gray-300'}`} />}
              </div>
            ))}
          </div>
        </div>

        {/* Step 1: Campaign Details */}
        {step === 1 && (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Step 1: Campaign Details</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Business/Salon Name *
                </label>
                <input
                  type="text"
                  value={campaignData.businessName}
                  onChange={(e) => setCampaignData({...campaignData, businessName: e.target.value})}
                  placeholder="e.g., Glamour Studio"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-pink-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Campaign Type *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {campaignTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setCampaignData({...campaignData, campaignType: type.id})}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        campaignData.campaignType === type.id
                          ? 'border-pink-500 bg-pink-50'
                          : 'border-gray-300 hover:border-pink-300'
                      }`}
                    >
                      <div className="text-3xl mb-2">{type.icon}</div>
                      <div className="text-sm font-semibold">{type.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Offer Details *
                </label>
                <textarea
                  value={campaignData.offerDetails}
                  onChange={(e) => setCampaignData({...campaignData, offerDetails: e.target.value})}
                  placeholder="e.g., Get 30% off on all spa services. Book 2 services and get 1 free haircut!"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-pink-500 focus:outline-none h-24"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Target Audience
                </label>
                <input
                  type="text"
                  value={campaignData.targetAudience}
                  onChange={(e) => setCampaignData({...campaignData, targetAudience: e.target.value})}
                  placeholder="e.g., working women, brides-to-be, college students"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-pink-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Brand Tone
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {toneOptions.map((tone) => (
                    <button
                      key={tone.id}
                      onClick={() => setCampaignData({...campaignData, tone: tone.id})}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        campaignData.tone === tone.id
                          ? 'border-pink-500 bg-pink-50'
                          : 'border-gray-300 hover:border-pink-300'
                      }`}
                    >
                      <div className="text-sm font-semibold">{tone.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setStep(2)}
                disabled={!campaignData.businessName || !campaignData.campaignType || !campaignData.offerDetails}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 rounded-lg font-bold text-lg hover:from-pink-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                Continue to Brand Colors →
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Brand Colors */}
        {step === 2 && (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Step 2: Brand Colors</h2>
            
            <div className="space-y-6">
              <p className="text-gray-600">Choose colors that represent your salon's brand identity</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Primary Color
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={brandColors.primary}
                      onChange={(e) => setBrandColors({...brandColors, primary: e.target.value})}
                      className="w-20 h-20 rounded-lg cursor-pointer border-2 border-gray-300"
                    />
                    <input
                      type="text"
                      value={brandColors.primary}
                      onChange={(e) => setBrandColors({...brandColors, primary: e.target.value})}
                      className="flex-1 px-3 py-2 border-2 border-gray-300 rounded-lg"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Secondary Color
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={brandColors.secondary}
                      onChange={(e) => setBrandColors({...brandColors, secondary: e.target.value})}
                      className="w-20 h-20 rounded-lg cursor-pointer border-2 border-gray-300"
                    />
                    <input
                      type="text"
                      value={brandColors.secondary}
                      onChange={(e) => setBrandColors({...brandColors, secondary: e.target.value})}
                      className="flex-1 px-3 py-2 border-2 border-gray-300 rounded-lg"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Accent Color
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={brandColors.accent}
                      onChange={(e) => setBrandColors({...brandColors, accent: e.target.value})}
                      className="w-20 h-20 rounded-lg cursor-pointer border-2 border-gray-300"
                    />
                    <input
                      type="text"
                      value={brandColors.accent}
                      onChange={(e) => setBrandColors({...brandColors, accent: e.target.value})}
                      className="flex-1 px-3 py-2 border-2 border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Color Preview */}
              <div className="p-6 rounded-lg" style={{
                background: `linear-gradient(135deg, ${brandColors.primary}, ${brandColors.secondary}, ${brandColors.accent})`
              }}>
                <div className="text-white text-center">
                  <p className="text-2xl font-bold">Preview</p>
                  <p className="mt-2">{campaignData.businessName || 'Your Salon Name'}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 bg-gray-200 text-gray-700 py-4 rounded-lg font-bold text-lg hover:bg-gray-300 transition-all"
                >
                  ← Back
                </button>
                <button
                  onClick={generateCampaignCopy}
                  className="flex-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 rounded-lg font-bold text-lg hover:from-pink-600 hover:to-purple-600 transition-all flex items-center justify-center gap-2"
                >
                  <Wand2 className="w-5 h-5" />
                  Generate Campaign
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Generated Campaign */}
        {step === 3 && generatedCopy && (
          <div className="space-y-6">
            {/* Copy Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Campaign Copy</h2>
              
              <div className="space-y-4">
                <div className="border-2 border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-gray-700">Headline</h3>
                    <button
                      onClick={() => copyToClipboard(generatedCopy.headline, 'headline')}
                      className="text-pink-500 hover:text-pink-600 flex items-center gap-1"
                    >
                      {copiedIndex === 'headline' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  <p className="text-gray-800">{generatedCopy.headline}</p>
                </div>

                <div className="border-2 border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-gray-700">Body Text</h3>
                    <button
                      onClick={() => copyToClipboard(generatedCopy.body, 'body')}
                      className="text-pink-500 hover:text-pink-600 flex items-center gap-1"
                    >
                      {copiedIndex === 'body' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  <p className="text-gray-800 whitespace-pre-line">{generatedCopy.body}</p>
                </div>

                <div className="border-2 border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-gray-700">Call to Action</h3>
                    <button
                      onClick={() => copyToClipboard(generatedCopy.cta, 'cta')}
                      className="text-pink-500 hover:text-pink-600 flex items-center gap-1"
                    >
                      {copiedIndex === 'cta' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  <p className="text-gray-800 font-semibold">{generatedCopy.cta}</p>
                </div>

                <div className="border-2 border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-gray-700">WhatsApp Message</h3>
                    <button
                      onClick={() => copyToClipboard(generatedCopy.whatsapp, 'whatsapp')}
                      className="text-pink-500 hover:text-pink-600 flex items-center gap-1"
                    >
                      {copiedIndex === 'whatsapp' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  <p className="text-gray-800 whitespace-pre-line text-sm">{generatedCopy.whatsapp}</p>
                </div>

                <div className="border-2 border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-gray-700">Hashtags</h3>
                    <button
                      onClick={() => copyToClipboard(generatedCopy.hashtags, 'hashtags')}
                      className="text-pink-500 hover:text-pink-600 flex items-center gap-1"
                    >
                      {copiedIndex === 'hashtags' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  <p className="text-gray-600 text-sm">{generatedCopy.hashtags}</p>
                </div>
              </div>
            </div>

            {/* Visual Design Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Campaign Visual</h2>
              
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Select Platform
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {platforms.map((platform) => (
                    <button
                      key={platform.id}
                      onClick={() => setSelectedPlatform(platform.id)}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        selectedPlatform === platform.id
                          ? 'border-pink-500 bg-pink-50'
                          : 'border-gray-300 hover:border-pink-300'
                      }`}
                    >
                      <platform.icon className="w-6 h-6 mx-auto mb-2" />
                      <div className="text-sm font-semibold">{platform.name}</div>
                      <div className="text-xs text-gray-500">{platform.size}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Preview */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Preview
                </label>
                <div className="bg-gray-100 p-4 rounded-lg flex justify-center">
                  <div
                    className="rounded-lg shadow-lg overflow-hidden"
                    style={{
                      width: selectedPlatform === 'story' || selectedPlatform === 'whatsapp' ? '200px' : '400px',
                      height: selectedPlatform === 'story' || selectedPlatform === 'whatsapp' ? '355px' : selectedPlatform === 'facebook' ? '233px' : '400px',
                      background: `linear-gradient(135deg, ${brandColors.primary}, ${brandColors.secondary}, ${brandColors.accent})`,
                      position: 'relative'
                    }}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center p-6 text-white">
                      <div className="text-center">
                        <p className="font-bold text-xs mb-4">{campaignData.businessName.toUpperCase()}</p>
                        <p className="font-bold text-sm mb-3 leading-tight">{generatedCopy.headline.substring(0, 50)}...</p>
                        <p className="text-xs mb-4 leading-snug opacity-90">{generatedCopy.body.substring(0, 80)}...</p>
                        <div className="bg-white text-pink-600 px-4 py-2 rounded-full text-xs font-bold inline-block">
                          {generatedCopy.cta}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={downloadImage}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 rounded-lg font-bold text-lg hover:from-pink-600 hover:to-purple-600 transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download {platforms.find(p => p.id === selectedPlatform)?.name}
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => setStep(1)}
                className="flex-1 bg-gray-200 text-gray-700 py-4 rounded-lg font-bold text-lg hover:bg-gray-300 transition-all"
              >
                Create New Campaign
              </button>
              <button
                onClick={generateCampaignCopy}
                className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-lg font-bold text-lg hover:from-purple-600 hover:to-pink-600 transition-all flex items-center justify-center gap-2"
              >
                <Wand2 className="w-5 h-5" />
                Regenerate Copy
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}