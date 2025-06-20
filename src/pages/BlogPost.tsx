import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Share2, Twitter, Facebook, Linkedin, Clock, Eye, BookOpen, TrendingUp, CheckCircle, Lightbulb, AlertTriangle, Star } from 'lucide-react';

export const BlogPost: React.FC = () => {
  const { slug } = useParams();

  // In a real app, you'd fetch this data based on the slug
  const blogPost = {
    title: 'The Complete Guide to URL Shortening in 2024: Strategies, Tools, and Best Practices',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    readTime: '12 min read',
    views: '15.2K',
    category: 'Marketing Strategy',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1200',
    excerpt: 'Master the art of URL shortening with our comprehensive guide covering advanced strategies, tools, and proven techniques.',
    content: `
      <div class="prose prose-lg max-w-none">
        <p class="text-xl text-gray-700 mb-8 leading-relaxed font-medium">
          URL shortening has evolved from a simple utility into a sophisticated marketing instrument that drives engagement, 
          tracks performance, and generates revenue. In 2024, understanding how to leverage shortened URLs effectively 
          can be the difference between a successful digital marketing campaign and one that falls flat.
        </p>

        <div class="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <svg class="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="ml-3">
              <h4 class="text-lg font-semibold text-blue-900 mb-2">Key Takeaway</h4>
              <p class="text-blue-800">Modern URL shortening is about creating trackable, brandable, and monetizable links that provide deep insights into your audience behavior while maintaining professional appearance across all marketing channels.</p>
            </div>
          </div>
        </div>

        <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">Why URL Shortening Matters More Than Ever in 2024</h2>
        
        <p class="text-gray-700 mb-6 leading-relaxed">
          In today's hyper-competitive digital landscape, every marketing touchpoint matters. Long, unwieldy URLs not only 
          look unprofessional but can significantly impact user experience and conversion rates. Research shows that 
          shortened URLs can increase click-through rates by up to 39% compared to their long-form counterparts.
        </p>

        <div class="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 mb-8">
          <h3 class="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
            <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            The Strategic Advantages of Modern URL Shortening
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-semibold text-gray-900 mb-3">📊 Enhanced Analytics & Insights</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Real-time click tracking and geographic data</li>
                <li>• Device and browser analytics</li>
                <li>• Referrer source identification</li>
                <li>• Conversion funnel analysis</li>
                <li>• A/B testing capabilities</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-gray-900 mb-3">🎯 Professional Brand Presence</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Custom domain integration</li>
                <li>• Branded short codes</li>
                <li>• Consistent visual identity</li>
                <li>• Trust and credibility building</li>
                <li>• Memorable link structures</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-gray-900 mb-3">💰 Revenue Generation Opportunities</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Advertising revenue sharing</li>
                <li>• Affiliate marketing integration</li>
                <li>• Premium content gating</li>
                <li>• Subscription model support</li>
                <li>• E-commerce tracking</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-gray-900 mb-3">🔒 Advanced Security Features</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Malware and phishing protection</li>
                <li>• SSL encryption</li>
                <li>• Link expiration controls</li>
                <li>• Access restrictions</li>
                <li>• Fraud detection systems</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">Choosing the Right URL Shortening Strategy</h2>
        
        <p class="text-gray-700 mb-6 leading-relaxed">
          Not all URL shorteners are created equal, and the best choice depends on your specific needs, audience, 
          and business objectives. Here's a comprehensive breakdown of what to consider when selecting your approach:
        </p>

        <div class="bg-white border border-gray-200 rounded-xl p-8 mb-8 shadow-lg">
          <h3 class="text-2xl font-semibold text-gray-900 mb-6">For Individual Content Creators</h3>
          <p class="text-gray-700 mb-4 leading-relaxed">
            If you're a blogger, social media influencer, or content creator sharing links occasionally, your needs 
            will focus on simplicity and basic analytics. However, even at this level, choosing a platform with 
            growth potential is crucial.
          </p>
          
          <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
            <h4 class="font-semibold text-yellow-800 mb-2 flex items-center">
              <svg class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              Essential Features to Look For:
            </h4>
            <ul class="text-yellow-800 space-y-1">
              <li>• Basic click analytics and geographic data</li>
              <li>• Social media platform optimization</li>
              <li>• Mobile-friendly dashboard</li>
              <li>• Reliable uptime and fast redirects</li>
              <li>• Free tier with reasonable limits</li>
            </ul>
          </div>
        </div>

        <div class="bg-white border border-gray-200 rounded-xl p-8 mb-8 shadow-lg">
          <h3 class="text-2xl font-semibold text-gray-900 mb-6">For Businesses and Professional Marketers</h3>
          <p class="text-gray-700 mb-4 leading-relaxed">
            Professional marketers and businesses need robust features that integrate with existing marketing stacks 
            and provide enterprise-level reliability. The investment in premium features typically pays for itself 
            through improved campaign performance and detailed insights.
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 class="font-semibold text-blue-900 mb-3">Must-Have Features:</h4>
              <ul class="text-blue-800 space-y-1 text-sm">
                <li>• Custom domain integration</li>
                <li>• Advanced analytics dashboard</li>
                <li>• Team collaboration tools</li>
                <li>• API access for automation</li>
                <li>• White-label solutions</li>
                <li>• Bulk link creation</li>
                <li>• UTM parameter automation</li>
              </ul>
            </div>
            <div class="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 class="font-semibold text-green-900 mb-3">Advanced Capabilities:</h4>
              <ul class="text-green-800 space-y-1 text-sm">
                <li>• A/B testing for link variations</li>
                <li>• Conversion tracking integration</li>
                <li>• CRM and marketing automation sync</li>
                <li>• Advanced security features</li>
                <li>• Custom redirect rules</li>
                <li>• Detailed reporting and exports</li>
                <li>• Priority customer support</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white mb-8">
          <h4 class="text-xl font-semibold mb-3 flex items-center">
            <svg class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            Pro Tip: Testing Your Strategy
          </h4>
          <p class="text-blue-100 leading-relaxed">
            Always test your shortened URLs before launching campaigns. Verify they redirect correctly across different 
            devices and browsers. Set up monitoring alerts for broken links, and have a backup plan for critical campaigns. 
            Consider implementing progressive enhancement where you start with basic shortening and gradually add advanced features.
          </p>
        </div>

        <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">Best Practices for Professional URL Shortening</h2>

        <div class="space-y-8">
          <div class="bg-white border border-gray-200 rounded-xl p-8 shadow-lg">
            <h3 class="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span class="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">1</span>
              Implement Custom Domains for Brand Authority
            </h3>
            <p class="text-gray-700 mb-4 leading-relaxed">
              Custom domains (like links.yourcompany.com) are crucial for building trust and reinforcing brand recognition. 
              Users are significantly more likely to click on links that clearly identify the source, and custom domains 
              can improve click-through rates by up to 34%.
            </p>
            
            <div class="bg-gray-50 rounded-lg p-4 mb-4">
              <h4 class="font-semibold text-gray-900 mb-2">Implementation Steps:</h4>
              <ol class="text-gray-700 space-y-1 list-decimal list-inside">
                <li>Choose a memorable subdomain (links, go, click, or your brand name)</li>
                <li>Configure DNS settings with your domain provider</li>
                <li>Set up SSL certificates for security</li>
                <li>Test thoroughly across different browsers and devices</li>
                <li>Monitor performance and adjust as needed</li>
              </ol>
            </div>
            
            <div class="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 class="font-semibold text-green-900 mb-2">Benefits of Custom Domains:</h4>
              <ul class="text-green-800 space-y-1">
                <li>• Increased user trust and click-through rates</li>
                <li>• Consistent branding across all marketing channels</li>
                <li>• Better email deliverability (less likely to be flagged as spam)</li>
                <li>• Professional appearance in all communications</li>
                <li>• Enhanced brand recognition and recall</li>
              </ul>
            </div>
          </div>

          <div class="bg-white border border-gray-200 rounded-xl p-8 shadow-lg">
            <h3 class="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span class="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">2</span>
              Create Meaningful and Memorable Short Codes
            </h3>
            <p class="text-gray-700 mb-4 leading-relaxed">
              When possible, use custom aliases that give users a hint about the destination. Meaningful short codes 
              not only build trust but also make your links more memorable and shareable.
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div class="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 class="font-semibold text-red-900 mb-2">❌ Poor Examples:</h4>
                <ul class="text-red-800 space-y-1 text-sm">
                  <li>• yoursite.com/a8k9j2</li>
                  <li>• yoursite.com/xyz123</li>
                  <li>• yoursite.com/link1</li>
                </ul>
              </div>
              <div class="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 class="font-semibold text-green-900 mb-2">✅ Better Examples:</h4>
                <ul class="text-green-800 space-y-1 text-sm">
                  <li>• yoursite.com/pricing</li>
                  <li>• yoursite.com/demo</li>
                  <li>• yoursite.com/webinar-jan</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-white border border-gray-200 rounded-xl p-8 shadow-lg">
            <h3 class="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span class="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">3</span>
              Master Advanced Analytics and Performance Tracking
            </h3>
            <p class="text-gray-700 mb-4 leading-relaxed">
              Regular monitoring and analysis of your link performance is crucial for optimization. Look beyond basic 
              click counts to understand user behavior patterns, conversion paths, and campaign effectiveness.
            </p>
            
            <div class="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 class="font-semibold text-blue-900 mb-4">Key Metrics to Track:</h4>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 class="font-medium text-blue-800 mb-2">Engagement Metrics:</h5>
                  <ul class="text-blue-700 space-y-1 text-sm">
                    <li>• Click-through rates (CTR)</li>
                    <li>• Unique vs. repeat visitors</li>
                    <li>• Time spent on destination page</li>
                    <li>• Bounce rate analysis</li>
                  </ul>
                </div>
                <div>
                  <h5 class="font-medium text-blue-800 mb-2">Audience Insights:</h5>
                  <ul class="text-blue-700 space-y-1 text-sm">
                    <li>• Geographic distribution</li>
                    <li>• Device and browser preferences</li>
                    <li>• Referrer source analysis</li>
                    <li>• Peak activity times</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white border border-gray-200 rounded-xl p-8 shadow-lg">
            <h3 class="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span class="bg-yellow-100 text-yellow-600 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">4</span>
              Implement UTM Parameters for Comprehensive Tracking
            </h3>
            <p class="text-gray-700 mb-4 leading-relaxed">
              UTM parameters provide additional context about traffic sources and campaign performance in Google Analytics. 
              Proper UTM implementation can increase your marketing attribution accuracy by up to 60%.
            </p>
            
            <div class="bg-gray-50 rounded-lg p-4 mb-4">
              <h4 class="font-semibold text-gray-900 mb-2">UTM Parameter Structure:</h4>
              <div class="bg-white border rounded p-3 font-mono text-sm text-gray-700 mb-3">
                ?utm_source=facebook&utm_medium=social&utm_campaign=spring_sale&utm_content=video_ad&utm_term=discount
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>utm_source:</strong> Traffic source (facebook, google, newsletter)<br/>
                  <strong>utm_medium:</strong> Marketing medium (social, email, cpc)<br/>
                  <strong>utm_campaign:</strong> Campaign name (spring_sale, product_launch)
                </div>
                <div>
                  <strong>utm_content:</strong> Ad content (video_ad, banner_top)<br/>
                  <strong>utm_term:</strong> Keywords (discount, free_trial)
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">The Future of URL Shortening: Trends and Innovations</h2>
        
        <p class="text-gray-700 mb-6 leading-relaxed">
          As we move deeper into 2024 and beyond, URL shortening tools are becoming increasingly sophisticated, 
          incorporating artificial intelligence, enhanced security measures, and deeper integration with marketing 
          automation platforms.
        </p>

        <div class="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-8 mb-8">
          <h3 class="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
            <svg class="h-6 w-6 text-purple-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Emerging Trends and Technologies
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-white/70 rounded-lg p-6">
              <h4 class="font-semibold text-gray-900 mb-3">🤖 AI-Powered Optimization</h4>
              <ul class="text-gray-700 space-y-2 text-sm">
                <li>• Intelligent link routing based on user behavior</li>
                <li>• Predictive analytics for campaign performance</li>
                <li>• Automated A/B testing and optimization</li>
                <li>• Smart audience segmentation</li>
              </ul>
            </div>
            <div class="bg-white/70 rounded-lg p-6">
              <h4 class="font-semibold text-gray-900 mb-3">📱 Enhanced Mobile Experiences</h4>
              <ul class="text-gray-700 space-y-2 text-sm">
                <li>• Progressive web app integration</li>
                <li>• Mobile-first analytics dashboards</li>
                <li>• App deep linking capabilities</li>
                <li>• Voice assistant compatibility</li>
              </ul>
            </div>
            <div class="bg-white/70 rounded-lg p-6">
              <h4 class="font-semibold text-gray-900 mb-3">🔗 Advanced Integration</h4>
              <ul class="text-gray-700 space-y-2 text-sm">
                <li>• Seamless CRM synchronization</li>
                <li>• Marketing automation workflows</li>
                <li>• Social media platform APIs</li>
                <li>• E-commerce platform integration</li>
              </ul>
            </div>
            <div class="bg-white/70 rounded-lg p-6">
              <h4 class="font-semibold text-gray-900 mb-3">🛡️ Next-Level Security</h4>
              <ul class="text-gray-700 space-y-2 text-sm">
                <li>• Real-time threat detection</li>
                <li>• Blockchain-based verification</li>
                <li>• Advanced fraud prevention</li>
                <li>• Privacy-first analytics</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-8 text-white mb-8">
          <h3 class="text-2xl font-bold mb-4">Ready to Transform Your Link Strategy?</h3>
          <p class="text-green-100 mb-6 leading-relaxed">
            URL shortening in 2024 is about much more than making links shorter. It's about creating better user experiences, 
            gaining valuable insights, and driving meaningful engagement that converts. By implementing these strategies and 
            choosing the right tools, you can turn every shared link into a powerful marketing asset.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="/signup" class="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center">
              Start Your Free Trial
            </a>
            <a href="/blog" class="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center">
              Read More Guides
            </a>
          </div>
        </div>

        <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">Conclusion: Your Next Steps</h2>
        
        <p class="text-gray-700 mb-6 leading-relaxed">
          The landscape of URL shortening has evolved dramatically, offering unprecedented opportunities for marketers, 
          content creators, and businesses to optimize their digital presence. Success in 2024 requires a strategic 
          approach that combines the right tools, best practices, and continuous optimization.
        </p>

        <div class="bg-blue-50 border border-blue-200 rounded-xl p-8 mb-8">
          <h3 class="text-xl font-semibold text-blue-900 mb-4">Action Plan for Success:</h3>
          <ol class="text-blue-800 space-y-3 list-decimal list-inside">
            <li><strong>Audit your current link strategy</strong> - Identify gaps and opportunities</li>
            <li><strong>Choose the right platform</strong> - Based on your specific needs and goals</li>
            <li><strong>Implement custom domains</strong> - Build trust and brand recognition</li>
            <li><strong>Set up comprehensive tracking</strong> - Monitor performance and user behavior</li>
            <li><strong>Test and optimize continuously</strong> - Use data to improve results</li>
            <li><strong>Stay updated on trends</strong> - Adapt to new technologies and best practices</li>
          </ol>
        </div>

        <p class="text-gray-700 leading-relaxed">
          Remember, the most successful link strategies are those that prioritize user experience while providing 
          valuable insights for optimization. Start with the basics, measure your results, and gradually implement 
          more advanced features as your needs grow. The investment in professional URL shortening will pay dividends 
          in improved engagement, better analytics, and ultimately, stronger business results.
        </p>
      </div>
    `
  };

  const shareUrl = `${window.location.origin}/blog/${slug}`;

  const relatedArticles = [
    {
      slug: 'monetize-short-links',
      title: 'How to Monetize Your Short Links and Earn Passive Income',
      excerpt: 'Learn proven strategies to turn your shortened URLs into a steady income stream.',
      readTime: '15 min read'
    },
    {
      slug: 'link-analytics-tracking',
      title: 'Advanced Link Analytics: Beyond Basic Click Tracking',
      excerpt: 'Dive deep into link analytics to understand your audience better.',
      readTime: '10 min read'
    },
    {
      slug: 'social-media-link-optimization',
      title: 'Social Media Link Optimization: Platform-Specific Strategies',
      excerpt: 'Maximize your social media impact with platform-optimized short links.',
      readTime: '8 min read'
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors group"
        >
          <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to All Articles
        </Link>

        {/* Article Header */}
        <article className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="relative">
            <img
              src={blogPost.image}
              alt={blogPost.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full mb-4">
                {blogPost.category}
              </span>
              <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                {blogPost.title}
              </h1>
            </div>
          </div>

          <div className="p-8">
            {/* Meta Information */}
            <div className="flex flex-wrap items-center text-sm text-gray-500 mb-8 pb-6 border-b border-gray-200">
              <div className="flex items-center mr-6 mb-2">
                <User className="h-4 w-4 mr-2" />
                <span className="font-medium">{blogPost.author}</span>
              </div>
              <div className="flex items-center mr-6 mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{new Date(blogPost.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center mr-6 mb-2">
                <Clock className="h-4 w-4 mr-2" />
                <span className="text-blue-600 font-medium">{blogPost.readTime}</span>
              </div>
              <div className="flex items-center mb-2">
                <Eye className="h-4 w-4 mr-2" />
                <span>{blogPost.views} views</span>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-gray-500">Share this article:</span>
                <button
                  onClick={() => window.open(`https://twitter.com/intent/tweet?url=${shareUrl}&text=${blogPost.title}`, '_blank')}
                  className="p-2 text-blue-400 hover:text-blue-600 transition-colors hover:bg-blue-50 rounded-lg"
                >
                  <Twitter className="h-5 w-5" />
                </button>
                <button
                  onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, '_blank')}
                  className="p-2 text-blue-600 hover:text-blue-800 transition-colors hover:bg-blue-50 rounded-lg"
                >
                  <Facebook className="h-5 w-5" />
                </button>
                <button
                  onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, '_blank')}
                  className="p-2 text-blue-700 hover:text-blue-900 transition-colors hover:bg-blue-50 rounded-lg"
                >
                  <Linkedin className="h-5 w-5" />
                </button>
                <button
                  onClick={() => navigator.clipboard.writeText(shareUrl)}
                  className="p-2 text-gray-600 hover:text-gray-800 transition-colors hover:bg-gray-50 rounded-lg"
                >
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <BookOpen className="h-4 w-4" />
                <span>Professional Guide</span>
              </div>
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />

            {/* Article Footer */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Found this article helpful?</h3>
                <p className="text-gray-600 mb-4">
                  Join thousands of marketers who receive our weekly insights and tips directly in their inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Author Bio */}
        <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg">
          <div className="flex items-start space-x-6">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
              <User className="h-10 w-10 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{blogPost.author}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Sarah is a digital marketing expert with over 15 years of experience in URL optimization, 
                analytics, and conversion rate optimization. As CEO of RJLinks, she's passionate about helping 
                businesses maximize their online presence through intelligent link management strategies. 
                Sarah has been featured in major publications including TechCrunch, Marketing Land, and Forbes.
              </p>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500">Follow Sarah:</span>
                <div className="flex space-x-2">
                  <button className="p-2 text-blue-400 hover:text-blue-600 transition-colors">
                    <Twitter className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-blue-700 hover:text-blue-900 transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <TrendingUp className="h-6 w-6 mr-2 text-blue-600" />
            Related Articles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((article, index) => (
              <Link
                key={article.slug}
                to={`/blog/${article.slug}`}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {article.readTime}
                  </span>
                  <ArrowRight className="h-4 w-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Stay Ahead of the Marketing Curve</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Get weekly insights, case studies, and actionable tips delivered to your inbox. 
            Join 25,000+ marketers who trust our newsletter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50 bg-white/90 text-gray-900"
            />
            <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Subscribe Free
            </button>
          </div>
          <p className="text-blue-200 text-sm mt-4">
            No spam, unsubscribe anytime • 25,000+ subscribers
          </p>
        </div>
      </div>
    </div>
  );
};