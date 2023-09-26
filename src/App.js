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
  const[txtValue, setTextValue] = useState('')
  const [showOnlyStock, setShowOnlyStock] = useState(false)
  const [form, setForm] = useState({
    nameItem: '',
    priceItem: 0,
    stockItem: 0
  })

  const handleClick = () => {
    alert('Clicked')
  }

  return (
    <div className="App">
      <form style={{display: "flex", flexDirection: "column", gap: 10, marginBottom: 20}}>
        <div>
        <label htmlFor='nameItem'>Name: </label>
        <input id="nameItem" type="text" value={form.nameItem} onChange={(e)=> setForm({ ...form, nameItem: e.target.value})}/>
        </div>
        <div>
        <label htmlFor='priceItem'>Price: </label>
        <input id="priceItem" type="number" value={form.priceItem} onChange={(e)=> setForm({ ...form, priceItem: e.target.value})}/>
        </div>
        <div>
        <label htmlFor='stockItem'>Stock: </label>
        <input id="stockItem" type="number" value={form.stockItem} onChange={(e)=> setForm({ ...form, stockItem: e.target.value})}/>
        </div>
        <div>
        <button style={{width:"100%"}} onClick={handleClick}>Submit</button>
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
        <Items items={sportingGoods} includePrice query={txtValue} showOnlyStock={showOnlyStock} ></Items>
        </tbody>
        <tr>
          <td colSpan="2" style={{textAlign: "right"}}>
            Total
          </td>
          <td colSpan="2" style={{textAlign: "center"}}>
            {sportingGoods.reduce((total, sportingGood) => {return total + sportingGood.stock}, 0)}
          </td>
        </tr>
      </table>

    </div>
  );
}

export default App;