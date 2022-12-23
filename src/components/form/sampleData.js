import uniqid from "uniqid";

const sampleData = {
  personal: {
    firstName: "Michael",
    lastName: "Smith",
    email: "michael@smith.com",
    phone: "711-321-2214",
  },
  education: [
    {
      id: uniqid(),
      school: "University of North Carolina",
      degree: "Bachelors in Computer Science",
      startDate: "2014",
      endDate: "2018",
    },
    {
      id: uniqid(),
      school: "The Odin Project",
      degree: "Full Stack Web Development",
      startDate: "2018",
      endDate: "2019",
    },
  ],
  work: [
    {
      id: uniqid(),
      employer: "Google",
      title: "Frontend Web Developer",
      responsibilities: "Team leader, Frontend web development",
      startDate: "2019",
      endDate: "2021",
    },
    {
      id: uniqid(),
      employer: "Facebook",
      title: "Project Manager",
      responsibilities: "Team leader, Project Designer Lead",
      startDate: "1995",
      endDate: "1998",
    },
  ],
};

export default sampleData;
