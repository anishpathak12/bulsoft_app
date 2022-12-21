import React from 'react';
import Management from '../../components/Management';

const para1 = " Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, egetpretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna.";
const lists1 = [
    "Quis elit egestas venenatis mattis dignissim.",
    "Cras cras lobortis vitae vivamus ultricies facilisis tempus.",
    "Orci in sit morbi dignissim metus diam arcu pretium.",
]
const para2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corrupti animi culpa sit nostrum molestiae quibusdam pariatur consectetur eius quaerat reprehenderit error, harum assumenda maiores dolores adipisci! Vel, quaerat itaque."
const lists2 = [
    "Quis elit egestas venenatis mattis dignissim.",
    "Cras cras lobortis vitae vivamus ultricies facilisis tempus.",
    "Orci in sit morbi dignissim metus diam arcu pretium.",
    "Cras cras lobortis vitae vivamus ultricies facilisis tempus."
]
const ManagementServices = () => {
    return (
        <div>
            <Management heading1= "MANAGEMENT SERVICES" heading2= "Test Management" para= {para1} lists= {lists1}/>
            <Management heading1= "REQUIREMENT MANAGEMENT" heading2= "Business Process Optimization" para= {para2} lists= {lists2}/>
        </div>
    );
};

export default ManagementServices;