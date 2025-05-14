import Header from "../components/other/header";
import Footer from "../components/other/footer";
import Brands from "../components/pages/brands";
import { FaShareAlt, FaFacebookF, FaTwitter } from "react-icons/fa";

import "bootstrap/dist/css/bootstrap.min.css";
import "../insights.css";
import images from "../components/theme/imagesPath";
import Btn from "../components/other/btn";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TestimonialsSection from "./testimonialsSection";
import { useModal } from "../components/pages/ModalContext";

const SideblogPostsHighlights = [
  {
    id: 1,
    title: "Eden Utilities Becomes Back-of-Shirt Partner for Crawley Town FC",
    content:
      "Eden Utilities has expanded its partnership with Crawley Town Football Club by becoming the new back-of-shirt sponsor. This collaboration underscores Eden's commitment to supporting local sports and community initiatives. Source: Crawley Town FC, July 2024.",
    image: images.h1,
    tag: "Partnership",
    date: "July 2024",
    tagColor: "bg-primary", // Directly adding color
  },
  {
    id: 2,
    title: "Eden Utilities Partners with Manor Royal Business District",
    content:
      "Eden Utilities has announced a landmark partnership with the Manor Royal Business Improvement District (BID). This collaboration aims to provide businesses within the district with energy cost risk management services and promote sustainable energy solutions. Source: Eleven Sports Media.",
    image: images.h2,
    tag: "Business",
    date: "June 2024",
    tagColor: "bg-success", // Directly adding color
  },
  {
    id: 3,
    title: "Eden Utilities Empowers Businesses to Turn Waste into Electricity",
    content:
      "Through its Eden Infinity initiative, Eden Utilities is helping organisations convert waste into electricity, thereby reducing environmental impact and promoting sustainability. Source: Eleven Sports Media.",
    image: images.h3,
    tag: "Sustainability",
    date: "May 2024",
    tagColor: "bg-warning", // Directly adding color
  },
  {
    id: 4,
    title: "Eden Utilities Supports The Olive Tree Cancer Support Centre",
    content:
      "Eden Utilities has demonstrated its commitment to community support by contributing £577.49 to The Olive Tree Cancer Support Centre. This donation was raised through the auctioning of signed Crawley Town FC training tops. Source: Olive Tree Cancer Support Centre.",
    image: images.h4,
    tag: "Charity",
    date: "April 2024",
    tagColor: "bg-danger", // Directly adding color
  },
];

const LatestblogPosts = [
  {
    id: 1,
    title:
      "Rising Energy Costs Are Disrupting UK Business - Eden Helps You Take Back Control",
    sub_title: "Eden helps you take back control in a volatile energy market",
    content:
      "British companies now pay 46% higher industrial electricity prices than IEA average. Discover how Eden helps businesses maintain competitiveness.",
    longContent: `<p className="card-text mb-3">
      The UK faces a growing competitiveness crisis with industrial electricity prices 46% above IEA averages. Major manufacturers like CF Fertilisers have shut production lines, while others reconsider UK operations.
    </p>
    <div className="row my-4 g-3">
      <div className="col-4">
        <img src={images.post1} className="img-fluid rounded" alt="UK energy prices chart"/>
      </div>
      <div className="col-4">
        <img src={images.post2} className="img-fluid rounded" alt="Factory shutdown"/>
      </div>
      <div className="col-4">
        <img src={images.post3} className="img-fluid rounded" alt="Energy comparison graph"/>
      </div>
    </div>
    <h5 className="mt-4 fw-bold">Eden's Strategic Support:</h5>
    <ul>
      <li>Bespoke procurement strategies adapting to market volatility</li>
      <li>Supplier negotiation and contract optimization</li>
      <li>Real-time market intelligence and forecasting</li>
      <li>Risk exposure analysis and mitigation planning</li>
    </ul>
    <blockquote className="blockquote text-muted my-3 ps-3 border-start border-4">
      "Energy is no longer just a utility - it's a strategic risk requiring expert management."<br/>
      - Eden Energy Strategist
    </blockquote>`,
    image: images.post1,
    author: "Eden Insights",
    authorImage: images.profile,
    authorBio:
      "Georgia Young, our Content Executive at Amber, has previous experience in communicating Net Zero journeys and supporting businesses in showcasing their achievements. She specialises in sustainability messaging and has a passion for helping people and the planet, aligning directly with Amber's B-Corp commitment.",
    date: "April 25, 2024",
    tag: "Blogs",
    tagColor: "bg-danger",
  },
  {
    id: 2,
    title:
      "AI's Growing Energy Demand: Why It Matters - And How Eden Helps You Stay Ahead",
    sub_title: "Navigating the hidden costs of AI infrastructure expansion",
    content:
      "Global data center electricity demand expected to double by 2030. Learn how Eden helps balance AI growth with sustainable energy strategies.",
    longContent: `<p className="card-text mb-3">
      AI infrastructure expansion is driving unprecedented energy demands, with UK data centers increasingly relying on gas-fired generators. Eden's solutions include:
    </p>
    <div className="row my-4 g-3">
      <div className="col-6">
        <img src={images.post4} className="img-fluid rounded" alt="Data center energy use"/>
      </div>
      <div className="col-6">
        <img src={images.post5} className="img-fluid rounded" alt="Renewable integration"/>
      </div>
    </div>
    <h5 className="mt-4 fw-bold">Our 4-Pillar Approach:</h5>
    <ol>
      <li>Strategic energy procurement for high-demand sectors</li>
      <li>Grid infrastructure planning and support</li>
      <li>Sustainable energy integration solutions</li>
      <li>Advanced risk modeling and forecasting</li>
    </ol>
    <p>
      With training large AI models consuming up to 42GWh (equivalent to 10,000 UK homes), Eden helps organisations:
    </p>
    <ul>
      <li>Navigate grid connection challenges</li>
      <li>Implement waste-to-energy solutions</li>
      <li>Maintain ESG compliance</li>
    </ul>`,
    image: images.post2,
    author: "Eden Insights",
    authorImage: images.profile,
    date: "April 22, 2024",
    tag: "Events",
    authorBio:
      "Georgia Young, our Content Executive at Amber, has previous experience in communicating Net Zero journeys and supporting businesses in showcasing their achievements. She specialises in sustainability messaging and has a passion for helping people and the planet, aligning directly with Amber's B-Corp commitment.",
    tagColor: "bg-primary",
  },
  {
    id: 3,
    title:
      "The Great Grid Upgrade: What Businesses Must Know About the UK's Energy Overhaul",
    sub_title: "Navigating the £35 billion infrastructure transformation",
    content:
      "With 200+ billion in renewable projects stuck in grid queues, discover how Eden ensures energy continuity during transition.",
    longContent: `<p className="card-text mb-3">
      The UK's grid modernization brings both opportunities and challenges. Key projects like the £4.3B Eastern Green Link cable require strategic planning:
    </p>
    <img src={images.post6} className="img-fluid rounded mb-3" alt="Grid upgrade map"/>
    <h5 className="mt-4 fw-bold">Critical Considerations:</h5>
    <ul>
      <li>Managing connection delays up to 15 years</li>
      <li>Balancing onsite vs grid-supplied energy</li>
      <li>Adapting procurement strategies for flux infrastructure</li>
    </ul>
    <blockquote className="blockquote text-muted my-3 ps-3 border-start border-4">
      "The grid overhaul isn't just about cables and substations - it's about rethinking business energy strategies for the next decade."
    </blockquote>`,
    image: images.post3,
    author: "Eden Insights",
    authorImage: images.profile,
    authorBio:
      "Georgia Young, our Content Executive at Amber, has previous experience in communicating Net Zero journeys and supporting businesses in showcasing their achievements. She specialises in sustainability messaging and has a passion for helping people and the planet, aligning directly with Amber's B-Corp commitment.",
    date: "April 20, 2024",
    tag: "Explainer",
    tagColor: "bg-secondary",
  },
  {
    id: 4,
    title:
      "From Data to Decisions: How Smart Metering Transforms Business Energy Use",
    sub_title:
      "Leveraging 66% UK smart meter penetration for strategic advantage",
    content:
      "Advanced metering insights drive 18-22% efficiency gains. Learn to transform raw data into actionable strategies.",
    longContent: `<p className="card-text mb-3">
      With 34 million smart meters operational, Eden helps businesses:
    </p>
    <div className="row my-4 g-3">
      <div className="col-4">
        <img src={images.post7} className="img-fluid rounded" alt="Smart meter dashboard"/>
      </div>
      <div className="col-8">
        <ul>
          <li>Identify hidden consumption patterns</li>
          <li>Optimize tariff structures</li>
          <li>Prevent billing errors</li>
          <li>Improve demand forecasting</li>
        </ul>
      </div>
    </div>
    <h5 className="mt-4 fw-bold">Implementation Framework:</h5>
    <ol>
      <li>Meter data aggregation & normalization</li>
      <li>Anomaly detection & reporting</li>
      <li>Integration with procurement systems</li>
      <li>Continuous optimization cycle</li>
    </ol>`,
    image: images.post4,
    authorBio:
      "Georgia Young, our Content Executive at Amber, has previous experience in communicating Net Zero journeys and supporting businesses in showcasing their achievements. She specialises in sustainability messaging and has a passion for helping people and the planet, aligning directly with Amber's B-Corp commitment.",
    author: "Eden Insights",
    authorImage: images.profile,
    date: "April 18, 2024",
    tag: "Guides",
    tagColor: "bg-success",
  },
  {
    id: 5,
    title:
      "Cybersecurity and Energy Resilience: Protecting Critical Infrastructure",
    sub_title:
      "Building cyber-resilient energy systems in high-risk environments",
    content:
      "With 68% of UK energy firms reporting increased attacks, discover Eden's layered defense approach.",
    longContent: `<p className="card-text mb-3">
      Recent incidents highlight critical vulnerabilities. Eden's cybersecurity framework includes:
    </p>
    <div className="row my-4 g-3">
      <div className="col-6">
        <img src={images.post5} className="img-fluid rounded" alt="Cyber defense layers"/>
      </div>
      <div className="col-6">
        <ul>
          <li>Real-time threat monitoring</li>
          <li>Supplier chain audits</li>
          <li>Incident response planning</li>
          <li>Employee training programs</li>
        </ul>
      </div>
    </div>
    <h5 className="mt-4 fw-bold">Key Statistics:</h5>
    <ul>
      <li>42% increase in energy sector ransomware attacks (2023-2024)</li>
      <li>Average outage cost: £12,000/minute for large manufacturers</li>
      <li>78% of attacks target third-party vendors</li>
    </ul>`,
    image: images.post5,
    authorBio:
      "Georgia Young, our Content Executive at Amber, has previous experience in communicating Net Zero journeys and supporting businesses in showcasing their achievements. She specialises in sustainability messaging and has a passion for helping people and the planet, aligning directly with Amber's B-Corp commitment.",
    author: "Eden Insights",
    authorImage: images.profile,
    date: "April 16, 2024",
    tag: "Interviews",
    tagColor: "bg-info",
  },
  {
    id: 6,
    title:
      "Decarbonization in Action: Practical Strategies for Net-Zero Transition",
    sub_title:
      "Meeting 2035's 81% emission reduction target without compromising operations",
    content:
      "From solar mandates to waste-to-energy solutions - Eden's roadmap for sustainable transformation.",
    longContent: `<p className="card-text mb-3">
      With mandatory solar panels on new homes by 2027 and commercial targets accelerating, Eden helps:
    </p>
    <div className="row my-4 g-3">
      <div className="col-4">
        <img src={images.post6} className="img-fluid rounded" alt="Solar installation"/>
      </div>
      <div className="col-4">
        <img src={images.post7} className="img-fluid rounded" alt="Wind farm"/>
      </div>
      <div className="col-4">
        <img src={images.post1} className="img-fluid rounded" alt="Eden Infinity"/>
      </div>
    </div>
    <h5 className="mt-4 fw-bold">Implementation Pathway:</h5>
    <ol>
      <li>Carbon footprint analysis</li>
      <li>Renewable integration planning</li>
      <li>Eden Infinity waste-to-energy solutions</li>
      <li>Continuous compliance monitoring</li>
    </ol>`,
    image: images.post6,
    author: "Eden Insights",
    authorBio:
      "Georgia Young, our Content Executive at Amber, has previous experience in communicating Net Zero journeys and supporting businesses in showcasing their achievements. She specialises in sustainability messaging and has a passion for helping people and the planet, aligning directly with Amber's B-Corp commitment.",
    authorImage: images.profile,
    date: "April 14, 2024",
    tag: "News",
    tagColor: "bg-dark",
  },
  {
    id: 7,
    title:
      "Regulatory Compliance 2024: Navigating ESOS Phase 3 and New RIGs Requirements",
    sub_title: "Staying ahead in evolving energy compliance landscape",
    content:
      "With June 2024 deadlines passed, ensure ongoing compliance with Eden's expert guidance.",
    longContent: `<p className="card-text mb-3">
      Key regulatory updates demand proactive management:
    </p>
    <ul>
      <li>Enhanced RFPR reporting requirements</li>
      <li>ESOS Phase 3 validation processes</li>
      <li>New energy efficiency thresholds</li>
    </ul>
    <div className="row my-4 g-3">
      <div className="col-6">
        <img src={images.post7} className="img-fluid rounded" alt="Compliance checklist"/>
      </div>
      <div className="col-6">
        <h5>Eden's Compliance Services:</h5>
        <ul>
          <li>Audit preparation & support</li>
          <li>Documentation management</li>
          <li>Continuous regulation tracking</li>
          <li>Stakeholder training programs</li>
        </ul>
      </div>
    </div>`,
    image: images.post7,
    author: "Eden Insights",
    authorBio:
      "Georgia Young, our Content Executive at Amber, has previous experience in communicating Net Zero journeys and supporting businesses in showcasing their achievements. She specialises in sustainability messaging and has a passion for helping people and the planet, aligning directly with Amber's B-Corp commitment.",
    authorImage: images.profile,
    date: "April 12, 2024",
    tag: "Videos",
    tagColor: "bg-warning text-dark",
  },
];

// const LatestblogPosts = [
//   {
//     id: 1,
//     title:
//       "Rising Energy Costs Are Disrupting UK Business  Eden Helps You Take Back Control ",
//     sub_title: "Eden helps you take back control in a volatile energy market.",
//     content:
//       "British companies are now paying some of the highest industrial electricity prices in the world  46% above the average across other International Energy Agency (IEA) countries. According to The Times (April 2024), this cost disparity is forcing many large manufacturers and energy-intensive businesses to rethink their long-term plans in the UK. ",
//     image: images.post1,
//     author: "Eden Insights",
//     authorImage: images.profile,
//     date: "April 25, 2025",
//   },
//   {
//     id: 2,
//     title: "AI’s Growing Energy Demand: Why It Matters",
//     sub_title:
//       "How Eden helps businesses stay ahead of accelerating power needs.",
//     content:
//       "With AI infrastructure placing immense strain on energy systems, Eden helps organisations navigate procurement, grid planning, and sustainability to maintain control in a high-demand environment.",
//     image: images.post2,
//     author: "Eden Insights",
//     authorImage: images.profile,
//     date: "April 22, 2025",
//   },
//   {
//     id: 3,
//     title: "The Grid Is Changing  And So Must Your Strategy",
//     sub_title:
//       "Why the Great Grid Upgrade means new rules for business energy planning.",
//     content:
//       "The UK’s £35B grid upgrade promises major improvements but brings uncertainty. Eden helps businesses manage connection delays and evolving infrastructure with proactive planning and smart procurement.",
//     image: images.post3,
//     author: "Eden Insights",
//     authorImage: images.profile,
//     date: "April 20, 2025",
//   },
//   {
//     id: 4,
//     title: "Decarbonization and Net-Zero Commitments",
//     sub_title: "Navigating the path to a sustainable future with Eden.",
//     content:
//       "With net-zero legally binding and interim goals rising, Eden supports businesses with tailored energy strategies, infrastructure planning, and compliance to meet evolving targets without sacrificing performance.",
//     image: images.post4,
//     author: "Eden Insights",
//     authorImage: images.profile,
//     date: "April 18, 2025",
//   },
//   {
//     id: 5,
//     title: "Advanced Metering Empowers Energy Efficiency",
//     sub_title: "Real-time data insights are reshaping energy decisions.",
//     content:
//       "With 66% of UK meters now smart, Eden helps businesses maximise value from advanced metering by integrating usage data into broader procurement and risk strategies.",
//     image: images.post5,
//     author: "Eden Insights",
//     authorImage: images.profile,
//     date: "April 16, 2025",
//   },
//   {
//     id: 6,
//     title: "Cybersecurity and Energy Resilience",
//     sub_title: "Safeguarding infrastructure in an age of rising threats.",
//     content:
//       "As cyber threats rise, Eden provides strategies that integrate cybersecurity with energy planning, helping organisations maintain operational continuity and safeguard critical assets.",
//     image: images.post6,
//     author: "Eden Insights",
//     authorImage: images.profile,
//     date: "April 14, 2025",
//   },
//   {
//     id: 7,
//     title: "Navigating Energy Compliance and Reporting",
//     sub_title: "Adapting to regulatory shifts with confidence.",
//     content:
//       "From ESOS to RIGs updates, Eden helps businesses stay ahead of compliance requirements with expert guidance on energy reporting, procurement, and sustainability integration.",
//     image: images.post7,
//     author: "Eden Insights",
//     authorImage: images.profile,
//     date: "April 12, 2025",
//   },
// ];

const InsightsDetails = () => {
  const { openContactModal } = useModal();
  const location = useLocation();
  const { post } = location.state || {};
  const navigate = useNavigate();

  console.log("single post ==> ", post);

  return (
    <div id="insights">
      <div id="insights-header">
        <img src={images.logo} alt="logo" className="logo" />
        <Header navItemStyle={{ color: "#000" }} />
      </div>

      <div className="container-fluid p-md-5">
        <div className="row py-2 py-md-5">
          {/* Left Side - Single Blog Detail */}
          <div className="col-lg-8">
            <div className="card mb-4 pb-4 border-bottom">
              {/* Title and Subtitle */}
              <div className="card-header bg-transparent border-0 p-0 mb-3">
                <div className="flex items-center flex-wrap gap-2 text-sm text-gray-600 mb-2">
                  <span
                    className={`badge ${post?.tagColor} tag-date-style px-2 py-1`}
                  >
                    {post?.tag}
                  </span>
                  <span
                    className="text-muted text-sm text-gray-600"
                    style={{ paddingLeft: 5 }}
                  >
                    Published{" "}
                    {new Date(post?.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}{" "}
                    &nbsp;&bull;&nbsp; {post?.author}
                  </span>
                </div>

                <h3 className="text-uppercase fw-bold text-black mb-1">
                  {post?.title}
                </h3>
                <p className="long-content text-dark fs-5">{post?.content}</p>
              </div>

              {/* Optional Main Image */}
              <img
                src={post?.image}
                className="img-fluid rounded mb-3"
                alt={post?.title}
              />

              {/* Content */}
              <div className="card-body p-0">
                <div dangerouslySetInnerHTML={{ __html: post?.longContent }} />

                {/* Author and Share section */}
              </div>
              {/* <div className="d-flex justify-content-between align-items-center mt-3 gap-3">
                  <div className="d-flex align-items-center gap-2">
                    <img
                      src={post.authorImage}
                      alt={post.author}
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                    />
                    <div>
                      <small className="text-muted d-block">
                        By {post.author}
                      </small>
                      <small className="text-muted">{post.date}</small>
                    </div>
                  </div>
                  <div className="d-flex gap-1 gap-sm-3">
                    
                    <div
                      className="d-flex align-items-center gap-2 px-2 px-sm-3 py-1 py-sm-2 border-0 border-sm rounded-0 rounded-sm"
                      style={{ borderColor: "#ddd" }}
                    >
                      <div
                        className="pe-2 me-2 border-end d-none d-sm-block"
                        style={{ borderColor: "#ddd" }}
                      >
                        <FaShareAlt />
                      </div>
                      <div className="d-sm-none">
                        <FaShareAlt />
                      </div>
                      <span className="d-none d-sm-inline">Share</span>
                    </div>

                    
                    <div
                      className="d-flex align-items-center gap-2 px-2 px-sm-3 py-1 py-sm-2 border-0 border-sm rounded-0 rounded-sm"
                      style={{ borderColor: "#ddd" }}
                    >
                      <div
                        className="pe-2 me-2 border-end d-none d-sm-block"
                        style={{ borderColor: "#ddd" }}
                      >
                        <FaFacebookF />
                      </div>
                      <div className="d-sm-none">
                        <FaFacebookF />
                      </div>
                      <span className="d-none d-sm-inline">Facebook</span>
                    </div>

                    <div
                      className="d-flex align-items-center gap-2 px-2 px-sm-3 py-1 py-sm-2 border-0 border-sm rounded-0 rounded-sm"
                      style={{ borderColor: "#ddd" }}
                    >
                      <div
                        className="pe-2 me-2 border-end d-none d-sm-block"
                        style={{ borderColor: "#ddd" }}
                      >
                        <FaTwitter />
                      </div>
                      <div className="d-sm-none">
                        <FaTwitter />
                      </div>
                      <span className="d-none d-sm-inline">Twitter</span>
                    </div>
                  </div>
                </div> */}
            </div>
            <div className="d-flex gap-3 mt-3">
              {/* Share */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  border: "2px solid #B45309",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#B45309",
                  cursor: "pointer",
                }}
              >
                <FaShareAlt size={20} />
              </div>

              {/* Facebook */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  border: "2px solid #B45309",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#B45309",
                  cursor: "pointer",
                }}
              >
                <FaFacebookF size={20} />
              </div>

              {/* Twitter */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  border: "2px solid #B45309",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#B45309",
                  cursor: "pointer",
                }}
              >
                <FaTwitter size={20} />
              </div>
            </div>

            <div
              className="mt-4 p-4"
              style={{ backgroundColor: "#5B7342", borderRadius: "8px" }}
            >
              <div className="d-flex flex-column flex-md-row align-items-start gap-4">
                {/* Author Image */}
                <img
                  src={post?.authorImage}
                  alt={post?.author}
                  style={{
                    width: "160px",
                    height: "160px",
                    borderRadius: "4px",
                    objectFit: "cover",
                  }}
                />

                {/* Author Info */}
                <div>
                  <p className="text-white mb-1">Meet the author</p>
                  <h4 className="text-white fw-bold">{post?.author}</h4>
                  <p className="text-white" style={{ maxWidth: "600px" }}>
                    {post?.authorBio}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Blog List */}
          <div className="col-lg-4 px-md-5 px-lg-2 sideBar">
            {/* Clean Energy Section */}
            <section className="cleanEnergy mb-4">
              <h4 className="mb-4 mx-5 mx-lg-3 text-black">Highlights</h4>
              <div className="border border-gray-300 rounded p-3 mx-5 mx-lg-3">
                {SideblogPostsHighlights?.map((post) => (
                  <div className="mb-4" key={post.id}>
                    <div className="blog-card h-100 border shadow-sm rounded overflow-hidden bg-white">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="img-fluid w-100"
                        style={{ objectFit: "cover" }}
                      />

                      <div className="d-flex justify-content-between align-items-center p-3 text-muted small">
                        <small
                          className={`badge ${post?.tagColor} tag-date-style p-1 me-2`}
                        >
                          {post.tag}
                        </small>
                        <span>{post.date}</span>
                      </div>

                      <div className="px-3 pb-3">
                        <h5 className="fw-bold text-dark">{post.title}</h5>
                        <p className="text-muted small">{post.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      <section className="contact-us-section container-fluid px-3 px-sm-4 px-xxl-5">
        <div className="row align-items-center justify-content-between">
          <div className="contact-text-section col-12 col-md-8">
            <h1 className="contact-heading mb-0 fs-2 lh-base lh-md-1.2 lh-lg-1.5">
              Speak with our team to see how Eden’s expertise can streamline
              your energy strategy, reduce waste, and support your wider
              sustainability goals.
            </h1>
          </div>

          <div className="contact-button-section col-12 col-md-4 d-flex justify-content-center">
            <Btn
              rightIcon
              background={"#fff"}
              iconbackground={"#2f98d0"}
              color={"#555"}
              className="no-hover"
              style={{
                padding: "1rem 2rem",
                borderRadius: "2rem",
                fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)",
                minWidth: "12rem",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
              rightIconChildren={
                <img
                  className="img-fluid"
                  style={{ width: "1.25rem", height: "1.25rem" }}
                  src={images.icon_top_white}
                  alt="contact icon"
                />
              }
              onClick={openContactModal}
            >
              <span className="text-nowrap">Contact Us</span>
            </Btn>
          </div>
        </div>
      </section>

      {/* <Brands style={{ padding: "15rem 0 0" }} /> */}
      <Footer />
    </div>
  );
};

export default InsightsDetails;
