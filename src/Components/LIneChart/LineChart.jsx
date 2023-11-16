import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';
const LineChart = () => {
    const studentsMarks =[
        { "id": 1, "name": "Alice", "math": 85, "physics": 78, "chemistry": 90 },
        { "id": 2, "name": "Bob", "math": 92, "physics": 85, "chemistry": 88 },
        { "id": 3, "name": "Charlie", "math": 78, "physics": 92, "chemistry": 76 },
        { "id": 4, "name": "David", "math": 95, "physics": 89, "chemistry": 94 },
        { "id": 5, "name": "Eva", "math": 88, "physics": 78, "chemistry": 85 },
        { "id": 6, "name": "Frank", "math": 72, "physics": 65, "chemistry": 70 },
        { "id": 7, "name": "Grace", "math": 89, "physics": 94, "chemistry": 82 },
        { "id": 8, "name": "Hank", "math": 93, "physics": 87, "chemistry": 91 },
        { "id": 9, "name": "Ivy", "math": 84, "physics": 76, "chemistry": 80 },
        { "id": 10, "name": "Jack", "math": 79, "physics": 80, "chemistry": 75 }
      ]
      
      
    return (
        <div>
            <LChart width={800} height={400} data={studentsMarks}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey={"math"} stroke='red'></Line>
                <Line dataKey= {"physics"} stroke='blue'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;