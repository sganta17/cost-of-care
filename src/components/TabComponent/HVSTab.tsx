import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../css/customDatePickerWidth.css";
import ErrorSpinner from "../ErrorSpinner";
import CustomTable from "./LeadTable/CustomTable";


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
    const datePickervalidate = new Date();
    datePickervalidate.setFullYear(datePickervalidate.getFullYear() + 12);
    const [inputs, setInputs] = useState<any>({
        age: '', state: '', region: '', futureCost: new Date(datePickervalidate), inflationRate: ''
    });
    const [regions, setRegions] = useState([]);
    const [success, setSuccess] = useState(false);
    const [update, setUpdate] = useState(false);
    const [aHdata, setAHdata] = useState<any>([]);
    const [aNdata, setANdata] = useState<any>([]);
    const [aCdata, setACdata] = useState<any>([]);
    const [showRegions, setShowRegions] = useState(false);
    const [validated, setValidated] = useState<boolean>(false);
    const onChangeForm = (event: React.ChangeEvent<any>) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs({ ...inputs, [name]: value });
    };

    const onChangeState = (event: React.ChangeEvent<any>) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value });
    }

    useEffect(() => {
        if (inputs.state !== '') {
            setUpdate(true);
            axios.post(`https://4wbrcdpngc.execute-api.us-east-1.amazonaws.com/default/costofcare`, { "state": inputs.state })
                .then((res: any) => {
                    setRegions(res?.data.regionExpenses.Rows);
                    setShowRegions(true);
                    setUpdate(false);
                }).catch((error) => {
                    console.log(error);
                });
        }
    }, [inputs['state']]);

    const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
            return;
        }
        setUpdate(true);
        let regionData: any;
        const detailsData = {
            "age": inputs.age,
            "state": inputs.state,
            "region": inputs.region,
            "futureCost": inputs.futureCost.toISOString().split('-')[0],
            "inflationRate": inputs.inflationRate,
        };

        axios.post(`https://4wbrcdpngc.execute-api.us-east-1.amazonaws.com/default/costofcare`, detailsData)
            .then(res => {
                setUpdate(false);
                regionData = res.data.regionExpenses.Rows.filter((region: any) => {
                    return region.MetroRegionCode === parseInt(inputs.region)
                })
                if (regionData.length > 0) {
                    setAHdata([{ "Hrate": inputs.inflationRate, "Hservices": regionData[0].HHCHomemaker, "Haid": "N/A" }]);
                    setACdata([{ "Hrate": inputs.inflationRate, "Hservices": regionData[0].HHCHealthCare, "Haid": "N/A" }]);
                    setANdata([{ "Hrate": inputs.inflationRate, "semiPrivate": regionData[0].SNFSemi, "private": regionData[0].SNFPrivate }]);
                }
                setSuccess(true);
            }).catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="HVSTab">
            {update ? <ErrorSpinner /> : ''}
            <><p>Calculate the Cost of Care in your area</p><Container>
                <Form noValidate validated={validated} onSubmit={onFormSubmit}>
                    <Row>
                        <Col lg={4}>
                            <Form.Group className="mb-3" controlId="formBasicAge">
                                <Form.Label className="mandatory">Age</Form.Label>
                                <Form.Control required name='age' type="number" max={120} value={inputs.age} onChange={onChangeForm} placeholder="Enter Age" />
                                <Form.Control.Feedback type="invalid">Please provide valid Data.</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCost">
                                <Form.Label className="mandatory">Future Cost</Form.Label>
                                <DatePicker
                                    className="customDatePickerWidth"
                                    required
                                    minDate={new Date(datePickervalidate)}
                                    selected={inputs.futureCost}
                                    onChange={(date) => { date && setInputs({ ...inputs, 'futureCost': new Date(date) }); }}
                                    showYearPicker
                                    dateFormat="yyyy" />
                                <Form.Control.Feedback type="invalid">Please provide valid Data.</Form.Control.Feedback>
                            </Form.Group>
                            <Button variant="primary" type="submit" disabled={update}>
                                Submit
                            </Button>
                        </Col>
                        <Col lg={4}>
                            <Form.Group className="mb-3" controlId="formBasicState">
                                <Form.Label className="mandatory">State</Form.Label>
                                <Form.Control as="select" value={inputs.state} required onChange={onChangeState} name="state" aria-label="Default select example">
                                    <option value={''}>Select State</option>
                                    {countryData.map((e, key) => {
                                        return <option key={key} value={e.value}>{e.label}</option>;
                                    })}
                                </Form.Control>
                                <Form.Control.Feedback type="invalid">Please provide valid Data.</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicInflation">
                                <Form.Label className="mandatory">Inflation Rate</Form.Label>
                                <Form.Control required name='inflationRate' type="number" max={5} onChange={onChangeForm} value={inputs.inflationRate} placeholder="Enter Name" />
                                <Form.Control.Feedback type="invalid">Please provide valid Data.</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col lg={4}>
                            {showRegions ?
                                <Form.Group className="mb-3" controlId="formBasicRegion">
                                    <Form.Label className="mandatory">Region</Form.Label>
                                    <Form.Control as="select" value={inputs.region} required onChange={onChangeState} name="region" aria-label="Default select example">
                                        <option value={''}>Select Region</option>
                                        {regions.map((e: any, key) => {
                                            return <option key={key} value={e.MetroRegionCode}>{e.MetroRegion}</option>;
                                        })}
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid">Please provide valid Data.</Form.Control.Feedback>
                                </Form.Group> : ''}
                        </Col>

                    </Row>
                </Form>
            </Container></>
            {success ?
                <>
                    <hr />
                    <Container className="container">
                        <Row className="row">
                            <Col lg={4} className="col-sm">
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
                                    <CustomTable heading={AHcolumns} body={aHdata} />
                                    {/* <ReactTable
        data={AHdata}
        columns={AHcolumns}
        showPagination={false}
        defaultPageSize={-1}
    /> */}
                                </div>
                            </Col>
                            <Col lg={4} className="col-sm">
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
                                    <CustomTable heading={ACcolumns} body={aCdata} />
                                    {/* <ReactTable
        data={ACdata}
        columns={ACcolumns}
        showPagination={false}
        defaultPageSize={-1}
    /> */}
                                </div>
                            </Col>
                            <Col lg={4} className="col-sm">
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
                                    <CustomTable heading={ANcolumns} body={aNdata} />
                                    {/* <ReactTable
        data={ANdata}
        columns={ANcolumns}
        showPagination={false}
        defaultPageSize={-1}
    /> */}
                                </div>
                            </Col>
                        </Row>
                    </Container></> : ''}
        </div>
    );
};


export default HVSTab;