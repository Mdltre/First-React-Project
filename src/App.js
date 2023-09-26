import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import TextInput from './components/TextInput';
import Checkbox from './components/Checkbox';
import Header from './components/Header';
import Category from './components/Category';
import Items from './components/Items';


const sportingGoods = [
  {id:1, name:'Football', price: 49.99, stock: 0},
  {id:2,name:'Baseball', price: 9.99, stock: 1},
  {id:3,name:'Basketball', price: 29.99, stock: 2}
]

function App() {
  const[data, setData] = useState(sportingGoods)
  const[txtValue, setTextValue] = useState('')
  const [showOnlyStock, setShowOnlyStock] = useState(false)
  const [form, setForm] = useState({
    id: 0,
    name: '',
    price: 0,
    stock: 0
  })

  const handleClick = () => {
    alert('Clicked')
  }

  const onClickSubmit = (e) => {
    e.preventDefault();
    setData([...data, {id: data.length +1, ...form}]);
  }

  return (
    <div className="App">
      <form style={{display: "flex", flexDirection: "column", gap: 10, marginBottom: 20}}>
        <div>
        <label htmlFor='nameItem'>Name: </label>
        <input id="nameItem" type="text" value={form.nameItem} onChange={(e)=> setForm({ ...form, name: e.target.value})}/>
        </div>
        <div>
        <label htmlFor='priceItem'>Price: </label>
        <input id="priceItem" type="number" value={form.priceItem} onChange={(e)=> setForm({ ...form, price: e.target.value})}/>
        </div>
        <div>
        <label htmlFor='stockItem'>Stock: </label>
        <input id="stockItem" type="number" value={form.stockItem} onChange={(e)=> setForm({ ...form, stock: e.target.value})}/>
        </div>
        <div>
        <button style={{width:"100%"}} onClick={onClickSubmit}>Submit</button>
        </div>
      </form>

      {txtValue}
      <div>
      <label>Search: </label>
      <TextInput value={txtValue} onChange={(e) => setTextValue(e.target.value) }/>
      </div>
      <Checkbox checked={showOnlyStock} onChange={(e) => setShowOnlyStock(e.target.checked)}/>

      <button onClick={handleClick}>Submit</button>
      <table>
        <tbody>
        <Header/>
        <Category/>
        <Items items={data} includePrice query={txtValue} showOnlyStock={showOnlyStock} ></Items>
        </tbody>
        <tr>
          <td colSpan="2" style={{textAlign: "right"}}>
            Total
          </td>
          <td colSpan="2" style={{textAlign: "center"}}>
            {data.reduce((total, sportingGood) => {return total + parseInt(sportingGood.stock)}, 0)}
          </td>
        </tr>
      </table>

    </div>
  );
}

export default App;