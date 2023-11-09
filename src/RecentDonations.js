import DonationRow from "./DonationRow";

function RecentDonations(props){
    return props.donations && props.donations.length > 0 ? <div>
        <table cellSpacing={20} className="tableBg">
            <colgroup>
                <col span={1} style={{"width": "5%"}}/>
                <col span={1} style={{"width": "20%"}}/>
                <col span={1} style={{"width": "20%"}}/>
                <col span={1} style={{"width": "10%"}}/>
                
            </colgroup>
            <thead>
                <tr>
                    <th colSpan={2}>
                        Donor
                    </th>
                    <th>
                        Miracle Maker
                    </th>
                    <th>
                        Amount
                    </th>
                    
                </tr>
            </thead>
            <tbody>
                {props.donations.map(donation => {
                    return <DonationRow donation={donation}/>
                })}
            </tbody>
        </table>
    </div> 
    : <></>
}

export default RecentDonations;