export const projectData = {
  projects: [
    {
      slug: "bazardor-ecommerce",
      title: "🛒 বাজার দর · Bazar Dor",
      image: "/projects/bazardor.png",
      subtitle:
        "Daily prices and market-by-market comparisons for essential goods in Bangladesh.",
      shortDescription:
        "A Bengali market price dashboard to explore daily grocery prices, track price changes, and compare prices across markets in Bangladesh.",
      fullOverview:
        "Bazar Dor helps users check current prices for everyday goods such as rice, lentils, oil, vegetables, fish, meat, eggs, and spices. The homepage groups products whose prices have gone up or down, then shows the full product list. Users can browse by category, sort category results by price, and open a product page for more detail. A product-detail page compares market-level minimum and maximum prices, identifies the markets with those values, shows an average for each market, and compares today’s price with yesterday’s. The interface is primarily in Bengali and formats prices and counts for the Bengali locale. The app also includes email/password registration and sign-in, Google and GitHub sign-in options, and a profile page where users can view account information, update their name, and sign out. Product and category data come from the external Programming Hero Bazar Dor API; Better Auth is configured with MongoDB for authentication data.",
      technologies: [
        "Next.js",
        "React",
        "JavaScript",
        "Tailwind CSS",
        "DaisyUI",
        "BetterAuth",
        "MongoDB",
      ],
      featured: true,
      category: "Web Application",
      previewGradient: {
        from: "from-[#FDF2F4]",
        to: "to-[#FCE7F3]",
        badgeBg: "bg-rose-100/70 text-rose-800 border-rose-200",
        accentColor: "#BE185D",
      },
      demoUrl: "https://a7-bazar-dor-wine.vercel.app/",
      githubUrl: "https://github.com/CODERRAHIMA/A7-Bazar-Dor",
      keyFeatures: [
        "📊 Price Trends — Track rising and falling prices.",
        "🛍️ Categories — Browse products and sort by price.",
        "🏪 Market Comparison — Compare minimum, maximum, and average prices.",
        "🔔 Live Price Ticker — Follow product price updates.",
        "🔐 Authentication — Sign up and sign in with email, Google, or GitHub.",
        "👤 Profile Management — Update your name and manage your account.",
      ],
      technicalHighlights: [
        "App Router and server-rendered data fetching: Product and category pages fetch data in async page components, while interactive sorting and session-aware controls are client components.",
        "External API integration: The app uses separate API requests for categories, the product list, category-filtered products, and individual product details.",
        "Derived market statistics: Product details calculate market averages and locate the lowest and highest market prices from the returned market data.",
        "Authentication integration: Better Auth is configured with a MongoDB adapter and Google/GitHub providers.",
        "Bengali-oriented presentation: The layout loads a Bengali font, and UI prices and counts use Bengali locale formatting.",
      ],
      challenges: [
        {
          problem:
            "The product list, category listing, and product detail each need different data, and the detail view needs to turn market-level values into useful comparisons.",
          solution:
            "Separate API requests serve each view. The detail page derives average, minimum, and maximum values and names the corresponding markets. Category pages handle empty results with a not-found page. A worthwhile next step is to add explicit handling for failed HTTP responses, malformed data, and API timeouts.",
        },
        {
          problem:
            "Users need to understand price changes and compare products that use different units, such as kilograms, litres, dozens, or pieces.",
          solution:
            "Bengali labels and unit names are displayed with price-direction indicators, and values are formatted with the bn-BD locale.",
        },
      ],
      futureImprovements: [
        "Add search and filters for product name, category, market, and price range.",
        "Add market location selection so users can focus on nearby markets or a chosen division.",
        "If the project is intended to become a commerce site, add a cart, checkout, and order flow; otherwise, keep the scope focused on price information and comparison.",
      ],
    },
    {
      slug: "fitlog",
      title: "Fit Log 🏋️",
      image: "/projects/fitlog.png",
      subtitle: "Your simple strength-training planner.",
      shortDescription:
        "Browse exercises, check instructions and training stats, then add up to five lifts to today's plan. Save other workouts for later; your plans stay in your browser.",
      fullOverview:
        "Fit Log is a small, responsive fitness-planning web app built around a curated workout library. Visitors can browse exercises and open a detail page to see instructions, target muscle groups, equipment, difficulty, sets, reps, estimated duration, calories, and rating. From an exercise’s detail page, a user can add it to today’s plan or save it for later. The daily plan is capped at five workouts, and the app prevents duplicates in each list. On the My Plan page, users can switch between today’s plan and saved workouts, sort either list by duration, calories, or rating, and see totals for exercise count, minutes, and calories. Items in today’s plan can be marked done or removed; marking one done removes it from the current plan rather than recording it in a workout history. Workout data comes from an external API. The two personal lists are stored in the browser’s localStorage, so they persist across reloads on that browser but are not synced between devices or accounts. ",
      technologies: [
        "Next.js",
        "React",
        "JavaScript",
        "Tailwind CSS",
        "DaisyUI",
        "LocalStorage",
      ],
      featured: true,
      category: "web application",
      previewGradient: {
        from: "from-[#FBF7F4]",
        to: "to-[#FBEAEB]",
        badgeBg: "bg-pink-100/70 text-pink-800 border-pink-200",
        accentColor: "#9F1239",
      },
      demoUrl: "https://a6-fit-log.netlify.app/workouts",
      githubUrl: "https://github.com/CODERRAHIMA/A6-Fit-Log",
      keyFeatures: [
        "🏋️ Explore the workout library — Browse a curated collection of strength exercises, with muscle groups, required equipment, difficulty, duration, and other stats at a glance.",
        "📋 Get exercise details — Open a workout for its description, step-by-step instructions, sets and reps, estimated calories, duration, and rating.",
        "📅 Build today's plan — Add exercises to a focused daily workout list, with space for up to five lifts.",
        "🔖 Save workouts for later — Keep a separate saved list so exercises you may want to try remain easy to find.",
        "↕️ Organize your plan — Switch between today's plan and saved workouts, then sort either list by duration, calories, or rating.",
      ],
      technicalHighlights: [
        "Server- and client-side responsibilities: Workout data is fetched in page/component code, while interactive planning controls use client components.",
        "Shared React Context state: A provider exposes the daily and saved lists to components such as the navigation bar, plan page, and workout action buttons.",
        "Responsive UI and feedback: Tailwind and daisyUI classes support responsive layouts, while React Toastify reports actions such as adding, saving, or removing a workout.",
      ],
      challenges: [
        {
          problem:
            "The app needs to restore a user’s daily and saved lists in the browser, but localStorage is unavailable during server rendering.",
          solution:
            "The shared provider reads storage in a client-side effect and uses an isLoaded flag to defer persistence until after the initial load. This helps avoid writing the initial empty state over stored data.",
        },
        {
          problem:
            "Users should not add the same exercise repeatedly, and today’s plan must not exceed five lifts.",
          solution:
            "The add-to-plan control checks for an existing workout and enforces the five-item limit before updating shared state; completion and removal actions update the relevant list.",
        },
      ],
      futureImprovements: [
        "Add search and filters for exercise name, muscle group, equipment, and difficulty.",
        "Provide accounts and cloud sync so plans are available across devices.",
        "Add workout history and progress tracking; currently, marking a workout done removes it from today’s list rather than retaining a record.",
      ],
    },
    {
      slug: "devstack",
      title: "Dev Stack",
      image: "/projects/devstack.png",
      subtitle:
        "Explore, compare, and assemble the technologies for your next project.",
      shortDescription:
        "A modern web application that helps developers explore, compare, and choose technologies for building their ideal development stack.",
      fullOverview:
        "The app helps developers explore options across areas such as frontend, backend, databases, programming languages, styling, DevOps, and tools. Technology information is loaded from a local JSON file and rendered as cards. A user can add technologies to a personal stack, see the selected items in a separate panel, remove individual items, or clear the whole selection. The interface is organized around a navigation bar, an introductory banner, the technology catalog and selected-stack panel, and a footer. The catalog layout adapts to different screen sizes using responsive utility classes. State for the selected stack is held by the catalog component and passed to its child components, keeping the cards and selection panel synchronized.",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "DaisyUI"],
      featured: true,
      category: "web application",
      previewGradient: {
        from: "from-[#FDF4F5]",
        to: "to-[#F6E6E8]",
        badgeBg: "bg-rose-100/70 text-rose-800 border-rose-200",
        accentColor: "#881337",
      },
      demoUrl: "https://dev-stack-1630.netlify.app/",
      githubUrl: "https://github.com/CODERRAHIMA/A5-Dev-Stack",
      keyFeatures: [
        "🧩 Explore technologies by category and compare different technologies",
        "🛠️ Build a personalized development stack",
        "📱 Fully responsive and modern UI",
      ],
      technicalHighlights: [
        "Component-based design: Navigation, banner, catalog cards, selected-stack cards, and footer are separated into reusable React components.",
        "Promise-based data loading: The app fetches the JSON catalog and uses React’s Suspense boundary and use() API to render it after loading.",
        "Lifted shared state: The selected-stack state is managed at the catalog level and passed down to cards and the selection panel, so those views stay in sync.",
      ],
      challenges: [
        {
          problem:
            "Adding or removing a technology needs to update multiple parts of the interface consistently.",
          solution:
            "The selected-stack state is maintained in the parent Technologies component and passed to child components through props. This keeps the catalog cards and selection panel connected to the same state.",
        },
        {
          problem:
            "Listing each technology directly in the UI would make catalog changes cumbersome, and the page needs to account for the data-loading period.",
          solution:
            "Technology records are stored in JSON and rendered from the returned array. The app wraps the catalog in Suspense with a loading message while the data promise resolves.",
        },
      ],
      futureImprovements: [
        "Add a genuine comparison view for selected technologies, with criteria such as use cases, learning curve, and ecosystem.",
        "Add search, category filters, sorting, and more detailed technology profiles.",
        "Persist the selected stack in local storage, with options to save, name, or share stacks.",
      ],
    },
  ],
};
