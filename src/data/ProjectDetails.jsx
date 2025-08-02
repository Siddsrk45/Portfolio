import "../style.css";

const ProjectDetails = [
  {
    title: "EZ Order",
    technologyUsed: "React Native, Javascript, .Net Core Web API, PgSQL",
    description: (
      <>
        <p>
          An <span className="highlight">Ecommerce mobile app</span> that allows
          you to manage your sales team, view real-time data of all your sales
          and client information, book sales orders on the go, and access full
          history of past transactions.
        </p>
        <ul>
          <li>
            Developed mobile application features using{" "}
            <span className="highlight">React Native</span>, JavaScript, and{" "}
            <span className="highlight">Redux Toolkit</span>, ensuring
            responsive and seamless user experiences.
          </li>
          <li>
            Integrated the <span className="highlight">Razorpay API</span> to
            support subscription-based payment workflows, enhancing monetization
            features.
          </li>
          <li>
            Implemented real-time push notifications using{" "}
            <span className="highlight">Firebase SDK</span> to improve user
            engagement and retention.
          </li>
          <li>
            Designed and implemented a secure{" "}
            <span className="highlight">Web API</span> for user authentication
            using <span className="highlight">JWT tokens</span> and{" "}
            <span className="highlight">Entity Framework Core</span>,
            incorporating essential features such as error handling, logging,
            transaction management, and{" "}
            <span className="highlight">2 factor OTP SMS authentication</span>.
          </li>
          <li>
            Deployed the background API to{" "}
            <span className="highlight">IIS</span> and deployed the app to{" "}
            <span className="highlight">Play Store</span>.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "EZ TimeTrack",
    technologyUsed: "React Native, Javascript, .Net Core Web API, PgSQL",
    description: (
      <>
        <p>
          <span className="highlight">EZtimeTrack</span> is an{" "}
          <span className="highlight">Attendance and Leave Management</span> app
          that automates tracking and managing employee attendance and leave
          requests, offering a user-friendly interface for both employees and
          administrators. With real-time data access, customizable policies, and
          seamless integration, it simplifies HR tasks, enhancing workplace
          productivity.
        </p>
        <ul>
          <li>
            Designed interactive and user-friendly screens for attendance
            management and leave applications using{" "}
            <span className="highlight">React Native</span>, ensuring a smooth
            user experience across devices.
          </li>
          <li>
            Implemented the <span className="highlight">Geolocation API</span>{" "}
            for real-time location tracking and geo-fencing, enabling secure and
            accurate attendance logging by restricting unauthorized check-ins.
          </li>
          <li>
            Developed robust <span className="highlight">Web APIs</span> to
            manage attendance data, incorporating
            <span className="highlight"> error handling</span>,{" "}
            <span className="highlight">background tracking</span>, and{" "}
            <span className="highlight">performance optimization</span>
            for reliable backend operations.
          </li>
          <li>
            Deployed the background API to{" "}
            <span className="highlight">IIS</span> and deployed the app to{" "}
            <span className="highlight">Play Store</span>.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Nexify Fund Management",
    technologyUsed: ".NET Framework MVC, SSMS, SQL, Entity Framework",
    description: (
      <>
        <p>
          A <span className="highlight">fund management system</span> for legal
          expenses developed in <span className="highlight">.NET MVC</span>
        </p>
        <ul>
          <li>
            Integrated <span className="highlight">HubSpot CRM</span> with
            internal systems by developing custom
            <span className="highlight"> REST APIs</span>, automating plaintiff
            onboarding and enabling seamless data flow between marketing and
            case management platforms.
          </li>
          <li>
            Optimized application performance by implementing{" "}
            <span className="highlight">in-memory caching</span> for user role
            and permission management, significantly reducing database load and
            improving page response times by 50%.
          </li>
          <li>
            Integrated{" "}
            <span className="highlight">Online CheckWriter (OCW)</span> payment
            solution to enable wallet-based{" "}
            <span className="highlight">ACH</span> and{" "}
            <span className="highlight">wire transfers</span>, with robust
            exception handling and support for multiple payment methods.
          </li>
          <li>
            Resolved storage inefficiencies by analyzing{" "}
            <span className="highlight">SQL Server</span> reports which reducted
            the Database size by 80%, fixing critical table storage issues, and
            implementing <span className="highlight">cache invalidation</span>{" "}
            strategies to maintain data consistency.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Investment Tracker",
    technologyUsed: "React Native, Javascript, SQLite",
    description: (
      <>
        <p>
          A <span className="highlight">mobile application</span> for{" "}
          <span className="highlight">fixed deposit investment</span> management
        </p>
        <ul>
          <li>
            Developed a mobile application for managing fixed deposit
            investments, providing users with a clear overview of their
            investment portfolio.
          </li>
          <li>
            Implemented{" "}
            <span className="highlight">scheduled notifications</span> to alert
            users of upcoming maturity dates, ensuring timely actions and better
            financial planning.
          </li>
          <li>
            Integrated <span className="highlight">local data storage</span>{" "}
            using <span className="highlight">SQLite</span>, enabling offline
            access and persistent storage of investment details.
          </li>
          <li>
            Enabled <span className="highlight">data export</span>,{" "}
            <span className="highlight">import</span>, and{" "}
            <span className="highlight">sharing in JSON format</span>, allowing
            users to seamlessly back up and transfer their investment data
            across devices or share it with others.
          </li>
        </ul>
      </>
    ),
  },
];

export { ProjectDetails };
