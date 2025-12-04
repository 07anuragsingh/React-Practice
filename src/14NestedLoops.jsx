import College from "./16outterLoop"

export default function NestedLoop() {
    const CollegeData = [
        {
            name: "IET Lucknow",
            state: "UttarPradesh",
            website: "iet@gmail.com",
            student: [
                {
                    name: "Anurag Singh",
                    course: "BCA",
                    Age: 23,
                    gender: "Male"
                },
                {
                    name: "Anjali Singh",
                    course: "BBA",
                    Age: 23,
                    gender: "Female"
                },
                {
                    name: "Aman Singh",
                    course: "Btech",
                    Age: 21,
                    gender: "Male"
                }
            ]

        },
        {
            name: "IIT Dhanbad",
            state: "Jharkhnad",
            website: "iit@gmail.com",
            student: [
                {
                    name: "Anurag Mittal",
                    course: "BCA",
                    Age: 33,
                    gender: "Male"
                },
                {
                    name: "Anjali Mittal",
                    course: "BBA",
                    Age: 23,
                    gender: "Female"
                },
                {
                    name: "Aman Mittal",
                    course: "Btech",
                    Age: 215,
                    gender: "Male"
                }
            ]
        },
        {
            name: "BIT Sindri",
            state: "Jharkhand",
            website: "bit@gmail.com",
            student: [
                {
                    name: "Anurag kumar",
                    course: "BCA",
                    Age: 23,
                    gender: "Male"
                },
                {
                    name: "Anjali kumari",
                    course: "BBA",
                    Age: 23,
                    gender: "Female"
                },
                {
                    name: "Aman kumar",
                    course: "Btech",
                    Age: 26,
                    gender: "Male"
                }
            ]
        },
        {
            name: "NIT Delhi",
            state: "Delhi",
            website: "nit@gmail.com",
            student: [
                {
                    name: "Anurag Saw",
                    course: "BCA",
                    Age: 23,
                    gender: "Male"
                },
                {
                    name: "Anjali Saw",
                    course: "BBA",
                    Age: 23,
                    gender: "Female"
                },
                {
                    name: "Aman Saw",
                    course: "BCoh",
                    Age: 21,
                    gender: "Male"
                }
            ]
        }
    ]

    return (
        <>
            <h3>Nested Looping :-</h3>
            {CollegeData.map((collgeObj, index) => 
                 (<div key={index}>
                <College collgeObj ={collgeObj}/>
                </div>)
            )}
        </>
    )
}