import React, { useEffect, useState } from 'react'
import {Table, TableContainer, Tbody, Td, Th, Thead, Tr} from '@chakra-ui/react'

const Books = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:8000/books')
        .then(response => response.json())
        .then(data => {
            setData(data);
            console.log(data);
        })
        .catch(err => {
            console.log('Error',err);
        })
    },[]);

  return (
    <>
    <TableContainer mx={'20'} my={'10'}>
        <Table variant={'striped'} colorScheme={'whatsapp'}>
            <Thead>
                <Tr>
                    <Th>Book Name</Th>
                </Tr>
            </Thead>
            <Tbody>
                    {data.map(item =>(
                    <Tr>
                        <Td key={item.id}>{item.name}</Td>
                    </Tr>
                    ))}
            </Tbody>
        </Table>
    </TableContainer>
    </>
  )
}

export default Books