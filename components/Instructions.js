import React from 'react'
import Link from 'next/link';
export const Instructions = () => {
    // const [page, setPage] = useState(1);
    

    return (
        <>
              <br /> <br/>
            <h4>Instructions</h4><br /> <br/>
            <p>Welcome to agentX, simplifying player report generation.</p>
            <p>Four Easy Steps</p>
            <ol>
            <Link href='/inputData' >
                <li>Upload your Weekly data</li>
            </Link>
                <Link href='/clubs' >
                <li>Enter the details for each Club</li>
            </Link>
            <Link href='/players' >
                <li>Group the accounts for each player</li>
            </Link> 
            <Link href='/reports' >
                <li>Then pull reports.</li>
            </Link>
            </ol>
            <p>All the Player and Club information persists, while your results never leave your browser</p>
            
        <style jsx>{`
        li {
            cursor: pointer;
        }
        li:hover {
            text-decoration: underline;
        }
         
         
        `}</style>
            
        </>
    )
}
