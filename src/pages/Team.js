import React from 'react';
import { motion } from 'framer-motion';
import LightRays from '../components/Backgrounds/LightRays/LightRays';
import ProfileCard from '../components/Components/ProfileCard/ProfileCard';
import './Team.css';



const Team = () => {
  const Faculty = [
    { id: "Department of Architecture", name: "Sangeeth S. Pillai Sir", position: "Faculty Advisor", image: "/team_member_pic/Sangeet Pilli.jpg", linkedinUrl: "https://www.linkedin.com/in/sangeethspillai/" ,email:"sangeeth.arch@mnit.ac.in"},
    { id: "Department of Chemical Engineering", name: "Jyoti Joshi Ma'am", position: "Faculty Advisor", image: "/team_member_pic/Jyoti Joshi.jpg", linkedinUrl: "https://www.linkedin.com/in/jyoti-joshi-81866710a/",email:"jjoshi.city@mnit.ac.in" },
  ]

  const Advisors = [
    { id: "2022UCP1717", name: "Bhavdeep", position: "Advisor", image:"/team_member_pic/Bhavdeep.png",  linkedinUrl:"https://www.linkedin.com/in/bhavdeep5577/" ,  instagramUrl:"https://www.instagram.com/bhavdeep_singh_22/",email:"2022ucp1717@mnit.ac.in"},
    { id: "2022UCH1187", name: "Kunal Agarwal", position: "Advisor", image: "/team_member_pic/kunal.jpg",  linkedinUrl: "https://www.linkedin.com/in/kunal-agrawal-a082b5227/" ,  instagramUrl:"https://www.instagram.com/kunalagarwal2016/",email:"2022uch1187@mnit.ac.in"},
    { id: "2022UMT1408", name: "Jasani Happy Vinodkumar", position: "Advisor", image: "/team_member_pic/JASANI HAPPY VINODKUMAR.jpeg",  linkedinUrl: "https://www.linkedin.com/in/happy-jasani-73aa07246",  instagramUrl:"https://www.instagram.com/happy_jasani/" ,email:"2022umt1408@mnit.ac.in" },
     { id: "2022UCE1177", name: "Smith shah", position: "Advisor", image: "/team_member_pic/Smith shah.jpg", linkedinUrl: "https://www.linkedin.com/in/smith-shah-b9a648256/",  instagramUrl:"https://www.instagram.com/smithshah_/",email:"2022uce1177@mnit.ac.in" },
          { id: "2022UCE1463", name: "Dharamveer nitharwal ", position: "Advisor", image: "/team_member_pic/Dharamveer Nitharwal.jpg", linkedinUrl: "https://www.linkedin.com/in/dharamveer-nitharwal-6155a6258/",  instagramUrl:"https://www.instagram.com/dharamveer_nitharwal/",email:"2022uce1463@mnit.ac.in" },

  ];

  const CoreTeam = [
    { id: "2023UCP1610", name: "Simran", position: "Technical", image: "/team_member_pic/simran.jpg", linkedinUrl: "https://www.linkedin.com/in/simran-3b680128a/",  instagramUrl:"https://www.instagram.com/simm_i8168/",email:"2023ucp1610@mnit.ac.in" },
     { id: "2023UCP1671", name: "Ashika", position: "Design ", image: "/team_member_pic/Ashika.jpg", linkedinUrl: "https://www.linkedin.com/in/ashika-janothariya-140613293/",  instagramUrl:"https://www.instagram.com/shika_502/",email:"2023ucp1671@mnit.ac.in" },
  { id: "2023UME1921", name: "Ayush Kumar Gupta", position: "Marketing", image: "/team_member_pic/Ayush gupta.jpg", linkedinUrl: "https://www.linkedin.com/in/ayush-gupta808/",  instagramUrl:"https://www.instagram.com/guptayush232/",email:"2023ume1921@mnit.ac.in" },
  { id: "2023UCH1869", name: "Gopal Agarwal", position: "Finance", image: "/team_member_pic/Gopal Agarwal.jpg", linkedinUrl: "https://www.linkedin.com/in/gopal-agarwal-bb591b2ba/",  instagramUrl:"https://www.instagram.com/gopal_.agarwal/",email:"2023uch1869@mnit.ac.in" },
   { id: "2023UEC1176", name: "Manya Bajaj", position: "Content Writing", image: "/team_member_pic/MANYA BAJAJ.jpeg",  linkedinUrl:"https://linkedin.com/in/bajaj-manya2003",  instagramUrl:"https://www.instagram.com/manya.bajaj_/",email:"2023uec1176@mnit.ac.in" },
 { id: "2023UME1777", name: "Kamini Tomar", position: "Content Writing", image: "/team_member_pic/KAMINI TOMAR.jpg",  linkedinUrl:"https://www.linkedin.com/in/kamini-tomar/",  instagramUrl:"https://www.instagram.com/kamini_1239/",email:"2023ume1777@mnit.ac.in" },
  { id: "2023UCH1839", name: "Shreya Sawant", position: "Decor", image: "/team_member_pic/shreya sawant.jpg",  linkedinUrl:"https://www.linkedin.com/in/shreya-sawant-11a936283/",  instagramUrl:"https://www.instagram.com/sheeshh_shreya/",email:"2023uch1839@mnit.ac.in" },
      { id: "2023UME1770", name: "Dhanush", position: "Logistics", image: "/team_member_pic/Dhanush.JPG",  linkedinUrl:"https://www.linkedin.com/in/dhanush-chandra-79332a33b/",  instagramUrl:"https://www.instagram.com/dhanushchandra2006/",email:"2023ume1770@mnit.ac.in" },
    { id: "2023UME1778", name: "Shubh Patel", position: "Design ", image: "/team_member_pic/SHUBH PATEL.jpg",  linkedinUrl: "https://www.linkedin.com/in/shubh-patel-656858367/",  instagramUrl:"https://www.instagram.com/shubhpatel5445/" ,email:"2023ume1778@mnit.ac.in" },
        { id: "2023UCH1395", name: "Shreya Meena", position: "Content Writing", image: "/team_member_pic/Rabita Meena.jpg",  linkedinUrl:"https://www.linkedin.com/in/shreya-meena-385287377/",  instagramUrl:"https://www.instagram.com/the_life_of_enterpreneur/",email:"2023uch1395@mnit.ac.in" },
      { id: "2023UCH1265", name: "Vedant Sharma", position: "Editing", image: "/team_member_pic/Vedant Sharma.jpg",  linkedinUrl:"https://www.linkedin.com/in/vedant-sharma444/",  instagramUrl:"https://www.instagram.com/vedant_sharma444?igsh=aHV1djRqYTd6NXEz",email:"2023uch1265@mnit.ac.in" },
      { id: "2023UMT1948", name: "Samrat Rai", position: "Design", image: "/team_member_pic/SAMRAT RAI.jpg",  linkedinUrl:"https://www.linkedin.com/in/samrat-rai-2407b22b1/",  instagramUrl:"https://www.instagram.com/dhanushchandra2006/",email:"2023umt1948@mnit.ac.in" },
           { id: "2023UCE1063", name: "Aastha Priyanshu", position: "Decor", image: "/team_member_pic/Aastha.jpg",  linkedinUrl:"https://www.linkedin.com/in/aastha-priyanshu-57a3022b4/",  instagramUrl:"https://www.instagram.com/",email:"2023uce1063@mnit.ac.in" },
    ]

  const TeamMember = ({ member, delay }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      style={{ zIndex: 1 }}
    >
      <ProfileCard
        avatarUrl={member.image}
        name={member.name}
        title={member.position}
        // handle={member.name.replace(/\s+/g, '').toLowerCase()}
        // status={member.bio}
        id={member.id}
          linkedinUrl={member.linkedinUrl}
  instagramUrl={member.instagramUrl}
        contactText="Contact"
        showUserInfo={true}
        onContactClick={() => window.open(`mailto:${member.email}`)}
      />
    </motion.div>
  );

  return (
    <div className="w-full min-h-screen relative flex flex-col items-center"
      style={{ background: 'radial-gradient(circle at top, #0a0a1f)', paddingTop: '90px' }}>
      
      {/* Spotlight LightRays Background */}
      <div style={{ position: 'fixed', inset: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none' }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="rgba(255,255,255,0.6)"
          raysSpeed={1.2}
          lightSpread={0.3}   // narrower spread = spotlight
          rayLength={1.5}
          followMouse={false} // fixed spotlight effect
          mouseInfluence={0}
          noiseAmount={0.05}
          distortion={0.02}
        />
      </div>

      {/* Hero Section */}
      <section className="team-hero"
        style={{ background: 'transparent', position: 'relative', zIndex: 2, textAlign: 'center', minHeight: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 24, paddingBottom: 12 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={{ color: '#ffffff', textShadow: '0 2px 18px rgba(255,255,255,0.5)', fontSize: '3rem', fontWeight: 800, letterSpacing: '0.04em',marginTop: 10, marginBottom: 8 }}>Our Team</h1>
          <p style={{ color: '#d0d0d0', fontSize: '1.2rem', fontWeight: 500, marginTop: 0, marginBottom: 0 }}>Meet the dedicated individuals who make Think India a success.</p>
        </motion.div>
      </section>

      {/* Faculty Advisors */}
<section className="section faculty" style={{ position: 'relative', zIndex: 2, marginTop: '-12px' }}>
  <div className="container text-center">
    <h2 style={{ color: '#fff', marginBottom: 12, marginTop: 0, fontSize: '2rem' }}>Faculty Advisors</h2>
    <div className="team-grid faculty-grid">
      {Faculty.map((m, i) => (
        <TeamMember 
          key={m.linkedinUrl || m.instagramUrl} // use unique URL instead of id
          member={m} 
          delay={i * 0.1} 
        />
      ))}
    </div>
  </div>
</section>


      {/* Coordinators */}
      <section className="section coordinators" style={{ position: 'relative', zIndex: 2 }}>
        <div className="container text-center">
          <h2 style={{ color: '#fff' }}>Advisors</h2>
          <div className="team-grid">
            {Advisors.map((m, i) => <TeamMember key={m.id} member={m} delay={i * 0.1} />)}
          </div>
        </div>
      </section>

      {/* Volunteers */}
      <section className="section volunteers" style={{ position: 'relative', zIndex: 2 }}>
        <div className="container text-center">
          <h2 style={{ color: '#fff' }}>CoreTeam</h2>
          <div className="team-grid">
            {CoreTeam.map((m, i) => <TeamMember key={m.id} member={m} delay={i * 0.1} />)}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Team;
