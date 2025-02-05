import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import web from "../assets/service_icon/web.png";
import mobile from "../assets/service_icon/mobile.png";
import design from "../assets/service_icon/design.png";
import booking from "../assets/service_icon/booking.png";
import seo from "../assets/service_icon/seo.png";
import cloud from "../assets/service_icon/cloud.png";
import security from "../assets/service_icon/security.png";
import ai from "../assets/service_icon/ai.png";

const Services = () => {
  const service = [
    {
      id: 1,
      title: "Web Development",
      description: "We provide web development services",
      icon: web,
    },
    {
      id: 2,
      title: "Mobile Development",
      description: "We provide mobile development services",
      icon: mobile,
    },
    {
      id: 3,
      title: "Design",
      description: "We provide design services",
      icon: design,
    },
    {
      id: 4,
      title: "Booking",
      description: "Appointments and booking services",
      icon: booking,
    },
    {
      id: 5,
      title: "SEO Optimization",
      description: "Boost your online visibility with our SEO services.",
      icon: seo,
    },
    {
      id: 6,
      title: "Cloud Solutions",
      description: "Deploy secure and scalable cloud solutions.",
      icon: cloud,
    },
    {
      id: 7,
      title: "Cybersecurity",
      description: "Protect your business from cyber threats.",
      icon: security,
    },
    {
      id: 8,
      title: "AI & Machine Learning",
      description: "Implement AI-powered solutions for automation.",
      icon: ai,
    },
  ];

  return (
    <div
      className="container "
      style={{
        backgroundColor: "#FFF5D7",
        backgroundImage: `url("https://tse1.mm.bing.net/th?id=OIP.2lfiJdkGha3TxHf_LTuZiAHaB0&pid=Api&P=0&h=180")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h1 className="text-center mb-4">Our Services</h1>
      <div className="row">
        {service.map((service) => (
          <div key={service.id} className="col-md-6 mb-4">
            <div
              className="card p-2 text-center d-flex align-items-center border-0"
              style={{
                cursor: "pointer",
                transition: "all 0.3s ease",
                overflow: "hidden",
                backgroundColor: "white",
                borderRadius: "10px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                transform: "scale(1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#F2F9FF";
                e.currentTarget.style.transform = "scale(1.03)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <img
                src={service.icon}
                alt={service.title}
                className="mb-3"
                width="50"
              />
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
