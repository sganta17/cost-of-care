import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "../../css/customDatePickerWidth.css";
import "react-datepicker/dist/react-datepicker.css";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";



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

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }



    const updateSubmit = (event) => {
        alert('You have entered the UserName and CompanyName successfully.');
        event.preventDefault();
    }

    const currentDate = new Date();

    const [myYear, setMyYear] = useState(currentDate);


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

    return (
        <div className="HVSTab">
            <p>Calculate the Cost of Care in your area</p>
            <form onSubmit={updateSubmit}>

                <div className="container">
                    <div className="input-container">
                        <div>
                            <label>Age
                            </label>
                            <br />
                            <input className="fieldWidth"
                                max={120}
                                type="number"
                                name="age"
                                value={inputs.age || ""}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="input-container">
                        <div>
                            <label>State</label>
                            <br />
                            <select className="fieldWidth"
                                value={inputs.state}
                                onChange={handleChange}
                            >
                                <option value="">Select State</option>
                                {countryData.map((e, key) => {
                                    return <option key={key} value={e.value}>{e.label}</option>;
                                })}
                            </select>
                        </div>
                    </div>
                </div>


                <div className="container">
                    <div className="input-container">
                        <div>
                            <label>Future Cost</label>
                            <DatePicker className="customDatePickerWidth"
                                selected={myYear}
                                onChange={(date) => setMyYear(date)}
                                showYearPicker
                                dateFormat="yyyy"
                            />
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="input-container">
                        <div>
                            <label>Inflation Rate
                            </label>
                            <br />
                            <input className="fieldWidth"
                                max={120}
                                type="number"
                                name="rate"
                                value={inputs.rate || ""}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>

                <input type="submit" className="submitButton" />
            </form>
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        (A) IN-HOME CARE

                        <div>
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
                        </div>

                        <div>
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
                        </div>

                        <div>
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
                        </div>

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
                    <div class="col-sm">
                        (B) COMMUNITY AND ASSISTED LIVING

                        <div>
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
                        </div>

                        <div>
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
                        </div>

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
                    <div class="col-sm">
                        (C) NURSING HOME FACILITY
                        <div>
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
                        </div>

                        <div>
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
                        </div>

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
            </div>
        </div>



    );
};


export default HVSTab;