import CoverSection from "../app/components/CoverSection";
import BlogCard from "../app/components/BlogCard";
import Link from 'next/link';

const blogPosts = [
  { slug: 'ai-future', title: 'The Future of AI', image: '/future-of-ai.jpeg', excerpt: 'Explore how AI is shaping the future.' },
  { slug: 'ai-healthcare', title: 'AI in Healthcare', image: '/ai-in-healthcare.jpeg', excerpt: 'Discover how AI is revolutionizing healthcare.' },
  { slug: 'ai-education', title: 'AI in Education', image: '/ai-in-education.jpeg', excerpt: 'Learn about AI’s impact on education.' },
  { slug: 'ai-ethics', title: 'Ethics in AI', image: '/images/ai-ethics.jpg', excerpt: 'Understand the ethical challenges of AI.' },
  { slug: 'ai-finance', title: 'AI in Finance', image: '/images/ai-finance.jpg', excerpt: 'See how AI is transforming the financial industry.' },
  { slug: 'ai-transport', title: 'AI in Transportation', image: '/images/ai-transport.jpg', excerpt: 'AI and the future of transportation.' },
  { slug: 'ai-cybersecurity', title: 'AI in Cybersecurity', image: '/images/ai-cybersecurity.jpg', excerpt: 'How AI is enhancing cybersecurity.' },
  { slug: 'ai-gaming', title: 'AI in Gaming', image: '/images/ai-gaming.jpg', excerpt: 'AI’s role in the gaming industry.' },
  { slug: 'ai-research', title: 'AI in Research', image: '/images/ai-research.jpg', excerpt: 'AI’s contributions to scientific research.' },
  { slug: 'ai-robotics', title: 'AI in Robotics', image: '/images/ai-robotics.jpg', excerpt: 'Robotics and AI advancements.' },
  { slug: 'ai-business', title: 'AI in Business', image: '/images/ai-business.jpg', excerpt: 'AI’s influence on the business world.' },
  { slug: 'ai-environment', title: 'AI for the Environment', image: '/images/ai-environment.jpg', excerpt: 'AI’s role in protecting the environment.' },
];

export default function Home() {
  return (
    <>
      <CoverSection />
      <main>
        <h2>Our Blogs</h2>
        <div className="blog-grid">
          {blogPosts.slice(0, 3).map((blog) => (
            <BlogCard key={blog.slug} {...blog} />
          ))}
        </div>
        <div className="see-all-container">
          <Link href="/blogs" className="see-all-button">
            See All Blogs
          </Link>
        </div>
      </main>
    </>
  );
}
