import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "../../css/customDatePickerWidth.css";
import "react-datepicker/dist/react-datepicker.css";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import axios from "axios";


const HVSTab = () => {
    const countryData = [
        { label: 'ALABAMA', value: 'AL' },
        { label: 'ALASKA', value: 'AK' },
        { label: 'AMERICAN SAMOA', value: 'AS' },
        { label: 'ARIZONA', value: 'AZ' },
        { label: 'ARKANSAS', value: 'AR' },
        { label: 'CALIFORNIA', value: 'CA' },
        { label: 'COLORADO', value: 'CO' },
        { label: 'CONNECTICUT', value: 'CT' },
        { label: 'DELAWARE', value: 'DE' },
        { label: 'DISTRICT OF COLUMBIA', value: 'DC' },
        { label: 'FEDERATED STATES OF MICRONESIA', value: 'FM' },
        { label: 'FLORIDA', value: 'FL' },
        { label: 'GEORGIA', value: 'GA' },
        { label: 'GUAM', value: 'GU' },
        { label: 'HAWAII', value: 'HI' },
        { label: 'IDAHO', value: 'ID' },
        { label: 'ILLINOIS', value: 'IL' },
        { label: 'INDIANA', value: 'IN' },
        { label: 'IOWA', value: 'IA' },
        { label: 'KANSAS', value: 'KS' },
        { label: 'KENTUCKY', value: 'KY' },
        { label: 'LOUISIANA', value: 'LA' },
        { label: 'MAINE', value: 'ME' },
        { label: 'MARSHALL ISLANDS', value: 'MH' },
        { label: 'MARYLAND', value: 'MD' },
        { label: 'MASSACHUSETTS', value: 'MA' },
        { label: 'MICHIGAN', value: 'MI' },
        { label: 'MINNESOTA', value: 'MN' },
        { label: 'MISSISSIPPI', value: 'MS' },
        { label: 'MISSOURI', value: 'MO' },
        { label: 'MONTANA', value: 'MT' },
        { label: 'NEBRASKA', value: 'NE' },
        { label: 'NEVADA', value: 'NV' },
        { label: 'NEW HAMPSHIRE', value: 'NH' },
        { label: 'NEW JERSEY', value: 'NJ' },
        { label: 'NEW MEXICO', value: 'NM' },
        { label: 'NEW YORK', value: 'NY' },
        { label: 'NORTH CAROLINA', value: 'NC' },
        { label: 'NORTH DAKOTA', value: 'ND' },
        { label: 'NORTHERN MARIANA ISLANDS', value: 'MP' },
        { label: 'OHIO', value: 'OH' },
        { label: 'OKLAHOMA', value: 'OK' },
        { label: 'OREGON', value: 'OR' },
        { label: 'PALAU', value: 'PW' },
        { label: 'PENNSYLVANIA', value: 'PA' },
        { label: 'PUERTO RICO', value: 'PR' },
        { label: 'RHODE ISLAND', value: 'RI' },
        { label: 'SOUTH CAROLINA', value: 'SC' },
        { label: 'SOUTH DAKOTA', value: 'SD' },
        { label: 'TENNESSEE', value: 'TN' },
        { label: 'TEXAS', value: 'TX' },
        { label: 'UTAH', value: 'UT' },
        { label: 'VERMONT', value: 'VT' },
        { label: 'VIRGIN ISLANDS', value: 'VI' },
        { label: 'VIRGINIA', value: 'VA' },
        { label: 'WASHINGTON', value: 'WA' },
        { label: 'WEST VIRGINIA', value: 'WV' },
        { label: 'WISCONSIN', value: 'WI' },
        { label: 'WYOMING', value: 'WY' }
    ];

    const AHdata = [{
        Hrate: 1,
        Hservices: 'N/A'
    }, {
        Hrate: 2,
        Hservices: 'N/A'
    }, {
        Hrate: 3,
        Hservices: 'N/A'
    }, {
        Hrate: 4,
        Hservices: 'N/A'
    }, {
        Hrate: 5,
        Hservices: 'N/A'
    }];

    const AHcolumns = [{
        Header: 'Inflation Rate percent',
        accessor: 'Hrate'
    }, {
        Header: 'Homemaker Services',
        accessor: 'Hservices'
    }, {
        Header: 'Home Health Aide',
        accessor: 'HHHA'

    }];

    const ACdata = [{
        Hrate: 1,
        Hservices: 'N/A'
    }, {
        Hrate: 2,
        Hservices: 'N/A'
    }, {
        Hrate: 3,
        Hservices: 'N/A'
    }, {
        Hrate: 4,
        Hservices: 'N/A'
    }, {
        Hrate: 5,
        Hservices: 'N/A'
    }];

    const ACcolumns = [{
        Header: 'Inflation Rate percent',
        accessor: 'Hrate'
    }, {
        Header: 'Adult Day Health Care',
        accessor: 'Hservices'
    }, {
        Header: 'Assisted Living Facility',
        accessor: 'HHHA'
    }];

    const ANdata = [{
        Hrate: 1,
        Hservices: 'N/A'
    }, {
        Hrate: 2,
        Hservices: 'N/A'
    }, {
        Hrate: 3,
        Hservices: 'N/A'
    }, {
        Hrate: 4,
        Hservices: 'N/A'
    }, {
        Hrate: 5,
        Hservices: 'N/A'
    }];

    const ANcolumns = [{
        Header: 'Inflation Rate percent',
        accessor: 'Hrate'
    }, {
        Header: 'Semi-Private Room',
        accessor: 'Hservices'
    }, {
        Header: 'Private Room ',
        accessor: 'HHHA'
    }];

    const [inputs, setInputs] = useState<any>({
        age: '', state: 'AL', futureCost: new Date(), inflationRate: ''
    });
    const [success, setSuccess] = useState(false);
    const [validated, setValidated] = useState<boolean>(false);
    const onChangeForm = (event: React.ChangeEvent<any>) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs({ ...inputs, [name]: value });
    };

    const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
            return;
        }
        const detailsData = {
            "age": inputs.age,
            "state": inputs.state,
            "futureCost": inputs.futureCost,
            "inflationRate": inputs.inflationRate,
        };
        axios.post(`https://4wbrcdpngc.execute-api.us-east-1.amazonaws.com/default/costofcare`, detailsData)
            .then(res => {
                setSuccess(true);
            }).catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className="HVSTab">
            <p>Calculate the Cost of Care in your area</p>
            <Container>
                <Row>
                    <Col lg={6}>
                        <Form noValidate validated={validated} onSubmit={onFormSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="mandatory">Age</Form.Label>
                                <Form.Control required name='age' type="number" max={120} value={inputs.age} onChange={onChangeForm} placeholder="Enter Age" />
                                <Form.Control.Feedback type="invalid">Please provide valid Data.</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="mandatory">State</Form.Label>
                                <Form.Control as="select" value={inputs.state} required onChange={onChangeForm} name="state" aria-label="Default select example">
                                    {countryData.map((e, key) => {
                                        return <option key={key} value={e.value}>{e.label}</option>;
                                    })}
                                </Form.Control>
                                <Form.Control.Feedback type="invalid">Please provide valid Data.</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="mandatory">Future Cost</Form.Label>
                                <DatePicker
                                    className="customDatePickerWidth"
                                    required
                                    selected={inputs.futureCost}
                                    onChange={(date) => { date && setInputs({ ...inputs, 'futureCost': new Date(date) }) }}
                                    showYearPicker
                                    dateFormat="yyyy"
                                />
                                <Form.Control.Feedback type="invalid">Please provide valid Data.</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="mandatory">Inflation Rate</Form.Label>
                                <Form.Control required name='inflationRate' type="number" max={120} onChange={onChangeForm} value={inputs.inflationRate} placeholder="Enter Name" />
                                <Form.Control.Feedback type="invalid">Please provide valid Data.</Form.Control.Feedback>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>

            </Container>
            {success ? <div className="container">
                <div className="row">
                    <div className="col-sm">
                        (A) IN-HOME CARE

                        {/* <div>
                            <br />
                            <h6>HOURLY
                                COSTS
                                (Projected)</h6>
                            <ReactTable
                                data={AHdata}
                                columns={AHcolumns}
                                showPagination={false}
                                defaultPageSize={-1}
                            />
                        </div> */}

                        {/* <div>
                            <br />
                            <h6>DAILY
                                COSTS
                                (Projected)</h6>
                            <ReactTable
                                data={AHdata}
                                columns={AHcolumns}
                                showPagination={false}
                                defaultPageSize={-1}
                            />
                        </div> */}

                        {/* <div>
                            <br />
                            <h6>MONTHLY
                                COSTS
                                (Projected)</h6>
                            <ReactTable
                                data={AHdata}
                                columns={AHcolumns}
                                showPagination={false}
                                defaultPageSize={-1}
                            />
                        </div> */}

                        <div>
                            <br />
                            <h6>ANNUAL
                                COSTS
                                (Projected)</h6>
                            <ReactTable
                                data={AHdata}
                                columns={AHcolumns}
                                showPagination={false}
                                defaultPageSize={-1}
                            />
                        </div>
                    </div>
                    <div className="col-sm">
                        (B) COMMUNITY AND ASSISTED LIVING

                        {/* <div>
                            <br />
                            <h6>DAILY
                                COSTS
                                (Projected)</h6>
                            <ReactTable
                                data={ACdata}
                                columns={ACcolumns}
                                showPagination={false}
                                defaultPageSize={-1}
                            />
                        </div> */}

                        {/* <div>
                            <br />
                            <h6>MONTHLY
                                COSTS
                                (Projected)</h6>
                            <ReactTable
                                data={ACdata}
                                columns={ACcolumns}
                                showPagination={false}
                                defaultPageSize={-1}
                            />
                        </div> */}

                        <div>
                            <br />
                            <h6>ANNUAL
                                COSTS
                                (Projected)</h6>
                            <ReactTable
                                data={ACdata}
                                columns={ACcolumns}
                                showPagination={false}
                                defaultPageSize={-1}
                            />
                        </div>
                    </div>
                    <div className="col-sm">
                        (C) NURSING HOME FACILITY
                        {/* <div>
                            <br />
                            <h6>DAILY
                                COSTS
                                (Projected)</h6>
                            <ReactTable
                                data={ANdata}
                                columns={ANcolumns}
                                showPagination={false}
                                defaultPageSize={-1}
                            />
                        </div> */}

                        {/* <div>
                            <br />
                            <h6>MONTHLY
                                COSTS
                                (Projected)</h6>
                            <ReactTable
                                data={ANdata}
                                columns={ANcolumns}
                                showPagination={false}
                                defaultPageSize={-1}
                            />
                        </div> */}

                        <div>
                            <br />
                            <h6>ANNUAL
                                COSTS
                                (Projected)</h6>
                            <ReactTable
                                data={ANdata}
                                columns={ANcolumns}
                                showPagination={false}
                                defaultPageSize={-1}
                            />
                        </div>
                    </div>
                </div>
            </div> : ''}
        </div>
    );
};


export default HVSTab;