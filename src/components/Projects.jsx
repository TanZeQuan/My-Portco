import React from "react";
import { Card, Row, Col, Tag } from "antd";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    title: "ISAR Event",
    description:
      "Help the organize build a website platform for attendees to learn more, sign up, and engage with the event.",
    techStack: ["WIX Builder"],
    image: "/project-1.png",
    link: "https://www.isarconference.com",
  },
  {
    title: "Durian Investment Services",
    description:
      "Work with a team to remade the website on the WordPress for a Musang King durian investment.",
    techStack: ["WordPress", "PHP"],
    image: "/project-2.png",
    link: "https://duriancapital.com.my",
  },
  {
    title: "Business Profile",
    description:
      "Help company rebuild the website profile, optimization, content enchancements",
    techStack: ["WIX Builder"],
    image: "/project-3.png",
    link: "https://azlab1301.wixsite.com/my-site",
  },
  {
    title: "Web 3 Project",
    description:
      "Assisted in front-end updates, optimizations, and content enhancements for improved performance and UX.",
    techStack: ["React.js", "TailwindCSS", "Node.js"],
    image: "/project-4.png",
    link: "https://www.myubipay.com/",
  },
  {
    title: "E-commerce | Sneaker-store",
    description: "College mini-project",
    techStack: ["HTML", "CSS"],
    image: "/project-5.png",
    link: "https://relaxed-cuchufli-975b56.netlify.app/",
  },
  {
    title: "Ticket | Marathon",
    description: "College project",
    techStack: ["HTML", "CSS","JAVASCRIPT"],
    image: "/project-6.png",
    link: "https://zq-project.netlify.app/",
  },
];

const Projects = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <motion.div
      id="projects"
      className="w-full p-10 md:p-16 xl:px-32"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-center text-4xl font-light mb-10">💻 Projects</h1>

      <Row gutter={[16, 16]} justify="center">
        {projects.map((project, index) => (
          <Col key={index} xs={24} sm={12} lg={8}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card
                hoverable
                cover={
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 object-cover rounded-t-lg"
                    />
                  </a>
                }
              >
                <Card.Meta
                  title={project.title}
                  description={project.description}
                />
                <div className="mt-3">
                  {project.techStack.map((tech, idx) => (
                    <Tag key={idx} color="blue">
                      {tech}
                    </Tag>
                  ))}
                </div>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </motion.div>
  );
};

export default Projects;
