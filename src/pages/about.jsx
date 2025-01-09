import React from "react";

const About = () => {
  return (
    <div>
      {/* Who We Are Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="fw-bold">Who We Are</h2>
              <p>
                VHSPORT is dedicated to providing top-quality sports equipment
                and services to enthusiasts worldwide. Our mission is to promote
                healthy lifestyles and empower athletes of all levels to achieve
                their goals.
              </p>
              <p>
                With a wide range of products and an expert team, we are
                committed to excellence in every aspect of our business.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="https://via.placeholder.com/500x300"
                alt="About VHSPORT"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="bg-light py-5">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="fw-bold text-dark">Our Mission</h2>
            <p className="lead text-dark">
              Empowering athletes, fostering community, and driving innovation.
            </p>
          </div>
          <div className="row text-center text-dark">
            <div className="col-md-4">
              <div className="mb-3 feature-icon">⭐</div>
              <h4 className="fw-bold text-dark">Quality</h4>
              <p className="text-dark">
                We provide premium sports products designed to meet the highest
                standards.
              </p>
            </div>
            <div className="col-md-4">
              <div className="mb-3 feature-icon">🌍</div>
              <h4 className="fw-bold text-dark">Community</h4>
              <p className="text-dark">
                Building a vibrant and inclusive sports community for everyone.
              </p>
            </div>
            <div className="col-md-4">
              <div className="mb-3 feature-icon">⚙️</div>
              <h4 className="fw-bold text-dark">Innovation</h4>
              <p className="text-dark">
                Driving progress in sports technology and training methods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-4">Our History</h2>
          <div className="row">
            <div className="col-md-6 text-light">
              <p>
                Founded in 2005, VHSPORT started as a small local shop catering
                to sports enthusiasts. Over the years, we expanded to serve a
                global audience, offering innovative products and services that
                redefine the sports industry.
              </p>
              <p>
                Today, VHSPORT stands as a symbol of trust, quality, and
                innovation, empowering athletes across the world.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="https://via.placeholder.com/500x300"
                alt="History"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="fw-bold text-dark">Meet Our Team</h2>
            <p className="lead text-dark">
              A passionate team dedicated to your success.
            </p>
          </div>
          <div className="row">
            <div className="col-md-4 text-center team-member">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="rounded-circle mb-3"
              />
              <h5 className="text-dark">John Doe</h5>
              <p className="text-dark">CEO & Founder</p>
            </div>
            <div className="col-md-4 text-center team-member">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="rounded-circle mb-3"
              />
              <h5 className="text-dark">Jane Smith</h5>
              <p className="text-dark">Head of Marketing</p>
            </div>
            <div className="col-md-4 text-center team-member">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="rounded-circle mb-3"
              />
              <h5 className="text-dark">Emily Johnson</h5>
              <p className="text-dark">Lead Designer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="fw-bold ">What Our Clients Say</h2>
            <p className="lead text-light">
              Real feedback from our valued customers.
            </p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <p className="card-text">
                    "VHSPORT has been a game-changer for my training routine.
                    The quality is unmatched!"
                  </p>
                  <h5 className="card-title">- Alex Johnson</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <p className="card-text">
                    "Their customer service and product variety are top-notch.
                    Highly recommend!"
                  </p>
                  <h5 className="card-title">- Maria Lopez</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <p className="card-text">
                    "VHSPORT truly understands the needs of athletes.
                    Outstanding experience!"
                  </p>
                  <h5 className="card-title">- James Brown</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
