"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";

const TechnologyDetailsPage = () => {
  const { tech } = useParams();
  
  // Complete technology database with detailed information
  const techDatabase = {
    react: {
      name: "React",
      icon: "⚛️",
      category: "frontend",
      description: "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
      features: [
        "Component-based architecture",
        "Virtual DOM for efficient updates",
        "Unidirectional data flow",
        "Rich ecosystem of libraries",
        "React Hooks for state management"
      ],
      useCases: [
        "Single Page Applications (SPAs)",
        "Progressive Web Apps (PWAs)",
        "Interactive UI components",
        "Cross-platform apps (React Native)"
      ],
      resources: [
        { name: "Official Documentation", url: "https://react.dev" },
        { name: "React GitHub", url: "https://github.com/facebook/react" },
        { name: "Awesome React", url: "https://github.com/enaqx/awesome-react" }
      ]
    },
    nextjs: {
      name: "Next.js",
      icon: "🔄",
      category: "frontend",
      description: "The React framework for production with hybrid static & server rendering, TypeScript support, and API routes.",
      features: [
        "Server-side rendering (SSR)",
        "Static site generation (SSG)",
        "API routes",
        "Built-in CSS and Sass support",
        "Image optimization",
        "Middleware"
      ],
      useCases: [
        "SEO-friendly websites",
        "E-commerce platforms",
        "Marketing websites",
        "Full-stack applications"
      ],
      resources: [
        { name: "Official Documentation", url: "https://nextjs.org/docs" },
        { name: "Next.js GitHub", url: "https://github.com/vercel/next.js" },
        { name: "Next.js Examples", url: "https://github.com/vercel/next.js/tree/canary/examples" }
      ]
    },
    typescript: {
      name: "TypeScript",
      icon: "📝",
      category: "frontend",
      description: "Strongly typed programming language that builds on JavaScript.",
      features: [
        "Static typing",
        "Interfaces and generics",
        "Type inference",
        "Compiler checks",
        "Better tooling support"
      ],
      useCases: [
        "Large-scale applications",
        "Team projects",
        "Projects requiring maintainability",
        "When working with complex data structures"
      ],
      resources: [
        { name: "Official Documentation", url: "https://www.typescriptlang.org/docs/" },
        { name: "TypeScript GitHub", url: "https://github.com/microsoft/TypeScript" },
        { name: "TypeScript Handbook", url: "https://www.typescriptlang.org/docs/handbook/intro.html" }
      ]
    },
    "tailwind-css": {
      name: "Tailwind CSS",
      icon: "🎨",
      category: "frontend",
      description: "A utility-first CSS framework packed with classes to build any design directly in your markup.",
      features: [
        "Utility-first approach",
        "Responsive design",
        "Customizable design system",
        "Just-in-Time compiler",
        "Dark mode support"
      ],
      useCases: [
        "Rapid prototyping",
        "Custom designs",
        "Component-based UIs",
        "When you want to avoid writing custom CSS"
      ],
      resources: [
        { name: "Official Documentation", url: "https://tailwindcss.com/docs" },
        { name: "Tailwind GitHub", url: "https://github.com/tailwindlabs/tailwindcss" },
        { name: "Tailwind Components", url: "https://tailwindui.com/components" }
      ]
    },
    "framer-motion": {
      name: "Framer Motion",
      icon: "✨",
      category: "frontend",
      description: "A production-ready motion library for React that makes creating animations easy.",
      features: [
        "Declarative animations",
        "Gesture support (drag/tap/hover)",
        "Layout animations",
        "Keyframes",
        "SVG animations"
      ],
      useCases: [
        "Interactive UIs",
        "Page transitions",
        "Micro-interactions",
        "Complex animation sequences"
      ],
      resources: [
        { name: "Official Documentation", url: "https://www.framer.com/motion/" },
        { name: "Framer Motion GitHub", url: "https://github.com/framer/motion" },
        { name: "Animation Examples", url: "https://www.framer.com/motion/examples/" }
      ]
    },
    nodejs: {
      name: "Node.js",
      icon: "🟢",
      category: "backend",
      description: "A JavaScript runtime built on Chrome's V8 JavaScript engine for building scalable network applications.",
      features: [
        "Non-blocking I/O model",
        "Event-driven architecture",
        "NPM ecosystem with over 1 million packages",
        "Built-in HTTP/HTTPS modules",
        "Cross-platform compatibility"
      ],
      useCases: [
        "Real-time applications",
        "API servers",
        "Microservices architecture",
        "CLI tools"
      ],
      resources: [
        { name: "Official Documentation", url: "https://nodejs.org/en/docs/" },
        { name: "Node.js GitHub", url: "https://github.com/nodejs/node" },
        { name: "Node.js Best Practices", url: "https://github.com/goldbergyoni/nodebestpractices" }
      ]
    },
    express: {
      name: "Express",
      icon: "🚂",
      category: "backend",
      description: "Fast, unopinionated, minimalist web framework for Node.js.",
      features: [
        "Middleware support",
        "Routing API",
        "Template engines",
        "Error handling",
        "High performance"
      ],
      useCases: [
        "RESTful APIs",
        "Server-side applications",
        "Hybrid web applications",
        "Proxy servers"
      ],
      resources: [
        { name: "Official Documentation", url: "https://expressjs.com/" },
        { name: "Express GitHub", url: "https://github.com/expressjs/express" },
        { name: "Express Examples", url: "https://github.com/expressjs/express/tree/master/examples" }
      ]
    },
    graphql: {
      name: "GraphQL",
      icon: "📊",
      category: "backend",
      description: "A query language for APIs and a runtime for fulfilling those queries with your existing data.",
      features: [
        "Strongly typed schema",
        "Single endpoint",
        "No over-fetching",
        "Real-time with subscriptions",
        "Introspective"
      ],
      useCases: [
        "Complex data requirements",
        "Mobile applications",
        "When you need flexible queries",
        "Microservices communication"
      ],
      resources: [
        { name: "Official Documentation", url: "https://graphql.org/learn/" },
        { name: "GraphQL GitHub", url: "https://github.com/graphql/graphql-js" },
        { name: "Awesome GraphQL", url: "https://github.com/chentsulin/awesome-graphql" }
      ]
    },
    postgresql: {
      name: "PostgreSQL",
      icon: "🐘",
      category: "backend",
      description: "A powerful, open source object-relational database system with over 30 years of active development.",
      features: [
        "ACID compliant",
        "Full-text search",
        "JSON support",
        "Geospatial data support",
        "Extensible"
      ],
      useCases: [
        "Transactional applications",
        "Data warehousing",
        "Geospatial applications",
        "When you need complex queries"
      ],
      resources: [
        { name: "Official Documentation", url: "https://www.postgresql.org/docs/" },
        { name: "PostgreSQL GitHub", url: "https://github.com/postgres/postgres" },
        { name: "PostgreSQL Tutorial", url: "https://www.postgresqltutorial.com/" }
      ]
    },
    mongodb: {
      name: "MongoDB",
      icon: "🍃",
      category: "backend",
      description: "A source-available cross-platform document-oriented database program.",
      features: [
        "Document-oriented storage",
        "Full index support",
        "Replication & high availability",
        "Auto-sharding",
        "Rich queries"
      ],
      useCases: [
        "Content management systems",
        "Mobile apps",
        "Real-time analytics",
        "When schema is fluid"
      ],
      resources: [
        { name: "Official Documentation", url: "https://docs.mongodb.com/" },
        { name: "MongoDB GitHub", url: "https://github.com/mongodb/mongo" },
        { name: "MongoDB University", url: "https://university.mongodb.com/" }
      ]
    },
    docker: {
      name: "Docker",
      icon: "🐳",
      category: "devops",
      description: "An open platform for developing, shipping, and running applications in containers.",
      features: [
        "Lightweight containers",
        "Portable deployment",
        "Isolated environments",
        "Docker Hub for image sharing",
        "Compose for multi-container apps"
      ],
      useCases: [
        "Consistent development environments",
        "Microservices deployment",
        "CI/CD pipelines",
        "Hybrid cloud deployments"
      ],
      resources: [
        { name: "Official Documentation", url: "https://docs.docker.com/" },
        { name: "Docker GitHub", url: "https://github.com/docker" },
        { name: "Awesome Docker", url: "https://github.com/veggiemonk/awesome-docker" }
      ]
    },
    kubernetes: {
      name: "Kubernetes",
      icon: "☸️",
      category: "devops",
      description: "An open-source system for automating deployment, scaling, and management of containerized applications.",
      features: [
        "Automatic bin packing",
        "Self-healing",
        "Horizontal scaling",
        "Service discovery",
        "Automated rollouts/rollbacks"
      ],
      useCases: [
        "Microservices at scale",
        "Hybrid/multi-cloud deployments",
        "CI/CD automation",
        "When you need high availability"
      ],
      resources: [
        { name: "Official Documentation", url: "https://kubernetes.io/docs/home/" },
        { name: "Kubernetes GitHub", url: "https://github.com/kubernetes/kubernetes" },
        { name: "Kubernetes Examples", url: "https://github.com/kubernetes/examples" }
      ]
    },
    aws: {
      name: "AWS",
      icon: "☁️",
      category: "devops",
      description: "Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services.",
      features: [
        "200+ cloud services",
        "Global infrastructure",
        "Pay-as-you-go pricing",
        "Enterprise-grade security",
        "Extensive documentation"
      ],
      useCases: [
        "Cloud hosting",
        "Big data processing",
        "Machine learning",
        "Disaster recovery"
      ],
      resources: [
        { name: "Official Documentation", url: "https://docs.aws.amazon.com/" },
        { name: "AWS GitHub", url: "https://github.com/aws" },
        { name: "AWS Architecture Center", url: "https://aws.amazon.com/architecture/" }
      ]
    },
    "github-actions": {
      name: "GitHub Actions",
      icon: "⚙️",
      category: "devops",
      description: "Automate, customize, and execute your software development workflows right in your repository.",
      features: [
        "CI/CD built into GitHub",
        "Multiple operating systems",
        "Matrix builds",
        "Community actions marketplace",
        "Secrets management"
      ],
      useCases: [
        "Automated testing",
        "Continuous deployment",
        "Package publishing",
        "Scheduled tasks"
      ],
      resources: [
        { name: "Official Documentation", url: "https://docs.github.com/en/actions" },
        { name: "GitHub Actions GitHub", url: "https://github.com/actions" },
        { name: "Awesome Actions", url: "https://github.com/sdras/awesome-actions" }
      ]
    },
    terraform: {
      name: "Terraform",
      icon: "🏗️",
      category: "devops",
      description: "An infrastructure as code tool that lets you define both cloud and on-prem resources in human-readable configuration files.",
      features: [
        "Declarative configuration",
        "Resource graph",
        "Change automation",
        "Multi-cloud support",
        "Modules for reusability"
      ],
      useCases: [
        "Infrastructure provisioning",
        "Multi-cloud management",
        "Disaster recovery",
        "When you need reproducible environments"
      ],
      resources: [
        { name: "Official Documentation", url: "https://www.terraform.io/docs" },
        { name: "Terraform GitHub", url: "https://github.com/hashicorp/terraform" },
        { name: "Terraform Modules", url: "https://registry.terraform.io/" }
      ]
    },
    jest: {
      name: "Jest",
      icon: "🃏",
      category: "testing",
      description: "A delightful JavaScript Testing Framework with a focus on simplicity.",
      features: [
        "Zero configuration",
        "Snapshot testing",
        "Isolated parallel tests",
        "Great TypeScript support",
        "Built-in coverage"
      ],
      useCases: [
        "Unit testing",
        "Integration testing",
        "React component testing",
        "When you need fast feedback"
      ],
      resources: [
        { name: "Official Documentation", url: "https://jestjs.io/docs/getting-started" },
        { name: "Jest GitHub", url: "https://github.com/facebook/jest" },
        { name: "Jest Cheat Sheet", url: "https://github.com/sapegin/jest-cheat-sheet" }
      ]
    },
    cypress: {
      name: "Cypress",
      icon: "⌨️",
      category: "testing",
      description: "Fast, easy and reliable testing for anything that runs in a browser.",
      features: [
        "Time travel debugging",
        "Automatic waiting",
        "Real-time reloads",
        "Network traffic control",
        "Cross-browser testing"
      ],
      useCases: [
        "End-to-end testing",
        "Component testing",
        "Integration testing",
        "When you need visual feedback"
      ],
      resources: [
        { name: "Official Documentation", url: "https://docs.cypress.io/" },
        { name: "Cypress GitHub", url: "https://github.com/cypress-io/cypress" },
        { name: "Cypress Examples", url: "https://github.com/cypress-io/cypress-example-recipes" }
      ]
    },
    "react-testing-library": {
      name: "React Testing Library",
      icon: "🧪",
      category: "testing",
      description: "Simple and complete React DOM testing utilities that encourage good testing practices.",
      features: [
        "DOM-based testing",
        "Accessibility-focused",
        "Lightweight",
        "Encourages best practices",
        "Works with any test runner"
      ],
      useCases: [
        "Unit testing React components",
        "Integration testing",
        "When you want to test like a user",
        "Accessibility testing"
      ],
      resources: [
        { name: "Official Documentation", url: "https://testing-library.com/docs/react-testing-library/intro/" },
        { name: "RTL GitHub", url: "https://github.com/testing-library/react-testing-library" },
        { name: "React Testing Examples", url: "https://github.com/testing-library/react-testing-library#examples" }
      ]
    },
    storybook: {
      name: "Storybook",
      icon: "📚",
      category: "testing",
      description: "An open source tool for building UI components and pages in isolation.",
      features: [
        "Component explorer",
        "Interactive testing",
        "Documentation",
        "Addons ecosystem",
        "Works with multiple frameworks"
      ],
      useCases: [
        "UI component development",
        "Visual testing",
        "Design system documentation",
        "Component showcase"
      ],
      resources: [
        { name: "Official Documentation", url: "https://storybook.js.org/docs/react/get-started/introduction" },
        { name: "Storybook GitHub", url: "https://github.com/storybookjs/storybook" },
        { name: "Storybook Examples", url: "https://storybook.js.org/showcase/" }
      ]
    },
    playwright: {
      name: "Playwright",
      icon: "🎭",
      category: "testing",
      description: "Playwright enables reliable end-to-end testing for modern web apps.",
      features: [
        "Cross-browser testing",
        "Auto-waiting",
        "Network interception",
        "Mobile emulation",
        "Multiple language support"
      ],
      useCases: [
        "End-to-end testing",
        "Visual regression testing",
        "Web scraping",
        "Automation"
      ],
      resources: [
        { name: "Official Documentation", url: "https://playwright.dev/docs/intro" },
        { name: "Playwright GitHub", url: "https://github.com/microsoft/playwright" },
        { name: "Playwright Examples", url: "https://github.com/microsoft/playwright-sample" }
      ]
    }
  };

  // Get current technology data
  const currentTech = techDatabase[tech as keyof typeof techDatabase];

  if (!currentTech) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Technology Not Found</h1>
          <Link href="/Technology" className="text-blue-400 hover:text-blue-300 text-lg">
            ← Back to Technology Stack
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-semibold">{currentTech.name} Details</h2>
          </motion.div>
          <div className="flex gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/Technology" 
                className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
              >
                ← All Technologies
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/" 
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                🏠 Home
              </Link>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800 rounded-xl p-8 shadow-2xl"
        >
          {/* Tech Header */}
          <div className="flex items-center gap-6 mb-8">
            <span className="text-5xl">{currentTech.icon}</span>
            <div>
              <h1 className="text-4xl font-bold">{currentTech.name}</h1>
              <div className="flex items-center gap-2 mt-2">
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm capitalize">
                  {currentTech.category}
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Description</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {currentTech.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Features */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="space-y-3">
                {currentTech.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-blue-400 mt-1">✓</span>
                    <span className="text-gray-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Use Cases */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Common Use Cases</h2>
              <ul className="space-y-3">
                {currentTech.useCases.map((useCase, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-green-400 mt-1">•</span>
                    <span className="text-gray-300">{useCase}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Resources */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">Learning Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentTech.resources.map((resource, index) => (
                <motion.a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="bg-gray-700 hover:bg-gray-600 p-4 rounded-lg transition-colors block"
                >
                  <h3 className="text-lg font-medium text-blue-400 mb-2">
                    {resource.name}
                  </h3>
                  <p className="text-gray-400 text-sm truncate">{resource.url}</p>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Related Technologies */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">Related Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {Object.entries(techDatabase)
                .filter(([key, value]) => 
                  value.category === currentTech.category && key !== tech)
                .map(([key, value]) => (
                  <motion.div
                    key={key}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={`/Technology/Learn-more/${key}`}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                    >
                      <span>{value.icon}</span>
                      <span>{value.name}</span>
                    </Link>
                  </motion.div>
                ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TechnologyDetailsPage;