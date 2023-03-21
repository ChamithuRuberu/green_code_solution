import React from "react";
import {Row, Col } from "reactstrap";

const Company = () => {
    return (
        <div className="Container">
                <Row>
                    <Col lg="2" md="3" sm="4" xs="6">
                        <h3 className=" d-flex align-items-center gap-1">
                            <i class="ri-vimeo-line"></i> Java
                        </h3>
                    </Col>

                    <Col lg="2" md="3" sm="4" xs="6">
                        <h3 className=" d-flex align-items-center gap-1">
                            <i class="ri-pinterest-line"></i> Spring Boot
                        </h3>
                    </Col>

                    <Col lg="2" md="3" sm="4" xs="6">
                        <h3 className=" d-flex align-items-center gap-1">
                            <i class="ri-dribbble-line"></i> React Js
                        </h3>
                    </Col>

                    <Col lg="2" md="3" sm="4" xs="6">
                        <h3 className=" d-flex align-items-center gap-1">
                            {" "}
                            <i class="ri-apple-fill"></i> Angular
                        </h3>
                    </Col>

                    <Col lg="2" md="3" sm="4" xs="6">
                        <h3 className=" d-flex align-items-center gap-1">
                            {" "}
                            <i class="ri-finder-fill"></i> MySql
                        </h3>
                    </Col>

                    <Col lg="2" md="3" sm="4" xs="6">
                        <h2 className=" d-flex align-items-center gap-1">
                            {" "}
                            <i class="ri-google-fill"></i> MongoDB
                        </h2>
                    </Col>
                </Row>
        </div>
    );
};

export default Company;