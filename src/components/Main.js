
import { useEffect, useState } from 'react';
import { FormControl, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import { getNews,handleSearch,prevPage,nextPage} from '../features/newsSlice';
import SingleNews from './SingleNews';

const Main = () => {
  const dispatch = useDispatch();
  const { newsList, query, page, nbPages,loading } = useSelector(state => state.news)
  const [search, setSearch] = useState('')

  useEffect(() => {
    dispatch(getNews({query:query,page:page}))
  }, [dispatch,query,page])


  return (
    <Container className='px-3 m-auto'>
      <div className='text-center m-auto' style={{maxWidth:'300px',}}>
        <FormControl
          type="search"
          name="search"
          id="search"
          placeholder='react'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        /><br />
        <Button type='submit' onClick={()=>dispatch(handleSearch(search))}>Search</Button>
      </div><br />
    
      <div className='pages m-auto text-center'>
          <Button variant={loading ?'warning' :'danger'} disabled={loading} onClick={()=>dispatch(prevPage())}>Prev</Button>
          <span className='mx-2'>{page+1} of {nbPages}</span>
          <Button variant={loading ?'warning' :'danger'} disabled={loading} onClick={()=>dispatch(nextPage())}>Next</Button>
      </div>
      <br /> 
      {
        loading ? <h1 className='text-center'>Loading......</h1>
        :
        <Row className='justify-content-start p-0'>
        {
          newsList?.map((news, i) => {
            return <SingleNews key={i} {...news} />
          })
        }
      </Row>
      }
      
    </Container>
  )
}

export default Main