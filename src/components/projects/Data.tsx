import Image from 'next/image';
import { Image as Img } from 'lucide-react';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { url } from 'inspector';

// Enhanced project content array with all projects
const PROJECT_CONTENT = [
  {
    title: 'Drug Repurposing Research Agent',
    description:
      'Developed an AI-driven pharmaceutical intelligence platform integrating 5+ data sources (clinical trials, market analytics, patents, EXIM trade, web research) to identify drug repurposing opportunities. Accelerated early-stage pharma research time by 90%+ (months to minutes) using multi-agent automation, parallel data processing, interactive dashboards, and automated PDF report generation.',
    techStack: [
      'Python',
      'FastAPI',
      'CrewAI',
      'Groq LLM',
      'React',
      'MongoDB',
    ],
    date: 'January 2026',
    links: [
      {
        name: 'GitHub',
        url: 'https://drive.google.com/file/d/1HILezswYEEaelduE7rTwKaaGJB6qB-Q6/view?usp=sharing',
      },
      {
        name: 'Live Demo',
        url: 'https://drive.google.com/file/d/1HILezswYEEaelduE7rTwKaaGJB6qB-Q6/view?usp=sharing',
      },
      {
        name: 'Demo Video',
        url: 'https://drive.google.com/file/d/1HILezswYEEaelduE7rTwKaaGJB6qB-Q6/view?usp=sharing',
      }
    ],
    images: [
      {
        src: '/pharmassist_1.png',
        alt: 'Drug Repurposing Research Agent dashboard',
      },
      {
        src: '/pharmassist_2.png',
        alt: 'Data integration interface',
      },
      {
        src: '/pharmassist_3.png',
        alt: 'Multi-agent automation workflow',
      },
      {
        src: '/pharmassist_4.png',
        alt: 'Interactive analytics dashboard',
      },
      {
        src: '/pharmassist_5.png',
        alt: 'Interactive analytics dashboard',
      },
      {
        src: '/pharmassist_6.png',
        alt: 'Interactive analytics dashboard',
      },
    ],
  },
  {
    title: 'Audio Language Reasoning Platform',
    description:
      'Built a synthetic audio dataset pipeline generating 10k+ labeled samples by mixing speech, environmental sounds, and radio noise for supervised audio-reasoning training. Engineered a parallel audio-language model processing speech + non-speech signals to enable cross-clip reasoning and structured outputs for timeline reconstruction.',
    techStack: [
      'Python',
      'Audio Language Models',
      'Whisper',
      'CLAP',
      'LLMs'
    ],
    date: 'December 2025',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/vishesh7124/ALM',
      },
      {
        name: 'Demo Video',
        url: 'https://www.youtube.com/watch?v=KJRikwJLLUQ',
      }
    ],
    images: [
      {
        src: '/alm_1.png',
        alt: 'Audio Language Reasoning Platform interface',
      },
      {
        src: '/alm_2.png',
        alt: 'Synthetic audio dataset pipeline',
      },
      {
        src: '/alm_3.png',
        alt: 'Cross-clip reasoning visualization',
      },
      {
        src: '/alm_4.png',
        alt: 'Timeline reconstruction output',
      },
    ],
  },
  {
    title: 'LendX',
    description:
      'LendX is an AI-driven platform that helps first-time borrowers make smart loan decisions by analyzing bank statements, optimizing EMIs, and comparing lenders based on real user complaints scraped from Twitter. Upload your statement, enter your loan needs, and LendX does the rest — no credit history needed, no hidden stress. One of my most impactful fintech projects yet.',
    techStack: [
      'Next.js',
      'TailwindCSS',
      'shadcn-ui',
      'TypeScript',
      'Groq API',
      'Vercel AI SDK',
      'Neon',
      'Clerk',
      'Prisma'
    ],
    date: '2025',
    links: [
      {
        name: 'Pitch Deck',
        url: 'https://www.canva.com/design/DAGq4v_-EpY/IU6tB9AYo-h0ux3U4F0zgA/edit?utm_content=DAGq4v_-EpY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
      }
    ],
    images: [
      {
        src: '/l1.jpg',
        alt: 'LendX landing page',
      },
      {
        src: '/l2.jpg',
        alt: 'LendX authentication interface',
      },
      {
        src: '/l3.jpg',
        alt: 'bank statement upload interface',
      },
      {
        src: '/l4.jpg',
        alt: 'bank statement metrics interface',
      },
      {
        src: '/l5.jpg',
        alt: 'emi optimisation interface',
      },
      {
        src: '/l6.jpg',
        alt: 'banks comparison interface',
      },
      {
        src: '/l8.jpg',
        alt: 'tweets interface',
      },
      {
        src: '/l7.jpg',
        alt: 'financial literacy interface',
      },
    ],
  },
  {
    title: 'Insurance Premium Predictor',
    description:
      'Built a machine learning model to predict insurance premium categories (Low, Medium, High) based on user demographics and lifestyle factors. Developed a production-ready FastAPI backend with Pydantic validation, feature engineering (BMI, lifestyle risk, city tier), and confidence scoring. Created an interactive Streamlit frontend with real-time predictions and probability distributions.',
    techStack: [
      'Python',
      'FastAPI',
      'Machine Learning',
      'Streamlit',
      'Pydantic',
      'Pandas',
      'Scikit-learn'
    ],
    date: '2025',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/guranshchugh-9/Insurance_premium_predict_deployed',
      },
      
    ],
    images: [
      {
        src: '/profile-image.jpeg',
        alt: 'Insurance Premium Predictor interface',
      },
      {
        src: '/profile-image.jpeg',
        alt: 'Prediction results with confidence scores',
      },
      {
        src: '/profile-image.jpeg',
        alt: 'FastAPI backend architecture',
      },
      {
        src: '/profile-image.jpeg',
        alt: 'Class probability distribution',
      },
    ],
  },
  {
    title: 'CodeCollab IDE',
    description:
      'A revolutionary collaborative coding platform with real-time code execution, AI-powered code suggestions, and built-in video chat. Designed for remote teams and pair programming sessions. Features include multi-language support, integrated debugging, and version control.',
    techStack: [
      'Vue.js',
      'WebRTC',
      'Socket.io',
      'Monaco Editor',
      'Kubernetes',
      'Go',
      'PostgreSQL',
      'Redis'
    ],
    date: '2026',
    links: [
      {
        name: 'Website',
        url: 'https://codecollab-ide.com',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/yourusername/codecollab-ide',
      },
      {
        name: 'Documentation',
        url: 'https://docs.codecollab-ide.com',
      }
    ],
    images: [
      {
        src: '/profile-image.jpeg',
        alt: 'CodeCollab IDE interface',
      },
      {
        src: '/profile-image.jpeg',
        alt: 'Real-time collaboration',
      },
      {
        src: '/profile-image.jpeg',
        alt: 'AI code suggestions',
      },
      {
        src: '/profile-image.jpeg',
        alt: 'Video chat integration',
      },
      {
        src: '/profile-image.jpeg',
        alt: 'Multi-language support',
      },
    ],
  },
  {
    title: 'YouTube-Video-Chatbot',
    description:
      "AI-powered YouTube Video analyzer: transcribe, summarize & answer questions about any video. Uses Whisper, spaCy, FAISS & Groq.",
    techStack: ['python', 'nlp'],
    date: '2024',
    links: [
      {
        name: 'github',
        url: 'https://github.com/guranshchugh-9/YouTube-Video-Intelligence-Pipeline',
      },
    ],
    images: [
      {
        src: '/youtube.png',
        alt: 'Youtube landing page',
      },
      {
        src: '/transcribe.png',
        alt: 'transcript',
      },
      {
        src: '/keywords.png',
        alt: 'keywords',
      },
      {
        src: '/question1.png',
        alt: 'question',
      }
    ],
  },
  {
    title: 'kaggle-wars-heart-mortality',
    description:
      "Analyze U.S. county-level trends in heart disease and stroke mortality over 20 years. Segmented by age, race/ethnicity, and sex, the dataset covers coronary heart disease, stroke, and hypertension. The project explores disparities, high-risk regions, and supports public health research and policy planning.",
    techStack: [
      'Machine Learning',
      'exploratory data analysis'
    ],
    date: '2025',
    links: [
      {
        name: 'github',
        url: 'https://github.com/guranshchugh-9/kaggle_wars_heart_mortality',
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/posts/guransh-chugh-b59437261_%F0%9D%97%AA%F0%9D%97%B2-%F0%9D%97%AA%F0%9D%97%BC%F0%9D%97%BB-%F0%9D%97%9E%F0%9D%97%AE%F0%9D%97%B4%F0%9D%97%B4%F0%9D%97%B9%F0%9D%97%B2-%F0%9D%97%AA%F0%9D%97%AE%F0%9D%97%BF%F0%9D%98%80-%F0%9D%97%94-%F0%9D%97%A7-activity-7286329396175482880-AUIM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEBQaLUBMpfTSWRSGdb1eod9W9JsRlJ3iyM',
      }
    ],
    images: [
      {
        src: '/defai1.png',
        alt: 'Landing Page of Defai',
      },
      {
        src: '/defai2.png',
        alt: 'Confirmation popup of Defai',
      },
      {
        src: '/defai3.png',
        alt: 'Chatbot of Defai',
      },
      {
        src: '/defai4.jpeg',
        alt: 'Winner team',
      },
    ],
  },
  // {
  //   title: 'Fitgear',
  //   description:
  //     'Won the Gotta Go Hack IA by building Fitgear, a virtual voice seller accessible by QR code to improve the ratio between customers and sellers. Created an AI pipeline with API calls and a RAG system for natural language interactions.',
  //   techStack: ['Next.js', 'TailwindCSS', 'OpenAI API', 'Langchain'],
  //   date: '2024',
  //   links: [
  //     {
  //       name: 'Linkedin',
  //       url: 'https://www.linkedin.com/posts/raphael-giraud-60939519a_hackathon-innovation-sporttech-activity-7210399263774674946-qSXq?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAC6vwikBVSEkS7XWktWS7y6GR3GHwAlKslc',
  //     },
  //   ],
  //   images: [
  //     {
  //       src: '/fitgear2.png',
  //       alt: 'Fitgear chatbot',
  //     },
  //     {
  //       src: '/fitgear1.png',
  //       alt: 'Fitgear landing page',
  //     },
  //   ],
  // },
  // {
  //   title: 'Datai',
  //   description:
  //     "DATAI is an AI-powered agent that lets non-technical users query a database using natural language without writing SQL. Built using Next.js, TailwindCSS, shadcn-ui, and Anthropic's Claude API, this project focuses on simplicity, speed, and user-friendly design.",
  //   techStack: [
  //     'Next.js',
  //     'TailwindCSS',
  //     'shadcn-ui',
  //     'Claude API',
  //     'TypeScript',
  //   ],
  //   date: '2024',
  //   links: [
  //     {
  //       name: 'GitHub',
  //       url: 'https://github.com/toukoum/datai',
  //     },
  //     {
  //       name: 'Youtube Video Demo',
  //       url: 'https://youtu.be/iE0RXjdbQsw',
  //     }
  //   ],
  //   images: [
  //     {
  //       src: '/datai1.png',
  //       alt: 'Datai landing page',
  //     },
  //     {
  //       src: '/datai2.png',
  //       alt: 'Datai chatbot',
  //     },
  //     {
  //       src: '/datai3.png',
  //       alt: 'Datai chatbot',
  //     },
  //     {
  //       src: '/datai4.png',
  //       alt: 'Datai chatbot',
  //     }
  //   ],
  // },
  // {
  //   title: '3d Pong Game',
  //   description:
  //     "Transcendance is the final project of my 42 cursus. It's a 3D pong game with multiplayer capabilities, user authentication, and real-time gameplay. We had to do everything from scratch, so it was pretty challenging and we learned a lot.",
  //   techStack: ['Django', 'Python', 'JavaScript', 'Websockets', 'PostgreSQL', 'Docker', 'Nginx', 'Web3', 'Solidity'],
  //   date: '2023',
  //   links: [
  //     {
  //       name: 'GitHub',
  //       url: 'https://github.com/toukoum/Transcendance',
  //     },
  //   ],
  //   images: [
  //     {
  //       src: '/trans1.png',
  //       alt: 'Transcendance landing page',
  //     },
  //     {
  //       src: '/trans2.png',
  //       alt: 'Transcendance game',
  //     },
  //     {
  //       src: '/trans3.png',
  //       alt: 'Transcendance game',
  //     },
  //     {
  //       src: '/trans4.png',
  //       alt: 'Transcendance game',
  //     },
  //     {
  //       src: '/trans5.png',
  //       alt: 'Transcendance game',
  //     },
  //     {
  //       src: '/trans6.png',
  //       alt: 'Transcendance game',
  //     }

  //   ],
  // },
  // {
  //   title: 'Minishell',
  //   description:
  //     "Minishell is a project that aims to create a simple shell. It's a great introduction to process creation and management in C, offering fundamental Unix command-line functionality. This was a very challenging project, but I learned a lot from it.",
  //   techStack: ['C', 'Unix', 'Bash'],
  //   date: '2023',
  //   links: [
  //     {
  //       name: 'GitHub',
  //       url: 'https://github.com/toukoum/Michelle-42',
  //     },
  //   ],
  //   images: [
  //     {
  //       src: '/minishell1.png',
  //       alt: 'Minishell landing page',
  //     }
  //   ],
  // },
  // {
  //   title: 'YouBot',
  //   description:
  //     'YouBot is a Python Bot that Scrapes Videos from Pexels, adds a random song from a Songs Folder, then auto-uploads the videos to your YouTube Channel for continuous content generation.',
  //   techStack: ['Python', 'YouTube API', 'Pexels API'],
  //   date: '2022',
  //   links: [
  //     {
  //       name: "YouTube Video",
  //       url: "https://youtu.be/vp1v5mBG7rA "
  //     },
  //     {
  //       name: 'GitHub',
  //       url: 'https://github.com/toukoum/YouBot',
  //     }
  //   ],
  //   images: [
  //     {
  //       src: '/youbot1.jpg',
  //       alt: 'Youbot landing page',
  //     },
  //     {
  //       src: '/youbot2.png',
  //       alt: 'Youbot chatbot',
  //     },
  //   ],
  // },
  // {
  //   title: 'Old Portfolio',
  //   description:
  //     'My previous traditional portfolio built with vanilla HTML, CSS and JS with GSAP animations for a smooth and interactive user experience.',
  //   techStack: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
  //   date: '2022',
  //   links: [
  //     {
  //       name: 'Website',
  //       url: 'https://toukoum.github.io/oldPortfolio/',
  //     },
  //     {
  //       name: 'GitHub',
  //       url: 'https://github.com/toukoum/portfolio',
  //     },
  //   ],
  //   images: [
  //     {
  //       src: '/oldport1.png',
  //       alt: 'Old Portfolio landing page',
  //     },
  //     {
  //       src: '/oldport2.png',
  //       alt: 'Old Portfolio projects',
  //     }
  //   ],
  // },
];

// Define interface for project prop
interface ProjectProps {
  title: string;
  description?: string;
  techStack?: string[];
  date?: string;
  links?: { name: string; url: string }[];
  images?: { src: string; alt: string }[];
}

const ProjectContent = ({ project }: { project: ProjectProps }) => {
  // Find the matching project data
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-10">
      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links section */}
      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="px-6 mb-4 flex items-center gap-2">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Links
            </h3>
            <Link className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
                <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
                >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
            ))}
          </div>
        </div>
      )}

      {/* Images gallery */}
      {projectData.images && projectData.images.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {projectData.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video rounded-2xl overflow-hidden"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover  transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Main data export with updated content
export const data = [
  {
    category: 'Pharmaceutical AI',
    title: 'Drug Repurposing Research Agent',
    src: '/image_drug1.png',
    content: <ProjectContent project={{ title: 'Drug Repurposing Research Agent' }} />,
  },
  {
    category: 'Hackathon',
    title: 'LendX',
    src: '/syntopreview.png',
    content: <ProjectContent project={{ title: 'LendX' }} />,
  },
  {
    category: 'Audio AI',
    title: 'Audio Language Reasoning Platform',
    src: '/audio.png',
    content: <ProjectContent project={{ title: 'Audio Language Reasoning Platform' }} />,
  },
  // {
  //   category: 'Machine Learning',
  //   title: 'Insurance Premium Predictor',
  //   src: '/profile-image.jpeg',
  //   content: <ProjectContent project={{ title: 'Insurance Premium Predictor' }} />,
  // },
  // {
  //   category: 'Developer Tools',
  //   title: 'CodeCollab IDE',
  //   src: '/profile-image.jpeg',
  //   content: <ProjectContent project={{ title: 'CodeCollab IDE' }} />,
  // },
  {
    category: 'Fun Tool',
    title: 'YouTube-Video-Chatbot',
    src: '/ratepreview.png',
    content: <ProjectContent project={{ title: 'YouTube-Video-Chatbot' }} />,
  },
  {
    category: 'Kaggle Hack Winner',
    title: 'Heart-Mortality',
    src: '/defaipreview.png',
    content: <ProjectContent project={{ title: 'kaggle-wars-heart-mortality' }} />,
  },
  // {
  //   category: 'Hackathon Winner',
  //   title: 'Fitgear',
  //   src: '/fitgearpreview.png',
  //   content: <ProjectContent project={{ title: 'Fitgear' }} />,
  // },
  // {
  //   category: 'Business Intelligence',
  //   title: 'Datai',
  //   src: '/dataipreview.png',
  //   content: <ProjectContent project={{ title: 'Datai' }} />,
  // },
  // {
  //   category: '42 Project',
  //   title: '3d Pong Game',
  //   src: '/transcendancepreview.png',
  //   content: <ProjectContent project={{ title: '3d Pong Game' }} />,
  // },
  // {
  //   category: '42 Project',
  //   title: 'Minishell',
  //   src: '/minishellpreview.png',
  //   content: <ProjectContent project={{ title: 'Minishell' }} />,
  // },
  // {
  //   category: 'Automation',
  //   title: 'YouBot',
  //   src: '/youbotpreview.png',
  //   content: <ProjectContent project={{ title: 'YouBot' }} />,
  // },
  // {
  //   category: 'Web Development',
  //   title: 'Old Portfolio',
  //   src: '/oldportfoliopreview.png',
  //   content: <ProjectContent project={{ title: 'Old Portfolio' }} />,
  // },
];
