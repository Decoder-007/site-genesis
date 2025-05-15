// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Team.css";
import img4 from "../../assets/img4.png";

const teamMembers = [
  { name: "John Doe", role: "President", img: "president.jpg" },
  { name: "Jane Smith", role: "Vice President", img: "vp.jpg" },
  { name: "Alice Brown", role: "Team Lead", img: "teamlead.jpg" },
];

function Team() {
  return (
    <section id="team" className="team-section">
      <h2 className="audiowide-regular text-5xl my-10">Meet Our Team</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={img4} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
