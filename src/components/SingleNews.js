import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const SingleNews = ({ author, num_comments, title, url, created_at }) => {
  
    return (
        <Col xs='12' md='6' className='mb-5' >
            <Card className='h-100 '>
                <Card.Header> <i>@{author}</i></Card.Header>
                <Card.Body  className='h-100 d-flex flex-column align-items-start'>
                    <Card.Title >{title}</Card.Title>
                    <br />
                    <Card.Text className='mt-auto' >
                        <span className='text-danger'>Release Date :</span>   {new Date(created_at).toDateString()}
                    </Card.Text>
                    <Card.Text>
                        <span className='text-danger' >Comments :</span> {num_comments}
                    </Card.Text>
                    <Button variant="link" ><a href={url}>Details</a></Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default SingleNews