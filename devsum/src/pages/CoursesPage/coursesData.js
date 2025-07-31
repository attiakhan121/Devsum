import Images from "../../assets";

export const coursesData = {
  courses: [
    {
      id: 1,
      title: "Web Development (Full Stack)",
      description:
        "Learn full stack web development with modern technologies including React, Node.js, and MongoDB.",
      rating: 4.0,

      abouts: {
        about1:
          "There are many paths to becoming a full stack web developer, but not all offer the depth and balance needed to truly master both front-end and back-end development. From crafting responsive user interfaces to building secure and scalable server-side systems, full stack development requires a diverse set of skills and best practices.",

        about2:
          "This program provides a complete learning experience, covering modern technologies, frameworks, and real-world workflows. Whether you're building APIs, managing databases, or designing rich user experiences, this journey ensures you're well-equipped to handle every layer of web development with confidence.",
      },
      technologies: [
        { name: "HTML5", icon: "code" },
        { name: "CSS3", icon: "palette" },
        { name: "JavaScript", icon: "codepen" },
        { name: "React", icon: "atom" },
        { name: "Next.js", icon: "atom" },
        { name: "Node.js", icon: "server" },
        { name: "Express.js", icon: "terminal" },
        { name: "MongoDB", icon: "database" },
        { name: "Firebase", icon: "cloud" },
        { name: "Tailwind CSS", icon: "wind" },
        { name: "Bootstrap", icon: "layout" },
        { name: "Git", icon: "git-branch" },
        { name: "GitHub", icon: "github" },
        { name: "Vite", icon: "zap" },
        { name: "Webpack", icon: "box" },
      ],
      targetAudience:
        "Placing assured be if removed it besides on. Far shed each high read are men over day. Afraid we praise lively he suffer family estate is. Ample order up in of in ready. Timed blind had now those ought set often which. Or snug dull he show more true wish. No at many deny away miss evil. On in so indeed spirit an mother. Amounted old strictly but marianne admitted. People former is remove remain as.",
      duration: "12 weeks",
      level: "Advanced",
      lessons: 48,
      students: 320,
      category: "development",
      image: Images.course1,
      whatYouLearn: [
        "Consectetur adipiscing elit in voluptate velit.",
        "Mattis vulputate cupidatat.",
        "Vulputate enim nulla aliquet porttitor odio pellentesque",
        "Ligula ullamcorper malesuada proin",
      ],
      modes: [
        {
          type: "Online",
          price: 53,
          currency: "$",
        },
        {
          type: "Onsite",
          price: 65,
          currency: "$",
        },
      ],

      instructor: {
        id: 1,
        name: "Tariq Khan",
        role: "Web Developer",
        bio: "Tariq Khan is a passionate Front-End Web Developer with over 5 years of experience in building responsive, user-friendly websites using HTML, CSS, JavaScript, and modern frameworks like React and Next.js. He loves turning complex problems into simple, beautiful interfaces.",
        image: "",
      },
      metadata: {
        currency: "USD",
        conversion_rate: 83.5,
        notes: [
          "Certification & Internship support available (conditions apply)",
          "Discounts available for early registration (10%)",
          "Bundle discount available for multiple courses (15%)",
          "All prices in US Dollars",
        ],
        stats: {
          total_courses: 6,
          total_students: 1590,
          levels: {
            Beginner: 2,
            Intermediate: 3,
            Advanced: 1,
          },
        },
        guarantee: "30-Day Money-Back Guarantee",
      },
      curriculum: {
        fundamentals: {
          title: "Frontend Fundamentals",
          duration: "6 Weeks",
          lectures: 12,
          topics: [
            {
              id: 1,
              title: "What is Web? Internet Basics",
              duration: "2 hrs 45 min",
              locked: false,
            },
            {
              id: 2,
              title: "Markup with HTML & JSX Fundamentals",
              duration: "3 hrs 48 min",
              locked: false,
            },
            {
              id: 3,
              title: "Flexbox, Grid & Responsive Design",
              duration: "1 hrs 38 min",
              locked: false,
            },
            {
              id: 4,
              title: "Bootstrap Layouts & Components",
              duration: "1 hrs 28 min",
              locked: false,
            },
            {
              id: 5,
              title: "Tailwind CSS Framework Setup",
              duration: "1 hrs 48 min",
              locked: false,
            },
            {
              id: 6,
              title: "Core JavaScript Concepts",
              duration: "2 hrs 38 min",
              locked: false,
            },
            {
              id: 7,
              title: "Object-Oriented Programming in JS",
              duration: "1 hrs 24 min",
              locked: false,
            },
          ],
        },
        advanced: {
          title: "Advanced Frontend Development",
          duration: "8 Weeks",
          lectures: 14,
          topics: [
            {
              id: 8,
              title: "Async JavaScript (Promises, Async/Await)",
              duration: "2 hrs 28 min",
              locked: true,
            },
            {
              id: 9,
              title: "DOM Manipulation & Event Handling",
              duration: "1 hrs 58 min",
              locked: true,
            },
            {
              id: 10,
              title: "Event Bubbling & Delegation Patterns",
              duration: "2 hrs 24 min",
              locked: true,
            },
            {
              id: 11,
              title: "Ajax, Axios & Fetch API",
              duration: "1 hrs 28 min",
              locked: true,
            },
            {
              id: 12,
              title: "React Functional Components",
              duration: "1 hrs 14 min",
              locked: true,
            },
            {
              id: 13,
              title: "Props & State Management",
              duration: "1 hrs 23 min",
              locked: true,
            },
            {
              id: 14,
              title: "Dynamic Component Styling",
              duration: "1 hrs 23 min",
              locked: true,
            },
            {
              id: 15,
              title: "Functions as Props",
              duration: "1 hrs 45 min",
              locked: true,
            },
            {
              id: 16,
              title: "React Hooks (useState, useEffect)",
              duration: "2 hrs 24 min",
              locked: true,
            },
            {
              id: 17,
              title: "Material UI Integration",
              duration: "3 hrs 24 min",
              locked: true,
            },
            {
              id: 18,
              title: "Custom Hooks Development",
              duration: "2 hrs 23 min",
              locked: true,
            },
            {
              id: 19,
              title: "Redux & Redux Toolkit",
              duration: "2 hrs 27 min",
              locked: true,
            },
            {
              id: 20,
              title: "Git & GitHub Version Control",
              duration: "1 hrs 24 min",
              locked: true,
            },
          ],
        },
      },
      reviews: [
        {
          id: 1,
          user: "Ahsan Mehar",
          role: "Web devloper",
          rating: 5,
          comment:
            "Great course for understanding modern web development! The concepts were clearly explained, and the hands-on projects really helped solidify my learning.",
          image: "",
        },
        {
          id: 2,
          user: "Sana Ali",
          role: "Web Developer",
          rating: 4,
          comment:
            "Great course with comprehensive content that covers all aspects of full stack development.",
          image: "",
        },
      ],
      requirements: [
        "Basic computer skills",
        "No prior programming experience needed",
        "Windows/Mac/Linux computer",
      ],
    },
    {
      id: 2,
      title: "Frontend Development",
      description:
        "Master modern frontend development with HTML5, CSS3, JavaScript (ES6+), React, and advanced styling frameworks.",
      rating: 4.4,

      abouts: {
        about1:
          "This comprehensive front-end development course introduces you to the core building blocks of the web — HTML, CSS, and JavaScript. You'll learn to create responsive layouts, manage user interactions, and build dynamic web interfaces that work across all devices.",

        about2:
          "Through hands-on projects and real-world scenarios, you’ll gain experience using modern tools and frameworks. By the end of this journey, you’ll have the skills and confidence to build polished, interactive websites and user-friendly applications from scratch.",
      },
      technologies: [
        { name: "HTML5", icon: "code" },
        { name: "CSS3", icon: "palette" },
        { name: "JavaScript", icon: "codepen" },
        { name: "React", icon: "atom" },
        { name: "Redux", icon: "shuffle" },
        { name: "Tailwind CSS", icon: "wind" },
        { name: "Bootstrap", icon: "layout" },
        { name: "Framer Motion", icon: "move" },
        { name: "GSAP", icon: "activity" },
        { name: "Next.js", icon: "atom" },
      ],
      targetAudience:
        "Perfect for beginners starting their web development journey or backend developers looking to expand their frontend skills. The course progresses from core web technologies to advanced frameworks with hands-on projects.",
      duration: "8 weeks",
      level: "Intermediate",
      lessons: 32,
      students: 280,
      category: "frontend",
      image: Images.course2,
      whatYouLearn: [
        "Build responsive websites with HTML5/CSS3",
        "Modern JavaScript (ES6+) features",
        "React component architecture",
        "State management solutions",
        "CSS frameworks like Tailwind",
        "Frontend performance optimization",
      ],
      modes: [
        {
          type: "Online",
          price: 30,
          currency: "$",
        },
        {
          type: "Onsite",
          price: 36,
          currency: "$",
        },
      ],
      instructor: {
        id: 2,
        name: "Attia Khan",
        role: "Senior Frontend Engineer",
        bio: "With 7+ years at tech companies like Airbnb and Spotify, Emily specializes in building accessible, performant user interfaces. She's contributed to open-source projects like React and loves teaching clean component patterns.",
        image: "",
      },
      metadata: {
        currency: "USD",
        conversion_rate: 83.5,
        notes: [
          "Certification & Internship support available (conditions apply)",
          "Discounts available for early registration (10%)",
          "Bundle discount available for multiple courses (15%)",
          "All prices in US Dollars",
        ],
        stats: {
          total_courses: 6,
          total_students: 1590,
          levels: {
            Beginner: 2,
            Intermediate: 3,
            Advanced: 1,
          },
        },
        guarantee: "30-Day Money-Back Guarantee",
      },
      curriculum: {
        fundamentals: {
          title: "Core Web Technologies",
          duration: "4 Weeks",
          lectures: 10,
          topics: [
            {
              id: 21,
              title: "HTML5 Semantic Structure",
              duration: "1 hr",
              locked: false,
            },
            {
              id: 22,
              title: "CSS3 Styling and Layouts",
              duration: "2 hrs",
              locked: false,
            },
            {
              id: 23,
              title: "Flexbox and CSS Grid Systems",
              duration: "2.5 hrs",
              locked: false,
            },
            {
              id: 24,
              title: "Responsive Design Principles",
              duration: "1.5 hrs",
              locked: false,
            },
            {
              id: 25,
              title: "JavaScript Fundamentals",
              duration: "3 hrs",
              locked: false,
            },
            {
              id: 26,
              title: "DOM Manipulation Basics",
              duration: "2 hrs",
              locked: false,
            },
          ],
        },
        advanced: {
          title: "Modern Frontend Frameworks",
          duration: "4 Weeks",
          lectures: 22,
          topics: [
            {
              id: 27,
              title: "ES6+ JavaScript Features",
              duration: "2 hrs",
              locked: true,
            },
            {
              id: 28,
              title: "React Component Architecture",
              duration: "3 hrs",
              locked: true,
            },
            {
              id: 29,
              title: "State Management with Hooks",
              duration: "2.5 hrs",
              locked: true,
            },
            {
              id: 30,
              title: "Context API Patterns",
              duration: "2 hrs",
              locked: true,
            },
            {
              id: 31,
              title: "Tailwind CSS Utility Framework",
              duration: "1.5 hrs",
              locked: true,
            },
            {
              id: 32,
              title: "React Router Implementation",
              duration: "2 hrs",
              locked: true,
            },
            {
              id: 33,
              title: "Performance Optimization",
              duration: "1.5 hrs",
              locked: true,
            },
            {
              id: 34,
              title: "Testing with Jest",
              duration: "2 hrs",
              locked: true,
            },
            {
              id: 35,
              title: "Accessibility Best Practices",
              duration: "1.5 hrs",
              locked: true,
            },
            {
              id: 36,
              title: "Deployment Strategies",
              duration: "1 hr",
              locked: true,
            },
          ],
        },
      },
      reviews: [
        {
          id: 3,
          user: "Alex Johnson",
          role: "UI Developer",
          rating: 5,
          comment:
            "The React content is exceptionally well-structured. I went from basics to building complex apps seamlessly.",
          image: "",
        },
        {
          id: 4,
          user: "Sarah Williams",
          role: "Backend Developer",
          rating: 4,
          comment:
            "Perfect for expanding my skillset beyond backend. The CSS Grid and Flexbox modules were game-changers.",
          image: "",
        },
      ],
      requirements: [
        "Basic computer literacy",
        "No prior coding experience required",
        "Modern web browser",
        "Code editor (VSCode recommended)",
      ],
    },
    {
      id: 3,
      title: "Backend Development",
      description:
        "Master backend development with Node.js, Express, databases, and API design to build robust server-side applications.",
      rating: 4.8,

      abouts: {
        about1:
          "This comprehensive backend course covers everything from server fundamentals to advanced database management. You'll learn how to build secure, scalable APIs and understand the core principles of server-side programming. The course includes hands-on projects to solidify your understanding of backend architecture.",

        about2:
          "By working with real-world technologies and frameworks, you’ll gain practical experience in building efficient backend systems. From RESTful APIs to authentication and deployment, this course equips you with the skills needed to power modern web applications.",
      },
      technologies: [
        { name: "Node.js", icon: "server" },
        { name: "Express.js", icon: "terminal" },
        { name: "MongoDB", icon: "database" },
        { name: "Firebase", icon: "cloud" },
        { name: "PostgreSQL", icon: "database" },
        { name: "MySQL", icon: "database" },
        { name: "JWT (Auth)", icon: "shield" },
        { name: "REST API", icon: "link" },
        { name: "GraphQL", icon: "share-2" },
        { name: "Prisma ORM", icon: "layers" },
        { name: "Socket.io", icon: "wifi" },
        { name: "Nodemailer", icon: "mail" },
        { name: "Cloudinary", icon: "image" },
        { name: "Docker", icon: "package" },
        { name: "Git", icon: "git-branch" },
        { name: "GitHub", icon: "github" },
      ],
      targetAudience:
        "This course is designed for developers who want to specialize in backend technologies. Whether you're a frontend developer looking to expand your skills or a beginner aiming to become a full-stack developer, this course will provide the foundational knowledge needed for backend engineering roles.",
      duration: "8 weeks",
      level: "Intermediate",
      lessons: 30,
      students: 250,
      category: "backend",
      image: Images.course3,
      whatYouLearn: [
        "Build RESTful APIs with Node.js and Express",
        "Implement authentication and authorization",
        "Work with SQL and NoSQL databases",
        "Optimize database queries and performance",
        "Deploy backend applications to cloud platforms",
        "Implement caching strategies",
      ],
      modes: [
        {
          type: "Online",
          price: 30,
          currency: "$",
        },
        {
          type: "Onsite",
          price: 36,
          currency: "$",
        },
      ],
      instructor: {
        id: 3,
        name: "Haseeb Ahmed",
        role: "Senior Backend Engineer",
        bio: "Haseeb Ahmed is a seasoned backend engineer with over 8 years of experience in developing robust and scalable server-side applications. He specializes in Node.js, RESTful APIs, and microservices architecture. With a strong focus on performance, security, and clean code principles, Haseeb is passionate about mentoring aspiring developers and simplifying complex backend concepts.",
        image: "",
      },
      metadata: {
        currency: "USD",
        conversion_rate: 83.5,
        notes: [
          "Certification & Internship support available (conditions apply)",
          "Discounts available for early registration (10%)",
          "Bundle discount available for multiple courses (15%)",
          "All prices in US Dollars",
        ],
        stats: {
          total_courses: 6,
          total_students: 1590,
          levels: {
            Beginner: 2,
            Intermediate: 3,
            Advanced: 1,
          },
        },
        guarantee: "30-Day Money-Back Guarantee",
      },
      curriculum: {
        fundamentals: {
          title: "Backend Basics",
          duration: "4 Weeks",
          lectures: 10,
          topics: [
            {
              id: 21,
              title: "Introduction to Server-Side Programming",
              duration: "1 hr",
              locked: false,
            },
            {
              id: 22,
              title: "Node.js Runtime Environment",
              duration: "1.5 hrs",
              locked: false,
            },
            {
              id: 23,
              title: "Express Framework Fundamentals",
              duration: "2 hrs",
              locked: false,
            },
            {
              id: 24,
              title: "REST API Design Principles",
              duration: "2 hrs",
              locked: false,
            },
            {
              id: 25,
              title: "HTTP Methods and Status Codes",
              duration: "1.5 hrs",
              locked: false,
            },
            {
              id: 26,
              title: "Middleware Concepts",
              duration: "1.5 hrs",
              locked: false,
            },
            {
              id: 27,
              title: "Error Handling Strategies",
              duration: "1 hr",
              locked: false,
            },
          ],
        },
        advanced: {
          title: "Advanced Backend Development",
          duration: "4 Weeks",
          lectures: 20,
          topics: [
            {
              id: 28,
              title: "MongoDB and Mongoose",
              duration: "2.5 hrs",
              locked: true,
            },
            {
              id: 29,
              title: "PostgreSQL and Sequelize",
              duration: "2.5 hrs",
              locked: true,
            },
            {
              id: 30,
              title: "Authentication with JWT",
              duration: "2 hrs",
              locked: true,
            },
            {
              id: 31,
              title: "Authorization and Role Management",
              duration: "1.5 hrs",
              locked: true,
            },
            {
              id: 32,
              title: "API Security Best Practices",
              duration: "2 hrs",
              locked: true,
            },
            {
              id: 33,
              title: "File Uploads and Cloud Storage",
              duration: "1.5 hrs",
              locked: true,
            },
            {
              id: 34,
              title: "WebSockets and Real-time Communication",
              duration: "2 hrs",
              locked: true,
            },
            {
              id: 35,
              title: "Performance Optimization",
              duration: "1.5 hrs",
              locked: true,
            },
            {
              id: 36,
              title: "Docker for Backend Development",
              duration: "2 hrs",
              locked: true,
            },
            {
              id: 37,
              title: "Deployment to AWS/Heroku",
              duration: "2 hrs",
              locked: true,
            },
            {
              id: 38,
              title: "Microservices Architecture",
              duration: "3 hrs",
              locked: true,
            },
            {
              id: 39,
              title: "GraphQL APIs",
              duration: "2.5 hrs",
              locked: true,
            },
          ],
        },
      },
      reviews: [
        {
          id: 3,
          user: "Michael Chen",
          role: "Full Stack Developer",
          rating: 5,
          comment:
            "The backend course transformed my understanding of server-side development. The projects were challenging but extremely rewarding.",
          image: "",
        },
        {
          id: 4,
          user: "Emma Wilson",
          role: "Software Engineer",
          rating: 4,
          comment:
            "Excellent coverage of database concepts and API security. The instructor's real-world experience really shows in the course content.",
          image: "",
        },
      ],
      requirements: [
        "Basic understanding of JavaScript",
        "Familiarity with programming concepts",
        "Computer with Node.js installed",
      ],
    },
    {
      id: 4,
      title: "Python Programming",
      description:
        "Master Python programming from fundamentals to advanced concepts including OOP, data structures, and popular frameworks.",
      rating: 5.0,

      abouts: {
        about1:
          "This comprehensive Python course takes you from complete beginner to proficient Python developer. You'll learn core programming concepts, work with real-world datasets, and build practical applications. Python's simplicity and power make it ideal for beginners while being robust enough for professional development.",

        about2:
          "Through hands-on projects, you'll explore topics like automation, data analysis, and web development using popular Python libraries and frameworks. By the end of this course, you'll have the skills and confidence to apply Python in various real-world scenarios across different domains.",
      },
      technologies: [
        { name: "Python", icon: "library" },
        { name: "Django", icon: "layout" },
        { name: "Flask", icon: "flame" },
        { name: "FastAPI", icon: "zap" },
        { name: "Pandas", icon: "table" },
        { name: "NumPy", icon: "calculator" },
        { name: "Matplotlib", icon: "bar-chart" },
        { name: "TensorFlow", icon: "brain-circuit" },
        { name: "Scikit-learn", icon: "activity" },
        { name: "BeautifulSoup", icon: "code" },
        { name: "Selenium", icon: "mouse-pointer" },
        { name: "Pytest", icon: "check-circle" },
        { name: "Jupyter Notebook", icon: "book-open" },
        { name: "OpenCV", icon: "camera" },
        { name: "SQLite", icon: "database" },
      ],
      targetAudience:
        "Perfect for absolute beginners with no coding experience, professionals transitioning to Python, or developers wanting to strengthen their Python skills. The course progresses from basics to advanced topics suitable for various career paths including web development, data science, and automation.",
      duration: "6 weeks",
      level: "Beginner",
      lessons: 24,
      students: 350,
      category: "programming",
      image: Images.course4,
      whatYouLearn: [
        "Python syntax and core programming concepts",
        "Object-Oriented Programming in Python",
        "Working with files and external data",
        "Popular Python libraries and frameworks",
        "Building real-world applications",
        "Debugging and testing Python code",
      ],
      modes: [
        {
          type: "Online",
          price: 25,
          currency: "$",
        },
        {
          type: "Onsite",
          price: 32,
          currency: "$",
        },
      ],
      instructor: {
        id: 4,
        name: "Dr. Ananya Patel",
        role: "Python Expert & Data Scientist",
        bio: "With a PhD in Computer Science and 10+ years of Python experience, Ananya has worked on everything from scientific computing to enterprise applications. She's passionate about making Python accessible to everyone and has trained thousands of students worldwide.",
        image: "",
      },
      metadata: {
        currency: "USD",
        conversion_rate: 83.5,
        notes: [
          "Certification & Internship support available (conditions apply)",
          "Discounts available for early registration (10%)",
          "Bundle discount available for multiple courses (15%)",
          "All prices in US Dollars",
        ],
        stats: {
          total_courses: 6,
          total_students: 1590,
          levels: {
            Beginner: 2,
            Intermediate: 3,
            Advanced: 1,
          },
        },
        guarantee: "30-Day Money-Back Guarantee",
      },
      curriculum: {
        fundamentals: {
          title: "Python Basics",
          duration: "3 Weeks",
          lectures: 8,
          topics: [
            {
              id: 40,
              title: "Introduction to Python & Setup",
              duration: "1 hr",
              locked: false,
            },
            {
              id: 41,
              title: "Variables and Data Types",
              duration: "1.5 hrs",
              locked: false,
            },
            {
              id: 42,
              title: "Conditionals and Loops",
              duration: "2 hrs",
              locked: false,
            },
            {
              id: 43,
              title: "Functions and Modules",
              duration: "2 hrs",
              locked: false,
            },
            {
              id: 44,
              title: "Working with Strings",
              duration: "1 hr",
              locked: false,
            },
            {
              id: 45,
              title: "Lists, Tuples, and Dictionaries",
              duration: "2.5 hrs",
              locked: false,
            },
          ],
        },
        advanced: {
          title: "Advanced Python",
          duration: "3 Weeks",
          lectures: 16,
          topics: [
            {
              id: 46,
              title: "Object-Oriented Programming",
              duration: "3 hrs",
              locked: true,
            },
            {
              id: 47,
              title: "Error Handling and Exceptions",
              duration: "1.5 hrs",
              locked: true,
            },
            {
              id: 48,
              title: "Working with Files and I/O",
              duration: "2 hrs",
              locked: true,
            },
            {
              id: 49,
              title: "Popular Python Libraries (NumPy, Pandas)",
              duration: "2.5 hrs",
              locked: true,
            },
            {
              id: 50,
              title: "Virtual Environments and Packages",
              duration: "1 hr",
              locked: true,
            },
            {
              id: 51,
              title: "Web Scraping with BeautifulSoup",
              duration: "2 hrs",
              locked: true,
            },
            {
              id: 52,
              title: "Introduction to Django Framework",
              duration: "3 hrs",
              locked: true,
            },
            {
              id: 53,
              title: "Building REST APIs with Flask",
              duration: "2.5 hrs",
              locked: true,
            },
            {
              id: 54,
              title: "Testing and Debugging Python Code",
              duration: "2 hrs",
              locked: true,
            },
          ],
        },
      },
      reviews: [
        {
          id: 5,
          user: "Rajesh Kumar",
          role: "Data Analyst",
          rating: 5,
          comment:
            "The best Python course I've taken! Perfectly paced with excellent hands-on exercises that reinforced each concept.",
          image: "",
        },
        {
          id: 6,
          user: "Sophia Martinez",
          role: "Biology Researcher",
          rating: 4,
          comment:
            "As someone with no coding background, I appreciated how the instructor made complex concepts easy to understand. The Python skills helped automate my research work.",
          image: "",
        },
      ],
      requirements: [
        "No prior programming experience required",
        "Basic computer literacy",
        "Windows/Mac/Linux computer",
        "Internet connection",
      ],
    },
    {
      id: 5,
      title: "Database Systems",
      description:
        "Master relational and NoSQL databases, SQL queries, database design, and administration for building data-driven applications.",
      rating: 4.5,

      abouts: {
        about1:
          "This comprehensive database course covers fundamental to advanced concepts of database management systems. You'll learn to design efficient database schemas, write complex SQL queries, optimize performance, and work with both SQL and NoSQL databases. Hands-on projects will give you real-world experience in database administration and management.",

        about2:
          "Throughout the course, you'll gain practical experience using popular database technologies, explore data security best practices, and learn how to handle large datasets efficiently. By the end, you'll be equipped to design, manage, and scale reliable database systems in real-world environments.",
      },
      technologies: [
        { name: "MySQL", icon: "database" },
        { name: "PostgreSQL", icon: "server" },
        { name: "MongoDB", icon: "leaf" },
        { name: "SQLite", icon: "hard-drive" },
        { name: "Firebase", icon: "flame" },
        { name: "Redis", icon: "zap" },
        { name: "Oracle DB", icon: "layers" },
        { name: "Microsoft SQL Server", icon: "grid" },
        { name: "Cassandra", icon: "circle" },
        { name: "Supabase", icon: "cloud" },
        { name: "Prisma ORM", icon: "code" },
        { name: "Sequelize", icon: "shuffle" },
      ],
      targetAudience:
        "Ideal for software developers, data analysts, and IT professionals looking to specialize in database technologies. Suitable for beginners with basic computer knowledge and experienced professionals wanting to deepen their database expertise.",
      duration: "5 weeks",
      level: "Intermediate",
      lessons: 18,
      students: 25,
      category: "database",
      image: Images.course5,
      whatYouLearn: [
        "Relational database design principles",
        "Advanced SQL query writing",
        "Database normalization techniques",
        "NoSQL database fundamentals",
        "Database indexing and optimization",
        "Transaction management and ACID properties",
      ],
      modes: [
        {
          type: "Online",
          price: 18,
          currency: "$",
        },
        {
          type: "Onsite",
          price: 25,
          currency: "$",
        },
      ],
      instructor: {
        id: 5,
        name: "Michael Chen",
        role: "Database Architect",
        bio: "With 12+ years of experience in database systems, Michael has designed enterprise databases for Fortune 500 companies. Specializing in performance optimization and scalable database architectures, he holds certifications in Oracle, MySQL, and MongoDB.",
        image: "",
      },
      metadata: {
        currency: "USD",
        conversion_rate: 83.5,
        notes: [
          "Certification & Internship support available (conditions apply)",
          "Discounts available for early registration (10%)",
          "Bundle discount available for multiple courses (15%)",
          "All prices in US Dollars",
        ],
        stats: {
          total_courses: 6,
          total_students: 1590,
          levels: {
            Beginner: 2,
            Intermediate: 3,
            Advanced: 1,
          },
        },
        guarantee: "30-Day Money-Back Guarantee",
      },
      curriculum: {
        fundamentals: {
          title: "Database Foundations",
          duration: "2 Weeks",
          lectures: 6,
          topics: [
            {
              id: 55,
              title: "Introduction to Database Systems",
              duration: "1 hr",
              locked: false,
            },
            {
              id: 56,
              title: "Relational Database Concepts",
              duration: "1.5 hrs",
              locked: false,
            },
            {
              id: 57,
              title: "SQL Basics: SELECT, INSERT, UPDATE, DELETE",
              duration: "2 hrs",
              locked: false,
            },
            {
              id: 58,
              title: "Database Design and ER Modeling",
              duration: "2 hrs",
              locked: false,
            },
            {
              id: 59,
              title: "Normalization (1NF to 3NF)",
              duration: "2.5 hrs",
              locked: false,
            },
          ],
        },
        advanced: {
          title: "Advanced Database Management",
          duration: "3 Weeks",
          lectures: 12,
          topics: [
            {
              id: 60,
              title: "Advanced SQL: Joins, Subqueries, Views",
              duration: "2.5 hrs",
              locked: true,
            },
            {
              id: 61,
              title: "Indexing and Query Optimization",
              duration: "2 hrs",
              locked: true,
            },
            {
              id: 62,
              title: "Transactions and Concurrency Control",
              duration: "1.5 hrs",
              locked: true,
            },
            {
              id: 63,
              title: "Stored Procedures and Triggers",
              duration: "2 hrs",
              locked: true,
            },
            {
              id: 64,
              title: "NoSQL Databases: MongoDB Basics",
              duration: "2 hrs",
              locked: true,
            },
            {
              id: 65,
              title: "Database Security and Authorization",
              duration: "1.5 hrs",
              locked: true,
            },
            {
              id: 66,
              title: "Database Backup and Recovery",
              duration: "1 hr",
              locked: true,
            },
            {
              id: 67,
              title: "Data Warehousing Concepts",
              duration: "2 hrs",
              locked: true,
            },
            {
              id: 68,
              title: "Cloud Databases: AWS RDS, Firebase",
              duration: "2.5 hrs",
              locked: true,
            },
          ],
        },
      },
      reviews: [
        {
          id: 7,
          user: "David Wilson",
          role: "Backend Developer",
          rating: 5,
          comment:
            "This course transformed how I work with databases. The optimization techniques alone were worth the price!",
          image: "",
        },
        {
          id: 8,
          user: "Priya Sharma",
          role: "Data Analyst",
          rating: 4,
          comment:
            "Excellent coverage of both SQL and NoSQL concepts. The hands-on exercises with real datasets were particularly valuable.",
          image: "",
        },
      ],
      requirements: [
        "Basic computer skills",
        "Familiarity with data concepts helpful but not required",
        "Windows/Mac/Linux computer",
        "Internet connection",
      ],
    },
    {
      id: 6,
      title: "Graphic Designing",
      description:
        "Master professional graphic design tools and principles including Adobe Photoshop, Illustrator, typography, and visual communication.",
      rating: 4.0,

      abouts: {
        about1:
          "This comprehensive design course takes you from fundamental design principles to advanced creative techniques. You'll develop a strong visual vocabulary, learn industry-standard tools, and create portfolio-worthy projects. The course combines theory with hands-on practice to prepare you for real-world design challenges.",

        about2:
          "Through interactive assignments and design critiques, you'll build a professional portfolio while gaining confidence in tools like Adobe XD, Figma, and Illustrator. Whether you're aiming for a career in UI/UX, branding, or digital media, this course equips you with the skills to succeed in today’s creative industry.",
      },
      technologies: [
        { name: "Adobe Photoshop", icon: "image" },
        { name: "Adobe Illustrator", icon: "pen-tool" },
        { name: "Figma", icon: "layout-template" },
        { name: "Canva", icon: "palette" },
        { name: "Adobe XD", icon: "monitor-smartphone" },
        { name: "Sketch", icon: "edit-3" },
        { name: "Inkscape", icon: "triangle" },
        { name: "CorelDRAW", icon: "circle" },
        { name: "GIMP", icon: "layers" },
        { name: "Blender (for 3D)", icon: "box" },
      ],
      targetAudience:
        "Perfect for beginners, marketing professionals, content creators, and anyone wanting to develop professional design skills. No prior experience needed - we start with the basics and build up to advanced techniques.",
      duration: "7 weeks",
      level: "Beginner",
      lessons: 28,
      students: 210,
      category: "design",
      image: Images.course6,
      whatYouLearn: [
        "Adobe Photoshop and Illustrator fundamentals",
        "Color theory and typography principles",
        "Logo and branding design",
        "Print and digital media design",
        "Photo manipulation techniques",
        "Design composition and layout",
      ],
      modes: [
        {
          type: "Online",
          price: 36,
          currency: "$",
        },
        {
          type: "Onsite",
          price: 46,
          currency: "$",
        },
      ],
      instructor: {
        id: 6,
        name: "Sophia Rodriguez",
        role: "Creative Director",
        bio: "With 15+ years in the design industry and awards from AIGA, Sophia has worked with global brands like Nike and Starbucks. She specializes in bridging traditional design principles with modern digital techniques.",
        image: "",
      },
      metadata: {
        currency: "USD",
        conversion_rate: 83.5,
        notes: [
          "Certification & Internship support available (conditions apply)",
          "Adobe Creative Cloud license required (not included)",
          "Bundle discount available for multiple courses (15%)",
          "All prices in US Dollars",
        ],
        stats: {
          total_courses: 6,
          total_students: 1590,
          levels: {
            Beginner: 2,
            Intermediate: 3,
            Advanced: 1,
          },
        },
        guarantee: "30-Day Money-Back Guarantee",
      },
      curriculum: {
        fundamentals: {
          title: "Design Foundations",
          duration: "3 Weeks",
          lectures: 10,
          topics: [
            {
              id: 69,
              title: "Introduction to Graphic Design",
              duration: "1 hr",
              locked: false,
            },
            {
              id: 70,
              title: "Adobe Photoshop Basics",
              duration: "2 hrs",
              locked: false,
            },
            {
              id: 71,
              title: "Color Theory and Psychology",
              duration: "1.5 hrs",
              locked: false,
            },
            {
              id: 72,
              title: "Typography Fundamentals",
              duration: "2 hrs",
              locked: false,
            },
            {
              id: 73,
              title: "Composition and Layout",
              duration: "1.5 hrs",
              locked: false,
            },
            {
              id: 74,
              title: "Vector Graphics with Illustrator",
              duration: "2 hrs",
              locked: false,
            },
          ],
        },
        advanced: {
          title: "Professional Design Techniques",
          duration: "4 Weeks",
          lectures: 18,
          topics: [
            {
              id: 75,
              title: "Advanced Photo Manipulation",
              duration: "2.5 hrs",
              locked: true,
            },
            {
              id: 76,
              title: "Logo and Brand Identity Design",
              duration: "3 hrs",
              locked: true,
            },
            {
              id: 77,
              title: "Print vs Digital Design",
              duration: "1.5 hrs",
              locked: true,
            },
            {
              id: 78,
              title: "Social Media Graphics",
              duration: "2 hrs",
              locked: true,
            },
            {
              id: 79,
              title: "Packaging Design",
              duration: "2.5 hrs",
              locked: true,
            },
            {
              id: 80,
              title: "UX/UI Design Basics",
              duration: "2 hrs",
              locked: true,
            },
            {
              id: 81,
              title: "Motion Graphics Introduction",
              duration: "1.5 hrs",
              locked: true,
            },
            {
              id: 82,
              title: "Portfolio Development",
              duration: "3 hrs",
              locked: true,
            },
            {
              id: 83,
              title: "Client Design Projects",
              duration: "2 hrs",
              locked: true,
            },
          ],
        },
      },
      reviews: [
        {
          id: 9,
          user: "Emma Thompson",
          role: "Marketing Manager",
          rating: 5,
          comment:
            "Changed how I approach visual communication. I can now create professional designs myself instead of always outsourcing!",
          image: "",
        },
        {
          id: 10,
          user: "Carlos Mendez",
          role: "Freelance Photographer",
          rating: 4,
          comment:
            "The Photoshop and Illustrator training alone was worth the course fee. Sophia's teaching style makes complex techniques accessible.",
          image: "",
        },
      ],
      requirements: [
        "Computer with Adobe Creative Cloud (free trial available)",
        "No prior design experience needed",
        "Creative mindset",
        "Mouse or graphics tablet recommended",
      ],
    },
    {
      id: 7,
      title: "Truck Dispatch Mastery",
      description:
        "Learn to work from home as a truck dispatcher and earn $1500+ monthly. Master load finding, broker negotiations, driver assignments, and all required paperwork for the U.S. trucking industry.",
      rating: 4.5,
      abouts: {
        about1:
          "This comprehensive dispatch course teaches you how to successfully coordinate freight movements from home. You'll learn industry-standard practices for finding profitable loads, negotiating with brokers, managing drivers, and handling all documentation. Perfect for beginners with no prior experience in trucking.",
        about2:
          "Through real-world scenarios and practical exercises, you'll gain the skills to start your own dispatch business or work remotely for trucking companies. The course covers load boards, rate negotiation, tracking shipments, and building relationships with brokers and carriers.",
      },
      technologies: [
        { name: "TruckStop Load Board", icon: "truck" },
        { name: "DAT Load Board", icon: "database" },
        { name: "MacroPoint Tracking", icon: "map-pin" },
        { name: "KeepTruckin ELD", icon: "monitor" },
        { name: "QuickBooks Dispatch", icon: "dollar-sign" },
      ],
      targetAudience:
        "Perfect for stay-at-home parents, remote workers, military spouses, and anyone looking to start a work-from-home career in the booming trucking industry. No CDL or prior experience required.",
      duration: "4 weeks",
      level: "Beginner",
      lessons: 22,
      students: 340,
      category: "logistics",
      image: Images.course7,
      whatYouLearn: [
        "How to find and book profitable loads",
        "Negotiating rates with brokers",
        "Dispatching best practices",
        "Managing driver communications",
        "Documentation and paperwork",
        "Building broker relationships",
        "Using load boards effectively",
      ],
      modes: [
        {
          type: "Online",
          price: 71,
          currency: "$",
        },
        {
          type: "Onsite",
          price: 89,
          currency: "$",
          includes: ["1-on-1 Mentorship", "Job Placement Assistance"],
        },
      ],
      instructor: {
        id: 7,
        name: "Mike Johnson",
        role: "Lead Dispatcher",
        bio: "With 12+ years dispatching 100+ trucks nationwide, Mike has helped hundreds launch successful dispatch careers. Former owner-operator who understands both sides of the business.",
        image: "",
      },
      metadata: {
        currency: "USD",
        conversion_rate: 83.5,
        notes: [
          "Earn $1500+ monthly working from home",
          "Lifetime access to course materials",
          "Certificate of Completion included",
          "30-Day Money-Back Guarantee",
        ],
        stats: {
          average_income: "$1500-$5000 monthly",
          placement_rate: "92% within 3 months",
          support: "24/7 Q&A access",
        },
        guarantee: "30-Day Money-Back Guarantee",
      },
      curriculum: {
        fundamentals: {
          title: "Dispatching Essentials",
          duration: "2 Weeks",
          lectures: 10,
          topics: [
            {
              id: 84,
              title: "Industry Overview",
              duration: "1 hr",
              locked: false,
            },
            {
              id: 85,
              title: "Load Boards Mastery",
              duration: "2 hrs",
              locked: false,
            },
            {
              id: 86,
              title: "Rate Negotiation",
              duration: "1.5 hrs",
              locked: false,
            },
            {
              id: 87,
              title: "Paperwork Requirements",
              duration: "2 hrs",
              locked: false,
            },
          ],
        },
        advanced: {
          title: "Professional Dispatching",
          duration: "2 Weeks",
          lectures: 12,
          topics: [
            {
              id: 88,
              title: "Building Broker Relationships",
              duration: "1.5 hrs",
              locked: true,
            },
            {
              id: 89,
              title: "Managing Multiple Drivers",
              duration: "2 hrs",
              locked: true,
            },
            {
              id: 90,
              title: "Troubleshooting Common Issues",
              duration: "1.5 hrs",
              locked: true,
            },
            {
              id: 91,
              title: "Starting Your Dispatch Business",
              duration: "2 hrs",
              locked: true,
            },
          ],
        },
      },
      reviews: [
        {
          id: 11,
          user: "Sarah Williams",
          role: "Work-from-home Mom",
          rating: 5,
          comment:
            "Started earning $1800/month within 6 weeks of completing the course while caring for my kids. Life-changing opportunity!",
          image: "",
        },
        {
          id: 12,
          user: "James Rodriguez",
          role: "Military Spouse",
          rating: 4,
          comment:
            "Perfect for our mobile lifestyle. I can work from anywhere and finally have a stable income between moves.",
          image: "",
        },
      ],
      requirements: [
        "Computer with internet access",
        "Headset for phone calls",
        "Basic math skills",
        "No experience needed",
      ],
    },
  ],

  instructors: [
    {
      id: 1,
      name: "Haseeb Ahmed",
      specialization: "Backend developer",
      rating: 5.0,
      courses: 12,
      students: 2000,
      image: "",
    },
    {
      id: 2,
      name: "Attia Khan",
      specialization: "Frontend Developer",
      rating: 5.0,
      courses: 25,
      students: 1500,
      image: "",
    },
  ],
};
