import BlogCard from '../components/BlogCard';

const blogPosts = [
  { slug: 'ai-future', title: 'The Future of AI', image: '/future-of-ai.jpeg', excerpt: 'Explore how AI is shaping the future.' },
  { slug: 'ai-healthcare', title: 'AI in Healthcare', image: '/ai-in-healthcare.jpeg', excerpt: 'Discover how AI is revolutionizing healthcare.' },
  { slug: 'ai-education', title: 'AI in Education', image: '/ai-in-education.jpeg', excerpt: 'Learn about AI’s impact on education.' },
  { slug: 'ai-ethics', title: 'Ethics in AI', image: '/ethics-of-ai.png', excerpt: 'Understand the ethical challenges of AI.' },
  { slug: 'ai-finance', title: 'AI in Finance', image: '/ai-in-finance.jpg', excerpt: 'See how AI is transforming the financial industry.' },
  { slug: 'ai-transport', title: 'AI in Transportation', image: '/ai-in-transportation.jpg', excerpt: 'AI and the future of transportation.' },
  { slug: 'ai-cybersecurity', title: 'AI in Cybersecurity', image: '/ai-in-cybersecurity.jpeg', excerpt: 'How AI is enhancing cybersecurity.' },
  { slug: 'ai-gaming', title: 'AI in Gaming', image: '/ai-in-gaming.jpeg', excerpt: 'AI’s role in the gaming industry.' },
  { slug: 'ai-research', title: 'AI in Research', image: '/ai-in-research.jpeg', excerpt: 'AI’s contributions to scientific research.' },
  { slug: 'ai-robotics', title: 'AI in Robotics', image: '/ai-in-robotics.webp', excerpt: 'Robotics and AI advancements.' },
  { slug: 'ai-business', title: 'AI in Business', image: '/ai-in-business.jpeg', excerpt: 'AI’s influence on the business world.' },
  { slug: 'ai-environment', title: 'AI for the Environment', image: '/ai-in-environment.png', excerpt: 'AI’s role in protecting the environment.' },
];

export default function BlogsPage() {
  return (
    <>
      <main>
        <h2>All Blogs</h2>
        <div className="blog-grid">
          {blogPosts.map((blog) => (
            <BlogCard key={blog.slug} {...blog} />
          ))}
        </div>
      </main>
    </>
  );
}
