import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          Career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>E-commerce Manager</h4>
                <h5>Lime Apples Limited</h5>
              </div>
              <h3>2023–25</h3>
            </div>
            <p>
              Owned full e-commerce growth across Amazon, TikTok Shop, SEO,
              Google Ads, and Meta Ads. Helped drive £2M+ in Amazon revenue and
              £1M+ in TikTok Shop sales through stronger content, listings,
              acquisition, and marketplace execution.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Project Manager</h4>
                <h5>Staff Asia</h5>
              </div>
              <h3>2022–23</h3>
            </div>
            <p>
              Led rollout and management of mobile retail kiosks across London,
              handling suppliers, staffing, operations, and workflow
              improvements while supporting digital presence and local SEO.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Brand &amp; Sales Manager</h4>
                <h5>Staff Asia</h5>
              </div>
              <h3>2021–22</h3>
            </div>
            <p>
              Managed campaigns across PPC, SEO, email, paid social, and website
              optimisation to improve conversion, user journey, and revenue
              growth across B2B and B2C channels.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Customer Success Team Leader</h4>
                <h5>Staff Asia</h5>
              </div>
              <h3>2020–21</h3>
            </div>
            <p>
              Led a 20+ member support team, improved reporting and service
              quality, handled escalations, and helped build more scalable
              customer support systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder Projects</h4>
                <h5>TaxCalculate &amp; SEO Platforms</h5>
              </div>
              <h3>Now</h3>
            </div>
            <p>
              Built and continue developing SEO-led digital properties and AI
              assisted systems focused on calculators, search visibility,
              content workflows, and scalable online growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
