import Link from "next/link";
import React from "react";
import Management from "../../components/Management";
import styles from "../../styles/ManagementServices.module.css";

const para1 =
  "The objective of Test management is to strategize and implement best-in-class testing practices throughout the new technology adoption lifecycle to achieve business and technology objectives. The key processes in overall test management process includes managing requirements and changes to scope, developing an optimal test strategy addressing the constraints in perspective, planning and directing resources appropriately, organizing test assets, and more significantly, defining, measuring and tracking testing activities to achieve project goals. With our state of art and tailor-made Test Management services, our clients can be sure of the application going live meets the business and quality expectations. The key to effective management lies in understanding goals, constraints, expectations and designing a test management strategy that balances and optimizes all stakeholders’ needs and priorities let it be business units or IT units";
const lists1 = [
  "Early identification of defects",
  "Synchronized Test Management",
  "Automation for Defect Management",
];
const para2 =
  "Business Process Assurance (BPA) is a practice within Hastraa to identify and close the gaps between the business requirements and its translation into set of functional requirements. It is an evaluation of application functionality to determine its conformance to an agreed set of business requirements.";
const lists2 = [
  "Bridge gaps in business requirements and functional specification at an early stage of the development cycle",
  "Achieve higher user satisfaction by avoiding any discrepancy between their requirements and the software delivered to them",
  "Ensure maximum test coverage using Requirement Traceability Matrix (RTM)",
  "Avoid delays and reduce rework costs",
];
const listheading2 = "Leveraging domain skills to identify functional gaps";
const ManagementServices = () => {
  return (
    <div className="">
    {/* <div className={styles.slideshow}> */}
      {/* <div className={`${styles.mySlides} + ${styles.fade}`}> */}
        <Management
          heading1="MANAGEMENT SERVICES"
          heading2="Test Management"
          para={para1}
          lists={lists1}
          listHeading={listheading2}
        />
      {/* </div> */}
      {/* <div className={`${styles.mySlides} + ${styles.fade}`}> */}
      <div className="mt-10">
        <Management
          heading1="REQUIREMENT MANAGEMENT"
          heading2="Business Process Optimization"
          para={para2}
          lists={lists2}
        />
        </div>
      {/* </div> */}
      {/* <Link className={styles.prev} href= "" onclick="plusSlides(-1)">&#10094;</Link>
      <Link className={styles.next} href= "" onclick="plusSlides(1)">&#10095;</Link> */}
    </div>
  );
};

export default ManagementServices;
