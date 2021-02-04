import styled  from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  margin: auto;
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background: linear-gradient(174.48deg, #9DC2FF 15.79%, #281AC8 116.76%);
`
export const Row = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  margin-top: 30px;
`

export const Button = styled.button`
  background-color: #575757;
  border-radius: 15px;
  height: 50px;
  min-width: 150px;
  font-size: 15px;
  padding: 10px;
  color: #FFFFFF;
  transition: background-color 0.2s;
  margin-left: 10px;

  &:hover {
    background-color: #757575;
  }
`

export const Search = styled.input`
  background-color: #FFFFFF;
  border: 1px solid #D1D1D1;
  box-sizing: border-box;
  border-radius: 15px;
  height: 50px;
  width: 500px;
  text-align: left;
  padding: 15px;
  margin-bottom: 10px;
  outline-width: 0;
`

export const Table = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 1000px;
  margin: auto;

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
  }

  .remove {
    width: 10px;
  }

  .update {
    width: 20px;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #9DC2FF;
  }
`
