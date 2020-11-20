import React from 'react';

import { Card, CardBody, CardTitle, CardText } from "reactstrap"

import {FaEnvelope, FaMapMarkedAlt, FaPhone} from "react-icons/fa";

const MyCard = ({details}) => {
    	return(
            <Card>
                <CardBody className="text-center">
                   <img
                   height="150" 
                   width="150" 
                   classname="rounded-circle img-thumbnail border-danger" 
                   
                   src={details.picture?.large}
                   />
                   <CardTitle className="text-primary">

                    <h1>
                        <span className="pr-2">{details.name?.title}</span>
                        <span className="pr-2">{details.name?.first}</span>
                        <span>{details.name?.last}</span>
                    </h1>

                   </CardTitle>
                   <CardText>
                        
                        <FaMapMarkedAlt/>
                        <span> </span>
                        {details.location?.country}
                        
                        <span> </span>
                        <FaEnvelope/>
                        <span> </span>
                        {details.location?.postcode}
                   </CardText>

                   
                    
                </CardBody>
            </Card>
        )
}

export default MyCard;