import uniqid from "uniqid";

const emptyForm = {
  personal: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  },
  education: [
    {
      id: uniqid(),
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
    },
  ],
  work: [
    {
      id: uniqid(),
      employer: "",
      title: "",
      responsibilities: "",
      startDate: "",
      endDate: "",
    },
  ],
};

export default emptyForm;
