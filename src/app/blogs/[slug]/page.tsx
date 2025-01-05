'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react'; // Import hooks from React
import { notFound } from 'next/navigation';
import CommentSection from '../../components/CommentSection'; // Import CommentSection component

const blogContent = {
  'ai-future': {
    title: 'The Future of AI',
    content:
      'Artificial Intelligence (AI) is not just a buzzword—it is the foundation of the fourth industrial revolution. From self-driving cars to personalized recommendations on streaming platforms, AI is reshaping the way we interact with technology. Emerging trends such as generative AI, quantum computing integration, and ethical AI development promise to make AI more accessible, powerful, and responsible. The future of AI will significantly influence healthcare, education, entertainment, and nearly every other sector of our lives. As AI continues to evolve, it will open up new possibilities and challenges, requiring us to rethink the way we live and work in an increasingly automated world. We must address ethical concerns, such as job displacement, and ensure AI is developed with fairness and transparency.',
    image: '/future-of-ai.jpeg',
  },
  'ai-healthcare': {
    title: 'AI in Healthcare',
    content:
      'AI is transforming healthcare by enabling faster diagnoses, personalized treatments, and efficient patient management. AI-powered tools, such as predictive analytics and machine learning algorithms, can detect diseases like cancer in their early stages, often outperforming traditional diagnostic methods. Moreover, virtual health assistants and telemedicine platforms are revolutionizing how patients interact with healthcare providers, making quality medical care more accessible globally. AI is also playing a key role in drug discovery by predicting molecular behaviors and identifying potential treatments. As these technologies evolve, they are expected to streamline workflows, reduce costs, and improve patient outcomes, revolutionizing the way healthcare is delivered. However, the ethical implications of AI in healthcare must be carefully considered, especially when it comes to data privacy and informed consent.',
    image: '/ai-in-healthcare.jpeg',
  },
  'ai-education': {
    title: 'AI in Education',
    content:
      'The education sector is leveraging AI to create more personalized and inclusive learning experiences. Adaptive learning platforms analyze a student’s progress in real-time, tailoring content to their individual needs. AI also facilitates administrative tasks such as grading and scheduling, freeing up educators to focus on teaching. Furthermore, advancements in natural language processing have enabled the development of AI tutors and language-learning applications that provide immediate feedback. AI-driven insights are helping educators identify students who may need additional support, allowing for early interventions. The use of AI in education is breaking down barriers to learning by making education more accessible to a wider range of students, including those with disabilities. As AI continues to evolve, it has the potential to create more effective, engaging, and equitable learning environments.',
    image: '/ai-in-education.jpeg',
  },
  'ai-ethics': {
    title: 'Ethics in AI',
    content:
      'As AI continues to evolve, ethical considerations have come to the forefront. Issues like data privacy, algorithmic bias, and accountability are becoming increasingly critical. Ensuring that AI technologies are designed and deployed responsibly is essential to avoid unintended consequences. Policymakers, researchers, and developers must collaborate to establish ethical guidelines that balance innovation with social responsibility. A key challenge is preventing the misuse of AI for harmful purposes, such as surveillance or manipulation. Additionally, as AI becomes more autonomous, there is a need for transparency in decision-making processes to ensure fairness and reduce bias. We must also consider the long-term societal impacts of AI, such as its effects on employment, human rights, and social inequality.',
    image: '/ethics-of-ai.png',
  },
  'ai-finance': {
    title: 'AI in Finance',
    content:
      'AI is revolutionizing the financial industry by automating processes, enhancing decision-making, and improving customer experiences. Fraud detection systems powered by AI can analyze vast amounts of data in real-time to identify suspicious transactions. Robo-advisors are democratizing investment opportunities by providing personalized financial advice at a fraction of the cost of traditional advisors. Additionally, AI-driven credit scoring models are making lending more transparent and inclusive. AI is also being used to predict market trends and optimize investment strategies, offering a competitive advantage to financial institutions. As the financial sector continues to embrace AI, it is important to ensure that these technologies are used responsibly and ethically, with a focus on protecting consumer data and preventing financial crimes.',
    image: '/ai-in-finance.jpg',
  },
  'ai-transport': {
    title: 'AI in Transportation',
    content:
      'The transportation sector is undergoing a paradigm shift thanks to AI. Autonomous vehicles equipped with advanced AI algorithms are expected to reduce traffic accidents and increase efficiency. AI is also improving logistics and supply chain management by optimizing routes and predicting maintenance needs. Smart transportation systems are not only reducing operational costs but also contributing to environmental sustainability by minimizing fuel consumption. AI is enabling the development of smart cities, where transportation systems are interconnected and optimized for better traffic flow and reduced congestion. Additionally, AI-powered traffic management systems can reduce delays and improve the overall safety of transportation networks. As AI continues to advance, it has the potential to transform the way we move people and goods around the world.',
    image: '/ai-in-transportation.jpg',
  },
  'ai-cybersecurity': {
    title: 'AI in Cybersecurity',
    content:
      'AI is enhancing cybersecurity by providing advanced threat detection and response capabilities. Machine learning algorithms can analyze network traffic and detect anomalies that might indicate a cyberattack. AI-powered security systems can adapt to new threats in real-time, offering a proactive approach to protecting sensitive data. However, the rise of AI in cybersecurity also brings challenges, such as the use of AI for malicious purposes, requiring constant vigilance. AI-powered tools are also enabling faster incident response times, reducing the potential impact of cyberattacks. As cyber threats continue to evolve, AI will play a central role in strengthening defenses and improving overall security posture. The development of ethical frameworks for the use of AI in cybersecurity is crucial to ensure its safe and responsible implementation.',
    image: '/ai-in-cybersecurity.jpeg',
  },
  'ai-gaming': {
    title: 'AI in Gaming',
    content:
      'AI is redefining the gaming industry by creating more immersive and dynamic experiences. From NPCs (non-player characters) with lifelike behaviors to procedural content generation, AI is pushing the boundaries of what’s possible in game design. AI-powered engines can adapt gameplay based on a player’s skill level, ensuring an engaging and personalized experience. Additionally, advancements in AI-driven graphics are contributing to more realistic and visually stunning games. AI is also being used to create more intelligent and reactive game environments, where the world and characters evolve based on player actions. AI has enabled the development of more interactive and complex narratives in games, offering players deeper, more engaging stories. As AI continues to evolve, the possibilities for innovative game design are virtually limitless.',
    image: '/ai-in-gaming.jpeg',
  },
  'ai-research': {
    title: 'AI in Research',
    content:
      'AI is accelerating scientific research by automating data analysis and identifying patterns that might otherwise go unnoticed. In fields such as drug discovery, AI models are helping researchers identify promising compounds faster than traditional methods. In environmental science, AI-powered tools are analyzing climate data to develop sustainable solutions. By handling repetitive tasks, AI is enabling researchers to focus on groundbreaking innovations. AI is also playing a key role in the analysis of large-scale genomic data, helping scientists understand the genetic basis of diseases and develop targeted treatments. In addition, AI models are being used to predict outcomes in complex research scenarios, helping to guide experimental design and reduce the time needed to achieve results. As AI continues to advance, its applications in research will expand, leading to breakthroughs across various scientific disciplines.',
    image: '/ai-in-research.jpeg',
  },
  'ai-robotics': {
    title: 'AI in Robotics',
    content:
      'AI and robotics are a powerful combination driving innovation across industries. Robots powered by AI can perform tasks with greater precision and efficiency, from manufacturing to healthcare. Collaborative robots (cobots) are working alongside humans in factories, while AI-driven surgical robots are transforming medical procedures. As AI continues to advance, robots are becoming more autonomous, capable of learning and adapting to new environments. In manufacturing, AI-driven robots are optimizing production lines, reducing downtime, and improving overall efficiency. In healthcare, AI-powered robots are assisting with surgeries, rehabilitation, and elderly care. As robotics technology improves, we can expect robots to take on more complex tasks, making them an integral part of the workforce in various sectors.',
    image: '/ai-in-robotics.webp',
  },
  'ai-business': {
    title: 'AI in Business',
    content:
      'AI is revolutionizing business operations by enhancing efficiency, reducing costs, and driving innovation. Predictive analytics and AI-powered customer relationship management tools are enabling companies to understand their customers better and anticipate market trends. Automation is streamlining workflows, from inventory management to customer support, allowing businesses to focus on strategic growth. AI is also being used for demand forecasting, helping businesses optimize their supply chains and reduce waste. In marketing, AI algorithms are enabling personalized ad targeting, ensuring that businesses reach the right audience at the right time. As businesses continue to adopt AI, they are gaining a competitive edge by improving their decision-making processes, increasing productivity, and offering more personalized customer experiences. However, businesses must ensure that AI is used responsibly, with a focus on data privacy and ethical considerations.',
    image: '/ai-in-business.jpeg',
  },
  'ai-environment': {
    title: 'AI for the Environment',
    content:
      'AI is playing a critical role in addressing environmental challenges. From monitoring deforestation and predicting natural disasters to optimizing renewable energy systems, AI-powered solutions are helping protect the planet. By analyzing large datasets, AI is identifying patterns that inform sustainable practices, such as reducing waste and conserving resources. These technologies are crucial in the global effort to combat climate change. AI is also being used to develop smarter energy grids that improve efficiency and reduce carbon emissions. In agriculture, AI-powered tools are helping farmers optimize irrigation and crop management, ensuring sustainable food production. As AI technology continues to evolve, it has the potential to significantly contribute to global environmental conservation efforts.',
    image: '/ai-in-environment.png',
  },
};

interface BlogPageProps {
  params: Promise<{ slug: keyof typeof blogContent }>;
}

const BlogPage = ({ params }: BlogPageProps) => {
  const [slug, setSlug] = useState<keyof typeof blogContent | null>(null); // Adjusted state type

  useEffect(() => {
    // Resolving the params promise
    params.then((data) => {
      setSlug(data.slug);
    });
  }, [params]);

  if (slug === null) {
    return <div>Loading...</div>; // Show loading until slug is set
  }

  const blog = blogContent[slug]; // Accessing blog content safely

  if (!blog) {
    notFound(); // If no blog is found, trigger a notFound response
    return null;
  }

  return (
    <main className="blog-main">
      <h1 className="blog-heading">{blog.title}</h1>
      <div className="blog-content">
        <Image
          src={blog.image}
          alt={blog.title}
          width={800}
          height={400}
          className="blog-image"
        />
        <p className="blog-paragraph">{blog.content}</p>
      </div>
      <CommentSection />
    </main>
  );
};

export default BlogPage;