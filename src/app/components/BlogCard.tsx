import Link from 'next/link';
import Image from 'next/image';

const BlogCard = ({ slug, title, excerpt, image }: { slug: string; title: string; excerpt: string; image: string }) => {
  return (
    <div className="blog-card">
      <Image src={image} alt={title} width={300} height={200} />
      <div className="blog-card-content">
        <h2 className="blog-card-title">{title}</h2>
        <p className="blog-card-excerpt">{excerpt}</p>
        <Link href={`/blogs/${slug}`} className="blog-card-button">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
