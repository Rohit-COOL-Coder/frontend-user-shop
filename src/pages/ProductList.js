import React, { useState } from 'react'
import styled from 'styled-components'
import  Announcement  from '../componemts/Annousment'
import  Navbar  from '../componemts/Navbar'
import  Newslatter  from '../componemts/Newslatter'
import  Footer  from '../componemts/Footer'
import Products from '../componemts/Products'
import { useLocation } from 'react-router-dom'

const Container = styled.div``
const Title = styled.h1`
margin: 20px;
`
const FilterContainer = styled.div`
margin: 20px;
display: flex;
justify-content: space-between;
`
const Filter = styled.div``
const FilterText=styled.span`
font-style: 20px;
font-weight: 600;
margin-right: 20px;
`
const Select = styled.select`
padding: 10px;
margin-right: 20px;
font-weight: 400;
border: 0.5px solid lightgray;
cursor: pointer;
`
const Option = styled.option`
border: 0.5px solid lightgray;
`

function ProductList() {
    const [filters , setFilter]=useState({})
    const [sort , setSort]=useState("newest")
    const location = useLocation()
    const cat=location.pathname.split("/")[2]

    const handelFilters=(e)=>{
    const value=e.target.value
    setFilter({
        ...filters,
        [e.target.name]:value
    })
    }
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Title>{cat}</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products :</FilterText>
                <Select name="color" onChange={handelFilters}>
                    <Option>black</Option>
                    <Option>blue</Option>
                    <Option>white</Option>
                    <Option>grey</Option>
                    <Option>green</Option>
                    <Option>brown</Option>
                </Select>
                <Select name="size" onChange={handelFilters}>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                    <Option>XXL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products :</FilterText>
                <Select onChange={(e)=>setSort(e.target.value)}>
                    <Option value="newest">Newest</Option>
                    <Option value="asc">Price (asc)</Option>
                    <Option value="decs">Price (decs)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products cat={cat} filters={filters} sort={sort}/>
        <Newslatter/>
        <Footer/>
    </Container>
  )
}

export default ProductList