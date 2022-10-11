import React from 'react'
import { Table } from 'react-bootstrap'

const CustomTable = ({ heading, body }: any) => {
    console.log(heading, body);
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        {heading.map((head: { Header: string, accessor: string }, index: number) => <th key={index}>{head.Header}</th>)}
                    </tr>
                </thead>
                <tbody>
                    <TableRow TableData={body} columnData={heading} />
                </tbody>
            </Table>
        </div>
    )
}

const TableRow = ({ TableData }: any) => {
    const column = TableData?.length > 0 ? Object.keys(TableData[0]) : [];
    return TableData.map((data: any, index1: number) => {
        return (
            <tr key={index1}>
                {
                    column.map((v: string, index: number) => {
                        return <td key={index}>{data[v]}</td>
                    })
                }
            </tr>
        )
    })
}
export default CustomTable
