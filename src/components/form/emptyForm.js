import { v4 as uuidv4 } from "uuid";

const emptyForm = {
  personal: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  },
  education: [
    {
      id: uuidv4(),
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
    },
  ],
  work: [
    {
      id: uuidv4(),
      employer: "",
      title: "",
      responsibilities: "",
      startDate: "",
      endDate: "",
    },
  ],
};

export default emptyForm;
