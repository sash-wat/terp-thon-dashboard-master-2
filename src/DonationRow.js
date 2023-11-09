const curseWords = [];

function containsBadWord(message) {
    let words = message.toLowerCase().split(" ");
    return words.some(word => curseWords.includes(word));
}

function DonationRow(props) {
    return <tr>
        <td>
            <img height={75} width={75} src={props.donation.avatarImageURL}/>
        </td>
        <td>
            {props.donation.displayName ? props.donation.displayName : "Anonymous"}
            
        </td>
        <td>
            {props.donation.recipientName}
        </td>
        <td>
            ${props.donation.amount.toFixed(2)}
        </td>
        
    </tr>
}
export default DonationRow
