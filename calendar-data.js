const themeData = {
  advent: {
    emojis: ['🎄', '🎅', '🎁', '⛄', '🦌', '🔔', '❄️', '🕯️', '🎨', '🍪'],
    description:
      'Добро пожаловать в волшебный Адвент-календарь! Отсчитывайте дни до Рождества с праздничными сюрпризами и атмосферой праздника. Каждый день приближает вас к самому чудесному времени года! 🎄✨',
  },
  winter: {
    emojis: ['❄️', '⛄', '🏂', '🎿', '🧊', '🧣', '🧤', '☃️', '🏔️', '🌨️'],
    description:
      'Окунитесь в зимнюю сказку! ❄️ Насладитесь красотой заснеженных дней, уютными моментами и веселыми зимними приключениями. Одевайтесь потеплее и наслаждайтесь волшебством зимы! ⛄',
  },
  space: {
    emojis: ['🚀', '🛸', '🌎', '🌙', '⭐', '👨‍🚀', '🌠', '🪐', '☄️', '🌌'],
    description:
      'Отправляйтесь в космическое приключение! 🚀 Исследуйте тайны вселенной, открывайте далекие планеты и путешествуйте среди звезд. Ваш звездный путь ждет вас! 🌌',
  },
  ocean: {
    emojis: ['🌊', '🐋', '🐬', '🐠', '🦈', '🐚', '🏊‍♂️', '🏖️', '🐡', '🦀'],
    description:
      'Погрузитесь в морское приключение! 🌊 Исследуйте глубины океана, знакомьтесь с удивительными морскими существами и открывайте тайны подводного мира. Пусть волна приключений унесет вас! 🐋',
  },
  ramadan: {
    emojis: ['🌙', '🕌', '🤲', '🍽️', '🕋', '📿', '☪️', '🌅', '✨', '❤️'],
    description:
      'Рамадан – время духовного очищения и единства! 🌙 Окунитесь в атмосферу благодати, поста и добрых дел. Пусть каждый день этого священного месяца принесет мир, радость и гармонию в ваш дом. 🤲✨',
  },
  kazakhstan: {
    emojis: ['🇰🇿', '🏔️', '🦅', '🐎', '☀️', '🌸', '⚜️', '🕌', '🥩', '🍶'],
    description:
      'Откройте для себя красоту Казахстана! 🇰🇿 Насладитесь богатой культурой, бескрайними степями, величественными горами и гостеприимством казахского народа. Познакомьтесь с традициями великой страны! 🦅',
},
};

const calendarContent = {
  1: {
    title: 'Day 1: SEO Basics',
    content: `
      <h3>Understanding SEO Fundamentals</h3>
      <p>Today we'll explore the three pillars of basic SEO:</p>
      <ul>
        <li><strong>Keywords:</strong> The foundation of search optimization</li>
        <li><strong>Meta Descriptions:</strong> Your website's elevator pitch</li>
        <li><strong>Title Tags:</strong> The first impression for search engines</li>
      </ul>
      <p>Learn more about SEO basics on <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" target="_blank">Google's SEO Starter Guide</a>.</p>
    `,
  },
  2: {
    title: 'Day 2: On-Page SEO',
    content: `
      <h3>Optimizing Your Website Content</h3>
      <p>Key elements of on-page optimization:</p>
      <ul>
        <li><strong>Headers (H1-H6):</strong> Structure your content hierarchy</li>
        <li><strong>Image Optimization:</strong> Use descriptive alt tags and compress images</li>
        <li><strong>Internal Linking:</strong> Create a strong website architecture</li>
      </ul>
      <p>💡 <em>Pro Tip: Use your primary keyword in the first 100 words of your content.</em></p>
      <p>Check your website's on-page SEO with <a href="https://search.google.com/test/mobile-friendly" target="_blank">Google's Mobile-Friendly Test</a>.</p>
    `,
  },
  3: {
    title: 'Day 3: Technical SEO',
    content: `
      <h3>Technical Optimization Guide</h3>
      <div class="info-box">
        <p>Essential technical elements:</p>
        <ol>
          <li>XML Sitemaps: <code>domain.com/sitemap.xml</code></li>
          <li>Robots.txt Configuration</li>
          <li>Page Speed Optimization</li>
        </ol>
      </div>
      <p><strong>Tools to Try:</strong></p>
      <ul class="tool-list">
        <li><a href="https://search.google.com/search-console" target="_blank">Google Search Console</a></li>
        <li><a href="https://pagespeed.web.dev/" target="_blank">PageSpeed Insights</a></li>
      </ul>
    `,
  },
  4: {
    title: 'Day 4: Keyword Research',
    content: `
      <h3>Finding Your Target Keywords</h3>
      <div class="strategy-box">
        <h4>Research Strategy:</h4>
        <ol>
          <li>Identify your niche</li>
          <li>Analyze competitor keywords</li>
          <li>Use keyword research tools</li>
          <li>Evaluate search intent</li>
        </ol>
      </div>
      <p><em>Recommended Tools:</em></p>
      <ul>
        <li><a href="https://trends.google.com" target="_blank">Google Trends</a></li>
        <li><a href="https://answerthepublic.com" target="_blank">Answer The Public</a></li>
      </ul>
    `,
  },
  5: {
    title: 'Day 5: Content Marketing',
    content: `
      <h3>Creating SEO-Friendly Content</h3>
      <div class="content-types">
        <h4>Effective Content Formats:</h4>
        <ul>
          <li>📝 Long-form blog posts (2000+ words)</li>
          <li>📊 Data-driven infographics</li>
          <li>🎥 Video content with transcripts</li>
          <li>📱 Social media integration</li>
        </ul>
      </div>
      <blockquote>
        "Content is king, but distribution is queen." - <em>Marketing Proverb</em>
      </blockquote>
      <p>Learn more about content strategy on <a href="https://www.semrush.com/blog/" target="_blank">Semrush Blog</a>.</p>
    `,
  },
  6: {
    title: 'Day 6: Local SEO',
    content: 'Optimizing your business for local search: Google My Business and local citations.',
  },
  7: {
    title: 'Day 7: Link Building',
    content: "Building high-quality backlinks to improve your website's authority.",
  },
  8: {
    title: 'Day 8: Social Media SEO',
    content: 'Leveraging social media to drive traffic and boost your search rankings.',
  },
  9: {
    title: 'Day 9: Mobile SEO',
    content:
      'Optimizing your website for mobile devices: responsive design and mobile-first indexing.',
  },
  10: {
    title: 'Day 10: Voice Search SEO',
    content:
      'Optimizing your content for voice search queries: long-tail keywords and natural language.',
  },
  11: {
    title: 'Day 11: E-commerce SEO',
    content: 'Optimizing product pages and category pages for search engines.',
  },
  12: {
    title: 'Day 12: Video SEO',
    content: 'Optimizing your YouTube videos for search: titles, descriptions, and tags.',
  },
  13: {
    title: 'Day 13: Local SEO Audit',
    content: 'Conducting a comprehensive audit of your local SEO strategy.',
  },
  14: {
    title: 'Day 14: Technical SEO Audit',
    content: 'Identifying and fixing technical SEO issues that may be hurting your rankings.',
  },
  15: {
    title: 'Day 15: Content Audit',
    content: 'Evaluating your existing content and identifying opportunities for improvement.',
  },
  16: {
    title: 'Day 16: Backlink Audit',
    content: 'Analyzing your backlink profile and identifying toxic links.',
  },
  17: {
    title: 'Day 17: SEO Tools Deep Dive',
    content:
      'Exploring advanced features of popular SEO tools like Google Search Console, Google Analytics, and SEMrush.',
  },
  18: {
    title: 'Day 18: SEO for Beginners',
    content: 'A refresher course on the basics of SEO for those just starting out.',
  },
  19: {
    title: 'Day 19: Advanced SEO Techniques',
    content: 'Diving into more complex SEO strategies like schema markup and structured data.',
  },
  20: {
    title: 'Day 20: SEO Myths Debunked',
    content: 'Separating fact from fiction in the world of SEO.',
  },
  21: {
    title: 'Day 21: SEO Case Studies',
    content: 'Learning from real-world examples of successful SEO campaigns.',
  },
  22: {
    title: 'Day 22: SEO for Local Businesses',
    content: 'Optimizing your local business for Google Maps and other local directories.',
  },
  23: {
    title: 'Day 23: SEO for E-commerce',
    content: 'Advanced strategies for optimizing your online store for search.',
  },
  24: {
    title: 'Day 24: SEO for Bloggers',
    content: 'Tips and tricks for optimizing your blog posts for search.',
  },
  25: {
    title: 'Day 25: SEO for Small Businesses',
    content: 'Affordable and effective SEO strategies for small businesses.',
  },
  26: {
    title: 'Day 26: SEO for Startups',
    content: 'Building a strong SEO foundation for your startup.',
  },
  27: {
    title: 'Day 27: SEO for International Markets',
    content: 'Expanding your reach with international SEO.',
  },
  28: {
    title: 'Day 28: SEO for Content Marketers',
    content: 'Creating SEO-friendly content that ranks and converts.',
  },
  29: {
    title: 'Day 29: Future of SEO',
    content: 'Exploring emerging trends and technologies in the world of SEO.',
  },
  30: { title: 'Day 30: SEO Q&A Session', content: 'Answering your burning SEO questions.' },
  31: {
    title: 'Day 31: SEO Recap and Next Steps',
    content: "Reviewing what you've learned and setting goals for the future.",
  },
};

const faqData = [
  {
    question: 'How does the advent calendar work?',
    answer:
      'Each day reveals new SEO learning content. Click on any past or current date to view the content. Future dates are locked until their respective days arrive.',
  },
  {
    question: "Can I access previous days' content?",
    answer:
      'Yes! You can always go back and review content from previous days. This helps you learn at your own pace and revisit important topics.',
  },
  {
    question: 'How do I share specific days?',
    answer:
      "Click on any day to open its content, then use the share button. The URL will include a specific reference to that day's content, making it easy to share with others.",
  },
];

// Generate content for remaining days
Object.keys(themeData).forEach(theme => {
  const themeEmojis = themeData[theme].emojis;
  for (let day = 1; day <= 31; day++) {
    themeData[theme].content = themeData[theme].content || {};
    themeData[theme].content[day] = {
      title: calendarContent[day].title,
      content: calendarContent[day].content,
      emoji: themeEmojis[day % themeEmojis.length],
    };
  }
});
