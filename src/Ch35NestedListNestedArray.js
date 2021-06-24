import { Table } from 'react-bootstrap'
export default function Ch35NestedListNestedArray() {

    const student = [
        {
            name: "Bhargav",
            age: 19,
            address: [
                {
                    city: "ahmedabad",
                    state: "Gujarat"
                }
                ,
                {
                    city: "Bhavnagar",
                    state: "Gujarat"
                }
                ,
                {
                    city: "Indor",
                    state: "MP"
                }
            ]
        },

        {
            name: "Rohan",
            age: 20,
            address: [
                {
                    city: "Bhavnagar",
                    state: "Gujarat"
                }
                ,
                {
                    city: "Indor",
                    state: "MP"
                }
                ,
                {
                    city: "ahmedabad",
                    state: "Gujarat"
                }
            ]
        },

        {
            name: "Roy",
            age: 21,
            address: [
                {
                    city: "Indor",
                    state: "MP"
                }
                ,
                {
                    city: "Bhavnagar",
                    state: "Gujarat"
                }
                ,
                {
                    city: "ahmedabad",
                    state: "Gujarat"
                }
            ]
        }
    ]

    return (
        <div className="App">
            <h1>List with Nested Array</h1>
            <Table variant="dark"  >
                <tbody>
                    <tr>
                        <td>S.N</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Address</td>
                    </tr>
                    {
                        student.map((item, i) =>
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>
                                    {/*  */}
                                    <Table variant="dark"  >
                                        <tbody>
                                            {
                                                item.address.map((data) =>

                                                    <tr>
                                                        <td>{data.state}</td>
                                                        <td>{data.city}</td>
                                                      
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </Table>
                                    {/*  */}
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>

        </div>
    );
}
    
